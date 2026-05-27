import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { FacebookWidgets } from "@/components/social/facebook-widgets";

type ArticleHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  imageSrc: string;
  imageAlt: string;
  authorName: string;
  authorHref?: string;
  date: string;
  readTime?: string;
};

export function ArticleHero({
  eyebrow,
  title,
  description,
  path,
  imageSrc,
  imageAlt,
  authorName,
  authorHref,
  date,
  readTime,
}: ArticleHeroProps) {
  return (
    <div className="surface-focus rounded-3xl p-5 text-heading shadow-xl md:p-6">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        titleClassName="text-[1.68rem] md:text-4xl"
        descriptionClassName="max-w-3xl text-body text-[1rem] leading-7"
        className="[&_h2]:text-heading [&_p]:text-body"
      />
      <div className="text-body mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        {authorHref ? (
          <Link href={authorHref} target="_blank" rel="noreferrer" className="link-accent">
            {authorName}
          </Link>
        ) : (
          <span>{authorName}</span>
        )}
        <span>•</span>
        <span>{date}</span>
        {readTime ? (
          <>
            <span>•</span>
            <span>{readTime}</span>
          </>
        ) : null}
      </div>
      <FacebookWidgets path={path} className="mt-4" />
      <div className="surface-card-inset mt-5 overflow-hidden rounded-2xl p-3 md:p-4 shadow-lg shadow-black/10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={420}
          className="w-full rounded-xl object-cover"
          priority
        />
      </div>
    </div>
  );
}
