import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Brain, Users, Target, Award } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: "Psychology-Backed Training",
      description: "Evidence-based programs grounded in psychological research and best practices."
    },
    {
      icon: Users,
      title: "Tailored to Your Needs",
      description: "Mix and match modules from different courses to create the perfect program for your organisation."
    },
    {
      icon: Target,
      title: "Practical & Interactive",
      description: "Hands-on workshops with real-world applications, case studies, and actionable strategies."
    },
    {
      icon: Award,
      title: "Qualified Expertise",
      description: "Led by a qualified psychologist with deep understanding of workplace dynamics."
    }
  ];

  const courseHighlights = [
    {
      title: "Building Constructive Workplace Relationships",
      description: "Develop empathy, communication skills, and trust-based relationships for effective teamwork.",
      href: "/courses/0"
    },
    {
      title: "Emotional Intelligence for High-Performing Teams",
      description: "Enhance collaboration, trust, and engagement through emotional intelligence.",
      href: "/courses/6"
    },
    {
      title: "Managing Conflict with Confidence",
      description: "Turn workplace conflict into progress with effective communication and mediation skills.",
      href: "/courses/3"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Psychological Expertise for Business Success
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
                Qualified Psychotherapist & Business Psychologist offering tailored training programmes to build resilient teams, effective leaders, and inclusive cultures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses">
                  <Button size="lg" className="w-full sm:w-auto">
                    Explore Courses
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Design Your Program
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/valentyna-professional.jpg" 
                  alt="Valentyna Bukovska - Qualified Psychologist" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Psychology-Based Training?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your organisation with evidence-based programs designed by a qualified psychologist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Training Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              One-day interactive workshops designed for immediate impact. All programs can be customized to your organisation's specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {courseHighlights.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={course.href}>
                    <Button variant="outline" className="w-full">
                      Learn More
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/courses">
              <Button size="lg" variant="default">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section with Photo */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/valentyna-working.jpg" 
                  alt="Valentyna Bukovska - Psychology Training Specialist" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Evidence-Based Training for Real Results
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                As a qualified psychologist specializing in business training, I bring deep expertise in workplace psychology, organisational behaviour, and human development to every program.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                My interactive workshops are designed to be immediately applicable, combining psychological research with practical business strategies that drive measurable change in your organisation.
              </p>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More About My Approach
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Credibility */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recognised Expertise in Psychology & Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With over 15 years of experience across humanitarian work, clinical psychology, and corporate training, I bring a unique depth of understanding to workplace development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/valentyna-radio.jpg" 
                alt="Valentyna Bukovska on Beat Route Radio" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/valentyna-event.jpg" 
                alt="Valentyna Bukovska at Business Event" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from organisations that have experienced lasting transformation through our programmes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-muted/30 rounded-2xl shadow-lg p-8 border">
              <p className="text-lg italic text-muted-foreground mb-6">
                "Working with Valentyna for four years has been one of the most valuable strategic decisions we made for our people and organisational culture. Her work consistently improved emotional stability in our teams, reduced internal friction and helped us maintain psychological safety even during high-pressure business periods. Valentyna always translates complex psychology into clear, applicable tools managers actually use. As a result — our communication flows are healthier, we see fewer escalations, and teams show higher accountability and collaboration. This was not a one-off training effect — this became part of how we operate."
              </p>
              <p className="font-semibold">— Victoria Sokyrko</p>
              <p className="text-sm text-muted-foreground">Head of HR, Sklad Service</p>
            </div>
            
            <div className="bg-muted/30 rounded-2xl shadow-lg p-8 border">
              <p className="text-lg italic text-muted-foreground mb-6">
                "The training programme Valentyna ran for our teams was unlike anything we experienced before. It wasn't just about learning communication techniques — people started interacting differently. Colleagues became more respectful, calmer under tension, and more aware of their own emotional reactions. Difficult conversations stopped becoming battles — they became problem-solving. Valentyna has a very rare combination: she understands human depth and business reality at the same time. She sees the roots of conflicts — and teaches people to resolve them with clarity and dignity. This training didn't just improve communication — it positively changed how people feel at work."
              </p>
              <p className="font-semibold">— Olena Borovetc</p>
              <p className="text-sm text-muted-foreground">Executive Director, Farnmak</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Team?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can create a tailored training program that addresses your organisation's unique challenges and goals.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
