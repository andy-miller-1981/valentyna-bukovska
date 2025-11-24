import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, BookOpen, Users, ArrowRight } from "lucide-react";

const asset = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Valentyna Bukovska
            </h1>
            <p className="text-xl text-muted-foreground">
              Qualified Psychotherapist, Psychologist & Business Training Specialist
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Professional Photo */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={asset("/valentyna-professional.jpg")}
                    alt="Valentyna Bukovska - Qualified Psychologist"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Story Section */}
              <div>
                <h2 className="text-3xl font-bold mb-4">About Valentyna</h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-muted-foreground">
                    Valentyna is a qualified Psychotherapist, Business Psychologist, Corporate Trainer and Leadership Development Consultant specialising in emotional intelligence, conflict resolution and high-pressure performance in modern workplaces.
                  </p>
                  <p className="text-muted-foreground">
                    For more than a decade, Valentyna has supported leaders, teams and organisations to navigate complexity, improve communication, and create psychologically healthy environments where performance becomes sustainable — not costly.
                  </p>
                  <p className="text-muted-foreground">
                    Her career combines an extensive background in corporate psychology, organisational consulting and large-scale humanitarian coordination. For eight years, she worked directly with military personnel, veterans and civilians affected by war in Ukraine — leading psychosocial rehabilitation projects, crisis response programmes and trauma-informed support systems. This deep field experience shaped her unique ability to understand human behaviour under extreme pressure, rapid change and uncertainty — and translate this knowledge into practical tools for business.
                  </p>
                  <p className="text-muted-foreground">
                    Valentyna has also worked as a corporate psychologist for companies in Ukraine and the United States, supporting employee wellbeing, strengthening workplace relationships, improving psychological climate, and helping organisations maintain resilience through challenging periods — including the COVID crisis.
                  </p>
                  <p className="text-muted-foreground">
                    Across her projects, Valentyna has coordinated teams of more than 70 psychologists and social support specialists, designing processes, training systems and multi-level interventions. This gives her an exceptional ability to think both clinically and strategically — to see how human relationships, emotional dynamics and leadership behaviour directly impact business functioning, culture, decision-making and performance outcomes.
                  </p>
                  <p className="text-muted-foreground">
                    Today, Valentyna brings this depth of expertise into leadership development programmes, communication training and business psychology consulting for organisations in the UK and internationally. Her work helps leaders and teams develop relational intelligence, regulate pressure, resolve conflict constructively, and build cultures where people — and results — can truly grow.
                  </p>
                  <p className="text-muted-foreground">
                    Supporting others is not only her profession — it is her vocation. And she uses that lifelong commitment to help businesses transform the way people work together, think, decide and lead.
                  </p>
                </div>
              </div>

              {/* Qualifications */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Qualifications & Expertise</h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Award className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Qualified Psychologist</h3>
                          <p className="text-muted-foreground">
                            Specialist Diploma in Psychology from Kyiv National Linguistic University and Business Psychologist Diploma from National Pedagogical Dragomanov University. Member of the British Emotionally Focused Therapy Centre and board member of the Ukrainian Association of Emotionally Focused Psychotherapists.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <BookOpen className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Extensive Professional Training</h3>
                          <p className="text-muted-foreground">
                            Advanced training in Emotionally Focused Therapy (EFT/EFIT), trauma-focused psychotherapy, crisis counselling, and evidence-based therapeutic interventions. Specialized training in psychosocial project management and capacity building for mental health providers.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Users className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Corporate Psychology Experience</h3>
                          <p className="text-muted-foreground">
                            Since 2021, serving as Corporate Psychologist providing psychological support, training, and consultation to organisations. Previously worked as Assistant Psychologist at St Andrew's Healthcare (UK) and coordinated large-scale psychosocial programmes across multiple humanitarian projects.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Training Philosophy */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Training Philosophy</h2>      <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground">
                    My approach combines psychological expertise with practical business application. Every workshop is designed to be interactive, engaging, and immediately applicable to real workplace challenges. I believe in empowering individuals and teams with the psychological insights and tools they need to thrive in today's complex organisational environments.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    The modular structure of my training programs ensures that each organisation receives exactly what they need—no more, no less. Whether addressing conflict resolution, building emotional intelligence, or developing resilient leaders, the focus is always on sustainable, evidence-based transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to explore how psychology-based training can transform your organisation? Get in touch to discuss your needs and design a tailored program.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Get in Touch
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
