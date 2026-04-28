# CareVia - Healthcare Management Platform

A comprehensive healthcare platform built with Next.js 16, React, TypeScript, and Tailwind CSS.

## Features

- **50+ Doctors** across 5 cities (Bangalore, Mumbai, Delhi, Hyderabad, Chennai)
- **Doctor Booking**: Search, filter by specialty, and book clinic visits with time slots
- **Medical History Dashboard**: Track appointments and manage prescriptions
- **Prescription Management**: Upload/download/delete prescriptions (PDF, JPG, PNG)
- **User Authentication**: Sign up, login, session management
- **Health Packages**: Browse and book preventive health check-ups
- **Medicines & Labs**: Order medicines and lab tests
- **Transparent Pricing**: Service fees and tax breakdown
- **Cash on Delivery Payment**: Only payment method supported
- **Responsive Design**: Mobile-first, works on all devices

## Tech Stack

- Next.js 16 with App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui (60+ components)
- React Context API
- Lucide React icons

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
pnpm start
```

Navigate to `http://localhost:3000`

## Project Structure

```
/app              - Next.js pages (doctors, booking, dashboard, etc.)
/components       - UI components and custom CareVia components
/contexts         - User and location state management
/lib              - Utilities
/public           - Static assets
```

## Key Pages

- `/` - Homepage with services and offers
- `/doctors` - Doctor search and filtering
- `/doctors/[doctorId]/profile` - Doctor profile
- `/doctors/[doctorId]/book` - Booking appointment
- `/dashboard` - User medical history (login required)
- `/medicines` - Medicine shop
- `/health-packages` - Health packages

## Doctor Coverage

- **Bangalore**: 20+ doctors (Indiranagar, Koramangala, HSR Layout, Whitefield, Jayanagar)
- **Mumbai**: 5+ doctors (Andheri, Bandra)
- **Delhi**: 4+ doctors (Saket, Connaught Place)
- **Hyderabad**: 5+ doctors (HITEC City, Jubilee Hills)
- **Chennai**: 4+ doctors (T. Nagar, Anna Nagar)

## Getting Started

1. Go to homepage
2. Click "Find Doctors" or search by specialty
3. Select city and area
4. View doctor profiles with ratings
5. Click "Book Clinic Visit"
6. Choose time slot
7. Confirm booking
8. Pay via Cash on Delivery

## User Dashboard

- Sign up/login to create account
- Click "My Account" in header
- View appointment history (Upcoming, Completed, Cancelled)
- Upload and manage prescriptions
- Track medical records

## Authentication

Uses localStorage for session persistence. Sign up with email, phone, and password.

## Installation

```bash
npm install -g pnpm
pnpm install
pnpm dev
```
