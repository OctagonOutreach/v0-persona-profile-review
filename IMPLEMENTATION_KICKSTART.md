# OCTAGON OUTREACH - IMPLEMENTATION KICKSTART

## PROJECT OVERVIEW

**Project Type:** New MMA Gym Growth Agency Landing Page  
**Framework:** Next.js (App Router)  
**Styling:** Tailwind CSS v4  
**Font:** Geist (sans) + Geist Mono  
**Theme:** Dark mode with accent color  
**Layout:** Full-width, single-page landing with separate contact page  

---

## DESIGN TOKENS

```css
/* globals.css - Design Token Configuration */

@theme inline {
  /* Typography */
  --font-sans: 'Geist', 'Geist Fallback', system-ui, sans-serif;
  --font-mono: 'Geist Mono', 'Geist Mono Fallback', monospace;
  
  /* Radius */
  --radius: 0.75rem;
  
  /* Core Colors - Dark Theme */
  --background: #0A0A0A;
  --foreground: #FAFAFA;
  
  /* Card Colors with Glass Effect Base */
  --card: rgba(24, 24, 27, 0.6);
  --card-foreground: #FAFAFA;
  
  /* Primary - Accent Red (used for CTAs, highlights, accents) */
  --primary: #E53E3E;
  --primary-foreground: #FFFFFF;
  
  /* Secondary - Muted for secondary elements */
  --secondary: #27272A;
  --secondary-foreground: #A1A1AA;
  
  /* Muted - For subtle text and backgrounds */
  --muted: #18181B;
  --muted-foreground: #71717A;
  
  /* Accent - Same as primary for consistency */
  --accent: #E53E3E;
  --accent-foreground: #FFFFFF;
  
  /* Destructive - For errors/warnings */
  --destructive: #DC2626;
  --destructive-foreground: #FFFFFF;
  
  /* Border - Subtle borders */
  --border: rgba(63, 63, 70, 0.5);
  
  /* Input - Form inputs */
  --input: #27272A;
  
  /* Ring - Focus states */
  --ring: #E53E3E;
  
  /* Chart Colors (if needed later) */
  --chart-1: #E53E3E;
  --chart-2: #F97316;
  --chart-3: #EAB308;
  --chart-4: #22C55E;
  --chart-5: #3B82F6;
}
```

### Color Usage Guidelines

| Element | Token | Notes |
|---------|-------|-------|
| Page background | `bg-background` | Deep black #0A0A0A |
| Primary text | `text-foreground` | Near-white #FAFAFA |
| Muted/secondary text | `text-muted-foreground` | Gray #71717A |
| Cards | `bg-card` | Glass effect with backdrop-blur |
| CTA buttons | `bg-primary` | Accent red #E53E3E |
| CTA text | `text-primary-foreground` | White |
| Borders | `border-border` | Subtle translucent |
| Highlights/accents | `text-accent` | Red for emphasis |

---

## GLASS CARD EFFECT

```css
/* Reusable glass card utility */
.glass-card {
  @apply bg-card/60 backdrop-blur-xl border border-border rounded-xl;
  box-shadow: 
    0 0 0 1px rgba(255, 255, 255, 0.05),
    0 4px 6px -1px rgba(0, 0, 0, 0.3),
    0 2px 4px -2px rgba(0, 0, 0, 0.2);
}

.glass-card-hover {
  @apply glass-card transition-all duration-300;
}

.glass-card-hover:hover {
  @apply border-primary/30;
  box-shadow: 
    0 0 0 1px rgba(229, 62, 62, 0.1),
    0 0 20px rgba(229, 62, 62, 0.15),
    0 8px 16px -4px rgba(0, 0, 0, 0.4);
  transform: translateY(-2px);
}
```

---

## TYPOGRAPHY SCALE

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (Hero) | `text-5xl md:text-6xl lg:text-7xl` | `font-bold` | `leading-tight` |
| H2 (Section) | `text-3xl md:text-4xl lg:text-5xl` | `font-bold` | `leading-tight` |
| H3 (Card Title) | `text-xl md:text-2xl` | `font-semibold` | `leading-snug` |
| Body | `text-base md:text-lg` | `font-normal` | `leading-relaxed` |
| Small/Muted | `text-sm` | `font-normal` | `leading-normal` |
| CTA Button | `text-base md:text-lg` | `font-semibold` | - |

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Width | Target |
|------------|-------|--------|
| Mobile | `< 768px` | Phones |
| Tablet | `768px - 1023px` | Tablets, small laptops |
| Desktop | `>= 1024px` | Laptops, desktops |
| Large | `>= 1280px` | Large screens |

### Mobile-First Approach
- Base styles = mobile
- `md:` prefix = tablet and up
- `lg:` prefix = desktop and up
- `xl:` prefix = large screens

---

## ANIMATION SPECIFICATIONS

### Scroll Behavior
```css
html {
  scroll-behavior: smooth;
}
```

### Fade In on Scroll (Intersection Observer)
```typescript
// Animation variants for sections
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

### Hover Animations
| Element | Effect | Duration |
|---------|--------|----------|
| Cards | `translateY(-2px)` + glow | `300ms` |
| Buttons | `scale(1.02)` + shadow | `200ms` |
| Links | Underline slide | `200ms` |
| Icons | `scale(1.1)` | `200ms` |

### CTA Button Pulse (Subtle)
```css
@keyframes subtle-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(229, 62, 62, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(229, 62, 62, 0); }
}

.cta-pulse {
  animation: subtle-pulse 2s infinite;
}
```

### Page Load Sequence
1. Hero text fades in (0ms delay)
2. Hero CTA fades in (200ms delay)
3. Trust badges fade in (400ms delay)
4. Subsequent sections animate on scroll

---

## PAGE STRUCTURE & SECTIONS

### Landing Page (`/`)

| Order | Section | CTA Present |
|-------|---------|-------------|
| 1 | Navigation (sticky) | - |
| 2 | Hero | YES - Primary CTA |
| 3 | Problem | YES - "See How We Fix This" |
| 4 | Why I Started (Story) | - |
| 5 | How It Works | - |
| 6 | Pricing Tiers | YES - "Get Started" per tier |
| 7 | Guarantee | YES - "I'm Ready to Grow" |
| 8 | FAQ | - |
| 9 | Final CTA Section | YES - "Schedule Free Consultation" |
| 10 | Footer | Contact link |

**Total CTAs:** Minimum 5 across page (Hero, Problem, 3x Pricing, Guarantee, Final)

### Contact Page (`/contact`)
- Full contact form
- No modal needed on this page
- Direct submission

---

## NAVIGATION STRUCTURE

### Desktop Navigation
```
[Logo]                    [Home] [Pricing] [FAQ] [Contact] [Get Started →]
```

### Mobile Navigation (Burger Menu)
```
[Logo]                                                      [☰]

// Expanded menu (slide from right or overlay)
├── Home
├── Pricing
├── FAQ
├── Contact
└── [Get Started] (highlighted)
```

### Burger Menu Icon
- 3-line hamburger icon
- Animates to X when open
- Uses Lucide `Menu` and `X` icons

### Sticky Behavior
- Navigation sticks to top on scroll
- Background becomes more opaque on scroll (glass effect intensifies)
- Subtle shadow appears

---

## CTA MODAL STRUCTURE

**Trigger:** All "Get Started" / "Schedule Consultation" buttons

**Modal Content:**
- Heading: "Let's Grow Your Gym"
- Subheading: "Fill out the form below and we'll reach out within 24 hours"
- Form fields:
  - Full Name (required)
  - Gym Name (required)
  - Email (required)
  - Phone (required)
  - Current Member Count (dropdown: <50, 50-100, 100-200, 200+)
  - Interested Package (radio: Bronze $2,499 / Silver $4,999 / Gold $5,999)
  - Message (optional textarea)
- Submit button: "Send My Application"
- Close button (X) top right

**Modal Behavior:**
- Backdrop blur + dark overlay
- Centered on screen
- Escape key closes
- Click outside closes
- Focus trap when open
- Scroll lock on body

---

## COMPONENT FILE STRUCTURE

```
/app
├── layout.tsx              (root layout, fonts, metadata)
├── page.tsx                (landing page - assembles sections)
├── contact/
│   └── page.tsx            (contact page)
├── globals.css             (design tokens, base styles)

/components
├── layout/
│   ├── navigation.tsx      (~150 lines)
│   ├── mobile-menu.tsx     (~100 lines)
│   └── footer.tsx          (~80 lines)
│
├── sections/
│   ├── hero.tsx            (~120 lines)
│   ├── problem.tsx         (~150 lines)
│   ├── story.tsx           (~100 lines)
│   ├── how-it-works.tsx    (~120 lines)
│   ├── pricing.tsx         (~200 lines)
│   ├── guarantee.tsx       (~80 lines)
│   ├── faq.tsx             (~150 lines)
│   └── final-cta.tsx       (~80 lines)
│
├── ui/
│   ├── (existing shadcn)
│   ├── cta-button.tsx      (~60 lines - reusable CTA)
│   ├── glass-card.tsx      (~50 lines - reusable glass card)
│   ├── section-wrapper.tsx (~40 lines - animation wrapper)
│   └── back-to-top.tsx     (~60 lines)
│
├── modal/
│   ├── consultation-modal.tsx (~150 lines)
│   └── modal-provider.tsx  (~50 lines - context for modal state)

/lib
├── utils.ts                (existing)
└── animations.ts           (~30 lines - shared animation configs)

/public
├── images/
│   ├── hero-placeholder.jpg
│   ├── story-placeholder.jpg
│   └── og-image.jpg        (for SEO)
```

**Line Limits:** Each file targets ~50-200 lines, max 600 lines to avoid refactoring.

---

## IMAGE GENERATION REQUIREMENTS

| Image | Purpose | Generation Prompt | Size |
|-------|---------|-------------------|------|
| `hero-placeholder.jpg` | Hero section background/accent | "Professional MMA gym interior, dramatic lighting, red accent lights, modern equipment, dark moody atmosphere, cinematic" | 1920x1080 |
| `story-placeholder.jpg` | Founder story section | "MMA fighter training in gym, punching bag, determined expression, dramatic side lighting, dark background, professional sports photography" | 800x600 |
| `og-image.jpg` | Social sharing | "Octagon Outreach logo on dark background with red accent, MMA themed, professional, modern" | 1200x630 |

**Note:** These are placeholders. User will replace with actual photos later.

---

## SEO STRATEGY

### Metadata (`layout.tsx`)
```typescript
export const metadata: Metadata = {
  title: "Octagon Outreach | 40 New MMA Students in 90 Days - Guaranteed",
  description: "We help MMA gyms grow with proven marketing systems. Landing pages, Facebook Ads, SEO, and PPC that deliver 30-50 new students in 90 days. Money-back guarantee.",
  keywords: [
    "MMA gym marketing",
    "martial arts gym growth",
    "MMA student acquisition",
    "gym marketing agency",
    "MMA business growth",
    "martial arts advertising",
    "gym Facebook ads",
    "MMA SEO"
  ],
  authors: [{ name: "Octagon Outreach" }],
  openGraph: {
    title: "Octagon Outreach | 40 New MMA Students in 90 Days",
    description: "Proven marketing systems for MMA gyms. Money-back guarantee.",
    url: "https://octagonoutreach.com",
    siteName: "Octagon Outreach",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Octagon Outreach | 40 New MMA Students in 90 Days",
    description: "Proven marketing systems for MMA gyms. Money-back guarantee.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#E53E3E",
  width: "device-width",
  initialScale: 1,
};
```

### Semantic HTML Structure
- `<header>` for navigation
- `<main>` for page content
- `<section>` for each content block with appropriate `aria-label`
- `<footer>` for footer
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- ARIA labels on interactive elements

### Performance Targets
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- Image optimization via Next.js Image component
- Font optimization via next/font

---

## EXAMPLE FAQ CONTENT (Placeholder)

```typescript
const faqs = [
  {
    question: "How do you define 'qualified students'?",
    answer: "Qualified students are real prospects who express genuine interest in joining your gym—tracked through form submissions, phone calls, or demo class sign-ups. We don't count clicks or website visits. Only real people ready to train."
  },
  {
    question: "What if my gym is in a small or rural area?",
    answer: "Our strategy adapts to your market. Whether you're in a major city or a small town, we customize targeting and messaging to reach the right audience in your area. The system works anywhere there are people who want to learn MMA."
  },
  {
    question: "How much of my time does this require?",
    answer: "About 2-3 hours per week. You'll provide feedback on messaging and help us understand your gym's unique strengths. We handle all the technical work—ads, landing pages, SEO, and optimization."
  },
  {
    question: "Do you work with gyms outside of MMA?",
    answer: "Currently, we're 100% focused on MMA gyms. This is where our expertise and passion lies. We may expand in the future, but right now, MMA is our entire focus."
  },
  {
    question: "What if I don't see results after 60 days?",
    answer: "We monitor performance weekly and adjust constantly. If something isn't working, we pivot immediately—new ad angles, different targeting, refined messaging. The 90-day guarantee exists because we're confident the system works when given full runway."
  },
  {
    question: "How does the money-back guarantee work?",
    answer: "Simple: if we don't deliver the promised number of qualified students (30, 40, or 50 depending on your package) within 90 days, you get 100% of your money back. No fine print tricks. We're betting on ourselves."
  }
];
```

---

## BACK TO TOP BUTTON

**Behavior:**
- Appears after scrolling 500px down
- Fixed position bottom-right
- Smooth scroll to top on click
- Fade in/out animation
- Red accent with subtle glow

**Design:**
- Circle button with up arrow icon
- `bg-primary` with hover glow
- 48x48px touch target

---

## IMPLEMENTATION SEQUENCE

### Phase 1: Foundation
1. Set up design tokens in `globals.css`
2. Configure fonts (Geist) in `layout.tsx`
3. Add SEO metadata
4. Create base component files (empty shells)

### Phase 2: Layout Components
5. Build `navigation.tsx` with responsive behavior
6. Build `mobile-menu.tsx` with burger animation
7. Build `footer.tsx`
8. Create `back-to-top.tsx`

### Phase 3: Reusable UI
9. Create `glass-card.tsx`
10. Create `cta-button.tsx`
11. Create `section-wrapper.tsx` (animation wrapper)
12. Set up modal provider and `consultation-modal.tsx`

### Phase 4: Page Sections
13. Build `hero.tsx`
14. Build `problem.tsx`
15. Build `story.tsx`
16. Build `how-it-works.tsx`
17. Build `pricing.tsx`
18. Build `guarantee.tsx`
19. Build `faq.tsx`
20. Build `final-cta.tsx`

### Phase 5: Pages
21. Assemble landing page (`app/page.tsx`)
22. Create contact page (`app/contact/page.tsx`)

### Phase 6: Polish
23. Generate placeholder images
24. Add all animations
25. Test responsive breakpoints
26. Test modal functionality
27. Test all CTAs and links
28. Performance optimization

---

## DEPENDENCIES TO INSTALL

```bash
pnpm add framer-motion lucide-react
```

- `framer-motion` - For scroll animations and modal transitions
- `lucide-react` - Icon library (likely already installed with shadcn)

---

## OUTSTANDING QUESTIONS FOR USER

Before implementation, confirm:

1. **Domain:** Is `octagonoutreach.com` the target domain?
2. **Contact email:** Where should form submissions be sent?
3. **Calendar tool:** Calendly link, or handle via email?
4. **Your name:** What name should appear as the founder?
5. **Photo:** Do you have photos, or should I generate placeholders for now?

---

## READY FOR IMPLEMENTATION

This plan is complete and ready for the build phase. All specifications are defined:

- Design tokens and color system
- Glass card effects
- Typography with Geist font
- Full responsive approach with mobile menu
- Animation specifications
- Component structure with line limits
- SEO strategy
- CTA placement (5+ across page)
- Modal behavior
- Image generation prompts
- FAQ placeholder content

**Next step:** Confirm outstanding questions, then begin Phase 1 implementation.
