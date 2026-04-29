# CareVia - Healthcare Management Platform

A comprehensive healthcare management platform built with Next.js 16, TypeScript, and Tailwind CSS. CareVia enables users to book doctor appointments, order medicines, schedule lab tests, and manage their health records.

**Website Link (Deployed)** : https://v0-symptom-checker-chi.vercel.app/symptom-checker
## Features

### Doctor Booking System
- Browse 50+ doctors across 15+ specialties
- Filter by city, specialty, and availability
- View detailed doctor profiles with experience and ratings
- Book appointments with time slot selection
- Transparent fee breakdown (Consultation + Service Fee + Tax)

### User Dashboard
- Appointment history with status tracking
- Prescription upload and management (PDF, JPG, PNG)
- Medical records storage
- Secure authentication with localStorage persistence

### Additional Services
- Health packages booking
- Online medicines shop with checkout
- Lab tests scheduling
- Surgery information and pricing
- Promotional offers with discount codes

### Coverage
- **Cities**: Bangalore, Mumbai, Delhi, Hyderabad, Chennai
- **Areas**: 15+ areas including Indiranagar, Koramangala, Andheri, Bandra, Saket, and more

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (60+ components)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Date Handling**: date-fns

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd carevia

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

## Project Structure

```
/app
  /about              # About page
  /appointment        # Appointment booking
  /articles           # Health articles
  /blog               # Blog posts
  /careers            # Careers page
  /contact            # Contact information
  /dashboard          # User dashboard
  /doctor-login       # Doctor portal login
  /doctors            # Doctor listings and profiles
    /[doctorId]
      /book           # Booking flow
      /profile        # Doctor profile
  /hospitals          # Hospital information
  /join-doctor        # Doctor registration
  /lab-tests          # Lab test booking
  /medicines          # Medicine shop
    /checkout         # Cart checkout
    /payment          # Payment processing
  /surgeries          # Surgery information
  /symptom-checker    # AI symptom checker
  /trending-questions # Health Q&A
  /video-consultation # Video consultation

/components
  /carevia            # Main application components
  /dashboard          # Dashboard-specific components
  /symptom-checker    # Symptom checker components
  /ui                 # shadcn/ui components

/contexts
  /location-context   # Location management
  /user-context       # User authentication and data

/lib
  /ml                 # ML recommendation engines
  /utils              # Utility functions
```

## Key Features Implementation

### Doctor Data Structure

```typescript
interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  consultationFee: number;
  serviceFee: number;
  tax: number;
  location: string;
  city: string;
  image: string;
  availability: string[];
  nextAvailable: string;
}
```

### Fee Calculation

```typescript
const total = doctor.consultationFee + doctor.serviceFee + doctor.tax;
// Example: Rs. 650 + Rs. 65 + Rs. 36 = Rs. 751
```

### Payment Method
Currently supports Cash on Delivery (COD) only. Online payment integration (Stripe/Razorpay) planned for future releases.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Create production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
pnpm i -g vercel

# Deploy
vercel
```

### Other Platforms
- AWS Amplify
- Railway
- Netlify

## Roadmap

- [ ] Backend API integration (PostgreSQL/MongoDB)
- [ ] Real-time doctor availability
- [ ] Video consultations
- [ ] Email and SMS notifications
- [ ] Stripe/Razorpay payment integration
- [ ] Admin dashboard
- [ ] Doctor reviews and ratings
- [ ] Automated testing (Jest, Cypress)



