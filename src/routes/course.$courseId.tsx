import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Play, Star, Clock, Users, Award, CheckCircle2, BookOpen, Download, Lock } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import courses from "@/data/courses.json";
const bannerImg = new URL("../assets/course-banner.jpg", import.meta.url).href;

export const Route = createFileRoute("/course/$courseId")({
  head: ({ params }) => {
    const c = courses.find(x => x.id === params.courseId);
    return {
      meta: [
        { title: c ? `${c.title} — LearnSphere` : "Course — LearnSphere" },
        { name: "description", content: c?.title ?? "Course details" },
      ],
    };
  },
  component: CourseDetails,
  notFoundComponent: () => (
    <div className="min-h-screen"><Navbar /><div className="mx-auto max-w-7xl px-6 py-32 text-center"><h1 className="text-3xl font-bold">Course not found</h1></div></div>
  ),
  loader: ({ params }) => {
    const course = courses.find(c => c.id === params.courseId);
    if (!course) throw notFound();
    return { course };
  },
});

function CourseDetails() {
  const { course } = Route.useLoaderData() as { course: (typeof courses)[number] };
   console.log(course);
  const suggestedCourses = courses.filter(
  c => course.suggestedCourses?.includes(c.id)
);
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Banner */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img src={bannerImg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-14">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Link to="/library" className="text-sm text-accent-light hover:text-foreground">← Back to library</Link>
                <div className="mt-4 flex items-center gap-2">
                <span className="text-xs text-accent-light font-medium uppercase tracking-wider">{course.category}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground">{(course as any).level ?? 'All levels'}</span>
              </div>
              <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">{course.title}</h1>
              <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
                Master {course.category.toLowerCase()} with a production-grade curriculum designed by industry leaders. Hands-on labs, real-world projects, and certification on completion.
              </p>
<div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
  <span>{course.category}</span>
  <span>•</span>
  <span>{course.videos.length} Videos</span>
</div>
             
            </div>

            <div className="glass-strong rounded-3xl overflow-hidden self-start">
<div className="relative aspect-video">
  <img
    src={course.thumbnail}
    alt={course.title}
    className="w-full h-full object-cover"
  />
</div>
              <div className="p-6">
               
                <div className="text-sm text-muted-foreground">
  {course.videos.length} Videos Available
</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="lg:col-span-2 space-y-12">
          {/* Instructor */}
          <section className="glass rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Instructor</h2>
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-primary to-accent-light text-background text-xl font-bold">
                {course.instructor.split(" ").map((n: string) => n[0]).join("")}
              </div>
              <div>
                <div className="font-semibold text-lg">{course.instructor}</div>
                <div className="text-sm text-muted-foreground">Principal {course.category} Architect · 15 years experience</div>
                <div className="text-xs text-muted-foreground mt-1">12 courses · 48K students</div>
              </div>
            </div>
          </section>

        <section>
  <h2 className="text-2xl font-bold mb-6">
    Course Videos
  </h2>

 <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
  {course.videos.map((video) => (
    <Link
      key={video.youtubeId}
      to="/watch/$courseId"
      params={{
        courseId: course.id,
      }}
      className="shrink-0"
    >
      <div className="w-[240px] glass rounded-2xl overflow-hidden hover:scale-105 transition duration-300">

        <img
          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
          alt={video.title}
          className="w-full h-36 object-cover"
        />

        <div className="p-3">
          <h3 className="font-semibold text-sm line-clamp-2">
            {video.title}
          </h3>

          <p className="text-xs text-muted-foreground mt-1">
            {video.duration}
          </p>
        </div>

      </div>
    </Link>
  ))}
</div>
</section>

     <section className="mt-12">
  <h2 className="text-2xl font-bold mb-6">
    Suggested Courses
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

    {suggestedCourses.map((suggestedCourse) => (
  <Link
    key={suggestedCourse.id}
    to="/course/$courseId"
    params={{
      courseId: suggestedCourse.id,
    }}
    className="block"
  >
    <div className="glass rounded-2xl overflow-hidden hover:scale-105 transition">

      <img
        src={suggestedCourse.thumbnail}
        alt={suggestedCourse.title}
        className="w-full h-28 object-cover"
      />

      <div className="p-3">
        <h3 className="text-sm font-medium">
          {suggestedCourse.title}
        </h3>
      </div>

    </div>
  </Link>
))}
  </div>
</section>     
        </div>

       
      </div>

      <Footer />
    </div>
  );
}
