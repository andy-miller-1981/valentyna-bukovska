import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, CheckCircle2 } from "lucide-react";
import coursesData from "@/data/courses.json";

export default function CourseDetail() {
  const [, params] = useRoute("/courses/:id");
  const courseId = params?.id ? parseInt(params.id) : 0;
  const course = coursesData[courseId];

  if (!course) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Course not found</h1>
        <Link href="/courses">
          <Button>Back to Courses</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-12 md:py-16">
        <div className="container">
          <Link href="/courses">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2" size={16} />
              Back to Courses
            </Button>
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Clock size={16} />
              <span>{course.duration}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {course.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {course.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Course Structure</h2>
            <div className="space-y-4">
              {course.modules.map((module: any, index: number) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Module {index + 1}: {module.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      {course.outcomes && course.outcomes.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Learning Outcomes</h2>
              <p className="text-lg text-muted-foreground mb-6">
                By the end of this workshop, participants will be able to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.outcomes.map((outcome: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <p className="text-base">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Interested in This Course?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              This course can be delivered as-is or customized by selecting specific modules and combining them with content from other programs. Let's discuss how to tailor it to your organisation's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  Inquire About This Course
                </Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" variant="outline">
                  Explore Other Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
