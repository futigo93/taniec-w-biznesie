"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

type MarginNoteProps = {
  children: React.ReactNode;
  title: string;
  note: string;
  className?: string;
};

type NotePosition = {
  top: number;
  left: number;
  path: string;
};

export function MarginNote({ children, title, note, className }: MarginNoteProps) {
  const [open, setOpen] = useState(false);
  const [isDesktopNote, setIsDesktopNote] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [position, setPosition] = useState<NotePosition | null>(null);
  const [scopeElement, setScopeElement] = useState<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const noteRef = useRef<HTMLButtonElement | null>(null);
  const highlightTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    const syncViewportMode = () => setIsDesktopNote(mediaQuery.matches);
    syncViewportMode();

    const updatePosition = () => {
      const trigger = triggerRef.current;
      const scope = trigger?.closest("[data-margin-note-scope]");
      if (!trigger || !(scope instanceof HTMLElement)) {
        return;
      }

      if (scopeElement !== scope) {
        setScopeElement(scope);
      }

      const noteCard = noteRef.current;
      if (!noteCard) {
        return;
      }

      const triggerRect = trigger.getBoundingClientRect();
      const scopeRect = scope.getBoundingClientRect();
      const scopeHeight = scope.clientHeight;
      const noteHeight = noteCard.offsetHeight;
      const noteGap = 20;
      const triggerStyle = window.getComputedStyle(trigger);
      const lineHeight = Number.parseFloat(triggerStyle.lineHeight) || triggerRect.height * 1.75;
      const badge = trigger.querySelector("[data-margin-note-badge]");
      const badgeRect = badge instanceof HTMLElement ? badge.getBoundingClientRect() : null;
      const triggerCenterY = (badgeRect?.top ?? triggerRect.top) - scopeRect.top + (badgeRect?.height ?? triggerRect.height) / 2;
      const nextTop = Math.max(24, Math.min(triggerCenterY - noteHeight / 2, Math.max(24, scopeHeight - noteHeight - 16)));
      const noteLeft = scope.clientWidth + noteGap;
      const startX = (badgeRect?.left ?? triggerRect.right) - scopeRect.left + (badgeRect?.width ?? 0) / 2;
      const gapBelow = triggerRect.bottom - scopeRect.top + Math.max(6, (lineHeight - triggerRect.height) / 2);
      const gapAbove = triggerRect.top - scopeRect.top - Math.max(6, (lineHeight - triggerRect.height) / 2);
      const routeY = gapBelow <= scopeHeight - 18 ? gapBelow : Math.max(18, gapAbove);
      const bendX = Math.max(startX + 34, noteLeft - 34);
      const endY = nextTop + Math.min(38, noteHeight / 2);

      setPosition({
        top: nextTop,
        left: noteLeft,
        path: `M ${startX} ${triggerCenterY} L ${startX} ${routeY} L ${bendX} ${routeY} L ${bendX} ${endY} L ${noteLeft} ${endY}`,
      });
    };

    updatePosition();

    const trigger = triggerRef.current;
    const scope = trigger?.closest("[data-margin-note-scope]");
    const resizeObserver = typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(() => updatePosition())
      : null;

    if (resizeObserver) {
      if (trigger) {
        resizeObserver.observe(trigger);
      }
      if (noteRef.current) {
        resizeObserver.observe(noteRef.current);
      }
      if (scope instanceof HTMLElement) {
        resizeObserver.observe(scope);
      }
    } else {
      window.addEventListener("resize", updatePosition);
    }

    mediaQuery.addEventListener("change", syncViewportMode);
    window.addEventListener("load", updatePosition);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("load", updatePosition);
      mediaQuery.removeEventListener("change", syncViewportMode);
    };
  }, [scopeElement]);

  useEffect(() => {
    return () => {
      if (highlightTimeoutRef.current) {
        clearTimeout(highlightTimeoutRef.current);
      }
    };
  }, []);

  const handleActivate = () => {
    if (isDesktopNote) {
      setIsHighlighted(true);
      if (highlightTimeoutRef.current) {
        clearTimeout(highlightTimeoutRef.current);
      }
      highlightTimeoutRef.current = setTimeout(() => setIsHighlighted(false), 1500);
      return;
    }

    setOpen(true);
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={cn("margin-note-trigger", className)}
        onClick={handleActivate}
        aria-label={isDesktopNote ? `${title}. Pokaż notatkę na marginesie.` : `${title}. Otwórz notatkę na marginesie.`}
      >
        <span>{children}</span>
        <span className="margin-note-trigger__badge" aria-hidden="true" data-margin-note-badge>
          <Info className="h-3.5 w-3.5" />
        </span>
      </button>

      {scopeElement && typeof document !== "undefined"
        ? createPortal(
            <>
              <div
                className="margin-note-desktop hidden xl:block"
                style={position ? { top: `${position.top}px`, left: `${position.left}px` } : { top: "1.5rem", left: "calc(100% + 1.25rem)" }}
              >
                <button
                  ref={noteRef}
                  type="button"
                  className={cn("margin-note-card accent-hover-lift text-left", isHighlighted && "margin-note-card--highlighted")}
                  onClick={handleActivate}
                >
                  <span className="margin-note-card__title">{title}</span>
                  <span className="margin-note-card__body">{note}</span>
                </button>
              </div>

              {position ? (
                <svg className="margin-note-line pointer-events-none hidden xl:block" aria-hidden="true">
                  <path d={position.path} />
                </svg>
              ) : null}
            </>,
            scopeElement,
          )
        : null}

      {open && typeof document !== "undefined"
        ? createPortal(
            <div className="fixed inset-0 z-[220] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
              <div className="surface-card w-full max-w-lg rounded-[2rem] p-5 shadow-2xl md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-heading text-xl font-semibold md:text-2xl">{title}</h2>
                  </div>
                  <button
                    type="button"
                    className="rounded-full border border-border/70 bg-background/90 p-2 text-foreground shadow-sm"
                    onClick={() => setOpen(false)}
                    aria-label="Zamknij notatkę"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="text-body mt-4 text-[0.98rem] leading-7">
                  <p>{note}</p>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
