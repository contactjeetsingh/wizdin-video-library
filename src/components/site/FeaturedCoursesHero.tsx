import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "@tanstack/react-router";
import {  Clock, BookOpen, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import courses from "@/data/courses.json";

export function FeaturedCoursesHero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden" style={{ background: "#071426" }}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0c2240] via-[#071426] to-[#071426]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
          <div className="flex">
            {courses.map((c) => (
              <div key={c.id} className="min-w-0 shrink-0 grow-0 basis-full px-1">
                <div
                  className="relative rounded-3xl overflow-hidden border backdrop-blur-xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(77,168,255,0.2)",
                  }}
                >
                  <div className="grid lg:grid-cols-2">
                    {/* Banner */}
<div className="relative aspect-[16/10] lg:aspect-auto">
  <img
    src={c.thumbnail}
    alt={c.title}
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-[#071426]" />

  <span
    className="absolute top-5 left-5 rounded-full px-3 py-1 text-xs font-semibold"
    style={{
      background: "rgba(7,20,38,0.8)",
      color: "#4DA8FF",
    }}
  >
    {c.videos.length} Videos
  </span>
</div>

                    {/* Details */}
                    <div className="p-8 sm:p-10 flex flex-col justify-center text-white">
                      <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "#4DA8FF" }}>
                        {c.category}
                      </span>
                      <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold leading-tight">{c.title}</h2>
                      <p className="mt-2 text-sm text-white/60">by {c.instructor}</p>
                      <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-md">{c.description}</p>

                     <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-white/80">
  <span className="flex items-center gap-1.5">
    <BookOpen className="h-4 w-4" />
    {c.videos.length} Videos
  </span>

  <span className="flex items-center gap-1.5">
    <Clock className="h-4 w-4" />
    Self Paced
  </span>
</div>

                      <Button
                        asChild
                        size="lg"
                        className="mt-7 h-12 px-7 w-fit font-semibold border-0"
                        style={{ background: "#4DA8FF", color: "#071426" }}
                      >
                        <Link to="/course/$courseId" params={{ courseId: c.id }}>
                          View Videos<ArrowRight className="ml-1.5 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-1.5">
            {courses.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === selectedIndex ? 24 : 6,
                  background: i === selectedIndex ? "#4DA8FF" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              aria-label="Previous"
              className="grid h-9 w-9 place-items-center rounded-full border transition hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "white" }}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next"
              className="grid h-9 w-9 place-items-center rounded-full border transition hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "white" }}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}