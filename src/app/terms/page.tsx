import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { EMAIL, HQ_ADDRESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for SprayFoamRigRental.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Section band="base" className="pt-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-4xl font-semibold text-foreground">Terms of Use</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: August 2026</p>

        <div className="mt-10 space-y-8 text-foreground/85 leading-relaxed">
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Educational Purpose</h2>
            <p className="mt-3">
              SprayFoamRigRental provides general educational information about spray foam rig
              equipment rental — it is not a rental marketplace, booking platform, or broker, and
              it does not rent, list, or fulfill equipment rentals of any kind. Content here is
              general information, not professional engineering, legal, or insurance advice.
              Always confirm terms directly with any rental provider you're evaluating.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">No Guarantee of Match</h2>
            <p className="mt-3">
              Submitting the Get Matched form does not guarantee you will be connected with a
              contractor, and does not obligate you to hire any contractor we introduce you to.
              Contractors Choice Agency reviews license and insurance documentation for
              contractors in its network but is not a party to, and is not liable for, any
              agreement you enter into with a contractor or a rental provider.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Third-Party References</h2>
            <p className="mt-3">
              This site may reference general rental-market categories and pricing patterns for
              illustrative, educational purposes. We do not endorse, partner with, or control any
              third-party rental provider mentioned or implied on this site, and we are not
              responsible for the content, accuracy, or availability of external sites or
              services.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Limitation of Liability</h2>
            <p className="mt-3">
              SprayFoamRigRental and Contractors Choice Agency are not liable for any damages
              arising from your use of this site, any equipment rental decision you make based on
              this content, or your decision to hire any contractor, whether or not introduced
              through our matching service.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3">Questions about these terms: {EMAIL} — {HQ_ADDRESS}.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
