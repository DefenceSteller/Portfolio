import { Reveal } from "@/components/reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-violet-300/90">
          {index} <span className="text-foreground/30">/</span> {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.07}>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.14}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
