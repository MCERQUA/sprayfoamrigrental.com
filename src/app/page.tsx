import type { Metadata } from "next";
import Image from "next/image";
import {
  Truck,
  Scale,
  Layers,
  ClipboardCheck,
  Gauge,
  Droplet,
  Thermometer,
  Zap,
  ArrowRight,
  Phone,
  Info,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { TechCard } from "@/components/ui/TechCard";
import { CaveatCallout } from "@/components/ui/CaveatCallout";
import { getAllPosts, getReadTime } from "@/lib/blog";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Renting a Spray Foam Rig — What Contractors Need to Know",
  description:
    "An honest, plain-spoken guide to spray foam rig equipment rental: when renting makes sense, what's typically available, and what to check before you rent.",
  alternates: { canonical: "/" },
};

const PILLARS = [
  {
    icon: Scale,
    title: "Rent vs. Buy",
    description: "Is rig rental right for you? A genuinely situational decision, walked through honestly.",
    href: "/rent-vs-buy",
  },
  {
    icon: Layers,
    title: "Equipment Available to Rent",
    description: "The proportioner, spray gun, heated hose, and generator — what each does and why it matters.",
    href: "/equipment-available-to-rent",
  },
  {
    icon: ClipboardCheck,
    title: "What to Check Before You Rent",
    description: "A neutral checklist for evaluating any rental provider you're considering.",
    href: "/what-to-check-before-you-rent",
  },
];

const EQUIPMENT_PRIMER = [
  { icon: Gauge, title: "Proportioner", description: "Heats, pressurizes, and mixes the two chemical components in the correct ratio." },
  { icon: Droplet, title: "Spray Gun", description: "The application tool — its condition and type affect finish quality." },
  { icon: Thermometer, title: "Heated Hose", description: "Keeps chemical temperature stable from the proportioner to the gun." },
  { icon: Zap, title: "Generator", description: "The whole rig depends on stable power — electric or gas-powered." },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-rig-trailer-hitch.jpg"
            alt="A spray foam rig trailer being hitched for transport"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <FadeIn className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-charcoal-foreground/10 px-4 py-1.5 text-sm font-medium text-charcoal-foreground ring-1 ring-charcoal-foreground/20">
              <Truck className="h-4 w-4 text-accent" /> A Contractors Choice Agency resource
            </span>
            <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-charcoal-foreground">
              Renting a Spray Foam Rig? Here&apos;s What Contractors Need to Know
            </h1>
            <p className="mt-6 text-lg text-charcoal-foreground/85 leading-relaxed max-w-xl">
              An honest, plain-spoken guide to spray foam rig equipment rental — not a booking
              platform. We don&apos;t list rigs for rent; we explain the decision.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/get-matched" size="lg" variant="secondary">
                Get Matched <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/rent-vs-buy"
                size="lg"
                variant="outline"
                className="border-charcoal-foreground/30 text-charcoal-foreground hover:border-accent hover:text-accent"
              >
                See the Rent vs. Buy Guide
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TRUST / DEFINITION BAND */}
      <Section band="tan" className="py-10 sm:py-12">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-xl sm:text-2xl font-medium text-foreground leading-relaxed">
            This site is an educational guide to spray foam rig equipment rental —{" "}
            <span className="text-primary">not a rental marketplace or booking service.</span>
          </p>
        </FadeIn>
      </Section>

      {/* PILLAR GRID */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            Three Questions Worth Answering First
          </h2>
        </FadeIn>
        <StaggerChildren className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <StaggerItem key={p.title}>
              <TechCard icon={p.icon} title={p.title} description={p.description} href={p.href} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* WHY RENTAL IS A REAL DECISION */}
      <Section band="accent-wash">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
              Why Rig Rental Is a Real Decision
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A genuine, competitive market of rental providers exists nationwide — and for good
              reason. Contractors rent equipment to cover seasonal demand spikes, keep a job
              moving while a primary rig is serviced, or test whether spray foam is worth adding
              as a new service line before committing to a purchase that can run well into six
              figures.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              None of that makes renting automatically the right call — it depends on utilization,
              business stage, and how the numbers actually work out. That&apos;s what the{" "}
              <Link href="/rent-vs-buy" className="text-primary font-medium hover:underline">
                Rent vs. Buy guide
              </Link>{" "}
              walks through.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/rig-loaded-for-delivery.jpg"
              alt="A spray foam rig trailer loaded for delivery"
              fill
              className="object-cover"
            />
          </FadeIn>
        </div>
      </Section>

      {/* EQUIPMENT PRIMER */}
      <Section band="tan">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            What&apos;s Actually in a Rig
          </h2>
          <p className="mt-3 text-muted-foreground">
            A quick primer —{" "}
            <Link href="/equipment-available-to-rent" className="text-primary font-medium hover:underline">
              the full equipment guide
            </Link>{" "}
            goes deeper.
          </p>
        </FadeIn>
        <StaggerChildren className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EQUIPMENT_PRIMER.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* HONESTY NOTE */}
      <Section band="base">
        <FadeIn className="mx-auto max-w-3xl">
          <CaveatCallout
            title="What This Site Is — and Isn't"
            description="sprayfoamrigrental.com is an educational resource published by Contractors Choice Agency, an insurance agency. We don't rent, list, or broker spray foam rig equipment. If you'd rather skip the rent-or-buy decision entirely and hire a properly equipped, insured contractor instead, that's the one thing CCA actually does — and it's free to get matched."
          />
        </FadeIn>
      </Section>

      {/* FINAL CTA */}
      <Section band="charcoal" className="text-center">
        <FadeIn className="mx-auto max-w-2xl">
          <Info className="mx-auto h-10 w-10 text-accent" />
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-semibold text-charcoal-foreground">
            Get Matched with a Tech-Forward, Insured Spray Foam Contractor
          </h2>
          <p className="mt-4 text-charcoal-foreground/80 leading-relaxed">
            Whether you decide to rent, buy, or hire the work out entirely — if you need an
            insured spray foam contractor, CCA can match you with one. No cost, no obligation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/get-matched" size="lg" variant="secondary" icon={ArrowRight}>
              Get Matched
            </Button>
            <Button
              href="tel:+18449675247"
              size="lg"
              variant="outline"
              className="border-charcoal-foreground/30 text-charcoal-foreground hover:border-accent hover:text-accent"
              icon={Phone}
            >
              Call 844-967-5247
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* BLOG TEASER */}
      <Section band="card">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            From the Blog
          </h2>
        </FadeIn>
        <StaggerChildren className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block h-full cursor-pointer">
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all group-hover:-translate-y-1 group-hover:shadow-md">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-md bg-primary/90 px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span>&middot;</span>
                      <span>{getReadTime(post.slug)}</span>
                    </div>
                    <h3 className="mt-3 font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>
    </>
  );
}
