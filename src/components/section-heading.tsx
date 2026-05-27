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
      <h2 className={cn("heading-display-soft text-heading text-2xl md:text-3xl", titleClassName)}>{title}</h2>
      {description && (
        <p className={cn("text-body text-base", descriptionClassName)}>{description}</p>
      )}
    </div>
  );
}
