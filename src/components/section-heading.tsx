import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
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
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">{eyebrow}</p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      {description && (
        <p className={cn("text-base text-muted-foreground", descriptionClassName)}>{description}</p>
      )}
    </div>
  );
}
