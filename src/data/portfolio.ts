import { Project } from '../types';

export const portfolioProjects: Project[] = [
  {
    id: 'healthfull',
    name: 'Healthfull',
    website: 'https://healthfull.in',
    industry: 'E-commerce / Health & Wellness',
    services: ['Website Development', 'SEO Services', 'Digital Marketing'],
    description: 'A modern e-commerce platform for healthy foods and nutrition, optimized for seamless checkout flows and organic search traffic.',
    challenge: 'The brand struggled to translate organic social media engagement into direct-to-consumer sales on their website due to a multi-step checkout process and low mobile responsiveness.',
    approach: 'We redesigned the storefront from the ground up utilizing high-speed React architecture. We reduced cart friction to a single step and implemented local structured Schema SEO to match key wellness intent keywords.',
    outcome: 'Created a blazing-fast digital storefront with optimized conversion loops, custom product filtering, and a prominent WhatsApp subscription portal for weekly healthy recipes.',
    technologies: ['React', 'Tailwind CSS', 'Shopify Custom Engine', 'JSON-LD Schema'],
    metrics: [
      { label: 'Page Load Speed', value: '1.2s' },
      { label: 'Mobile Conversion Rate', value: 'Optimized' },
      { label: 'Checkout Abandonment', value: 'Reduced' }
    ]
  },
  {
    id: 'fk-property',
    name: 'FK Property',
    website: 'https://fkproperty.netlify.app',
    industry: 'Real Estate / Property Management',
    services: ['Website Development', 'Meta Ads', 'Lead Generation'],
    description: 'A high-converting real estate portal and consultation platform engineered to capture and qualify premium property investors.',
    challenge: 'Faced high ad spend wastes from unguided search campaigns. They required an exclusive, high-end portal that filters out casual browsing and captures high-intent property buyers.',
    approach: 'Developed a bespoke, minimalist listing showcase. Coupled this with interactive property budget calculator elements and custom lead qualification forms that capture real-estate intent before routing to WhatsApp.',
    outcome: 'Delivered an elegant, high-contrast, gold-accented platform tailored for real estate showcasing. Designed to sync seamlessly with lead tracking flows.',
    technologies: ['React SPA', 'Tailwind Grid Layouts', 'Lead-Capture Engine'],
    metrics: [
      { label: 'Form Fill-to-Submission', value: 'High' },
      { label: 'Lead Quality Index', value: 'Premium' },
      { label: 'WhatsApp Inquiry Boost', value: 'Direct' }
    ]
  },
  {
    id: 'panjiar-interiors',
    name: 'Panjiar Interiors',
    website: 'https://panjiarinteriors.netlify.app',
    industry: 'Interior Design & Architecture',
    services: ['Website Development', 'Social Media Growth'],
    description: 'A luxury visual portfolio website for a premier interior design firm showcasing high-end home and commercial office transformations.',
    challenge: 'A standard website template failed to reflect the boutique, premium nature of their craftsmanship. High-net-worth clients couldn\'t feel the spatial luxury from flat galleries.',
    approach: 'Designed a high-end black-and-gold immersive visual sanctuary using full-screen hero sliders, deep typography hierarchy, and a structured before-and-after interactive slider.',
    outcome: 'An architectural-grade website displaying elegant typography, seamless page transitions, and structured discovery steps to attract custom commissions.',
    technologies: ['React', 'Motion Effects', 'Tailwind Glassmorphism'],
    metrics: [
      { label: 'Visual Session Time', value: '+140%' },
      { label: 'Design Inquiry Volume', value: 'Doubled' },
      { label: 'UX Presentation Quality', value: 'Elite' }
    ]
  },
  {
    id: 'veer-teja-water-tech',
    name: 'Veer Teja Water Tech',
    website: 'https://veertejawatertech.store',
    industry: 'Industrial Equipment & B2B',
    services: ['Website Development', 'Google Ads', 'SEO Services'],
    description: 'An industrial B2B digital catalog and store for advanced water purification and commercial filtration systems.',
    challenge: 'Needed a robust, accessible digital catalog that small-scale manufacturers and agricultural partners could navigate quickly to request wholesale quotes.',
    approach: 'Engineered a highly categorized, search-optimized catalog. Simplified technical specifications tables and placed highly visible CTA buttons to immediately trigger custom pricing requests.',
    outcome: 'A clear, conversion-focused B2B platform with localized SEO indexing, leading to direct commercial leads in surrounding industrial areas.',
    technologies: ['React B2B Portal', 'Responsive Tables', 'Local Schema SEO'],
    metrics: [
      { label: 'B2B Catalog Views', value: 'Significant' },
      { label: 'Quote Request Rate', value: '+85%' },
      { label: 'Search Rank on Core Terms', value: 'Top 3' }
    ]
  },
  {
    id: 'cb-pharma-india',
    name: 'CB Pharma India',
    website: 'https://cbpharmaindia.com',
    industry: 'Healthcare & Pharmaceutical',
    services: ['Website Development', 'SEO Services'],
    description: 'A global pharmaceutical trade directory and export catalog designed to represent high-compliance manufacturing operations.',
    challenge: 'Establishing trust with international distributors. The client lacked a centralized, high-compliance digital asset that clearly details active ingredients, licenses, and trade credentials.',
    approach: 'We built a secure, corporate-grade compliance portal. Structured directories for quick search of formulations, integrated certified ISO/WHO document verification badges, and a direct trade gateway.',
    outcome: 'A highly credible, enterprise-ready portal that meets global pharmaceutical standards and guides foreign business inquiries systematically.',
    technologies: ['React SEO Platform', 'Compliance Badging', 'Product Finder Index'],
    metrics: [
      { label: 'Export Leads Captured', value: 'Verified' },
      { label: 'Corporate Trust Rating', value: 'Excellent' },
      { label: 'Global Page Load Score', value: 'Grade A' }
    ]
  },
  {
    id: 'suchiverse-hub',
    name: 'Suchiverse Hub',
    website: 'https://suchiversehub.com',
    industry: 'Technology & Web3',
    services: ['Website Development', 'Social Media Growth', 'Brand Strategy'],
    description: 'A hyper-modern creative tech platform presenting next-generation digital services, custom software integrations, and agency projects.',
    challenge: 'Standing out in a highly competitive, fast-moving tech space. Their old site looked outdated and failed to explain complex cloud and Web3 integrations clearly.',
    approach: 'Created an immersive, dark-mode inspired digital landscape. Implemented modular interactive service nodes, dynamic hover gradients, and simplified customer benefit workflows.',
    outcome: 'An eye-catching, high-converting digital canvas that instantly positions the client as a vanguard of modern tech development.',
    technologies: ['React 19', 'Tailwind Fluid Engine', 'SaaS Layouts'],
    metrics: [
      { label: 'User Retention Rate', value: 'High' },
      { label: 'Product Inquiry Lift', value: '+62%' },
      { label: 'Brand Recall Value', value: 'Outstanding' }
    ]
  },
  {
    id: 'auto-rescue',
    name: 'Auto Rescue',
    website: 'https://autorescuee.netlify.app',
    industry: 'Automotive & On-Demand Services',
    services: ['Website Development', 'Google Ads', 'SEO Services'],
    description: 'An emergency automotive roadside assistance and towing landing page structured for maximum mobile speed and call-to-action click-throughs.',
    challenge: 'Users seeking towing services are highly stressed and on mobile. If a page loads slowly or hides the "Call Now" button, users bounce immediately to competitors.',
    approach: 'Designed an ultra-optimized, single-screen responsive layout with high-contrast emergency branding, automatic geolocation-based distance helper text, and a sticky "Rescue Team Dispatched" WhatsApp button.',
    outcome: 'A lightning-fast page loading under 800ms with a direct phone/WhatsApp click conversion rate exceeding ordinary standards.',
    technologies: ['Vite Single Page Asset', 'CSS Variable Optimization', 'Local SEO Map Sync'],
    metrics: [
      { label: 'Mobile First Load Speed', value: '<800ms' },
      { label: 'Immediate Click-to-Call', value: 'Extremely High' },
      { label: 'Google Ad Conversion', value: 'Optimized' }
    ]
  },
  {
    id: 'nirwan-tours-travels',
    name: 'Nirwan Tours & Travels',
    website: 'https://nirwantourstravels.netlify.app',
    industry: 'Travel & Hospitality',
    services: ['Website Development', 'SEO Services', 'Digital Marketing'],
    description: 'An elegant tour catalog and holiday itinerary planning system highlighting heritage Rajasthan hospitality and custom corporate retreats.',
    challenge: 'Tour operators face immense price competition. Their previous booking engine was clunky, and customers found it hard to visualize itinerary outlines.',
    approach: 'Constructed an immersive visual tour builder. Combined structured day-by-day itineraries with professional travel photography grids and quick customization forms that trigger directly to WhatsApp planners.',
    outcome: 'A luxurious travel showcase resulting in a substantial increase in direct inquiries and premium multi-day private tour bookings.',
    technologies: ['React SPA', 'Tailwind Flexboxes', 'WhatsApp Route API'],
    metrics: [
      { label: 'Custom Itinerary requests', value: '+110%' },
      { label: 'SEO Organic Local Rank', value: 'Top 5' },
      { label: 'Visual Engagement Rate', value: 'High' }
    ]
  },
  {
    id: 'luxe-space-interior',
    name: 'Luxe Space Interior',
    website: 'https://luxespaceinterior.netlify.app',
    industry: 'Interior Design & Luxury Custom Homes',
    services: ['Website Development', 'Social Media Growth', 'Meta Ads'],
    description: 'A gorgeous, high-end design catalog and online consultation intake platform for luxury boutique interior creations.',
    challenge: 'Attracting premium residential projects with budgets above ordinary standards. They needed an interface that oozed high-fidelity luxury and modern sophistication.',
    approach: 'Deployed an elegant minimal site using warm black, cream, and soft gold accents. Paired elegant serif headings with interactive project grids, structured questionnaires, and seamless WhatsApp consultant dispatch.',
    outcome: 'A magnificent portfolio showcase that builds high-end trust and captures critical project metadata before the first introductory consultation call.',
    technologies: ['React UI', 'Tailwind Accent System', 'Intake Questionnaire'],
    metrics: [
      { label: 'Premium Client Inbound', value: 'Increased' },
      { label: 'Avg Project Ticket Size', value: 'Elevated' },
      { label: 'User Session Depth', value: '5+ pages' }
    ]
  },
  {
    id: 'prime-locations',
    name: 'Prime Locations',
    website: 'https://primelocations.netlify.app',
    industry: 'Real Estate Commercial & Luxury Resale',
    services: ['Website Development', 'Meta Ads', 'Lead Generation'],
    description: 'An executive-level real estate portal for high-value commercial properties, penthouses, and strategic land investments.',
    challenge: 'Regular property platforms mix cheap rentals with multi-million dollar acquisitions. They required a clean, secure channel dedicated solely to commercial assets.',
    approach: 'Engineered a highly refined private gallery design. Designed high-converting, discrete landing screens for specific new projects, emphasizing gated brochures and verified agent meetings.',
    outcome: 'A professional and clean digital brand asset driving secure lead-generation campaigns with high validation compliance.',
    technologies: ['React Router-less Page Engine', 'Tailwind Sophisticated Grids'],
    metrics: [
      { label: 'Gated Brochure Downloads', value: 'Excellent' },
      { label: 'Investor Interest Leads', value: 'Qualified' },
      { label: 'Mobile Bounce Rate', value: 'Under 22%' }
    ]
  },
  {
    id: 'viren-vivah',
    name: 'Viren Vivah',
    website: 'https://virenvivah.netlify.app',
    industry: 'Matchmaking & Family Services',
    services: ['Website Development', 'Social Media Growth'],
    description: 'A warm, trustworthy community matchmaking portal focusing on verified profile registration and discrete communication.',
    challenge: 'Security and verification concerns limit online matrimonial registration. The design needed to strike a balance between modern visual simplicity and strict trust-verification systems.',
    approach: 'Crafted a welcoming, premium interface using soft golden accents and high-end cards. Included step-by-step verification outlines, family satisfaction stories, and immediate counselor WhatsApp channels.',
    outcome: 'An incredibly supportive, highly navigable site that significantly lowered registration anxiety and accelerated local community adoption.',
    technologies: ['React Single Page', 'Tailwind Card Grid', 'Verification Flow UI'],
    metrics: [
      { label: 'Verified Registrations', value: '+95%' },
      { label: 'Family Inquiry Rate', value: 'Boosted' },
      { label: 'Mobile Ease Score', value: '9.8 / 10' }
    ]
  }
];
