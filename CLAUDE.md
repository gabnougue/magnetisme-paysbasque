# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 showcase website for Jean-Michel Nougué-Lecocq, a magnetizer and energetic therapist in the Pays Basque region (Saint-Pée-sur-Nivelle). The site features therapeutic services, testimonials, pricing, and contact forms with Google Reviews integration.

**Tech Stack:**
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3
- Framer Motion (animations)
- React Hook Form + Zod (form validation)
- Resend (email sending)
- Google Places API (New v1) for reviews

## Development Commands

```bash
# Development
npm run dev          # Start dev server on http://localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Architecture

### Content Management via Constants

**All site content is centralized in `src/lib/constants.ts`**. This is the single source of truth for:
- Site information (SITE_INFO): contact details, address, phone, email
- Services (SERVICES): therapeutic services offered
- Techniques (TECHNIQUES_DETAILED): detailed descriptions of methods
- Testimonials (TESTIMONIALS): client reviews (fallback if Google reviews fail)
- Pricing (PRICING): service pricing tiers
- Navigation (NAV_LINKS): site navigation structure
- FAQ (FAQ_ITEMS): frequently asked questions

**When adding/modifying content, always update `constants.ts` first.**

### Component Architecture

**UI Components** (`src/components/ui/`): Reusable, presentational components
- `button.tsx`, `card.tsx`, `section.tsx`, `container.tsx`, `carousel.tsx`
- `whatsapp-button.tsx`: Fixed WhatsApp contact button

**Layout Components** (`src/components/layout/`):
- `header.tsx`: Sticky navigation with mobile menu
- `footer.tsx`: Site footer with links

**Section Components** (`src/components/sections/`):
- `google-reviews.tsx`: Client-side component fetching Google reviews
- `practice-location.tsx`: Location/address section
- `contact-form.tsx`: Contact form with React Hook Form + Zod validation

**SEO Components** (`src/components/seo/`):
- `structured-data.tsx`: JSON-LD structured data for search engines

### Styling System

**Tailwind Configuration** (`tailwind.config.ts`):
- Custom color palette:
  - `primary`: Green shades (main brand color #3d7c5c)
  - `secondary`: Beige/earth tones (#b88c5d)
  - `accent`: Soft blue (#3b82f6)
- Custom fonts:
  - `font-sans`: Inter (body text)
  - `font-serif`: Playfair Display (headings)
- Custom animations: `fade-in`, `slide-up`, `slide-down`

### API Routes

**Contact Form** (`src/app/api/contact/route.ts`):
- POST endpoint for contact form submissions
- Uses Zod schema validation
- Sends emails via Resend API
- Requires env vars: `RESEND_API_KEY`, `CONTACT_EMAIL`

**Google Reviews** (`src/app/api/google-reviews/route.ts`):
- GET endpoint with query param `?placeId=XXX`
- Fetches reviews from Google Places API (New v1)
- Transforms API response to compatible format
- 1-hour cache (`revalidate: 3600`)
- Requires env vars: `GOOGLE_MAPS_API_KEY`

### Pages Structure

All pages use the App Router pattern in `src/app/`:
- `page.tsx`: Homepage
- `qui-suis-je/page.tsx`: About page
- `techniques/page.tsx`: Techniques/methods page
- `temoignages/page.tsx`: Testimonials page
- `tarifs/page.tsx`: Pricing page
- `faq/page.tsx`: FAQ page
- `contact/page.tsx`: Contact page
- `mentions-legales/page.tsx`: Legal notices
- `politique-confidentialite/page.tsx`: Privacy policy

Each page exports metadata for SEO optimization.

### Path Aliases

TypeScript path alias `@/*` maps to `./src/*` (configured in `tsconfig.json`)

Example: `import { SITE_INFO } from '@/lib/constants'`

## Environment Variables

Create `.env.local` with:

```env
# Resend (email sending)
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=your-email@example.com

# Google Places API (optional - for reviews)
GOOGLE_MAPS_API_KEY=AIzaSyXXXXXXXXX
NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJXXXXXXXXXXX

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Jean-Michel Nougué-Lecocq - Magnétiseur"
```

**Important:** Never commit `.env.local` - it's in `.gitignore`

## Google Reviews Integration

The site uses **Google Places API (New v1)** (not the legacy Places API).

**Setup Process:**
1. Get API key from Google Cloud Console
2. Enable "Places API (New)" (not the old Places API)
3. Get Place ID from Google Maps URL (starts with `ChIJ`)
4. Add both to `.env.local`

**How it works:**
- `GoogleReviews` component fetches from `/api/google-reviews`
- API route calls Google Places API v1 with field mask
- Reviews are transformed to compatible format
- Falls back to manual testimonials from `constants.ts` if API fails
- Language set to French (`languageCode=fr`)

## Key Development Patterns

### Adding New Pages

1. Create `src/app/your-page/page.tsx`
2. Export page component and metadata
3. Add route to `NAV_LINKS` in `constants.ts`
4. Use `<Section>` and `<Container>` components for layout consistency

### Adding New Services/Content

1. Update appropriate constant in `src/lib/constants.ts`
2. TypeScript will catch any missing fields
3. No need to touch component code unless adding new fields

### Form Handling

All forms use React Hook Form + Zod for validation:
```tsx
const schema = z.object({ ... })
const form = useForm({ resolver: zodResolver(schema) })
```

### Animations

Use Framer Motion for complex animations, or Tailwind's custom animations:
```tsx
<div className="animate-fade-in">...</div>
<div className="animate-slide-up">...</div>
```

## SEO Considerations

- All pages export `metadata` objects with title, description, keywords
- `layout.tsx` includes global metadata and Open Graph tags
- `robots.ts` and `sitemap.ts` auto-generate SEO files
- `StructuredData` component adds JSON-LD for LocalBusiness schema
- Update `verification.google` in `layout.tsx` after Google Search Console setup

## Important Notes

- **Mobile-first design**: Always test responsive layouts
- **French language**: All content is in French
- **Accessibility**: Semantic HTML, proper headings hierarchy
- **Performance**: Images should use Next.js `<Image>` component
- **No client-side env vars**: Only prefix with `NEXT_PUBLIC_` if needed in browser
- **Color palette must stay consistent**: Use Tailwind theme colors, not arbitrary values

## Common Tasks

**Update contact info**: Edit `SITE_INFO` in `constants.ts`

**Add new testimonial**: Add to `TESTIMONIALS` array in `constants.ts`

**Modify pricing**: Edit `PRICING` array in `constants.ts`

**Change colors**: Edit `tailwind.config.ts` theme colors

**Add new technique**: Add to `TECHNIQUES_DETAILED` in `constants.ts`

**Test contact form locally**: Check server logs for email output (Resend API required for actual sending)
