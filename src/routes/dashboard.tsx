import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Award, Flame, TrendingUp, Clock, BookOpen, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { courses } from "@/lib/learn-data";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — LearnSphere" },
      { name: "description", content: "Your personalized learning dashboard." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const inProgress = courses.filter(c => c.progress > 0 && c.progress < 100);
  const recommended = courses.filter(c => c.progress === 0).slice(0, 4);
  const weekActivity = [40, 65, 80, 55, 90, 75, 100];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        {/* Welcome */}
        <div className="glass-strong rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gradient-to-br from-primary/30 to-accent-light/20 blur-3xl" />
          <div className="relative">
            <p className="text-sm text-accent-light">Good evening, Alex</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold">Pick up where you left off</h1>
            <p className="mt-2 text-muted-foreground">You're on a <span className="text-foreground font-semibold">12-day streak</span> — keep it going.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Flame, label: "Day streak", value: "12", accent: "text-orange-400" },
            { icon: Clock, label: "Hours this week", value: "8.4", accent: "text-accent-light" },
            { icon: Award, label: "Certificates", value: "5", accent: "text-amber-400" },
            { icon: TrendingUp, label: "Skill score", value: "847", accent: "text-emerald-400" },
          ].map(s => (
            <div key={s.label} className="glass rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5">
                  <s.icon className={`h-5 w-5 ${s.accent}`} />
                </div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
              <div className="mt-3 text-3xl font-bold">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {/* Continue learning */}
          <section className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">Continue learning</h2>
            <div className="space-y-3">
              {inProgress.map(c => (
                <Link to="/watch/$courseId" params={{ courseId: c.id }} key={c.id} className="group glass rounded-2xl p-4 flex items-center gap-4 card-hover">
                  <div className={`relative h-20 w-32 shrink-0 rounded-xl overflow-hidden bg-gradient-to-br ${c.gradient}`}>
                    <div className="absolute inset-0 grid place-items-center">
                      <Play className="h-5 w-5 fill-white text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-accent-light">{c.category}</div>
                    <h3 className="font-semibold mt-0.5 truncate">{c.title}</h3>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent-light" style={{ width: `${c.progress}%` }} />
                      </div>
                      <span className="text-xs text-muted-foreground">{c.progress}%</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition shrink-0" />
                </Link>
              ))}
            </div>
          </section>

          {/* Weekly activity chart */}
          <section>
            <h2 className="text-xl font-bold mb-4">This week</h2>
            <div className="glass rounded-2xl p-6">
              <div className="flex items-end justify-between gap-2 h-40">
                {weekActivity.map((v, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full rounded-t-lg bg-gradient-to-t from-primary/60 to-accent-light/80" style={{ height: `${v}%` }} />
                    <div className="text-[10px] text-muted-foreground">{["M","T","W","T","F","S","S"][i]}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-white/5 text-sm">
                <div className="flex justify-between text-muted-foreground"><span>Weekly goal</span><span className="text-foreground font-semibold">8.4 / 10h</span></div>
                <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-accent-light" style={{ width: "84%" }} />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Certificates */}
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-4">Certificates earned</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.slice(0, 3).map(c => (
              <div key={c.id} className="glass rounded-2xl p-5 card-hover">
                <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${c.gradient}`}>
                  <Award className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 font-semibold leading-snug line-clamp-2">{c.title}</h3>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Issued Nov 2026</span>
                  <button className="text-accent-light hover:text-foreground">Download →</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended */}
        <section className="mt-10">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-xl font-bold">Recommended for you</h2>
            <Link to="/library" className="text-sm text-accent-light hover:text-foreground">Browse all →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {recommended.map((c) => (
              <Link to="/course/$courseId" params={{ courseId: c.id }} key={c.id} className="glass rounded-2xl overflow-hidden card-hover">
                <div className={`relative aspect-video bg-gradient-to-br ${c.gradient}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-xs text-accent-light">{c.category}</div>
                  <h3 className="font-semibold mt-1.5 line-clamp-2">{c.title}</h3>
                  <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {c.duration}</span>
                    <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {c.lessons}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
