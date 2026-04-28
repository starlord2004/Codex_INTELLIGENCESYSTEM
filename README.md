# CareVia - Healthcare Platform

A modern healthcare platform built with Next.js 16, enabling users to find doctors, book appointments, order medicines, and schedule lab tests.

## Features

- **Doctor Discovery** - Browse doctors by specialty, view profiles, and check availability
- **Appointment Booking** - Schedule appointments with preferred doctors and time slots
- **Medicine Ordering** - Browse medicines, add to cart, and complete checkout with payment
- **Lab Tests** - Book diagnostic tests and health checkups
- **Surgery Information** - Explore affordable surgical procedures
- **Hospital Directory** - Find hospitals and healthcare facilities
- **Health Packages** - Discover comprehensive health checkup packages

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui with Radix UI primitives
- **Icons:** Lucide React
- **Forms:** React Hook Form with Zod validation
- **Charts:** Recharts
- **Theming:** next-themes (light/dark mode)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/carevia.git
   cd carevia
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── page.tsx                    # Homepage
│   ├── appointment/                # Appointment management
│   ├── doctors/                    # Doctor listing and profiles
│   │   └── [doctorId]/
│   │       ├── profile/            # Doctor profile page
│   │       └── book/               # Booking flow
│   │           └── success/        # Booking confirmation
│   ├── hospitals/                  # Hospital details
│   │   └── [hospitalId]/
│   ├── lab-tests/                  # Lab test booking
│   ├── medicines/                  # Medicine ordering
│   │   ├── checkout/               # Cart checkout
│   │   ├── payment/                # Payment processing
│   │   └── order-confirmation/     # Order success
│   └── surgeries/                  # Surgery information
├── components/
│   ├── carevia/                    # App-specific components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── search-bar.tsx
│   │   ├── service-buttons.tsx
│   │   ├── doctor-specialties.tsx
│   │   ├── health-packages.tsx
│   │   └── ...
│   └── ui/                         # shadcn/ui components
├── hooks/                          # Custom React hooks
├── lib/                            # Utility functions
└── styles/                         # Global styles
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
