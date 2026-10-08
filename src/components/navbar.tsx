"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const { href } of navLinks) {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-background/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2 font-heading text-lg font-bold tracking-tight"
          aria-label="Back to top"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-sm text-white shadow-[0_0_18px_rgba(139,92,246,0.45)] transition-shadow group-hover:shadow-[0_0_26px_rgba(139,92,246,0.7)]">
            H
          </span>
          <span className="hidden sm:inline">
            {profile.name}
            <span className="text-gradient">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === link.href.slice(1)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-violet-400 to-cyan-300 transition-opacity",
                  active === link.href.slice(1)
                    ? "opacity-100"
                    : "opacity-0",
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="hidden rounded-full sm:inline-flex"
          >
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon className="size-4" />
              GitHub
              <ArrowUpRight className="size-3.5 opacity-70" />
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-sm"
                className="rounded-full md:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-72 flex-col gap-2 border-white/10 bg-background/95 backdrop-blur-xl"
            >
              <SheetHeader>
                <SheetTitle className="text-left font-heading text-lg font-bold">
                  Navigation
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-1 px-4">
                {navLinks.map((link, i) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-lg font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    <span>
                      <span className="mr-3 font-mono text-xs text-violet-300/80">
                        0{i + 1}
                      </span>
                      {link.label}
                    </span>
                    <ArrowUpRight className="size-4 opacity-50" />
                  </a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-2 px-4 pb-4">
                <Button asChild className="rounded-full">
                  <a href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <GithubIcon className="size-4" />
                    @{profile.handle}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
