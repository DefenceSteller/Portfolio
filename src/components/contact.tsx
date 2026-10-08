"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, Check, Copy, Mail, Send } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/lib/data";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard unavailable — the address is visible on screen anyway.
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact — ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const fieldClass =
    "h-11 rounded-xl border-white/10 bg-white/5 text-sm placeholder:text-muted-foreground/60 focus-visible:border-violet-400/60 focus-visible:ring-violet-400/30";

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/5 py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/4 -z-10 size-[26rem] rounded-full bg-violet-600/15 blur-[140px]"
      />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build{" "}
              <span className="text-gradient">something together</span>
            </>
          }
          description="Have a project in mind, a role to fill, or just want to say hi? My inbox is open."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Reveal delay={0.1}>
              <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-violet-400/30">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-violet-300">
                      <Mail className="size-3.5" />
                      Email
                    </p>
                    <p className="mt-3 break-all font-heading text-lg font-semibold md:text-xl">
                      {profile.email}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="icon-sm"
                    className="shrink-0 rounded-full"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="size-4 text-emerald-400" />
                    ) : (
                      <Copy className="size-4" />
                    )}
                  </Button>
                </div>
                <p className="mt-3 h-4 text-xs text-emerald-400 transition-opacity duration-300">
                  {copied ? "Copied to clipboard" : ""}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-0.5 hover:border-violet-400/30"
              >
                <div>
                  <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-violet-300">
                    <GithubIcon className="size-3.5" />
                    GitHub
                  </p>
                  <p className="mt-3 font-heading text-lg font-semibold md:text-xl">
                    @{profile.handle}
                  </p>
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
                <span className="animate-pulse-dot size-2.5 shrink-0 rounded-full bg-emerald-400" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Open to opportunities.
                  </span>{" "}
                  Usually replies within a day.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <form
              onSubmit={onSubmit}
              className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={fieldClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project, role, or idea..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="min-h-36 resize-y rounded-xl border-white/10 bg-white/5 text-sm placeholder:text-muted-foreground/60 focus-visible:border-violet-400/60 focus-visible:ring-violet-400/30"
                />
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-2">
                <Button
                  type="submit"
                  className="h-11 w-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 text-white transition-all hover:shadow-[0_0_28px_rgba(139,92,246,0.5)]"
                >
                  Send Message
                  <Send className="size-4" />
                </Button>
                <p className="text-center text-xs text-muted-foreground/70">
                  {sent
                    ? "Opening your email app — if nothing happens, email me directly."
                    : "Opens your email app — nothing is stored or tracked."}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
