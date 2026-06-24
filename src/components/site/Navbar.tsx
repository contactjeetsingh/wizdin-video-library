import { Link } from "@tanstack/react-router";
import { GraduationCap, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/library", label: "Library" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/profile", label: "Profile" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.72_0.16_245)] to-[oklch(0.85_0.11_235)] glow">
            <GraduationCap className="h-5 w-5 text-background" />
          </div>
          <span className="text-lg font-bold tracking-tight">LearnSphere</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5"
              activeProps={{ className: "rounded-lg px-4 py-2 text-sm font-medium text-foreground bg-white/5" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden sm:grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/5 transition">
            <Search className="h-4 w-4" />
          </button>
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-muted-foreground hover:text-foreground">Sign in</Button>
          <Button size="sm" className="bg-gradient-to-r from-[oklch(0.72_0.16_245)] to-[oklch(0.85_0.11_235)] text-background font-semibold hover:opacity-90 border-0">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
}
