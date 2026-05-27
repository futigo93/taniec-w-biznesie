import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" && "text-center",
        align === "center" && "mx-auto max-w-3xl",
        className,
      )}
    >
      {eyebrow && (
        <p className="eyebrow-accent">{eyebrow}</p>
      )}
      <h2 className={cn("heading-display-soft text-heading text-[1.55rem] leading-tight md:text-3xl", titleClassName)}>{title}</h2>
      {description && (
        <p className={cn("text-body text-[0.98rem] leading-7 md:text-base md:leading-8", descriptionClassName)}>{description}</p>
      )}
    </div>
  );
}
