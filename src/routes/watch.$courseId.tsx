import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";

export const Route = createFileRoute("/watch/$courseId")({
  component: Watch,
});

function Watch() {
  const { courseId } = Route.useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </Link>

        <div className="glass rounded-3xl overflow-hidden">
          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${courseId}`}
            title="Course Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}



