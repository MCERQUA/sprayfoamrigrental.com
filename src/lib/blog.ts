import fs from "fs";
import path from "path";
import readingTime from "reading-time";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: "Equipment" | "Buying Guide" | "Pricing" | "Rent vs. Buy";
  image: string;
}

export const POSTS: PostMeta[] = [
  {
    slug: "spray-foam-proportioner-gun-heated-hose-explained",
    title: "Spray Foam Proportioner, Gun, and Heated Hose: What Each Part of a Rig Actually Does",
    description:
      "You've heard the terms — here's what each piece of a spray foam rig actually does, explained plainly.",
    date: "2026-07-14",
    category: "Equipment",
    image: "/images/proportioner-closeup.jpg",
  },
  {
    slug: "does-home-depot-rent-spray-foam-equipment",
    title: "Does Home Depot Rent Spray Foam Equipment? (And Where People Actually Get It)",
    description:
      "A short, honest answer to a common search — plus where spray foam rig rentals actually come from.",
    date: "2026-07-21",
    category: "Buying Guide",
    image: "/images/spray-gun-application.jpg",
  },
  {
    slug: "how-much-does-it-cost-to-rent-spray-foam-equipment",
    title: "How Much Does It Cost to Rent Spray Foam Equipment? Understanding the Pricing Range",
    description:
      "Why spray foam rig rental pricing varies so widely across the market, and the real variables that move a quote.",
    date: "2026-07-28",
    category: "Pricing",
    image: "/images/heated-hose-coil.jpg",
  },
  {
    slug: "backup-rig-overflow-capacity-or-new-service-line",
    title: "Backup Rig, Overflow Capacity, or New Service Line? 3 Real Reasons Contractors Rent Instead of Buy",
    description:
      "Three common situations that make renting the more efficient move — and how to tell which one applies to you.",
    date: "2026-08-04",
    category: "Rent vs. Buy",
    image: "/images/generator-power-unit.jpg",
  },
];

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export function getAllPosts() {
  return [...POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostMeta(slug: string): PostMeta | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getReadTime(slug: string): string {
  try {
    const filePath = path.join(postsDirectory, `${slug}.mdx`);
    const content = fs.readFileSync(filePath, "utf8");
    return readingTime(content).text;
  } catch {
    return "5 min read";
  }
}
