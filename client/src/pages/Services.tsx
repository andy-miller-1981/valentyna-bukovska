import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Scale, Users, MessageSquare, Briefcase } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Scale,
      title: "Mediation & Negotiation",
      description: "Professional mediation services to resolve workplace conflicts, facilitate difficult conversations, and support constructive negotiation processes.",
      details: [
        "Workplace conflict resolution",
        "Team dispute mediation",
        "Negotiation facilitation",
        "Restorative conversations",
        "Conflict prevention strategies"
      ]
    },
    {
      icon: Users,
      title: "Mediation Training",
      description: "Comprehensive training programmes to develop internal mediation capabilities within your organisation, empowering leaders and HR professionals with conflict resolution skills.",
      details: [
        "Mediation skills development",
        "Conflict resolution techniques",
        "Facilitation training",
        "Restorative practice methods",
        "Certification pathways"
      ]
    },
    {
      icon: MessageSquare,
      title: "Business Process Improvement",
      description: "Psychological consultation to enhance organisational effectiveness through improved communication systems, team dynamics, and collaborative processes.",
      details: [
        "Communication system design",
        "Team building interventions",
        "Collaboration process optimisation",
        "Organisational culture development",
        "Change management support"
      ]
    },
    {
      icon: Briefcase,
      title: "Psychological Interviewing & HR Support",
      description: "Expert psychological assessment and feedback services to support recruitment, talent development, and leadership selection processes.",
      details: [
        "Candidate psychological assessment",
        "Competency-based interviewing",
        "Leadership potential evaluation",
        "Psychological feedback reports for HR and senior teams",
        "Talent development recommendations"
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Services
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Beyond training programmes, Valentyna offers specialist psychological services to support your organisation's unique challenges and development goals.
            </p>
            <p className="text-lg text-muted-foreground">
              Services can be structured as one-off interventions or as part of a regular weekly contract, providing ongoing psychological support tailored to your organisational needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-muted-foreground mb-3">Key Areas:</p>
                      <ul className="space-y-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Options */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Flexible Engagement Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">One-Off Interventions</CardTitle>
                  <CardDescription>
                    Targeted support for specific challenges or projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Single mediation sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Project-based consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Recruitment assessment support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Team intervention workshops</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Regular Weekly Contracts</CardTitle>
                  <CardDescription>
                    Ongoing psychological support and organisational development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Embedded psychological consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Continuous HR support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Leadership coaching and development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Organisational culture transformation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Discuss Your Needs
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Whether you need one-off support or ongoing psychological consultation, let's explore how these services can address your organisation's specific challenges.
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
