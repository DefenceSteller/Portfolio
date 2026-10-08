import { ArrowUp } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { navLinks, profile } from "@/lib/data";

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="relative border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a
              href="#top"
              className="flex items-center gap-2 font-heading text-lg font-bold"
            >
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-sm text-white">
                H
              </span>
              {profile.name}
              <span className="text-gradient">.</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Full-stack developer building web &amp; mobile products with
              Next.js, TypeScript, React and Flutter.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              size="icon-sm"
              className="rounded-full"
              aria-label="GitHub profile"
            >
              <a href={profile.github} target="_blank" rel="noreferrer">
                <GithubIcon className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon-sm"
              className="rounded-full"
              aria-label="Email"
            >
              <a href={`mailto:${profile.email}`}>@</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon-sm"
              className="rounded-full"
              aria-label="Back to top"
            >
              <a href="#top">
                <ArrowUp className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <Separator className="my-7 bg-white/10" />

        <div className="flex flex-col gap-2 text-xs text-muted-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>
            Built with{" "}
            <span className="text-muted-foreground">Next.js</span>,{" "}
            <span className="text-muted-foreground">TypeScript</span> &amp;{" "}
            <span className="text-muted-foreground">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
