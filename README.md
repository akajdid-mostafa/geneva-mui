# Geneva — Modern SaaS Landing Page Template

**🚀 Launch your SaaS in minutes, not months!**

Transform your vision into a stunning, high-converting landing page with Geneva — the premium SaaS template that combines the power of **Next.js**, **Material-UI**, and **Tailwind CSS**. Built for entrepreneurs who refuse to compromise on design or performance.

## ✨ [**View Live Demo →**](https://geneva.themefellas.com/)

**Stop building from scratch. Start converting customers today.**

## 🚀 Why Choose Geneva?

**⚡ Ship faster.** While your competitors spend months building from scratch, you'll be collecting customer feedback and revenue.

- **🎨 Conversion-Optimized Design**: Every pixel crafted to turn visitors into customers
- **📱 Mobile-First Responsive**: Flawless experience across all devices and screen sizes  
- **🚀 Lightning Fast**: Built with Next.js 15 — your users will feel the speed
- **✨ Smooth Animations**: Engage users with Motion-powered reveals and transitions
- **💳 Revenue-Ready**: Stripe integration means you can start charging from day one
- **📧 Lead Capture**: Built-in email integration to grow your subscriber base
- **🔧 Developer-Friendly**: Fully typed TypeScript for maintainable, scalable code
- **🔍 SEO Optimized**: Rank higher and get discovered by your ideal customers

## 🎨 Included Sections

### Landing Page Components

- **Hero Section**: Eye-catching headline with call-to-action buttons
- **Partners/Logos**: Showcase trusted brands and partnerships
- **Features Grid**: Highlight key product features with visuals
- **Video Section**: Product demo or explainer video
- **Features Slider**: Interactive feature showcase
- **Large Feature**: Detailed feature spotlight
- **Features Accordion**: Expandable feature descriptions
- **Process**: Step-by-step workflow visualization
- **Reviews**: Customer review showcase
- **Features List**: Comprehensive feature listing
- **Testimonials**: Customer success stories
- **Stats**: Key metrics and achievements
- **Pricing Plans**: Stripe-integrated subscription plans
- **FAQ**: Frequently asked questions

### Additional Pages

- **About**: Company information and team
- **Contact**: Contact form with email integration
- **Terms of Service**: Legal terms page
- **Privacy Policy**: Privacy policy page
- **Cookies**: Cookie policy page

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: Material-UI (MUI) v7
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion alternative)
- **Icons**: Tabler Icons
- **Payments**: Stripe integration
- **Email**: Resend for transactional emails
- **Typography**: Mona Sans font family
- **State Management**: React Query (TanStack Query)

**Why MUI + Tailwind?** We use Tailwind for layout/utility classes and MUI for components and theming. This gives you the best of both worlds: rapid prototyping with utilities and consistent, accessible components out of the box.

## 📦 Getting Started

**From zero to hero in under 5 minutes.** Let's get your SaaS landing page live.

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone or download** the template
2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory:

   ```env
   # Stripe Configuration
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

   # Email Configuration (optional)
   RESEND_API_KEY=re_...
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## ✏️ Customization Guide

**Make it yours in minutes.** Geneva is designed for non-technical founders and experienced developers alike.

### 🎯 Quick Content Updates

#### Hero Section

Edit the hero content in `src/components/sections/hero.tsx`:

```typescript
// Put Section Headline here
const headline = `Your Entire eCommerce`;

// Put Section SubHeadline here
const subHeadline = `Business in One Dashboard`;

// Put Section TrustedBy here
const trustedBy = `Trusted by +300K Creatives`;

// Put Video url here
const videoUrl = 'https://www.youtube.com/watch?v=LXb3EKWsInQ';
```

#### Features Grid

Update features in `src/components/sections/features-grid.tsx`:

```typescript
const features: Feature[] = [
	{
		headline: 'Smart Product Management',
		description:
			'Add, update, and categorize products effortlessly. Bulk actions, variants, and inventory tracking made simple.',
	},
	// Add more features...
];
```

#### Pricing Plans

Modify pricing in `src/components/sections/pricing-plans-stripe.tsx`:

```typescript
const pricingPlans: PricingPlan[] = [
	{
		title: 'Beginner',
		monthlyPrice: 9.99,
		yearlyPrice: 99.99,
		includedFeatures: [
			`AI-Powered Financial Insights`,
			`Seamless Multi-Account Management`,
			// Add your features...
		],
		stripePriceIdMonthly: 'price_your_stripe_price_id',
		stripePriceIdYearly: 'price_your_stripe_price_id',
	},
	// Add more plans...
];
```

### 🎨 Design Customization

#### Colors and Theme

Customize the theme in `src/theme.ts`:

```typescript
// Update brand colors, typography, and component styles
const theme = createTheme({
	palette: {
		// Your custom color palette
	},
});
```

#### Images

Replace images in the `public/` directory:

- `public/light/` - Light theme images
- `public/dark/` - Dark theme images
- `public/global/` - Theme-independent images

#### Fonts

Change the font in `src/app/layout.tsx`:

```typescript
import { Your_Font } from 'next/font/google';

const yourFont = Your_Font({
	variable: '--font-your-font',
	subsets: ['latin'],
});
```

### 📧 Email Setup

#### Contact Form

Configure email settings in `src/app/actions/resend-send-message.ts`:

```typescript
// Update sender/receiver emails and email templates
```

#### Newsletter Subscription

Modify subscription logic in `src/app/actions/kit-add-subscriber.ts`

### 💳 Payment Setup

#### Stripe Configuration

1. Get your Stripe keys from the [Stripe Dashboard](https://dashboard.stripe.com)
2. Update environment variables in `.env.local`
3. Create products and prices in Stripe Dashboard
4. Update price IDs in the pricing plans component

#### Checkout Customization

Modify checkout behavior in `src/app/api/create-checkout-session/route.ts`

### 📱 Adding New Sections

1. **Create component** in `src/components/sections/your-section.tsx`
2. **Add to main page** in `src/app/page.tsx`:

   ```typescript
   import YourSection from '@/components/sections/your-section';

   export default function Page() {
     return (
       <>
         <Hero />
         <YourSection /> {/* Add your new section */}
         <Footer />
       </>
     );
   }
   ```

### 🎭 Animation Customization

**Every section comes alive with smooth animations.** The `RevealSection` component is your secret weapon for engaging user experiences. Here's how it works in the Hero section:

```typescript
// From src/components/sections/hero.tsx
<RevealSection delay={0.1}>
  <Typography variant="h1">
    {headline}{' '}
    <Typography color="accent.main" component={'span'} variant="h1">
      {subHeadline}
    </Typography>
  </Typography>
</RevealSection>

<RevealSection delay={0.3}>
  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5}>
    <GetStarted />
    <VideoButton url={videoUrl} />
  </Stack>
</RevealSection>
```

**Customize any animation:**
```typescript
<RevealSection
  delay={0.1}        // Animation delay in seconds
  direction="up"     // up, down, left, right
  distance={50}      // Distance in pixels
>
  {/* Your content smoothly animates into view */}
</RevealSection>
```

**Pro tip:** Use different delays to create a cascading effect that guides the user's eye through your content.

## 📝 Complete Section Customization Guide

**Every section is built for easy customization.** Here's how to modify each component to match your brand and messaging:

### 🎯 **Hero Section** (`src/components/sections/hero.tsx`)
```typescript
// Main content variables
const headline = `Your Entire eCommerce`;
const subHeadline = `Business in One Dashboard`;
const trustedBy = `Trusted by +300K Creatives`;
const videoUrl = 'https://www.youtube.com/watch?v=LXb3EKWsInQ';

// Avatar array for social proof
const avatars: Avatar[] = [
  { alt: 'Customer Name', src: '/global/person-01.jpg' },
  // Add more customer avatars...
];
```
**Images to replace:** `/light/hero.jpg`, `/dark/hero.jpg`, `/global/person-*.jpg`

### 🤝 **Partners Section** (`src/components/sections/partners.tsx`)
```typescript
const headline = `Trusted by leading brands`;
const partners = [
  '/global/partner-01.svg',
  '/global/partner-02.svg',
  // Add more partner logos...
];
```
**Pro tip:** Use SVG logos for crisp display at any size.

### 🎛️ **Features Grid** (`src/components/sections/features-grid.tsx`)
```typescript
const features: Feature[] = [
  {
    headline: 'Smart Product Management',
    description: 'Add, update, and categorize products effortlessly...',
  },
  // Add up to 3 features for optimal layout
];
```
**Images to replace:** `/light/features-grid-*.png`, `/dark/features-grid-*.png`

### 🎬 **Video Section** (`src/components/sections/video.tsx`)
```typescript
const headline = `See Geneva in Action`;
const subHeadline = `Why Choose Us?`;
const description = `Watch how Geneva transforms your workflow...`;
const videoUrl = 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID';
```
**Images to replace:** `/global/video-poster.jpg`

### 🎠 **Features Slider** (`src/components/sections/features-slider.tsx`)
```typescript
const headline = `Features That Put You in Control`;
const subHeadline = `Everything you need. \n Nothing you don't.`;
const features = [
  {
    image: '/global/feature-slider-01.jpg',
    title: 'Real-time Analytics',
    description: 'Track your business performance in real-time...'
  },
  // Add 3-5 features for best user experience
];
```

### 🚀 **Feature Large** (`src/components/sections/feature-large.tsx`)
```typescript
const headline = `Run Your Store Like a Pro — Without Extra Staff`;
const videoUrl = 'https://www.youtube.com/watch?v=LXb3EKWsInQ';
const features: string[] = [
  `Stay on top of finances with real-time dashboards.`,
  `Track every product, SKU, and variation with ease.`,
  `Understand your financial health in one glance.`,
  `Automate the boring stuff.`,
];
```
**Images to replace:** `/light/feature-large.png`, `/dark/feature-large.png`

### 🪗 **Features Accordion** (`src/components/sections/features-accordion.tsx`)
```typescript
const headline = `Integrations`;
const subHeadline = `Geneva integrates smoothly to keep everything in sync...`;
const duration = 5; // Auto-advance duration in seconds

const features: Feature[] = [
  {
    imageDark: '/dark/screenshot-01.jpg',
    imageLight: '/light/screenshot-01.jpg',
    title: 'Shopify',
    content: 'Seamless integration with your Shopify store...'
  },
  // Add 3-6 integrations
];
```

### 🔄 **Process Section** (`src/components/sections/process.tsx`)
```typescript
const headline = `The Simple Process`;
const items = [
  {
    number: '01',
    title: 'Connect Your Store',
    content: 'Link your existing platforms in under 60 seconds...'
  },
  // Add 3-4 process steps for clarity
];
```

### ⭐ **Reviews Section** (`src/components/sections/reviews.tsx`)
```typescript
const headline = `Our Reviews`;
const subHeadline = `What our customers \n are saying`;
const reviews = [
  {
    stars: 5,
    author: 'Sarah Johnson, CEO of TechStart',
    content: 'Geneva transformed how we manage our entire business...'
  },
  // Add 3-6 reviews for social proof
];
```

### 📋 **Features List** (`src/components/sections/features-list.tsx`)
```typescript
const headline = `What You Gain with Geneva`;
const subHeadline = `Geneva helps your business \n scale with confidence.`;
const features = [
  {
    title: 'Simplified Operations',
    content: 'Stop bouncing between tools. Geneva brings...',
    darkImage: '/dark/screenshot-01.jpg',
    lightImage: '/light/screenshot-01.jpg',
  },
  // Add 3-4 key benefits
];
```

### 💬 **Testimonials** (`src/components/sections/testimonials.tsx`)
```typescript
const content = `Geneva has been a game-changer for our business...`;
const name = `John Smith`;
const job = `Founder & CEO`;
```
**Images to replace:** `/global/testimonials-01.png`

### 📊 **Stats Section** (`src/components/sections/stats.tsx`)
```typescript
const headline = `Numbers That Matter`;
const description = `See why thousands of businesses trust Geneva...`;

const statsRow1 = [
  { headline: '99.9%', description: 'Uptime guaranteed', color: true },
  { headline: '300K+', description: 'Happy customers', color: false },
];

const statsRow2 = [
  { headline: '$2.5M+', description: 'Revenue processed', color: false },
  // Add up to 6 total stats
];
```

### ❓ **FAQ Section** (`src/components/sections/faq.tsx`)
```typescript
const headline = `FAQ`;
const subHeadline = `Questions & Answers`;
const items: Item[] = [
  {
    question: 'What is Geneva?',
    answer: 'Geneva is a modern, responsive dashboard...'
  },
  // Add 5-8 frequently asked questions
];
```

### 📞 **Contact Section** (`src/components/sections/contact.tsx`)
```typescript
const headline = `Contact us`;
```
**Images to replace:** `/global/contact.jpg`
**Form setup:** Contact form integrates with Resend for email delivery.

### ℹ️ **About Section** (`src/components/sections/about.tsx`)
```typescript
const tagline = `About us`;
const headline = `We control the world one line at a time.`;
const description = `Your company story and mission statement...`;
```
**Images to replace:** `/global/about.jpg`

### 🧭 **Header Navigation** (`src/components/sections/header.tsx`)
```typescript
const logoText = `Geneva`;
const navigationLinks = [
  { label: 'Features', href: '#features-1' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '/contact' },
];
```
**Logo images:** `/light/logo-header.png`, `/dark/logo-header.png`

### 🦶 **Footer** (`src/components/sections/footer.tsx`)
```typescript
const headline = `Get Started Today`;
const description = `Join thousands of businesses...`;
const logoText = `Geneva`;
const copyright = `© 2024 Geneva. All rights reserved.`;

// Organize your links into logical groups
const footerLinks1 = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { 
    href: 'https://twitter.com/yourhandle',
    icon: IconBrandTwitter,
    label: 'Twitter'
  },
  // Add your social platforms
];
```
**Logo images:** `/light/logo-footer.png`, `/dark/logo-footer.png`

## 🎨 **Image Organization**

Geneva uses a smart image organization system:

- **`/public/light/`** - Images optimized for light theme
- **`/public/dark/`** - Images optimized for dark theme  
- **`/public/global/`** - Theme-independent images

**Pro tip:** Keep your images optimized and use consistent aspect ratios within each section for the best visual experience.

## 🔧 Build and Deploy

### Building for Production

```bash
npm run build
npm start
```

### Deployment Options

- **Vercel** (recommended): Push to GitHub and connect to Vercel
- **Netlify**: Deploy via git integration
- **Custom hosting**: Build and upload the `out/` folder

## 📁 Project Structure

```
geneva-mui/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Main landing page
│   │   ├── layout.tsx         # Root layout
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   └── api/               # API routes
│   ├── components/
│   │   ├── sections/          # Page sections
│   │   ├── buttons/           # Reusable buttons
│   │   ├── forms/             # Form components
│   │   └── ui/                # UI components
│   ├── lib/                   # Utilities
│   └── theme.ts               # MUI theme configuration
├── public/                    # Static assets
└── package.json
```

## 🎯 SEO Configuration

Update meta information in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
	title: 'Your SaaS - Tagline',
	description: 'Your compelling meta description',
};
```

## 🆘 Common Issues

### Stripe Integration

- Ensure environment variables are properly set
- Use test mode keys during development
- Verify price IDs match your Stripe dashboard

### Email Functionality

- Configure Resend API key for contact forms
- Update email templates for your brand

### Styling Issues

- Check Tailwind CSS configuration
- Ensure MUI theme is properly applied
- Verify responsive breakpoints

## 📞 Support

This template is designed and built by **ThemeFellas**.

For questions about customizing this template:

1. Check the component files for inline comments
2. Review the Material-UI documentation
3. Consult Next.js documentation for framework-specific questions
4. Contact ThemeFellas support: **hi@themefellas.com**

**Need custom development?** We're available for any customization services to tailor this template to your specific needs. Reach out to us at **hi@themefellas.com**

### 🎯 Predefined Customization Packages

#### 🔧 **Advanced Payment Integration**

- Multi-currency Stripe setup
- Custom checkout flows
- Subscription management dashboard
- Promo codes and discount systems
- Tax calculation integration
- Trial period implementation

#### 📧 **Email & CRM Integration**

- Advanced Resend email templates
- Newsletter automation setup
- CRM integration (HubSpot, Mailchimp, etc.)

#### 🚀 **Performance & SEO Package**

- Advanced SEO optimization
- Google Analytics 4 integration
- Page speed optimization
- Schema markup implementation
- Sitemap and robots.txt setup
- Core Web Vitals optimization

#### 🎯 **Conversion Optimization**

- A/B testing setup
- Heat mapping integration
- Conversion tracking implementation
- User journey analysis tools
- Custom analytics implementation

#### 🌐 **Multi-language Support**

- Internationalization (i18n) setup
- Content translation management
- Multi-currency support
- Region-specific customizations

## 📄 License

This template is provided as-is for your SaaS projects. Customize and deploy as needed for your business.

---

**Ready to launch your SaaS?** Start customizing your Geneva template today! 🚀
