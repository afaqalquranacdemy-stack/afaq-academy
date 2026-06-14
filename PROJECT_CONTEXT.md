# Walmnaho (والمناهو) - Project Context & Skills

> **Note:** This file serves as the central brain and skill repository for the Walmnaho project. It should be updated whenever significant architectural changes, new components, or design paradigms are introduced.

## 1. Project Overview

Walmnaho is an ultra-premium, bilingual (Arabic RTL / English LTR) online academy platform focused on delivering authentic Islamic knowledge (العلم الشرعي) from elite Al-Azhar scholars. It blends traditional religious education with modern, high-end e-learning technologies.

## 2. Tech Stack & Core Libraries

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Vanilla CSS for base, Tailwind for utilities)
- **Animation:** Framer Motion (Complex enter animations, scrolls, and micro-interactions)
- **Icons:** Lucide React
- **Internationalization (i18n):** Custom `LanguageProvider` handling RTL/LTR state and translation dictionaries (`t.someKey`).

## 3. UI/UX Design Guidelines (The "Ultra-Premium" Standard)

All new pages and components MUST adhere to the following aesthetic rules to maintain the ultra-premium feel:

- **Dark Cinematic Heroes:** Hero sections should use `bg-slate-950` with animated gradient orbs (blur-[150px]), noise textures (`mix-blend-overlay`), and radial vignettes.
- **Glassmorphism:** Use "glass-card" styles extensively. Cards should have `backdrop-blur-md` or `xl`, subtle white borders (`border-white/10`), and inner shadows or glows.
- **Micro-animations:** Everything should animate smoothly on scroll using Framer Motion. Elements should scale, fade in, and have hover states (e.g., gradient borders that slide on hover).
- **Typography:**
  - **Arabic (RTL):** Uses `font-cairo`.
  - **English (LTR):** Uses `font-serif` or sans-serif depending on context.
  - Large headings should often use gradient text (`bg-clip-text bg-gradient-to-r`).
- **Stats integration:** Stats are typically displayed in overlapping glass cards sitting on the bottom border of dark hero sections to bridge the transition to light sections.
- **Transitions:** Use smooth gradient fades between dark and light sections (e.g., `bg-gradient-to-t from-[#F8FAFC] to-transparent`).

## 4. Architecture & Components Map

### Home Page (`/`)

- `Hero.tsx`: Dark cinematic intro with overlapping stats.
- `ValueProposition.tsx`, `CoursesOverview.tsx`, `Testimonials.tsx`, `LatestBlogs.tsx`, `TrialBooking.tsx`, `FinalCTA.tsx`.

### About Page (`/about`)

- `AboutHero.tsx`: Unified light glassmorphism hero with soft blurred orbs and integrated stats.
- `AboutStory.tsx`: Light premium section with floating UI elements and dynamic video integration.
- `AboutValues.tsx`: Light Bento-box grid using rounded glass cards and colored icons.
- `AboutTeam.tsx`: Light premium cards matching the global site style (rounded-3xl glass cards) with grayscale-to-color hover effects.

### Courses Page (`/courses`)

- `CoursesHero.tsx`: Ultra-premium hero with search functionality.
- `FeaturedCourses.tsx`, `CourseGrid.tsx`, `AcademicDepartments.tsx`, `LearningMethodology.tsx`.

### Contact Page (`/contact`)

- `ContactHero.tsx`: Dark cinematic hero with floating stats and responsive WebP backgrounds.
- `ContactCards.tsx`: 4-column premium layout with gradient accents.
- `ContactFormSection.tsx`: Full registration form with process steps.
- `FAQSection.tsx`: Premium accordion with numbered steps.

## 5. Coding Skills & Best Practices (For AI & Devs)

When modifying or adding to this project, follow these skills:

- **[RTL-First Thinking]:** Always wrap text and directional icons in logic that respects `isRtl` from `useLanguage()`. Use logical Tailwind properties where possible (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`), or conditionally apply `-translate-x-` vs `translate-x-`.
- **[Motion Optimization]:** Wrap repetitive animations in `viewport={{ once: true }}` to avoid overwhelming the browser. Use `layout` props carefully.
- **[Clean Code]:** Break down large sections into smaller components. Keep the `page.tsx` files as simple wrappers importing components.

## 6. Update Log

- **2026-04-23:** Unified the About page design to a "Light Glassmorphism" aesthetic. Ensured 100% visual consistency with the main site's UI language (large rounded corners, soft blurred orbs, glass cards) while maintaining a clean, academic light theme.
- **2026-04-23:** Full redesign of the About page to match the ultra-premium aesthetic of Home and Courses pages (Dark Cinematic Hero, Bento Box Values, Premium Team Cards).
- **2026-04-24:** Complete redesign of the Contact page into the "Ultra-Premium" standard. Implemented responsive WebP backgrounds, floating stats cards, and integrated the full registration form. Optimized all site media (Team and Courses) to WebP for high performance. Added Favicon system.
- *(Add future updates here)*
