import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import heroGrill from "@/assets/real-skewers-grill.jpg";
import menuGyros from "@/assets/real-gyros-grill.jpg";
import menuSouvlaki from "@/assets/real-souvlaki.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Σουβλάκι ΠΕΠΑ • Ένα Και Μοναδικό" },
      {
        name: "description",
        content:
          "ΠΕ-ΠΑ — charcoal-grilled souvlaki and pita in the heart of Trikala, Greece. Fresh off the grill, open late.",
      },
      { property: "og:title", content: "ΠΕ-ΠΑ · Souvlaki & Grill — Trikala" },
      {
        property: "og:description",
        content:
          "Charcoal-grilled souvlaki and pita in the heart of Trikala, Greece.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  const [el, setEl] = useState(true);
  const t = (en: string, gr: string) => (el ? gr : en);
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      {/* NAV */}
      <header className="glass-nav sticky top-0 z-50 border-b border-white/10">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-5 py-3">
          <span className="font-display text-2xl tracking-tight text-cream">
            ΠΕ-ΠΑ
          </span>
          <nav className="flex items-center gap-5 font-mono text-xs uppercase tracking-widest text-cream/70">
            <Link to="/menu" className="transition-colors hover:text-ember">
              {t("Menu", "Μενού")}
            </Link>
            <a href="#visit" className="transition-colors hover:text-ember">
              {t("Visit", "Επίσκεψη")}
            </a>
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

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroGrill}
            alt={t("Charcoal-grilled souvlaki skewers over glowing embers", "Σουβλάκια που ψήνονται στα κάρβουνα")}
            width={1024}
            height={1536}
            className="h-[560px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/10" />
          <div className="animate-ember absolute -bottom-16 -left-10 size-64 rounded-full bg-ember/30 blur-3xl" />
          <div className="animate-ember absolute right-0 top-24 size-40 rounded-full bg-primary/25 blur-3xl [animation-delay:1200ms]" />
        </div>
        <div className="relative mx-auto max-w-2xl px-5 pb-16 pt-24">
          <p className="animate-fade font-mono text-xs uppercase tracking-[0.3em] text-ember">
            {t("Trikala · Greece", "Τρίκαλα · Ελλάδα")}
          </p>
          <h1 className="mt-3 font-display text-[92px] leading-[0.85] tracking-tighter text-cream animate-rise">
            ΠΕ-ΠΑ
          </h1>
          <p className="mt-5 max-w-[30ch] animate-rise text-lg text-cream/85 text-pretty [animation-delay:120ms]">
            {t(
              "Traditional souvlaki & Trikala's one-of-a-kind charcoal-grilled gyros — in the central square.",
              "Παραδοσιακό σουβλάκι & γύρος στα κάρβουνα — στην κεντρική πλατεία των Τρικάλων.",
            )}
          </p>
          <div className="mt-7 flex flex-wrap gap-3 animate-rise [animation-delay:240ms]">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-sm text-primary-foreground ring-1 ring-white/10 transition-transform hover:-translate-y-0.5"
            >
              {t("See the menu", "Δες το μενού")}
            </Link>
            <a
              href="#visit"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 font-medium text-sm text-cream ring-1 ring-white/15"
            >
              {t("Find us", "Βρες μας")}
            </a>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="mx-auto max-w-2xl px-5 py-14">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-4xl tracking-tight text-ember">{t("The Menu", "Το Μενού")}</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            {t("Charcoal-grilled", "Στα κάρβουνα")}
          </span>
        </div>
        <div className="space-y-4">
          <MenuItem
            image={menuGyros}
            alt="Gyros grilled on charcoal wrapped in pita"
            name={t("Charcoal-grilled gyros", "Γύρος Σε Πίτα")}
            price="TOP 🔥"
            desc={t("Our one-of-a-kind gyros, grilled the traditional way over charcoal.", "Δύο πίτες με ό,τι επιθυμήστε μεσα ")}
          />
          <MenuItem
            image={menuSouvlaki}
            alt="Pork souvlaki skewers on fresh bread"
            name={t("Pork souvlaki", "Σουβλάκι Χοιρινό")}
            price="TOP 🔥"
            desc={t("Fresh local pork, marinated in our own herbs, in pita or bread roll.", "Φρέσκο ντόπιο χοιρινό, μαριναρισμένο με τα δικά μας μυρωδικά, σε πίτα ή ψωμάκι.")}
          />
          <MenuItem
            name={t("Chicken souvlaki", "Σουβλάκι Κοτόπουλο")}
            price={t("Classic", "Κλασικό")}
            desc={t("Juicy chicken from local farms, grilled with care.", "Ζουμερό κοτόπουλο από ντόπιες φάρμες, ψημένο με μεράκι.")}
            tagClass="text-charcoal"
          />
          <MenuItem
            name={t("Tostia", "Τοστιά")}
            price={t("Special", "Ξεχωριστό")}
            desc={t("Two pitas topped with kasseri cheese.", "Δύο πίτες με κασέρι.")}
            tagClass="text-charcoal"
          />
          <MenuItem
            name={t("Sausage", "Λουκάνικο")}
            price={t("Classic", "Κλασικό")}
            desc={t("Traditional village sausage, grilled over charcoal.", "Παραδοσιακό χωριάτικο λουκάνικο, ψημένο στα κάρβουνα.")}
            tagClass="text-charcoal"
          />
        </div>
        <p className="mt-5 text-sm text-muted">
          {t("Takeaway only. Call or come by to order.", "Μόνο παραλαβή. Πάρε τηλέφωνο ή πέρασε από το μαγαζί για παραγγελία.")}
        </p>

        <div className="mt-12 border-t border-foreground/10 pt-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="font-display text-4xl tracking-tight text-ember">
              {t("What people say", "Τι λέει ο κόσμος")}
            </h2>
            <span className="shrink-0 font-mono text-xs text-muted">Google Maps · 4.2/5</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <ReviewQuote
              quote={t(
                "One of the greatest souvlaki places in Trikala. The prices are reasonable — just go eat there and you'll be satisfied.",
                "Ένα από τα καλύτερα σουβλατζίδικα στα Τρίκαλα. Οι τιμές είναι λογικές — πήγαινε να φας και θα μείνεις ευχαριστημένος.",
              )}
            />
            <ReviewQuote
              quote={t(
                "Great place with amazing food — very authentic, tasty and affordable.",
                "Υπέροχο μέρος με καταπληκτικό φαγητό — πολύ αυθεντικό, νόστιμο και οικονομικό.",
              )}
            />
            <ReviewQuote
              quote={t(
                "The best fast-food gyros I've had. Tender chicken, delicious mayo and friendly staff.",
                "Ο καλύτερος γύρος που έχω φάει. Τρυφερό κοτόπουλο, υπέροχη μαγιονέζα και φιλικό προσωπικό.",
              )}
            />
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="mx-auto max-w-2xl px-5 py-14">
        <h2 className="mb-6 font-display text-4xl tracking-tight text-ember">{t("Visit", "Επίσκεψη")}</h2>
        <div className="grid gap-4">
          <iframe
            title="ΠΕ-ΠΑ on Google Maps"
            src="https://www.google.com/maps?q=%CE%A3%CE%BF%CF%85%CE%B2%CE%BB%CE%AC%CE%BA%CE%B9+%CE%A0%CE%B5%CE%A0%CE%B1,+25%CE%B7%CF%82+%CE%9C%CE%B1%CF%81%CF%84%CE%AF%CE%BF%CF%85+1,+%CE%A4%CF%81%CE%AF%CE%BA%CE%B1%CE%BB%CE%B1&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-[4/3] w-full rounded-2xl border-0"
          />
          <div className="glass rounded-2xl p-5 ring-1 ring-white/10">
            <h3 className="font-display text-2xl tracking-tight text-cream">
              {t("Central Square", "Κεντρική Πλατεία")}
            </h3>
            <p className="mt-3 text-cream">
              {t("1, 25is Martiou Street, Trikala 421 00", "25ης Μαρτίου 1, Τρίκαλα 421 00")}
            </p>
            <p className="mt-1 text-sm text-cream/60">
              {t("On the central square, next to Sarafis, by the river.", "Στην κεντρική πλατεία, δίπλα στο Σαράφη, κοντά στο ποτάμι.")}
            </p>
            <div className="mt-5 space-y-2 border-t border-white/10 pt-5">
              <p className="font-mono text-xs uppercase tracking-widest text-cream/50">
                {t("Contact Phones", "Τηλέφωνα Επικοινωνίας")}
              </p>
              <div className="font-mono text-sm">
                <a href="tel:+302431030302" className="block text-cream hover:underline">
                  2431 030302
                </a>
              </div>
            </div>
            <div className="mt-5 space-y-1 border-t border-white/10 pt-5 font-mono text-xs text-cream/70">
                <p className="font-mono text-xs uppercase tracking-widest text-cream/50 mb-2">
                  {t("Opening Hours", "Ωράριο")}
                </p>
                <p className="flex justify-between"><span>{t("Mon – Thu", "Δευ – Πέμ")}</span><span>{t("10:00 AM – 01:00 AM", "10:00 ΠΜ – 01:00 ΜΜ")}</span></p>
                <p className="flex justify-between"><span>{t("Fri", "Παρ")}</span><span>{t("10:00 AM – 03:00 AM", "10:00 ΠΜ – 03:00 ΜΜ")}</span></p>
                <p className="flex justify-between"><span>{t("Sat", "Σάβ")}</span><span>{t("11:45 AM – 03:00 AM", "11:45 ΠΜ – 03:00 ΜΜ")}</span></p>
                <p className="flex justify-between"><span>{t("Sun", "Κυρ")}</span><span>{t("11:00 AM – 05:30 PM", "11:00 ΠΜ – 05:30 ΜΜ")}</span></p>
                <p className="text-[0.65rem] text-cream/50">{t("only in December", "μόνο τον Δεκέμβριο")}</p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=%CE%A3%CE%BF%CF%85%CE%B2%CE%BB%CE%AC%CE%BA%CE%B9+%CE%A0%CE%B5%CE%A0%CE%B1+%CE%A4%CF%81%CE%AF%CE%BA%CE%B1%CE%BB%CE%B1"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              {t("Directions", "Οδηγίες")}
            </a>
          </div>
        </div>
      </section>
      <p className="mx-auto max-w-2xl px-5 pb-8 text-center text-xs font-normal text-muted">
        "{t("Petros grills, Pavlos serves!!", "Πέτρος Ψήνει, Πάυλος Δίνει!!")}"
      </p>


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
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href="https://www.facebook.com/pages/Σουβλάκι-ΠεΠα/118480514967032"
              target="_blank"
              rel="noreferrer"
              className="text-cream/80 transition-colors hover:text-ember"
            >
              Facebook
            </a>
            <a
              href="mailto:souvlakipepa@gmail.com"
              className="text-cream/80 transition-colors hover:text-ember"
            >
              {t("Email", "Email")}
            </a>
            <a
              href="tel:+302431030302"
              className="text-cream/80 transition-colors hover:text-ember"
            >
              {t("Call", "Κλήση")}
            </a>
          </div>
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

function MenuItem({
  image,
  alt,
  name,
  price,
  desc,
  tagClass = "text-ember",
}: {
  image?: string;
  alt?: string;
  name: string;
  price: string;
  desc: string;
  tagClass?: string;
}) {
  return (
    <div className="glass flex items-center gap-4 rounded-2xl p-3 ring-1 ring-white/10">
      {image ? (
        <img
          src={image}
          alt={alt ?? ""}
          width={96}
          height={96}
          loading="lazy"
          className="size-24 shrink-0 rounded-xl object-cover"
        />
      ) : null}
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl tracking-tight text-ember-amber">
            {name}
          </h3>
          <span className={`font-mono text-sm ${tagClass}`}>{price}</span>
        </div>
        <p className="mt-1 text-sm text-cream/60 text-pretty">{desc}</p>
      </div>
    </div>
  );
}

function ReviewQuote({ quote }: { quote: string }) {
  return (
    <blockquote className="glass flex min-h-48 flex-col rounded-2xl p-5 ring-1 ring-white/10">
      <span className="font-display text-4xl leading-none text-ember" aria-hidden="true">
        “
      </span>
      <p className="mt-2 flex-1 text-sm leading-6 text-cream/80 text-pretty">{quote}</p>
      <div className="mt-5 font-mono text-xs tracking-widest text-ember" aria-label="5 out of 5 stars">
        ★★★★★
      </div>
    </blockquote>
  );
}
