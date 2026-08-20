import type { Metadata } from "next";
import { Truck, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { LeadForm } from "@/components/forms/LeadForm";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, HQ_ADDRESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get Matched With a Tech-Forward, Insured Spray Foam Contractor",
  description:
    "Skip the rent-or-buy decision. Get matched with a vetted, insured spray foam contractor from the Contractors Choice Agency network — free, no obligation.",
  alternates: { canonical: "/get-matched" },
};

const STEPS = [
  { title: "You Submit", description: "A few quick details about your project and location." },
  { title: "CCA Reviews & Matches", description: "We match you with a vetted, insured spray foam contractor from our network." },
  { title: "The Contractor Contacts You", description: "You decide whether to move forward — no pressure, no obligation." },
];

const FAQS = [
  {
    question: "Is this a rental service? Can I rent a rig through Get Matched?",
    answer:
      "No. Get Matched connects you with an insured spray foam contractor who already owns and operates their own equipment. The rental-education content on this site (Rent vs. Buy, Equipment Types, What to Check) is informational only — sprayfoamrigrental.com and CCA don't rent, list, or broker equipment.",
  },
  {
    question: "Who is this for?",
    answer:
      "Property owners or businesses who've decided that hiring a pro makes more sense than renting or buying equipment themselves, and spray foam contractors looking for insurance coverage. Both are welcome to reach out.",
  },
  {
    question: "What does \"tech-forward, insured\" actually mean?",
    answer:
      "Every contractor in CCA's network carries verified insurance coverage. \"Tech-forward\" reflects that well-equipped, properly maintained rigs tend to produce more consistent results — it's not a certification, just a quality signal we look for.",
  },
  {
    question: "Does this cost anything?",
    answer:
      "No. Getting matched is free, and you're never obligated to hire any contractor we introduce you to.",
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

export default function GetMatchedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Section band="charcoal" className="pb-12">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-charcoal-foreground/10 px-4 py-1.5 text-sm font-medium text-charcoal-foreground ring-1 ring-charcoal-foreground/20">
            <Truck className="h-4 w-4 text-accent" /> Free. No obligation.
          </span>
          <h1 className="mt-6 font-heading text-4xl sm:text-5xl font-semibold text-charcoal-foreground">
            Get Matched With a Tech-Forward, Insured Spray Foam Contractor
          </h1>
          <p className="mt-5 text-charcoal-foreground/80 leading-relaxed">
            Whether renting or buying equipment doesn&apos;t make sense for you, every contractor
            in our network is licensed, insured, and takes their equipment seriously.
          </p>
        </FadeIn>
      </Section>

      <Section band="base" className="pt-0 -mt-8">
        <FadeIn className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-md">
          <LeadForm />
        </FadeIn>
      </Section>

      <Section band="tan">
        <FadeIn className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-heading text-3xl font-semibold text-foreground">What Happens Next</h2>
        </FadeIn>
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <StaggerItem key={step.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading text-xl font-semibold">
                {i + 1}
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <Section band="base">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <ul className="inline-flex flex-col gap-2 text-left">
            <li className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> License verified before you ever hear from them
            </li>
            <li className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> General liability &amp; workers&apos; comp confirmed
            </li>
            <li className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> You still make the final call — no obligation to hire
            </li>
          </ul>
        </FadeIn>
      </Section>

      <Section band="tan">
        <FadeIn className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-heading text-3xl font-semibold text-foreground">Frequently Asked Questions</h2>
        </FadeIn>
        <FAQAccordion items={FAQS} />
      </Section>

      <Section band="charcoal" className="text-center">
        <FadeIn className="mx-auto max-w-xl">
          <h2 className="font-heading text-2xl font-semibold text-charcoal-foreground">
            Prefer to talk it through first?
          </h2>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-charcoal-foreground/90 text-sm">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-accent cursor-pointer">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-accent cursor-pointer">
              <Mail className="h-4 w-4" /> {EMAIL}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {HQ_ADDRESS}
            </span>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
