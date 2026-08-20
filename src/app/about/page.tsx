import type { Metadata } from "next";
import Image from "next/image";
import { Truck, ShieldCheck, Handshake, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "About SprayFoamRigRental",
  description:
    "SprayFoamRigRental is a Contractors Choice Agency resource explaining spray foam rig equipment rental — honestly, and without a booking platform behind it.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src="/images/generator-power-unit.jpg"
            alt="A generator power unit for a spray foam rig"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 text-center">
          <FadeIn>
            <p className="text-sm font-medium text-charcoal-foreground/70">Home / About</p>
            <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-semibold text-charcoal-foreground">
              About SprayFoamRigRental
            </h1>
          </FadeIn>
        </div>
      </section>

      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl space-y-6 text-foreground/90 leading-relaxed">
          <p>
            SprayFoamRigRental explains the real decision behind renting spray foam rig
            equipment — when it makes sense, what&apos;s typically available, real cost factors,
            and what to check before you commit to a provider. It is not a rental marketplace.
            We don&apos;t list rigs, take bookings, or broker equipment on this site.
          </p>
          <p>
            Contractors Choice Agency insures spray foam contractors for a living. That vantage
            point means we regularly see the equipment decisions contractors weigh — rent vs.
            buy, backup capacity, testing a new service line — and the insurance questions that
            come with each one. This site exists to walk through that decision honestly, without
            a booking funnel behind it.
          </p>
        </FadeIn>
      </Section>

      <Section band="tan">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground text-center">
              What We Believe
            </h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <FadeIn delay={0.05} className="text-center">
              <Truck className="mx-auto h-9 w-9 text-primary" />
              <h3 className="mt-3 font-heading font-semibold text-foreground">Honest, Not a Pitch</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A genuinely neutral rent-vs-buy framework — not a page built to sell one answer.
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="text-center">
              <ShieldCheck className="mx-auto h-9 w-9 text-primary" />
              <h3 className="mt-3 font-heading font-semibold text-foreground">No Rental Booking</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We explain the market and the decision — we don&apos;t rent or broker equipment
                ourselves.
              </p>
            </FadeIn>
            <FadeIn delay={0.15} className="text-center">
              <Handshake className="mx-auto h-9 w-9 text-primary" />
              <h3 className="mt-3 font-heading font-semibold text-foreground">Real Accountability</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Contractors in CCA&apos;s matching network already carry verified licensing and
                insurance documentation.
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
            When Get Matched Fits Into the Picture
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            After working through{" "}
            <a href="/rent-vs-buy" className="text-primary underline underline-offset-2">
              Rent vs. Buy
            </a>
            , some contractors and property owners land on a third option: skip renting or buying
            equipment altogether and hire a properly equipped, insured contractor instead. That&apos;s
            CCA&apos;s real business —{" "}
            <a href="/get-matched" className="text-primary underline underline-offset-2">
              Get Matched
            </a>{" "}
            connects you with a vetted contractor from CCA&apos;s network whose license and
            insurance documentation we&apos;ve already reviewed.
          </p>
        </FadeIn>
      </Section>

      <Section band="charcoal" className="text-center">
        <FadeIn className="mx-auto max-w-xl">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal-foreground">
            Ready to skip the rent-or-buy decision?
          </h2>
          <Button href="/get-matched" variant="secondary" size="lg" className="mt-6" icon={ArrowRight}>
            Get Matched
          </Button>
        </FadeIn>
      </Section>
    </>
  );
}
