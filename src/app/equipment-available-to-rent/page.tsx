import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Gauge,
  Droplet,
  Thermometer,
  Zap,
  Snowflake,
  Flame,
  PackageCheck,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { TechCard } from "@/components/ui/TechCard";

export const metadata: Metadata = {
  title: "What Equipment Is Typically Available to Rent",
  description:
    "A neutral breakdown of spray foam rig equipment — proportioner, spray gun, heated hose, generator, and materials — and what's usually bundled vs. rented separately.",
  alternates: { canonical: "/equipment-available-to-rent" },
};

const COMPONENTS = [
  {
    icon: Gauge,
    title: "Proportioner",
    description:
      "The core metering and heating unit. It draws the two liquid chemical components from separate drums, heats and pressurizes each, and mixes them in a precise ratio before they reach the hose. Output rating (how much material it can push per minute) is what determines whether a rental unit can keep up with a given job size — a unit sized for small residential work will bottleneck a large commercial pour. Ask a rental provider for the unit's rated output, not just its brand name, before assuming it fits your job.",
    image: "/images/proportioner-closeup.jpg",
    alt: "Close-up of a spray foam proportioner unit",
  },
  {
    icon: Droplet,
    title: "Spray Gun",
    description:
      "The application tool where the two chemical components finally combine and get sprayed onto the surface. Gun type and the condition of its internal mixing chamber directly affect spray pattern and finish quality — a poorly maintained rental gun can produce uneven coverage even if the proportioner behind it is dialed in correctly. Tip size also affects output rate, so the gun that ships with a rental unit should match the job's expected pace, not just its chemistry.",
    image: "/images/spray-gun-application.jpg",
    alt: "Spray gun applying spray foam insulation",
  },
  {
    icon: Thermometer,
    title: "Heated Hose",
    description:
      "Runs the two chemical components from the proportioner to the gun, keeping both lines at a consistent, matched temperature over the length of the run. Temperature control along the hose matters because the chemistry only reacts correctly within a specific range — a cold spot anywhere along a hose run can throw off the mix at the tip. Rental hose lengths vary by provider and job type; a shorter standard length may mean staging the rig closer to the work than you'd planned, so it's worth confirming length before delivery day.",
    image: "/images/heated-hose-coil.jpg",
    alt: "Coiled heated hose used in spray foam rigs",
  },
  {
    icon: Zap,
    title: "Generator / Power Requirements",
    description:
      "Most rigs run on an onboard generator since the proportioner's heaters and pumps need stable, sustained power, often at jobsites with no other electricity available. Rigs are typically either electric-powered (needing a suitable on-site power hookup) or gas/generator-powered (self-contained but requiring fuel logistics) — which setup a rental provider offers affects where and how the rig can actually be used. If a site has no reliable power source, confirm the rental unit is genuinely self-contained before it's too late to swap.",
    image: "/images/generator-power-unit.jpg",
    alt: "Generator power unit for a spray foam rig",
  },
];

const MATERIAL_TYPES = [
  {
    icon: Flame,
    title: "Closed-Cell Foam",
    description:
      "Denser, higher R-value per inch, and adds structural rigidity. Commonly used where moisture resistance and a vapor barrier matter — roof decks, rim joists, below-grade applications. Requires equipment calibrated for its specific mix ratio and pressure requirements, and its higher density generally means a proportioner working harder per pound sprayed than it would on open-cell material.",
  },
  {
    icon: Snowflake,
    title: "Open-Cell Foam",
    description:
      "Lighter, more flexible, and typically lower cost per board foot. Common in interior wall cavities and attics where sound dampening and air sealing are the priority over vapor-barrier performance. Different chemistry means different calibration than closed-cell — a rig set up for one isn't automatically ready for the other, and switching a proportioner between the two materials mid-week without proper flushing and recalibration is a common source of off-ratio foam.",
  },
];

export default function EquipmentAvailablePage() {
  return (
    <>
      {/* HERO */}
      <Section band="base" className="pt-20 pb-16 sm:pt-24">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Layers className="h-4 w-4" /> Equipment Education
          </span>
          <h1 className="mt-6 font-heading text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
            What Equipment Is Typically Available to Rent
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A plain, vendor-neutral breakdown of what a spray foam &quot;rig&quot; actually
            consists of — so you know what you&apos;re evaluating before you call a rental
            provider.
          </p>
        </FadeIn>
      </Section>

      {/* WHAT A RIG ACTUALLY IS */}
      <Section band="tan">
        <FadeIn className="mx-auto max-w-3xl space-y-5 text-foreground/90 leading-relaxed">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
            What a Rig Actually Is
          </h2>
          <p>
            Most people searching for &quot;spray foam equipment rental&quot; picture a single
            machine. In reality, a rig is a connected system of components, usually mounted in a
            trailer or box truck: a power source, a proportioner, heated hoses, and a spray gun,
            all working together to turn two liquid chemical components into sprayed foam.
          </p>
          <p>
            When a rental provider quotes &quot;a rig,&quot; what&apos;s actually included in
            that quote can vary — which is exactly why it&apos;s worth understanding each piece
            individually before you compare providers.
          </p>
          <p>
            Rigs also come in different output tiers. A unit built for occasional residential
            attic and crawl-space work is sized very differently than one built for daily
            commercial roofing and large-envelope jobs — and a provider&apos;s standard rental
            unit isn&apos;t automatically the right size for every job. Knowing what each
            component does makes it possible to ask a provider the right sizing questions instead
            of just accepting whatever&apos;s available that week.
          </p>
        </FadeIn>
      </Section>

      {/* COMPONENT GRID */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            The Core Components
          </h2>
        </FadeIn>
        <StaggerChildren className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {COMPONENTS.map((c) => (
            <StaggerItem key={c.title}>
              <div className="h-full overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  <Image src={c.image} alt={c.alt} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <c.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* MATERIAL TYPES */}
      <Section band="accent-wash">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            Material Types: Open Cell vs. Closed Cell
          </h2>
          <p className="mt-3 text-muted-foreground">
            Informational only — sprayfoamrigrental.com doesn&apos;t sell or rent material.
          </p>
        </FadeIn>
        <StaggerChildren className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {MATERIAL_TYPES.map((m) => (
            <StaggerItem key={m.title}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <m.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {m.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* WHAT'S BUNDLED VS SEPARATE */}
      <Section band="tan">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <PackageCheck className="h-4 w-4" /> Set Your Expectations
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold text-foreground">
              What&apos;s Usually Bundled vs. Rented Separately
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Rental packages vary a lot by provider. Some quote a single all-in rig rate that
              includes the proportioner, gun, and a standard length of hose. Others price the
              proportioner and hose separately, charge extra for longer hose runs, or treat the
              generator as an add-on rather than a default inclusion.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              There&apos;s no industry-standard bundle, which means the same job can get very
              different quotes from two providers even when the base day rate looks similar. The
              only way to compare apples-to-apples is to ask each provider exactly what&apos;s
              included before you commit — see our{" "}
              <Link
                href="/what-to-check-before-you-rent"
                className="text-primary font-medium hover:underline"
              >
                checklist for what to check before you rent
              </Link>
              .
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              It&apos;s also worth matching the bundle to the job, not just the price. A cheaper
              quote that excludes the generator isn&apos;t actually cheaper if your site has no
              power hookup and you end up sourcing one separately on short notice. Get the full
              scope in writing — component by component — before comparing any two quotes on
              price alone.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground mb-4">
                Questions worth asking any provider
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li>• Is the generator included, or billed separately?</li>
                <li>• What hose length is standard, and what does extra length cost?</li>
                <li>• Is delivery/pickup part of the quoted rate?</li>
                <li>• Does the rate include a spray gun, or is that a separate line item?</li>
                <li>• What's the proportioner's rated output, and does it match the job size?</li>
                <li>• Is the rig already calibrated for open-cell or closed-cell, and can it be switched?</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* CTA */}
      <Section band="charcoal" className="text-center">
        <FadeIn className="mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal-foreground">
            Whichever Setup You&apos;re Evaluating
          </h2>
          <p className="mt-4 text-charcoal-foreground/80 leading-relaxed">
            If you&apos;d rather hand the job to a pro than sort through equipment
            specifications yourself, CCA can match you with an insured spray foam contractor —
            no cost, no obligation.
          </p>
          <div className="mt-8">
            <Button href="/get-matched" size="lg" variant="secondary" icon={ArrowRight}>
              Get Matched
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* CROSS-LINKS */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl">
          <TechCard
            icon={Layers}
            title="Rent vs. Buy: Is Rig Rental Right for You?"
            description="Now that you know what's in a rig, the flagship guide walks through whether renting or buying makes sense for your situation."
            href="/rent-vs-buy"
          />
        </FadeIn>
      </Section>
    </>
  );
}
