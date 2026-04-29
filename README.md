# CAREVIA - Complete Healthcare Platform

A modern, feature-rich healthcare application built with Next.js 16, React 19, and TypeScript. CAREVIA provides comprehensive healthcare services including doctor consultations, video consultations, lab tests, medicine ordering, and AI-powered symptom checking.

## Features

### 1. **Doctor Consultations**
- Browse and filter doctors by specialty (General, Cardiology, Dermatology, Pediatrics, Orthopedics, Psychiatry, Neurology, Gastroenterology)
- View doctor profiles with ratings, reviews, experience, and consultation fees
- Book appointments with date and time slot selection
- Physical appointment booking with confirmation notifications and email alerts
- Appointment history tracking in user dashboard

### 2. **Video Consultations**
- Real-time video consultation with available doctors
- Specialty-based doctor filtering
- Quick response times and affordable rates (₹299 - ₹499)
- Same booking flow as physical appointments
- Confirmation emails sent automatically

### 3. **AI Symptom Checker**
- Select multiple symptoms from a comprehensive list
- AI-powered disease diagnosis engine
- Disease-specific doctor recommendations with:
  - Appointment booking links
  - Consultation fees and availability
  - Doctor ratings and reviews
- Prescribed medicines with pricing
- Direct medicine ordering and appointment booking from results

### 4. **Lab Tests**
- Browse lab test packages and individual tests
- 3-step booking process:
  - **Schedule**: Choose collection type (Home/Lab), select date and time
  - **Payment**: Review itemized costs with booking details
  - **Confirmation**: Final confirmation with "Confirm & Pay" button
- Booking confirmation page with:
  - Confirmation number
  - Complete booking details
  - Next steps and preparation instructions
  - Support contact information

### 5. **Medicines**
- Browse medicines by category
- Advanced filtering and search
- Order medicines directly
- Delivery to home address
- Integration with symptom checker for prescribed medicines

### 6. **Health Articles & Resources**
- Comprehensive health articles on various topics:
  - Cardiovascular Health
  - Mental Health
  - Wellness and Immunity
  - Nutrition and Diet
  - Sleep Health
  - Fitness for Seniors
- Modal-based article reading with full content
- Articles written by medical professionals

### 7. **User Dashboard**
- View appointment history
- Track prescribed medicines
- Upload prescriptions
- Manage user profile

### 8. **Content Pages**
- Blog with carousel navigation and full article content
- Careers page with job listings
- Press releases and media information
- Contact information with email and phone support
- Privacy Policy and Terms of Service

## Tech Stack

### Frontend
- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19.2
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Components**: shadcn/ui (85+ accessible components)
- **Icons**: Lucide React
- **State Management**: React Context API + localStorage
- **Forms**: React Hook Form with Zod validation

### Backend
- **Runtime**: Node.js
- **API**: Next.js API Routes
- **Authentication**: Custom auth with user context
- **Data Storage**: localStorage (client-side persistence)

### Development
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Build Tool**: Turbopack (default in Next.js 16)
- **Code Quality**: ESLint, Prettier (built-in)

## Project Structure

```
carevia/
├── app/                           # Next.js App Router
│   ├── page.tsx                  # Home page with hero section
│   ├── layout.tsx                # Root layout with providers
│   ├── globals.css               # Global styles and design tokens
│   ├── doctors/
│   │   ├── page.tsx              # Doctor listing and filtering
│   │   └── [doctorId]/
│   │       └── book/
│   │           ├── page.tsx      # Doctor booking flow
│   │           └── success/      # Booking confirmation
│   ├── video-consultation/       # Video consultation booking
│   ├── symptom-checker/          # AI symptom diagnosis
│   ├── lab-tests/
│   │   ├── page.tsx              # Lab tests listing
│   │   ├── [id]/page.tsx         # Individual test booking
│   │   └── booking-confirmed/    # Lab booking confirmation
│   ├── medicines/
│   │   ├── page.tsx              # Medicines listing
│   │   ├── checkout/             # Shopping cart
│   │   ├── payment/              # Payment page
│   │   └── order-confirmation/   # Order confirmation
│   ├── articles/                 # Health articles with modals
│   ├── blog/                     # Blog with carousel
│   ├── careers/                  # Careers page
│   ├── press/                    # Press releases
│   ├── contact/                  # Contact information
│   ├── about/                    # About company
│   ├── privacy/                  # Privacy policy
│   ├── terms/                    # Terms of service
│   ├── dashboard/                # User dashboard
│   ├── appointment/              # Appointment listing
│   └── hospitals/                # Hospital information
│
├── components/
│   ├── carevia/                  # Custom components
│   │   ├── header.tsx            # Header with location selector
│   │   ├── footer.tsx            # Footer with links
│   │   ├── service-buttons.tsx   # Main service grid
│   │   ├── search-bar.tsx        # Search functionality
│   │   ├── auth-dialogs.tsx      # Login/Signup modals
│   │   ├── doctor-specialties.tsx
│   │   ├── health-packages.tsx
│   │   └── ...other components
│   ├── dashboard/                # Dashboard components
│   ├── ui/                       # shadcn/ui components (85+)
│   └── theme-provider.tsx        # Theme configuration
│
├── contexts/                     # React Context providers
│   ├── user-context.tsx          # User authentication & state
│   └── location-context.tsx      # Location selection
│
├── hooks/                        # Custom React hooks
│   ├── use-toast.ts             # Toast notifications
│   └── use-mobile.ts            # Mobile detection
│
├── lib/
│   └── utils.ts                 # Utility functions
│
├── public/                       # Static assets
│   └── images/                   # Image files
│
├── styles/                       # Global styles
│   └── globals.css
│
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── next.config.mjs               # Next.js config
├── tailwind.config.ts            # Tailwind configuration
├── postcss.config.mjs            # PostCSS configuration
└── README.md                     # This file
```

## Getting Started

### Prerequisites
- Node.js 18+ or higher
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd carevia
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm run build
pnpm run start
```

## Key Features Implementation

### Doctor Booking Flow
1. User selects a doctor or specialty
2. Views doctor profile with details
3. Selects appointment date and time slot
4. Reviews booking summary and fee
5. Confirms appointment
6. Receives toast notification confirming booking
7. Receives email notification (simulated)
8. Redirected to success page
9. Appointment appears in user dashboard

### Symptom Checker Flow
1. User selects symptoms from a comprehensive list
2. AI engine analyzes symptoms and predicts disease
3. Shows diagnosis with severity level
4. Displays recommended doctors for the condition
5. Lists prescribed medicines with prices
6. Users can:
   - Book appointment with recommended doctor
   - Order medicines directly
   - View full medication details

### Lab Test Booking
1. User browses lab tests or packages
2. Clicks "Book" to start booking process
3. Step 1: Selects collection type and schedules date/time
4. Step 2: Reviews order with itemized costs
5. Step 3: Confirms and pays
6. Receives confirmation number and details
7. Email notification with appointment details (simulated)

### Medicine Ordering
1. User browses medicines by category
2. Uses search and filters to find specific medicines
3. Adds to cart
4. Proceeds to checkout
5. Enters delivery address
6. Completes payment
7. Receives order confirmation number

## User Authentication

The app uses a custom authentication system with:
- Login and Signup modals in header
- User context management
- localStorage for session persistence
- User profile in dashboard
- Appointment history tracking

**Test Credentials:**
- Email: user@example.com
- Password: password123

## Customization

### Design Tokens
Edit `app/globals.css` to customize colors, fonts, and spacing:
```css
@theme inline {
  --primary: #0066cc;
  --secondary: #f0f0f0;
  --accent: #ff6b6b;
}
```

### Adding New Doctors
Edit doctor data in component files to add new doctors with details like:
- Name, specialty, experience
- Rating and reviews
- Consultation fees
- Availability slots

### Adding New Lab Tests
Update lab test listings with new test packages and individual tests.

## API Routes

Currently using client-side data. For production:
- Create API routes in `app/api/`
- Connect to backend database (PostgreSQL/MongoDB)
- Implement proper authentication with JWT
- Add payment gateway integration

## Deployment

### Deploy to Vercel (Recommended)

```bash
pnpm run build
vercel deploy
```

### Environment Variables for Production
- Database connection strings
- API endpoints
- Payment gateway keys
- Email service credentials

## Performance Optimizations

- Next.js Image optimization
- Code splitting and lazy loading
- Static generation for content pages
- API route caching
- Font optimization with next/font

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance (WCAG AA)

## Future Enhancements

- [ ] Real-time video consultation feature
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Prescription management and digital prescriptions
- [ ] Health records and test reports storage
- [ ] Appointment reminders via SMS/Email
- [ ] Doctor ratings and reviews system
- [ ] Medicine delivery tracking
- [ ] Integration with health devices (wearables)
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Push notifications

## Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
pnpm run build
```

### Development Server Issues
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Restart dev server
pnpm dev
```

### State Not Persisting
- Check localStorage in browser DevTools
- Ensure user context provider is at root level
- Verify localStorage keys in context files

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request
