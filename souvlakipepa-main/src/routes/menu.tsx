import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Το Μενού · Σουβλάκι ΠΕΠΑ" },
      {
        name: "description",
        content:
          "Ο κατάλογος του ΠΕ-ΠΑ: γύρος στα κάρβουνα, σουβλάκι, τοστιά, λουκάνικο — στα Τρίκαλα.",
      },
      { property: "og:title", content: "Το Μενού · Σουβλάκι ΠΕΠΑ" },
      {
        property: "og:description",
        content:
          "Charcoal-grilled souvlaki, gyros, tostia and sausage — the full ΠΕ-ΠΑ menu in Trikala.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function MenuPage() {
  const [el, setEl] = useState(true);
  const t = (en: string, gr: string) => (el ? gr : en);

  const sections = [
    {
      title: t("On the skewer", "Σουβλάκια"),
      items: [
        { name: t("Pork souvlaki", "Σουβλάκι Χοιρινό"), price: "2,00 €", top: true },
        { name: t("Chicken souvlaki", "Σουβλάκι Κοτόπουλο"), price: "2,00 €" },
        { name: t("Sausage", "Λουκάνικο"), price: "2,00 €" },
      ],
    },
    {
      title: t("Souvlaki in pita", "Σουβλάκι σε πίτα"),
      items: [
        { name: t("Pork souvlaki in pita", "Σουβλάκι χοιρινό σε πίτα"), price: "4,00 €", top: true },
        { name: t("Chicken souvlaki in pita", "Σουβλάκι κοτόπουλο σε πίτα"), price: "4,00 €" },
        { name: t("Sausage in pita", "Λουκάνικο σε πίτα"), price: "4,00 €" },
      ],
    },
    {
      title: t("Pitas", "Πίτες"),
      items: [
        { name: t("Gyros in pita", "Γύρος σε πίτα"), price: "4,00 €", top: true },
        { name: t("Gyros in pita double", "Γύρος σε πίτα διπλός"), price: "4,50 €" },
        { name: t("Gyros in bread roll", "Γύρος σε ψωμάκι"), price: "4,50 €" },
        { name: t("Gyros portion", "Γύρος μερίδα"), price: "8,50 €" },
        { name: t("Tostia", "Τόστια"), price: "5,50 €", top: true },
      ],
    },
    {
      title: t("Extras", "Έξτρα"),
      items: [
        { name: t("Extra sauce small", "Έξτρα σως μικρό"), price: "0,50 €" },
        { name: t("Extra sauce large", "Έξτρα σως μεγάλο"), price: "1,00 €" },
        { name: t("Fries portion", "Πατατές μερίδα"), price: "3,00 €" },
      ],
    },
    {
      title: t("Drinks", "Ροφήματα"),
      items: [
        { name: t("Soft drink 330ml", "Αναψυκτικό 330ml"), price: "1,50 €" },
        { name: t("Soft drink 550ml", "Αναψυκτικό 550ml"), price: "2,00 €" },
        { name: t("Beer 330ml", "Μπύρα 330ml"), price: "2,00 €" },
        { name: t("Water 0.5l", "Νερό 0,5l"), price: "0,50 €" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      {/* NAV */}
      <header className="glass-nav sticky top-0 z-50 border-b border-white/10">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-5 py-3">
          <Link to="/" className="font-display text-2xl tracking-tight text-cream">
            ΠΕ-ΠΑ
          </Link>
          <nav className="flex items-center gap-5 font-mono text-xs uppercase tracking-widest text-cream/70">
            <Link
              to="/menu"
              activeProps={{ className: "text-ember" }}
              className="transition-colors hover:text-ember"
            >
              {t("Menu", "Μενού")}
            </Link>
            <Link
              to="/"
              className="transition-colors hover:text-ember"
            >
              {t("Visit", "Επίσκεψη")}
            </Link>
            <button
              type="button"
              onClick={() => setEl(!el)}
              aria-label={el ? "Translate to English" : "Μετάφραση στα Ελληνικά"}
              className="flex items-center gap-1.5 rounded-full px-2 py-1 ring-1 ring-white/20 transition-colors hover:text-ember"
            >
              {el ? (
                <span className="text-base leading-none">🇬🇧</span>
              ) : (
                <svg viewBox="0 0 27 18" className="h-3.5 w-5 rounded-[2px]" aria-hidden>
                  <rect width="27" height="18" fill="#0D5EAF" />
                  {[1, 3, 5, 7].map((i) => (
                    <rect key={i} y={i * 2} width="27" height="2" fill="#fff" />
                  ))}
                  <rect width="10" height="10" fill="#0D5EAF" />
                  <rect x="4" width="2" height="10" fill="#fff" />
                  <rect y="4" width="10" height="2" fill="#fff" />
                </svg>
              )}
              <span className="normal-case tracking-normal text-[10px]">
                {el ? "Translate to English" : "Μετάφραση στα Ελληνικά"}
              </span>
            </button>
          </nav>
        </div>
      </header>

      {/* MENU — TEXT ONLY WITH PRICES */}
      <section className="mx-auto max-w-2xl px-5 py-14">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-4xl tracking-tight text-ember">{t("The Menu", "Το Μενού")}</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            {t("Charcoal-grilled", "Στα κάρβουνα")}
          </span>
        </div>
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-ember">
                {s.title}
              </h3>
              <div className="divide-y divide-white/10">
                {s.items.map((it) => (
                  <div key={it.name} className="flex items-baseline justify-between gap-3 py-3">
                    <span className="flex items-baseline gap-2">
                      <span className="font-display text-xl tracking-tight text-foreground">
                        {it.name}
                      </span>
                      {it.top && (
                        <span className="font-mono text-xs font-bold text-ember">TOP 🔥</span>
                      )}
                    </span>
                    <span className="font-mono text-sm text-foreground/80">{it.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          {t(
            "Takeaway only. Call or come by to order.",
            "Μόνο παραλαβή. Πάρε τηλέφωνο ή πέρασε από το μαγαζί για παραγγελία.",
          )}
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-sm text-primary-foreground ring-1 ring-white/10 transition-transform hover:-translate-y-0.5"
        >
          {t("Back to home", "Επιστροφή")}
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal px-5 py-12 text-cream">
        <div className="mx-auto max-w-2xl">
          <div className="font-display text-5xl tracking-tighter">ΠΕ-ΠΑ</div>
          <p className="mt-3 max-w-[34ch] text-sm text-cream/60 text-pretty">
            {t(
              "Traditional charcoal-grilled souvlaki · Trikala Central Square.",
              "Παραδοσιακό σουβλάκι στα κάρβουνα · Κεντρική Πλατεία Τρικάλων.",
            )}
          </p>
          <div className="mt-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-cream/40">
            <p>
              {t("© 2026 ΠΕ-ΠΑ · 1, 25is Martiou Street · Trikala", "© 2026 ΠΕ-ΠΑ · 25ης Μαρτίου 1 · Τρίκαλα")}
            </p>
            <span className="rounded-full bg-white/5 px-2 py-1 text-ember ring-1 ring-white/10">
              ★ Google Maps 4.2/5
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
