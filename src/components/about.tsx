import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { profile, services } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="01"
          eyebrow="About"
          title={
            <>
              Turning ideas into{" "}
              <span className="text-gradient">shipped products</span>
            </>
          }
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I&apos;m{" "}
                <span className="font-medium text-foreground">
                  {profile.name}
                </span>{" "}
                — a full-stack developer who likes shipping things that
                actually work. My day-to-day lives
                in Next.js, TypeScript and React on the web, and Flutter when I
                want to put the same product in people&apos;s pockets.
              </p>
              <p>
                Since 2024 I&apos;ve been building end to end: schema design and
                input validation with MongoDB, Mongoose and Zod, transactional
                email with Resend, and interfaces that feel fast and look sharp
                with Tailwind CSS and Framer Motion.
              </p>
              <p>
                I care about clean architecture, honest docs, and UI that looks
                deliberate — not templated. When something is broken, I stay on
                it until it isn&apos;t.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              {["Clean architecture", "Pixel-aware UI", "Ship fast, iterate"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {chip}
                  </span>
                ),
              )}
            </div>
          </Reveal>

          <div className="flex flex-col gap-4 lg:col-span-5">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={0.12 + index * 0.08}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.05]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-16 -right-12 size-40 rounded-full bg-violet-500/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/25 to-cyan-400/10 text-violet-200">
                      <service.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
