import { messages } from "@/lib/messages";

const OFFICIAL_URL = "https://aice.co.jp/";

const linkClass =
  "text-sm text-neutral-300 underline decoration-neutral-600 underline-offset-4 transition-colors hover:text-white hover:decoration-neutral-400 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900";

export function Footer() {
  const { rights, officialWebsite, privacy, terms } = messages.footer;

  return (
    <footer
      className="border-t border-neutral-800 bg-neutral-900 py-8 text-neutral-400"
      role="contentinfo"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6">
          <p className="text-sm tabular-nums text-neutral-400">{rights}</p>
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
