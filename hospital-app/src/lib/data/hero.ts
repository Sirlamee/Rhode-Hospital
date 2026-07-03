/**
 * lib/data/hero.ts
 *
 * Single source of truth for the hero carousel slides shown on the homepage.
 *
 * To add, remove, or reorder slides, edit only this file.
 */

// ---------------------------------------------------------------------------
// Type
// ---------------------------------------------------------------------------

export interface HeroSlide {
  id: number;
  /** Path relative to /public, e.g. "/hero/image1.png" */
  image: string;
  title: string;
  description: string;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const slides: HeroSlide[] = [
  {
    id: 1,
    image: "/hero/image1.png",
    title: "Welcome to Rhode Hospital",
    description: "Providing world-class healthcare with compassion and expertise.",
  },
  {
    id: 2,
    image: "/hero/image2.png",
    title: "Compassionate Care",
    description: "A friendly and welcoming environment for all our patients.",
  },
  {
    id: 3,
    image: "/hero/image3.png",
    title: "Expert Professionals",
    description: "Experienced doctors dedicated to your health and well-being.",
  },
  {
    id: 4,
    image: "/hero/image4.png",
    title: "Advanced Technology",
    description: "State of the art medical equipment for accurate diagnosis.",
  },
  {
    id: 5,
    image: "/hero/image5.png",
    title: "Comfortable Recovery",
    description: "Premium patient rooms designed for optimal comfort.",
  },
];
