import { AmbassadorNav } from "@/components/ambassador-nav";
import { AmbassadorFooter } from "@/components/ambassador-footer";

export const metadata = { title: "Privacy — Ambassador" };

export default function PrivacyPage() {
  return (
    <>
      <AmbassadorNav />
      <main className="pt-16">
        <section className="px-6 pt-24 pb-20 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: May 2026</p>
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              Npire collects minimal data necessary to operate its products. We do not sell your
              data. We do not share it with third parties except as required to operate the
              service.
            </p>
            <p>
              For questions:{" "}
              <a href="mailto:hello@npire.net" className="text-foreground hover:underline">
                hello@npire.net
              </a>
            </p>
          </div>
        </section>
      </main>
      <AmbassadorFooter />
    </>
  );
}
