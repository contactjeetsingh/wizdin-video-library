import { createFileRoute, Link } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { categories } from "@/lib/learn-data";
import { FeaturedCoursesHero } from "@/components/site/FeaturedCoursesHero";

const typedCategories = categories as Array<{ name: string; color: string; count?: number; icon: any }>;
// import heroImg from "@/assets/hero-dashboard.jpg";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "LearnSphere — Salesforce Learning Platform",
      },
      {
        name: "description",
        content:
          "Learn Salesforce Admin, Apex, LWC, Architecture, Integrations and Agentforce through structured video courses.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Course Carousel */}
      <FeaturedCoursesHero />

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Browse Learning Tracks
          </h2>
          <p className="text-muted-foreground mt-2">
            Explore Salesforce courses and video libraries.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {typedCategories.map((c) => (
            <Link
              to="/"
              key={c.name}
              className="group glass rounded-2xl p-5 card-hover"
            >
              <div
                className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${c.color} mb-4`}
              >
               <div className="h-5 w-5 rounded bg-white" />
              </div>

              <div className="font-semibold">{c.name}</div>

              <div className="text-xs text-muted-foreground mt-1">
                Explore videos
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Platform Overview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 mb-24">
        <div className="glass rounded-3xl p-10">
          <h2 className="text-3xl font-bold">
            Learn Through Real Video Content
          </h2>

          <p className="mt-4 text-muted-foreground max-w-3xl">
            Browse structured learning tracks for Salesforce Admin,
            Apex Development, Lightning Web Components, Architecture,
            Integrations, Security, Data Cloud, and Agentforce.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="glass rounded-2xl p-5">
              <div className="text-2xl font-bold">8+</div>
              <div className="text-sm text-muted-foreground">
                Learning Tracks
              </div>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="text-2xl font-bold">100+</div>
              <div className="text-sm text-muted-foreground">
                Video Lessons
              </div>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="text-2xl font-bold">Salesforce</div>
              <div className="text-sm text-muted-foreground">
                Focused Content
              </div>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="text-2xl font-bold">YouTube</div>
              <div className="text-sm text-muted-foreground">
                Video Library
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}