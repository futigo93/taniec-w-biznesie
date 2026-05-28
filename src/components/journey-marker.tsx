import { cn } from "@/lib/utils";

type JourneyMarkerProps = {
  step?: string;
  label: string;
  className?: string;
};

export function JourneyMarker({ step, label, className }: JourneyMarkerProps) {
  const chipClasses =
    "surface-card-soft inline-flex items-center justify-center gap-2 rounded-full px-3 py-1.5 text-center text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary/85 shadow-sm";

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
        <span className={cn(chipClasses, "max-w-[min(14.5rem,calc(100vw-7.5rem))]")}>
          {step ? <span className="text-primary/65">{step}.</span> : null}
          <span className="text-balance whitespace-normal leading-4">{label}</span>
        </span>
      </div>
      <div className={cn("mb-4 hidden justify-center md:flex xl:hidden", className)}>
        <span className={cn(chipClasses, "max-w-[16rem]")}>
          {step ? <span className="text-primary/65">{step}.</span> : null}
          <span className="text-balance whitespace-normal leading-4">{label}</span>
        </span>
      </div>
      <div className="absolute left-0 top-8 hidden max-w-[10.5rem] -translate-x-[calc(100%+1.15rem)] xl:flex xl:flex-col xl:items-end xl:gap-2">
        {step ? <span className="heading-display text-[2.6rem] leading-none text-primary/14">{step}</span> : null}
        <span className="eyebrow-accent max-w-full text-right text-[0.68rem] leading-5 tracking-[0.18em] text-primary/65 whitespace-normal text-balance">
          {label}
        </span>
      </div>
    </>
  );
}
