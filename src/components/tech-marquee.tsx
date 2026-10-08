import { marqueeItems } from "@/lib/data";

export function TechMarquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section
      aria-label="Technologies I work with"
      className="marquee mask-x relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-5"
    >
      <div className="marquee-track flex w-max items-center gap-12">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-3 text-sm font-medium tracking-[0.18em] text-muted-foreground/85 uppercase"
          >
            <span className="size-1.5 rotate-45 bg-gradient-to-br from-violet-400 to-cyan-300" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
