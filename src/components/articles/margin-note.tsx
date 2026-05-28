"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
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
  width: number;
  path: string;
};

export function MarginNote({ children, title, note, className }: MarginNoteProps) {
  const noteId = useId().replace(/:/g, "");
  const [open, setOpen] = useState(false);
  const [isDesktopNote, setIsDesktopNote] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [position, setPosition] = useState<NotePosition | null>(null);
  const [scopeElement, setScopeElement] = useState<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLSpanElement | null>(null);
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

      const scopeRect = scope.getBoundingClientRect();
      const noteGap = 44;
      const viewportPadding = 28;
      const availableWidth = Math.max(196, window.innerWidth - scopeRect.right - noteGap - viewportPadding);
      const noteWidth = Math.min(320, availableWidth);

      const noteCards = Array.from(scope.querySelectorAll<HTMLElement>("[data-margin-note-desktop-id]"));
      noteCards.forEach((element) => {
        element.style.width = `${noteWidth}px`;
      });

      const allTriggers = Array.from(scope.querySelectorAll<HTMLElement>("[data-margin-note-trigger-id]"));
      const noteMap = new Map(
        noteCards.map((element) => [element.dataset.marginNoteDesktopId, element]),
      );

      const plannedNotes = allTriggers
        .map((triggerElement) => {
          const id = triggerElement.dataset.marginNoteTriggerId;
          const pairedNote = id ? noteMap.get(id) : null;
          if (!id || !pairedNote) {
            return null;
          }

          const triggerRect = triggerElement.getBoundingClientRect();
          const triggerStyle = window.getComputedStyle(triggerElement);
          const lineHeight = Number.parseFloat(triggerStyle.lineHeight) || triggerRect.height * 1.75;
          const badge = triggerElement.querySelector("[data-margin-note-badge]");
          const badgeRect = badge instanceof HTMLElement ? badge.getBoundingClientRect() : null;
          const referenceTop = badgeRect?.top ?? triggerRect.top;
          const referenceBottom = badgeRect?.bottom ?? triggerRect.bottom;
          const referenceHeight = badgeRect?.height ?? triggerRect.height;
          const anchorY = referenceTop - scopeRect.top + referenceHeight / 2;
          const desiredTop = anchorY - pairedNote.offsetHeight / 2;
          const gapBelow = referenceBottom - scopeRect.top + Math.max(6, (lineHeight - referenceHeight) / 2);
          const gapAbove = referenceTop - scopeRect.top - Math.max(6, (lineHeight - referenceHeight) / 2);
          const startX = (badgeRect?.left ?? triggerRect.right) - scopeRect.left + (badgeRect?.width ?? 0) / 2;

          return {
            id,
            anchorY,
            desiredTop,
            startX,
            height: pairedNote.offsetHeight,
            gapAbove,
            gapBelow,
          };
        })
        .filter((item): item is NonNullable<typeof item> => Boolean(item))
        .sort((a, b) => a.anchorY - b.anchorY);

      const minTop = 24;
      const minGapBetweenNotes = 22;
      let currentFloor = minTop;
      const resolvedNotes = new Map<
        string,
        { top: number; anchorY: number; startX: number; height: number; gapAbove: number; gapBelow: number }
      >();

      for (const item of plannedNotes) {
        const top = Math.max(item.desiredTop, currentFloor);
        resolvedNotes.set(item.id, {
          top,
          anchorY: item.anchorY,
          startX: item.startX,
          height: item.height,
          gapAbove: item.gapAbove,
          gapBelow: item.gapBelow,
        });
        currentFloor = top + item.height + minGapBetweenNotes;
      }

      const ownNote = resolvedNotes.get(noteId);
      if (!ownNote) {
        return;
      }

      const noteLeft = scope.clientWidth + noteGap;
      const bendX = Math.max(ownNote.startX + 42, noteLeft - 34);
      const attachmentY = ownNote.top + 22;
      const routeY = attachmentY < ownNote.anchorY ? Math.max(18, ownNote.gapAbove) : ownNote.gapBelow;

      setPosition({
        top: ownNote.top,
        left: noteLeft,
        width: noteWidth,
        path: `M ${ownNote.startX} ${ownNote.anchorY} L ${ownNote.startX} ${routeY} L ${bendX} ${routeY} L ${bendX} ${attachmentY} L ${noteLeft} ${attachmentY}`,
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
  }, [noteId, scopeElement]);

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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleActivate();
    }
  };

  return (
    <>
      <span
        ref={triggerRef}
        data-margin-note-trigger-id={noteId}
        className={cn("margin-note-trigger", className)}
      >
        <span
          role="button"
          tabIndex={0}
          className="margin-note-trigger__text"
          onClick={handleActivate}
          onKeyDown={handleKeyDown}
          aria-label={isDesktopNote ? `${title}. Pokaż notatkę na marginesie.` : `${title}. Otwórz notatkę na marginesie.`}
        >
          {children}
        </span>
        <button
          type="button"
          className="margin-note-trigger__badge"
          aria-label={isDesktopNote ? `${title}. Pokaż notatkę na marginesie.` : `${title}. Otwórz notatkę na marginesie.`}
          data-margin-note-badge
          onClick={handleActivate}
        >
          <Info className="h-3.5 w-3.5" />
        </button>
      </span>

      {scopeElement && typeof document !== "undefined"
        ? createPortal(
            <>
              <div
                className="margin-note-desktop hidden xl:block"
                style={
                  position
                    ? { top: `${position.top}px`, left: `${position.left}px`, width: `${position.width}px` }
                    : { top: "1.5rem", left: "calc(100% + 2.75rem)" }
                }
              >
                <button
                  ref={noteRef}
                  type="button"
                  data-margin-note-desktop-id={noteId}
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
