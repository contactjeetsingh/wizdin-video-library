import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Clock, BookOpen, Bookmark, Settings, Mail, MapPin } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { courses } from "@/lib/learn-data";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — LearnSphere" }] }),
  component: Profile,
});

function Profile() {
  const completed = courses.slice(0, 3);
  const saved = courses.slice(4, 8);
  const history = courses.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        {/* Profile header */}
        <div className="glass-strong rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gradient-to-br from-primary/30 to-accent-light/20 blur-3xl" />
          <div className="relative grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
            <div className="grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-primary to-accent-light text-background text-3xl font-bold shrink-0">
              AM
            </div>
            <div className="min-w-0">
              <h1 className="text-3xl font-bold">Alex Morgan</h1>
              <p className="text-muted-foreground mt-1">Senior Cloud Architect · Pro member since 2024</p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Mail className="h-4 w-4" /> alex@example.com</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> San Francisco, CA</span>
              </div>
            </div>
            <Button variant="outline" className="glass border-white/10 hover:bg-white/5">
              <Settings className="h-4 w-4 mr-2" /> Edit profile
            </Button>
          </div>

          {/* Stats */}
          <div className="relative mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
            {[
              { icon: BookOpen, label: "Courses completed", value: "23" },
              { icon: Award, label: "Certificates", value: "12" },
              { icon: Clock, label: "Learning hours", value: "284" },
              { icon: Bookmark, label: "Saved", value: "47" },
            ].map(s => (
              <div key={s.label}>
                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                  <s.icon className="h-4 w-4 text-accent-light" /> {s.label}
                </div>
                <div className="mt-1 text-2xl font-bold">{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-4">Certificates</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {completed.map(c => (
              <div key={c.id} className="glass rounded-2xl p-5 card-hover">
                <div className={`relative h-32 rounded-xl bg-gradient-to-br ${c.gradient} mb-4 grid place-items-center`}>
                  <Award className="h-10 w-10 text-white" />
                </div>
                <div className="text-xs text-accent-light">{c.category}</div>
                <h3 className="font-semibold mt-1 line-clamp-2">{c.title}</h3>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Verified · ID 28492</span>
                  <button className="text-accent-light hover:text-foreground">Share →</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Saved */}
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-4">Saved courses</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {saved.map(c => (
              <Link to="/course/$courseId" params={{ courseId: c.id }} key={c.id} className="glass rounded-2xl overflow-hidden card-hover">
                <div className={`aspect-video bg-gradient-to-br ${c.gradient}`} />
                <div className="p-4">
                  <div className="text-xs text-accent-light">{c.category}</div>
                  <h3 className="font-semibold mt-1.5 line-clamp-2 text-sm">{c.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* History */}
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-4">Learning history</h2>
          <div className="glass rounded-2xl divide-y divide-white/5">
            {history.map((c, i) => (
              <div key={c.id} className="flex items-center gap-4 p-4 hover:bg-white/5 transition">
                <div className={`h-14 w-20 shrink-0 rounded-lg bg-gradient-to-br ${c.gradient}`} />
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-accent-light">{c.category}</div>
                  <h3 className="font-semibold truncate">{c.title}</h3>
                </div>
                <div className="hidden sm:block text-xs text-muted-foreground text-right shrink-0">
                  <div>{["Today", "Yesterday", "2 days ago", "Last week", "Last week", "2 weeks ago"][i]}</div>
                  <div className="mt-0.5">{c.progress > 0 ? `${c.progress}% complete` : "Completed"}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
