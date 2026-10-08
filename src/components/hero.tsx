"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { profile, stats } from "@/lib/data";

const floatingBadges = [
  { label: "TypeScript", className: "-left-4 top-10 animate-float" },
  { label: "Next.js", className: "-right-3 top-1/3 animate-float-slow" },
  { label: "Flutter", className: "-left-2 bottom-12 animate-float-slow" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % profile.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <section className="relative isolate overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 -z-10 size-[30rem] rounded-full bg-violet-600/20 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/3 -z-10 size-[26rem] rounded-full bg-cyan-500/15 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/3 -z-10 size-[22rem] rounded-full bg-fuchsia-500/15 blur-[130px]"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal y={14}>
            <a
              href={profile.statusUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:border-emerald-400/30 hover:text-foreground"
            >
              <span className="animate-pulse-dot size-2 rounded-full bg-emerald-400" />
              {profile.status}
              <ArrowUpRight className="size-3.5 opacity-60" />
            </a>
          </Reveal>

          <Reveal delay={0.08} y={14}>
            <p className="mt-8 font-mono text-sm tracking-wide text-violet-300">
              Hi, my name is
            </p>
          </Reveal>

          <Reveal delay={0.14} y={18}>
            <h1 className="mt-2 font-heading text-6xl font-bold leading-none tracking-tight sm:text-7xl md:text-8xl">
              {profile.name}
              <span className="text-gradient text-gradient-animated">.</span>
            </h1>
          </Reveal>

          <div
            className="relative mt-4 h-9 overflow-hidden md:h-12"
            aria-live="polite"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={profile.roles[roleIndex]}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 font-heading text-2xl font-semibold tracking-tight text-muted-foreground md:text-4xl"
              >
                {profile.roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <Reveal delay={0.22} y={16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {profile.tagline} Right now I&apos;m heads-down on{" "}
              <a
                href={profile.statusUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-foreground underline decoration-violet-400/60 underline-offset-4 transition-colors hover:decoration-violet-300"
              >
                MysteryMessage
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={0.3} y={16}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="h-11 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 text-white shadow-[0_0_28px_rgba(139,92,246,0.35)] transition-all hover:scale-[1.03] hover:shadow-[0_0_36px_rgba(139,92,246,0.55)]"
              >
                <a href="#work">
                  View My Work
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full px-6"
              >
                <a href="#contact">Let&apos;s Talk</a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-11 rounded-full px-4 text-muted-foreground"
              >
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <GithubIcon className="size-4" />
                  {profile.handle}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.38} y={16}>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-7">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={30} className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-[21rem] sm:max-w-[24rem]">
            <div
              aria-hidden="true"
              className="absolute -inset-10 rounded-full bg-gradient-to-br from-violet-600/30 via-fuchsia-500/10 to-cyan-400/25 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full border border-white/10"
            >
              <div className="animate-orbit absolute inset-0">
                <span className="absolute left-1/2 top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
              </div>
            </div>

            <div className="border-glow absolute inset-3 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-violet-950/50">
              <Image
                src={profile.avatar}
                alt={`${profile.name} — GitHub avatar`}
                fill
                priority
                sizes="(max-width: 640px) 80vw, 380px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>

            {floatingBadges.map((badge) => (
              <span
                key={badge.label}
                className={`absolute rounded-xl border border-white/10 bg-background/85 px-3 py-2 text-xs font-semibold shadow-xl shadow-black/40 backdrop-blur ${badge.className}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
