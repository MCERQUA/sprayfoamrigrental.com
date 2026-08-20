import type { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardCheck,
  ShieldCheck,
  Truck,
  FileText,
  FlaskConical,
  Headset,
  Receipt,
  ArrowRight,
  Phone,
  XCircle,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CaveatCallout } from "@/components/ui/CaveatCallout";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "What to Check Before You Rent a Spray Foam Rig",
  description:
    "A neutral checklist for evaluating any spray foam equipment rental provider — insurance, delivery, rental terms, material compatibility, support, pricing, and red flags to avoid.",
  alternates: { canonical: "/what-to-check-before-you-rent" },
};

const RED_FLAGS = [
  "No proof of insurance offered when asked directly.",
  "No written rental agreement — terms explained verbally only.",
  "Vague or evasive answers about service area and delivery fees.",
  "Unclear or undocumented damage-liability terms in the agreement.",
  "No documented pre-rental equipment inspection or condition record.",
  "Can't confirm the rig is calibrated for your specific material.",
];

const FAQS = [
  {
    question: "What insurance requirements should I expect when renting a spray foam rig?",
    answer:
      "At minimum, confirm the provider carries liability coverage on the equipment itself. Just as importantly, many providers will require you, the renter, to show proof of your own insurance before they hand over the equipment — this is a real, documented pattern in the industry, not a hypothetical. Understand what you're on the hook for if the equipment is damaged, stolen, or causes a loss while it's in your possession before you sign anything.",
  },
  {
    question: "How do spray foam equipment rental companies typically price rentals?",
    answer:
      "Pricing models vary across the market — some providers charge per-unit (a flat day or week rate for the rig), some use tiered pricing that gets cheaper the longer you rent, and some quote flat time-blocks for a fixed window. None of these is more standard than the others, which is exactly why it's worth asking each provider to state their model plainly so you can compare quotes on equal terms.",
  },
  {
    question: "What should be in a spray foam equipment rental contract?",
    answer:
      "At minimum: the rental period and what happens if you need to extend it, the deposit amount and what damage triggers a charge against it, cancellation/rescheduling terms, what happens if the equipment fails mid-job, and delivery/pickup logistics with associated fees. If a provider can't produce a written agreement covering these, treat that as a red flag rather than a formality.",
  },
  {
    question: "What delivery fees should I expect when renting spray foam equipment?",
    answer:
      "Delivery and pickup fees are commonly billed separately from the base rental rate, and can vary by distance, site accessibility, and whether delivery falls outside standard business hours. There's no universal number — the honest move is to ask each provider for an itemized quote up front so delivery costs don't show up as a surprise on the final invoice.",
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

export default function WhatToCheckPage() {
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
            <ClipboardCheck className="h-4 w-4" /> Evaluation Checklist
          </span>
          <h1 className="mt-6 font-heading text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
            What to Check Before You Rent a Rig
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A neutral checklist for evaluating any spray foam equipment rental provider you&apos;re
            considering — the questions worth asking before you sign an agreement.
          </p>
        </FadeIn>
      </Section>

      {/* FRAMING */}
      <Section band="base" className="pt-0">
        <FadeIn className="mx-auto max-w-3xl">
          <CaveatCallout
            title="A Note on What This Page Is"
            description="This is a checklist for evaluating ANY rental provider you're considering — sprayfoamrigrental.com doesn't rent equipment itself. We're an educational resource published by Contractors Choice Agency, an insurance agency, so we don't have a stake in which provider you choose or whether you rent at all."
          />
        </FadeIn>
      </Section>

      {/* INSURANCE & LIABILITY */}
      <Section band="tan">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
              Insurance & Liability
            </h2>
          </div>
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm space-y-4 text-foreground/90 leading-relaxed">
            <p>
              Confirm what insurance the provider carries on the equipment itself before it ever
              leaves their yard. Just as important: ask what they require from you. It&apos;s a
              real, documented pattern in this industry that rental providers require the renter
              to show proof of their own insurance before handover — one Texas-based provider,
              for example, has this built into their standard process.
            </p>
            <p>
              This isn&apos;t a formality. If the equipment is damaged, stolen, or causes a loss
              while it&apos;s in your possession, your own business&apos;s liability exposure
              depends on exactly what coverage is in place and whose policy responds first. Get
              this in writing before you sign anything.
            </p>
            <p>
              A standard commercial auto or general liability policy doesn&apos;t automatically
              extend to non-owned equipment you&apos;re renting for a job — that&apos;s typically
              a separate coverage question. If you rent equipment regularly, it&apos;s worth a
              conversation with your own agent about whether your existing policy actually
              responds if a rented rig is damaged on your watch, rather than assuming it does.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* DELIVERY & LOGISTICS */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
              Delivery & Logistics
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                Service Area
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Confirm the provider actually covers your job site, and whether jobs outside their
                core area carry a surcharge or longer lead time. A provider that&apos;s vague
                about their coverage map is a sign to ask more, not fewer, questions.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                Delivery Fees
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ask for an itemized quote. Drop-off and pickup fees are frequently left out of the
                headline rental rate, and some providers charge separately for after-hours or
                weekend delivery windows.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                Site-Access Requirements
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Confirm power, space, and vehicle-access needs (clearance for a trailer, level
                ground) before the delivery truck shows up. A site that can&apos;t actually
                accommodate the rig&apos;s footprint is a costly discovery to make on delivery day.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* RENTAL TERMS */}
      <Section band="accent-wash">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
              Rental Terms
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="divide-y divide-border">
              <div className="p-6">
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  Minimum Rental Period
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Are you locked into a full week if the job only needs three days? Ask about
                  shorter minimums or grace periods.
                </p>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  Deposit & Damage Policy
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Confirm whether the deposit is a hold or an actual charge, and what documented
                  criteria the provider uses to assess damage on return.
                </p>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  Cancellation & Rescheduling
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Weather delays happen. Understand the penalty tiers for canceling or rescheduling
                  on short notice.
                </p>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  Equipment Failure Mid-Job
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Ask what happens if the rig fails partway through a job — is a replacement or
                  field service part of the agreement, or are you on your own? Also ask how
                  quickly a replacement unit could realistically arrive, since a same-day promise
                  and a next-day reality are two very different things when a crew is standing by.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* MATERIAL COMPATIBILITY & SUPPORT */}
      <Section band="tan">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <FlaskConical className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Material Compatibility
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Confirm the rig is calibrated for the specific material and chemistry you plan to
                use. Open-cell and closed-cell foam require different mix-ratio and pressure
                settings — a rig calibrated for one isn&apos;t automatically ready for the other.
                If you're switching materials mid-week, ask whether the provider handles the
                recalibration and flush themselves or expects you to.
              </p>
            </div>
            <div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Headset className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Support & Training
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Ask whether on-site technician support or basic operation training is included.
                This varies widely across the market — some providers include a walkthrough at
                handover, others offer none at all. If you're newer to a particular rig
                configuration, phone support during business hours isn't the same as someone
                answering at 6pm on a Saturday when a hose stops heating.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* PRICING STRUCTURE */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Receipt className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
              Pricing Structure
            </h2>
          </div>
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <p className="text-foreground/90 leading-relaxed mb-6">
              Ask every provider to clarify whether they price per-unit, by tier, or as a flat
              time-block — quotes aren&apos;t comparable across providers until you know which
              model each one is using.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="rounded-lg bg-secondary/60 p-5">
                <div className="font-heading font-semibold text-foreground">Per-Unit Rates</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  A flat day or week rate for the rig itself.
                </div>
              </div>
              <div className="rounded-lg bg-secondary/60 p-5">
                <div className="font-heading font-semibold text-foreground">Tiered Pricing</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Rate steps down the longer you keep the equipment.
                </div>
              </div>
              <div className="rounded-lg bg-secondary/60 p-5">
                <div className="font-heading font-semibold text-foreground">
                  Flat Time-Blocks
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  A fixed fee for a set rental window.
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* RED FLAGS CHECKLIST */}
      <Section band="card">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-destructive/10">
              <XCircle className="h-6 w-6 text-destructive" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
              Red Flags Checklist
            </h2>
          </div>
          <div className="rounded-xl border border-destructive/25 bg-destructive/5 p-8">
            <p className="text-sm text-muted-foreground mb-6">
              Treat any of these as a reason to keep looking:
            </p>
            <ul className="space-y-4">
              {RED_FLAGS.map((flag) => (
                <li key={flag} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 shrink-0 mt-0.5 text-destructive" />
                  <span className="text-sm text-foreground/90 leading-relaxed">{flag}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Section>

      {/* FAQ */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            Frequently Asked Questions
          </h2>
        </FadeIn>
        <FAQAccordion items={FAQS} />

        <FadeIn className="mx-auto max-w-3xl mt-12 flex flex-col sm:flex-row gap-4 justify-center text-center">
          <Link href="/rent-vs-buy" className="text-sm font-medium text-primary hover:underline">
            Not sure if renting is right for you? See the Rent vs. Buy guide →
          </Link>
          <Link
            href="/equipment-available-to-rent"
            className="text-sm font-medium text-primary hover:underline"
          >
            See what equipment is typically available to rent →
          </Link>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section band="charcoal" className="text-center">
        <FadeIn className="mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal-foreground">
            Evaluating Rental Providers Feels Like More Risk Than You Want?
          </h2>
          <p className="mt-4 text-charcoal-foreground/80 leading-relaxed">
            Get matched with a tech-forward, insured spray foam contractor instead — skip the
            rental research entirely and hand the job to a pro. No cost, no obligation.
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
