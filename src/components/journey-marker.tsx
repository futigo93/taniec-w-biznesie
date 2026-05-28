import { cn } from "@/lib/utils";

type JourneyMarkerProps = {
  step?: string;
  label: string;
  className?: string;
};

export function JourneyMarker({ step, label, className }: JourneyMarkerProps) {
  return (
    <>
      <div
        className={cn(
          "sticky z-20 -mt-1 mb-4 flex justify-center transition-[top,transform] duration-300 md:hidden",
          className,
        )}
        style={{
          top: "var(--journey-marker-top, 4.8rem)",
          transform: "scale(var(--journey-marker-scale, 1))",
        }}
      >
        <span className="surface-card-soft inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary/85 shadow-sm">
          {step ? <span className="text-primary/65">{step}.</span> : null}
          <span>{label}</span>
        </span>
      </div>
      <div className="absolute left-0 top-8 hidden -translate-x-[calc(100%+1.15rem)] xl:flex xl:flex-col xl:items-end xl:gap-2">
        {step ? <span className="heading-display text-[2.6rem] leading-none text-primary/14">{step}</span> : null}
        <span className="eyebrow-accent whitespace-nowrap text-[0.68rem] tracking-[0.22em] text-primary/65">
          {label}
        </span>
      </div>
    </>
  );
}
