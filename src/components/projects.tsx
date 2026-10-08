import { ArrowUpRight, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { profile, projects, type Project } from "@/lib/data";

function TechChip({ label }: { label: string }) {
  return (
    <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground">
      {label}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal className="h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.05] focus-within:ring-2 focus-within:ring-violet-400/50">
        <span aria-hidden="true" className="border-glow absolute inset-0 rounded-2xl" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-44 w-64 -translate-x-1/2 rounded-full bg-violet-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="relative flex items-center justify-between gap-3">
          <span className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            {project.lang ? (
              <>
                <span
                  className="size-2 rounded-full shadow-[0_0_8px_currentColor]"
                  style={{
                    backgroundColor: project.lang.color,
                    color: project.lang.color,
                  }}
                />
                {project.lang.name}
              </>
            ) : (
              <span className="size-2 rotate-45 bg-gradient-to-br from-violet-400 to-cyan-300" />
            )}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {project.tag}
          </span>
        </div>

        <h3 className="relative mt-4 font-heading text-xl font-semibold transition-colors group-hover:text-violet-200">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline-none"
          >
            {project.title}
            <span className="absolute inset-0" aria-hidden="true" />
          </a>
          <ArrowUpRight
            aria-hidden="true"
            className="ml-1.5 inline size-4 -translate-y-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
          />
        </h3>

        <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="relative mt-5 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((tech) => (
            <TechChip key={tech} label={tech} />
          ))}
        </div>

        <div className="relative mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-muted-foreground/70">
          <span className="font-mono">{project.year}</span>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="relative z-10 inline-flex items-center gap-1.5 font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Live demo
              <ArrowUpRight className="size-3.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 transition-colors group-hover:text-foreground">
              Repository
              <ArrowUpRight className="size-3.5" />
            </span>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section
      id="work"
      className="relative scroll-mt-20 border-t border-white/5 py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="02"
            eyebrow="Selected Work"
            title={
              <>
                Projects I&apos;ve <span className="text-gradient">built</span>
              </>
            }
          />
          <Reveal delay={0.16}>
            <Button
              asChild
              variant="outline"
              className="h-10 rounded-full px-5"
            >
              <a href={profile.github} target="_blank" rel="noreferrer">
                All repositories
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </Reveal>
        </div>

        {featured ? (
          <Reveal delay={0.1} className="mt-12">
            <div className="group border-glow relative overflow-hidden rounded-3xl border border-violet-400/25 bg-gradient-to-br from-violet-600/15 via-white/[0.03] to-cyan-400/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/40 focus-within:ring-2 focus-within:ring-violet-400/50 md:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-violet-500/25 blur-3xl"
              />

              <div className="relative grid gap-8 md:grid-cols-[1.7fr_1fr] md:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                      <Star className="size-3" />
                      Featured
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {featured.tag}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {featured.year}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-4xl">
                    <a
                      href={featured.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-violet-100 focus-visible:outline-none"
                    >
                      {featured.title}
                      <span className="absolute inset-0" aria-hidden="true" />
                    </a>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="ml-2 inline size-7 text-violet-300 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {featured.longDescription ?? featured.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {featured.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative rounded-2xl border border-white/10 bg-background/50 p-5 backdrop-blur">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-violet-300">
                    Project meta
                  </p>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-muted-foreground">Language</dt>
                      <dd className="font-medium">
                        {featured.lang?.name ?? "REST API"}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-muted-foreground">Type</dt>
                      <dd className="font-medium">{featured.tag}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-muted-foreground">Status</dt>
                      <dd className="inline-flex items-center gap-2 font-medium">
                        <span className="animate-pulse-dot size-1.5 rounded-full bg-emerald-400" />
                        In development
                      </dd>
                    </div>
                  </dl>
                  <Button
                    asChild
                    className="relative z-10 mt-5 h-9 w-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 text-white transition-all hover:shadow-[0_0_24px_rgba(139,92,246,0.5)]"
                  >
                    <a href={featured.repo} target="_blank" rel="noreferrer">
                      View repository
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        ) : null}

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
