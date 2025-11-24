import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import coursesData from "@/data/courses.json";

export default function Courses() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Training Courses & Modules
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Courses are typically delivered as one-day interactive workshops (8 hours), but can be tailored to be more in-depth and extended over multiple days to suit your organisation's needs. Each course is built from modular components that can be mixed and matched to create a bespoke training programme.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Delivery Format:</strong> Workshops can be delivered online or face-to-face. Face-to-face delivery is preferred for maximum engagement and interaction.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              The format, methodology and delivery style of each programme is adapted according to group size and organisational needs. This ensures that every participant receives individual value and active engagement — not just passive information.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              For smaller groups, the work is more experiential, reflective and skills-focused with deeper personal feedback, guided practice and scenario-based learning.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              For larger groups, the structure becomes modular, interactive and multi-layered — combining facilitated discussion, targeted teaching, live demonstrations, group exercises, micro-practice formats, case work and structured Q&A.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              This approach guarantees that every participant — regardless of group size — not only understands the material intellectually, but is able to actively integrate it into their real workplace situations, communication style and behavioural patterns.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              <strong>The goal is not just to deliver training — but to ensure tangible, applicable and durable skill transfer into everyday business reality.</strong>
            </p>
            <p className="text-lg text-muted-foreground">
              Explore the courses below, or <Link href="/contact"><span className="text-primary underline cursor-pointer">contact us</span></Link> to design a custom training solution.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-base line-clamp-3">
                    {course.overview}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-muted-foreground">
                      <strong>{course.modules.length} Modules</strong>
                    </div>
                    <Link href={`/courses/${index}`}>
                      <Button variant="outline" className="w-full">
                        View Details
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modular Approach Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Modular Approach
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every course is composed of focused modules covering specific skills and concepts. These modules can be selected and combined across different courses to create a bespoke training programme that precisely addresses your organisation's challenges and development goals.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you need a comprehensive one-day workshop, an in-depth multi-day programme, or a targeted session focusing on specific competencies, the modular structure ensures maximum flexibility and relevance to your business context.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Discuss Your Custom Program
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Broader Training Expertise Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/10 via-background to-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Beyond the Listed Courses: Additional Training Expertise
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              The courses above represent core programmes, but my expertise extends far beyond them. I design and deliver bespoke professional development programmes for corporate teams, HR, leadership groups and high-impact roles across diverse sectors. My work integrates organisational psychology, emotional intelligence and behavioural science to create practical, measurable change inside real business environments.
            </p>
            <p className="text-lg font-semibold mb-6 text-center">
              I can tailor training programmes to include these additional domains:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">1. Emotional Resilience & Mental Strength at Work</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Building healthy stress processing, emotional self-regulation, optimal performance habits and long-term resilience culture inside teams.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">2. Business Communication Psychology & High-Quality Relational Dynamics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Improving interpersonal interaction, emotional intelligence, attunement skills, relationship maintenance and reducing reactive emotional communication patterns inside the workplace.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">3. Conflict Transformation, Peaceful Conflict Resolution & Mediation Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    From everyday disagreements to high-stakes interpersonal tension — creating psychologically safe pathways to resolution. Skills include de-escalation, constructive confrontation, collaborative problem solving and peace-building methodologies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">4. Advanced Negotiation & Influence Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Evidence-based negotiation frameworks, managing difficult conversations, power dynamics, needs-based influence strategies and navigating emotionally charged negotiation spaces effectively.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">5. Working with Complex Emotional Reactions in Business Contexts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Professional tools and structured behavioural strategies for leaders and HR to respond to heightened emotions, activation, shutdown, avoidance, defensiveness and emotional flooding inside teams.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">6. Leadership Psychology & Growth of Influence Capacity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Developing emotionally intelligent leaders capable of holding relational tension, communicating with clarity, inspiring trust, guiding through change and shaping culture intentionally — not reactively.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">7. Team Culture, Engagement & High-Trust System Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Building psychological safety, healthy accountability, collective ownership, belonging and team cohesion — especially during organisational change, scale, restructuring or periods of uncertainty.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">8. Corporate Psychometrics & Behavioural Insights for People Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Selecting, interpreting and applying behavioural / psychometric data to improve selection decisions, team fit, leadership development, communication mapping and performance alignment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">9. Corporate Mental Health & Wellbeing Programmes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Strategic implementation of wellbeing systems, peer-support structures, prevention frameworks and practical psychological support mechanisms for employee health and sustainable long-term retention.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-10 text-center">
              <Link href="/contact">
                <Button size="lg">
                  Discuss Your Training Needs
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
