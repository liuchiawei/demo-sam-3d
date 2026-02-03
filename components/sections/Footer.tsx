import { messages } from "@/lib/messages";

const OFFICIAL_URL = "https://aice.co.jp/";

const linkClass =
  "text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground/40 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Footer() {
  const { rights, officialWebsite, privacy, terms } = messages.footer;

  return (
    <footer
      className="border-t border-border bg-card py-8 text-muted-foreground"
      role="contentinfo"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6">
          <p className="text-sm tabular-nums text-muted-foreground">{rights}</p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1"
            aria-label="Footer navigation"
          >
            <a
              href={OFFICIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
              aria-label={`${officialWebsite}（另開新視窗）`}
            >
              {officialWebsite}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
