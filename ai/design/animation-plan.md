# Animation Plan — sprayfoamrigrental.com

Reused the standard fleet animation vocabulary (Motion + Lenis smooth scroll):
- FadeIn on hero headline/sub-headline and section intros (staggered, once-only).
- StaggerChildren/StaggerItem on card grids (pillar teasers, equipment primer, blog cards) —
  0.1s stagger, spring transition (`type: "spring" as const` — proactive fix applied at scaffold).
- TrustBadge checkmark draw-in (`draw-check` keyframe, mahogany stroke instead of pine-green).
- Sticky mobile CTA bar slides up after 300px scroll (StickyCTA, unchanged from template).
- No auto-playing video, no entrance animation on the phone number/CTA button (CRO rule —
  those must render instantly, no motion delay).
