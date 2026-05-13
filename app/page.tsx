import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Keyboard, Mic2 } from "lucide-react";
import { AmbassadorNav } from "@/components/ambassador-nav";
import { AmbassadorFooter } from "@/components/ambassador-footer";
import { EARLY_ACCESS_MAILTO } from "@/lib/site-config";

// ── Data ────────────────────────────────────────────────────────────────

const HOW_STEPS = [
  {
    step: "01",
    title: "Ambassador joins the call.",
    body: "It connects to your Meet, Zoom, or Teams session like any other participant. Your name. Your presence. No one knows the difference.",
  },
  {
    step: "02",
    title: "It listens and thinks.",
    body: "In real time, Ambassador processes everything being said and surfaces suggested responses to your phone — ranked, contextual, ready to deliver the moment you approve them.",
  },
  {
    step: "03",
    title: "You direct. Three ways.",
    body: null,
    controls: [
      {
        icon: CheckCircle,
        label: "Approve",
        detail:
          "a suggested response and Ambassador delivers it in your voice.",
      },
      {
        icon: Keyboard,
        label: "Type",
        detail:
          "exactly what you want said. Ambassador speaks your words, not its interpretation of them.",
      },
      {
        icon: Mic2,
        label: "Take over",
        detail:
          "at any moment. Unmute yourself, speak directly, and Ambassador steps back. One tap to hand control back when you're done.",
      },
    ],
  },
];

const USE_CASES = [
  {
    title: "The recurring meeting you're required to attend but rarely need to speak in.",
    body: "Pipeline reviews. Vendor syncs. Weekly standups where your team just needs to know you're available. Ambassador handles presence. You handle the work.",
  },
  {
    title: "The overlap problem — two critical meetings, same time slot.",
    body: "You can only be in one place. Your proxy can be in the other. For the first time, your calendar doesn't force you to choose.",
  },
  {
    title: "The question that always lands on you.",
    body: "Every organization has someone everyone routes decisions through. Ambassador lets that person stay reachable — without staying on the call. When it matters, you type the answer. When it really matters, you take over.",
  },
  {
    title: "The meeting that needs a face but not your full attention.",
    body: "Status updates, introductory calls, recurring check-ins. Ambassador is engaged, responsive, and on-brand. You're building something that matters.",
  },
  {
    title: "The moment that needs your actual voice.",
    body: "Sometimes a conversation turns in a direction that needs the real you. One tap and you're live. Ambassador doesn't trap you behind the proxy — it just handles everything until you decide to step in.",
  },
];

// ── Page ────────────────────────────────────────────────────────────────

export default function AmbassadorPage() {
  return (
    <>
      <AmbassadorNav />
      <main className="pt-16">

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="pt-24 pb-20 px-6 text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6">Coming soon</Badge>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Your voice. Your judgment.
            <br />
            <span className="text-muted-foreground">Without your time.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Ambassador is an AI meeting proxy that joins your calls, listens in real time, and
            speaks in a synthesized voice calibrated to sound like you — while you direct every
            response from your phone. Approve a suggestion, type exactly what you want said, or
            take over and speak yourself. The call moves. You stay in control.
          </p>
          <p className="text-2xl font-medium text-muted-foreground/60 mb-10 italic">
            You&apos;re present. You&apos;re responsive. You&apos;re just not there.
          </p>
          <a
            href={EARLY_ACCESS_MAILTO}
            className="inline-flex items-center justify-center gap-2 px-6 h-11 text-base font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Request early access
            <ArrowRight className="h-4 w-4" />
          </a>
        </section>

        {/* ── How it works ───────────────────────────────────────────── */}
        <section id="how-it-works" className="py-24 px-6 bg-card/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">How it works</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Three steps. One phone. Zero context switching.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {HOW_STEPS.map((step) => (
                <div key={step.step} className="space-y-4">
                  <div className="text-4xl font-bold text-muted-foreground/30 font-mono">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  {step.body && (
                    <p className="text-xl text-muted-foreground leading-relaxed">{step.body}</p>
                  )}
                  {step.controls && (
                    <div className="space-y-3 mt-2">
                      {step.controls.map((ctrl) => (
                        <div key={ctrl.label} className="flex items-start gap-3">
                          <div className="mt-0.5 w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                            <ctrl.icon className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <p className="text-xl text-muted-foreground leading-relaxed">
                            <span className="font-semibold text-foreground">{ctrl.label}</span>
                            {" — "}{ctrl.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-xl text-muted-foreground max-w-xl mx-auto">
              Every word that comes out of that call is authorized by you. Nothing goes out that
              you didn&apos;t greenlight.
            </p>
          </div>
        </section>

        {/* ── Use cases ──────────────────────────────────────────────── */}
        <section id="use-cases" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Use cases</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Built for operators who are always on.
              </h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                The people who are needed in every room — and can finally stop being trapped in all of them.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
              {USE_CASES.map((uc) => (
                <Card key={uc.title} className="group hover:border-border/80 transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-semibold leading-snug">{uc.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl text-muted-foreground leading-relaxed">{uc.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Organizational case ────────────────────────────────────── */}
        <section className="py-24 px-6 bg-card/30">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="mb-2">The organizational case</Badge>
            <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Leadership bottlenecks cost organizations more than they measure. When decisions
              stall because one person is in another meeting, the cost isn&apos;t in the calendar
              — it&apos;s in the delay, the detour, the team waiting for a green light.
            </blockquote>
            <p className="text-lg font-semibold">
              Ambassador doesn&apos;t replace leadership. It removes the logistics tax on it.
            </p>
          </div>
        </section>

        {/* ── Always in control ──────────────────────────────────────── */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4">You&apos;re always in control</Badge>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Ambassador is a tool, not an autopilot. You see everything being said. You approve
              every response before it&apos;s spoken. You can type your exact words at any moment,
              or step in directly when the situation demands it. The proxy handles the logistics
              of presence. The decisions stay with you.
            </p>
          </div>
        </section>

        {/* ── Early access CTA ───────────────────────────────────────── */}
        <section className="py-32 px-6 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Join the early access list
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Ambassador is in development. We&apos;re onboarding a small group of operators and
            team leads to shape the product before public launch.
          </p>
          <a
            href={EARLY_ACCESS_MAILTO}
            className="inline-flex items-center justify-center gap-2 px-6 h-11 text-base font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Request early access
            <ArrowRight className="h-4 w-4" />
          </a>
        </section>

      </main>
      <AmbassadorFooter />
    </>
  );
}
