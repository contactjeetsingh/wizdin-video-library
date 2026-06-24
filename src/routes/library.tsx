import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Play, Star, Clock, Filter } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { categories, courses } from "@/lib/learn-data";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "Video Library — LearnSphere" },
      { name: "description", content: "Browse the full LearnSphere course library across enterprise domains." },
    ],
  }),
  component: Library,
});

function Library() {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");
  const filtered = courses.filter(c =>
    (active === "All" || c.category === active) &&
    c.title.toLowerCase().includes(query.toLowerCase())
  );
  const continueWatching = courses.filter(c => c.progress > 0 && c.progress < 100).slice(0, 4);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Video Library</h1>
            <p className="text-muted-foreground mt-2">Thousands of premium lessons across enterprise disciplines.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 glass rounded-xl flex items-center gap-2 px-4">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses, instructors, topics..."
                className="flex-1 bg-transparent border-0 outline-none py-3 text-sm placeholder:text-muted-foreground"
              />
            </div>
            <Button variant="outline" className="glass border-white/10 hover:bg-white/5">
              <Filter className="h-4 w-4 mr-2" /> Filters
            </Button>
          </div>

          {/* Category chips */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
            {["All", ...categories.map(c => c.name)].map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition border ${
                  active === cat
                    ? "bg-gradient-to-r from-[oklch(0.72_0.16_245)] to-[oklch(0.85_0.11_235)] text-background border-transparent"
                    : "glass text-muted-foreground border-white/10 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Continue watching */}
        {continueWatching.length > 0 && active === "All" && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-5">Continue watching</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {continueWatching.map(c => (
                <Link to="/watch/$courseId" params={{ courseId: c.id }} key={c.id} className="group glass rounded-2xl overflow-hidden card-hover">
                  <div className={`relative aspect-video bg-gradient-to-br ${c.gradient}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition">
                      <div className="grid h-14 w-14 place-items-center rounded-full bg-white/95 text-background">
                        <Play className="h-5 w-5 fill-current ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                      <div className="h-full bg-gradient-to-r from-primary to-accent-light" style={{ width: `${c.progress}%` }} />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-accent-light">{c.category}</div>
                    <h3 className="font-semibold mt-1.5 line-clamp-1">{c.title}</h3>
                    <div className="text-xs text-muted-foreground mt-2">{c.progress}% complete</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Recently added */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-5">{active === "All" ? "All courses" : active}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((c) => (
              <Link to="/course/$courseId" params={{ courseId: c.id }} key={c.id} className="group glass rounded-2xl overflow-hidden card-hover">
                <div className={`relative aspect-video bg-gradient-to-br ${c.gradient}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur px-2 py-0.5 text-xs font-medium">{c.level}</div>
                  <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-white/95 text-background">
                      <Play className="h-5 w-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-accent-light">{c.category}</div>
                  <h3 className="font-semibold mt-1.5 line-clamp-2 leading-snug">{c.title}</h3>
                  <p className="text-xs text-muted-foreground mt-2">{c.instructor}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-accent-light text-accent-light" /> {c.rating}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {c.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="glass rounded-2xl p-12 text-center text-muted-foreground">No courses match your search.</div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
}
