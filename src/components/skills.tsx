import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-20 border-t border-white/5 py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Skills"
          title={
            <>
              The stack I{" "}
              <span className="text-gradient">build with</span>
            </>
          }
          description="The tools I reach for daily — across the web, the backend, and mobile."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.08} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-400/30 hover:bg-white/[0.05] focus-within:ring-2 focus-within:ring-violet-400/50">
                <span
                  aria-hidden="true"
                  className="border-glow absolute inset-0 rounded-2xl"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-14 -top-16 size-40 rounded-full bg-violet-500/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative">
                  <span className="grid size-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/25 to-cyan-400/10 text-violet-200 transition-colors group-hover:text-violet-100">
                    <group.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[0.72rem] font-medium text-muted-foreground transition-colors group-hover:text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
