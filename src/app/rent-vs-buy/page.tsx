import type { Metadata } from "next";
import Link from "next/link";
import {
  Scale,
  CalendarClock,
  Award,
  Wallet,
  Wrench,
  Truck,
  FileText,
  Gauge,
  ShieldCheck,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Rent vs. Buy: Is Spray Foam Rig Rental Right for You?",
  description:
    "An honest, situational breakdown of renting vs. buying spray foam equipment — when renting makes sense, when buying does, and the real cost variables to weigh.",
  alternates: { canonical: "/rent-vs-buy" },
};

const RENTING_REASONS = [
  {
    title: "Testing a new service line",
    description:
      "Adding spray foam to your service list without committing tens of thousands of dollars to equipment before you know how much demand actually shows up.",
  },
  {
    title: "Seasonal or one-off overflow",
    description:
      "A short stretch of demand that doesn't justify owning a second rig year-round, especially in markets with a defined busy season.",
  },
  {
    title: "Backup while your primary rig is serviced",
    description:
      "Keeping jobs moving during scheduled maintenance or an unexpected repair, without idling a crew or missing a completion date.",
  },
  {
    title: "A business not yet ready for the capital outlay",
    description:
      "New spray foam operations often aren't in a position to finance or pay cash for a rig before they've built a track record of steady bookings.",
  },
];

const BUYING_REASONS = [
  {
    title: "High, steady utilization",
    description:
      "If a rig would realistically be running most weeks of the month, ownership starts spreading its cost over enough billable jobs to make sense.",
  },
  {
    title: "Full control over maintenance and scheduling",
    description:
      "You set the service schedule, choose who works on it, and never wait on a rental provider's availability calendar to book a job.",
  },
  {
    title: "Lower cost per job past a break-even point",
    description:
      "Once utilization clears a certain threshold, the per-job cost of an owned rig typically settles below what the same job would cost in rental fees, financing considered.",
  },
  {
    title: "Consistency across a growing crew",
    description:
      "Multiple crews running the same equipment, calibrated the same way, is easier to standardize with owned rigs than with rotating rental units.",
  },
];

const COST_VARIABLES = [
  {
    icon: Wallet,
    title: "Purchase Price & Financing",
    description:
      "New rigs typically start in the tens of thousands of dollars and can run well past $100,000 depending on capacity and configuration. Financing terms, down payment, and interest rate all change the real monthly cost of ownership.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Downtime Risk",
    description:
      "Owning equipment means owning every repair bill and every day it sits in a shop instead of on a jobsite. Renting shifts most of that risk to the provider — usually at a price built into the rate.",
  },
  {
    icon: Truck,
    title: "Storage & Transport",
    description:
      "An owned rig needs somewhere secure to live between jobs and a way to move it — trailer, tow vehicle, insurance on both. Rentals typically fold delivery into the rate, but not always; ask.",
  },
  {
    icon: CalendarClock,
    title: "Rental Pricing Models",
    description:
      "Providers price rentals a few different ways — a flat day rate, a per-unit rate, or a flat block for a set window. The models aren't standardized across the market, which is exactly why it's worth asking each provider to spell theirs out (more on that in What to Check Before You Rent).",
  },
  {
    icon: FileText,
    title: "Delivery Fees",
    description:
      "Rarely included in the headline rate. Distance from the provider's yard, site access, and scheduling windows can all add cost that doesn't show up until the invoice.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Requirements Either Way",
    description:
      "Owned equipment typically needs coverage scheduled on a commercial policy. Rented equipment usually requires the renter to show proof of coverage before the provider will hand over the keys — and non-owned equipment coverage isn't always automatic on a standard policy.",
  },
];

const FAQS = [
  {
    question: "Can you rent equipment to do your own spray foam insulation as a homeowner?",
    answer:
      "Some rental providers will rent to non-contractors, but spray foam application involves real chemical-handling, ventilation, and PPE requirements — it isn't a casual DIY project. Most providers that do rent to individuals require some demonstrated familiarity with the equipment, and the insurance and liability questions on our What to Check Before You Rent page apply just as much to a one-time renter as to a contractor.",
  },
  {
    question: "Is it cheaper to rent or buy a spray foam rig?",
    answer:
      "It depends almost entirely on how many days a month the rig would actually be running. Low, occasional utilization usually favors renting — you're not carrying a six-figure asset for equipment that sits idle most weeks. High, steady utilization usually favors buying, since ownership costs spread across more billable jobs. There's no single number that's correct for every business; it's worth running your own utilization estimate before deciding.",
  },
  {
    question: "What does a spray foam rig cost to buy new?",
    answer:
      "Pricing varies widely by capacity, proportioner brand, and how the rig is configured, but new rigs commonly start in the tens of thousands of dollars and can run well past $100,000 for higher-output setups. Financing terms and any add-on equipment change the real total further.",
  },
  {
    question: "How do I know if I'd use a rented rig enough to justify buying instead?",
    answer:
      "A simple gut-check: estimate how many days a month you'd realistically have a rig on a jobsite. If that number is low and inconsistent, renting is usually the more efficient choice — you're only paying for the days you use. As that number climbs toward steady, near-weekly use, the math starts to favor ownership. It's a rough framework, not a precise formula, and your own financing costs and utilization pattern will move the line.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function RentVsBuyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <Section band="base" className="pt-20 pb-16 sm:pt-24">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Scale className="h-4 w-4" /> The Flagship Guide
          </span>
          <h1 className="mt-6 font-heading text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
            Rent vs. Buy: Is Spray Foam Rig Rental Right for You?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            There&apos;s no universally correct answer here — only the right call for where your
            business actually is right now. This page walks through the real variables so you
            can make that call with your eyes open.
          </p>
        </FadeIn>
      </Section>

      {/* FRAMING */}
      <Section band="base" className="pt-0">
        <FadeIn className="mx-auto max-w-3xl space-y-5 text-foreground/90 leading-relaxed">
          <p>
            &quot;Should I rent or buy a spray foam rig?&quot; comes up constantly, and most of
            what&apos;s written about it online comes from a rental company (that wants you to
            rent) or an equipment dealer (that wants you to buy). This page isn&apos;t either of
            those. Contractors Choice Agency is an insurance agency — we don&apos;t sell or rent
            rigs, so we don&apos;t have a stake in which way you decide.
          </p>
          <p>
            The honest answer is genuinely situational. It depends on how often you&apos;d
            actually use the equipment, how much capital you have available, how your business is
            growing, and how much control you want over maintenance and scheduling. Below are the
            variables worth weighing, in plain terms.
          </p>
        </FadeIn>
      </Section>

      {/* WHEN RENTING MAKES SENSE */}
      <Section band="tan">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            When Renting Typically Makes Sense
          </h2>
        </FadeIn>
        <StaggerChildren className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {RENTING_REASONS.map((r) => (
            <StaggerItem key={r.title}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {r.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* WHEN BUYING MAKES SENSE */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            When Buying Typically Makes Sense
          </h2>
        </FadeIn>
        <StaggerChildren className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {BUYING_REASONS.map((r) => (
            <StaggerItem key={r.title}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {r.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* REAL COST VARIABLES */}
      <Section band="accent-wash">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            The Real Cost Variables to Weigh
          </h2>
          <p className="mt-3 text-muted-foreground">
            Look past the sticker price or the day rate — these are the variables that actually
            determine total cost.
          </p>
        </FadeIn>
        <StaggerChildren className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COST_VARIABLES.map((v) => (
            <StaggerItem key={v.title}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <v.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* UTILIZATION GUT-CHECK */}
      <Section band="tan">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Gauge className="h-4 w-4" /> Rough Framework
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold text-foreground">
              A Simple Utilization Gut-Check
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Here&apos;s a general way to think about it, not a precise formula: the fewer days a
              month a rig would realistically be on a jobsite, the more renting tends to make
              financial sense. As utilization climbs toward steady, near-weekly use, the math
              tends to shift toward ownership, since the fixed costs of owning spread across more
              billable days.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              This is directional reasoning, not a calculator with a guaranteed right answer.
              Your own financing terms, storage costs, and job pipeline will move the line — but
              it&apos;s a reasonable starting point for the conversation.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-semibold text-primary">
                  1
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  Estimate your realistic monthly job count and how many days each one needs the
                  rig.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-semibold text-primary">
                  2
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  Compare that total against what a rental would cost for those same days versus
                  a rig payment for the whole month.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-semibold text-primary">
                  3
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  Factor in maintenance, storage, and financing costs on the ownership side before
                  comparing totals.
                </p>
              </li>
            </ul>
          </FadeIn>
        </div>
      </Section>

      {/* INSURANCE-MATTERS BRIDGE */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-8 shadow-sm text-center">
          <ShieldCheck className="mx-auto h-9 w-9 text-primary" />
          <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-semibold text-foreground">
            Either Way, Insurance Matters
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether you decide to rent or buy, operating spray foam equipment as a business means
            carrying the right coverage. Owned rigs typically need to be scheduled on a commercial
            policy; rented equipment often requires proof of coverage before a provider will hand
            over the keys, and a standard policy doesn&apos;t always extend to non-owned
            equipment automatically. It&apos;s worth confirming exactly what you&apos;re covered
            for before you sign anything either way.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            And if renting or buying equipment yourself isn&apos;t actually the move — hiring an
            already-equipped, insured contractor is a legitimate third option. See the CTA below.
          </p>
        </FadeIn>
      </Section>

      {/* FAQ */}
      <Section band="card">
        <FadeIn className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            Frequently Asked Questions
          </h2>
        </FadeIn>
        <FAQAccordion items={FAQS} />

        <FadeIn className="mx-auto max-w-3xl mt-12 flex flex-col sm:flex-row gap-4 justify-center text-center">
          <Link
            href="/equipment-available-to-rent"
            className="text-sm font-medium text-primary hover:underline"
          >
            See what equipment is typically available to rent →
          </Link>
          <Link
            href="/what-to-check-before-you-rent"
            className="text-sm font-medium text-primary hover:underline"
          >
            What to check before you rent a rig →
          </Link>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section band="charcoal" className="text-center">
        <FadeIn className="mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal-foreground">
            Decided the Smarter Move Is Hiring a Pro Instead?
          </h2>
          <p className="mt-4 text-charcoal-foreground/80 leading-relaxed">
            Renting and buying aren&apos;t the only options. If you&apos;d rather skip the
            equipment decision entirely, CCA can match you with a tech-forward, insured spray
            foam contractor — no cost, no obligation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/get-matched" size="lg" variant="secondary" icon={ArrowRight}>
              Get Matched
            </Button>
            <Button
              href={`tel:${PHONE_TEL}`}
              size="lg"
              variant="outline"
              className="border-charcoal-foreground/30 text-charcoal-foreground hover:border-accent hover:text-accent"
              icon={Phone}
            >
              Call {PHONE_DISPLAY}
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
