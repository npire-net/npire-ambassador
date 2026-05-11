import { Bot, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { APP_URL, EARLY_ACCESS_MAILTO } from "@/lib/site-config";

export function AmbassadorNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <a
          href={APP_URL}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
        >
          Npire
        </a>
        <span className="text-muted-foreground/40 text-sm">/</span>
        <a href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
            <Bot className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-sm tracking-tight">Ambassador</span>
        </a>
        <Badge variant="outline" className="ml-2 text-xs">Coming soon</Badge>
      </div>
      <a
        href={EARLY_ACCESS_MAILTO}
        className="inline-flex items-center gap-1.5 px-4 h-9 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Request early access
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </header>
  );
}
