/// <reference types="react" />
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "@tanstack/react-router";
import { Play, Star, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { courses } from "@/lib/learn-data";

export function HeroCourseCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 3500);
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
    <div className="relative">
      <div className="absolute -inset-8 bg-gradient-to-tr from-primary/30 via-accent-light/20 to-transparent blur-3xl -z-10" />

      <div className="relative rounded-3xl overflow-hidden glass-strong p-4">
        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="flex">
            {courses.map((c) => (
              <div key={c.id} className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 px-2">
                <Link
                  to="/course/$courseId"
                  params={{ courseId: c.id }}
                  className="group block glass rounded-2xl overflow-hidden card-hover"
                >
                  <div className={`relative aspect-video bg-gradient-to-br ${c.gradient}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur px-2 py-0.5 text-xs font-medium">
                      {c.level}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                      <div className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-background">
                        <Play className="h-4 w-4 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-accent-light">{c.category}</div>
                    <h3 className="font-semibold mt-1.5 line-clamp-2 leading-snug text-sm">{c.title}</h3>
                    <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-accent-light text-accent-light" /> {c.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {c.duration}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-4 flex items-center justify-between px-1">
          <div className="flex gap-1.5">
            {courses.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === selectedIndex ? "w-6 bg-primary" : "w-1.5 bg-white/20"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="grid h-8 w-8 place-items-center rounded-full border border-white/10 hover:bg-white/5 transition"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={scrollNext}
              className="grid h-8 w-8 place-items-center rounded-full border border-white/10 hover:bg-white/5 transition"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}