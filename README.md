# Alexis & Abraham Wedding

![App Preview](https://imgix.cosmicjs.com/53c1db50-74a7-11f1-a87f-d72293b1048a-autopilot-photo-1556761175-5973dc0f32e7-1782839743864.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

An elegant, minimalist luxury wedding website for Alexis & Abraham — inspired by the refined aesthetics of Apple, Aman Resorts, and Four Seasons. Built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 🖼️ Full-screen hero with couple names, date, and location
- 📖 Our Story timeline with photos
- 🗓️ Wedding Day schedule (ceremony, cocktail hour, reception, party)
- 📍 Venue section with Google Maps, hotel and parking info
- 👔 Elegant dress code guidelines
- 🎁 Tasteful honeymoon fund with ATH Móvil, Zelle & PayPal links
- 💌 RSVP via Joy website button
- 📸 Share Your Memories with QR placeholder and upload button
- ❓ FAQ accordion
- 🤍 Refined navy & champagne gold palette, subtle animations

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a43f946eef00fdac9d0e8ad&clone_repository=6a43fa63eef00fdac9d0e91c)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Create a modern luxury wedding website for Alexis & Abraham. The website should be elegant, minimalist and mobile-first. Do NOT create a traditional wedding website with flowers, hearts or pink colors. The style should feel inspired by Apple, Aman Resorts and Four Seasons. Color palette: White, Soft gray, Navy blue accents, Champagne gold. Typography should be elegant and clean. The website should contain the following sections: 1. Hero - Large full screen image, Alexis & Abraham, February 13, 2027, Ponce, Puerto Rico, Enter button. 2. Our Story - Simple timeline with photos. 3. Wedding Day - Schedule, Ceremony, Cocktail Hour, Reception, Party. 4. Venue - Google Maps section, Hotel information, Parking information. 5. Dress Code - Elegant icons. 6. Honeymoon Fund - A tasteful section explaining that gifts are not expected but contributions toward our honeymoon are appreciated. Buttons for: ATH Movil, Zelle, PayPal. 7. RSVP - Instead of an RSVP form, create a large button that links to our Joy wedding website. 8. Share Your Memories - QR code placeholder. Button to upload photos. 9. FAQ - 5 common wedding questions. 10. Thank You - Simple elegant ending. Animations should be subtle. No autoplay video. No background video. No excessive animations. The design should prioritize simplicity, elegance and readability."

### Code Generation Prompt

> Build a Next.js application for a website called "Create modern luxury". Create a modern luxury wedding website for Alexis & Abraham. The website should be elegant, minimalist and mobile-first. Inspired by Apple, Aman Resorts and Four Seasons. Color palette: White, Soft gray, Navy blue accents, Champagne gold. Sections: Hero, Our Story, Wedding Day, Venue, Dress Code, Honeymoon Fund, RSVP, Share Your Memories, FAQ, Thank You. Subtle animations, no video, simplicity and elegance.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account and bucket with the wedding content

### Installation

```bash
bun install
bun dev
```

Set the following environment variables (handled automatically in the Cosmic dashboard):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

const { object } = await cosmic.objects
  .findOne({ type: 'wedding-settings' })
  .depth(1)

const { objects } = await cosmic.objects
  .find({ type: 'story-moments' })
  .depth(1)
```

## Cosmic CMS Integration

This app reads from eight object types: `wedding-settings`, `story-moments`, `schedule-events`, `venue-info`, `dress-code`, `honeymoon-fund`, `rsvp-memories`, and `faq`. All content is editable from your Cosmic dashboard. Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

- **Vercel**: Import the repo and set environment variables.
- **Netlify**: Connect the repo and configure the build command `bun run build`.

<!-- README_END -->