import { useEffect } from 'react';
import { Page } from '../types';

interface SEOProps {
  page: Page;
  subTitle?: string;
}

export default function SEO({ page, subTitle }: SEOProps) {
  useEffect(() => {
    let title = 'GY Marketing Agency | Digital Marketing & Web Development';
    let description = 'GY Marketing Agency offers Meta Ads, Google Ads, website development, app development, SEO and social media growth solutions for modern businesses.';

    switch (page) {
      case 'home':
        title = 'GY Marketing Agency | Digital Marketing & Web Development';
        description = 'GY Marketing Agency offers Meta Ads, Google Ads, website development, app development, SEO and social media growth solutions for modern businesses.';
        break;
      case 'about':
        title = 'About Us | GY Marketing Agency';
        description = 'Learn more about GY Marketing Agency, our professional mission, vision, and our core customer growth philosophies.';
        break;
      case 'services':
        title = 'Our Services | Professional Digital Marketing & Development';
        description = 'Explore our premium digital marketing services including Meta Ads, Google Ads, SEO, and custom high-speed web and mobile app development.';
        break;
      case 'meta-ads':
        title = 'Meta Ads Services | High-Performance Social Ads | GY Marketing';
        description = 'Reach your ideal audience and build high-converting customer loops with customized strategic Facebook and Instagram advertising campaigns.';
        break;
      case 'google-ads':
        title = 'Google Ads & PPC Management | Turn Search Intent Into Sales';
        description = 'Connect with prospects actively searching for your service. High-converting Google Search, Display, and YouTube PPC marketing campaigns.';
        break;
      case 'website-development':
        title = 'Custom Website Development | Premium UI/UX | GY Marketing';
        description = 'Websites designed to make your business stand out. Seamless, fast, responsive e-commerce, WordPress, and custom React applications.';
        break;
      case 'app-development':
        title = 'Premium App Development | Scalable Mobile Apps';
        description = 'Build powerful, scalable, and intuitive iOS and Android mobile applications customized to solve your core business challenges.';
        break;
      case 'seo':
        title = 'SEO Services | Search Engine Optimization Specialists';
        description = 'Improve your organic brand visibility, search keyword rankings, and drive premium traffic with our bespoke SEO strategies.';
        break;
      case 'social-media-growth':
        title = 'Social Media Growth & Brand Management | GY Marketing';
        description = 'Build a premium brand people remember. Customized social content planning, creative design, and strategic audience engagement.';
        break;
      case 'portfolio':
        title = 'Our Work & Portfolio | GY Marketing Agency';
        description = 'Explore real-world projects and case studies showcasing our web development, advertising campaigns, and digital growth achievements.';
        break;
      case 'case-study':
        title = subTitle ? `${subTitle} Case Study | GY Marketing` : 'Case Study Details | GY Marketing Agency';
        description = 'Read a detailed overview of the project challenge, our strategic digital approach, technologies used, and the final outcomes.';
        break;
      case 'contact':
        title = 'Get Free Consultation | Contact GY Marketing Agency';
        description = 'Discuss your business growth goals. Complete our contact form to schedule your free custom digital marketing consultation.';
        break;
      case 'privacy-policy':
        title = 'Privacy Policy | GY Marketing Agency';
        description = 'Review the GY Marketing Agency privacy policy regarding contact forms, data collection, and safety protocols.';
        break;
      case 'terms-conditions':
        title = 'Terms & Conditions | GY Marketing Agency';
        description = 'Read the terms and conditions for utilizing the GY Marketing Agency website and professional digital services.';
        break;
      case 'refund-policy':
        title = 'Refund & Cancellation Policy | GY Marketing Agency';
        description = 'Read our transparent project cancellation, advance payments, and revision policy guidelines.';
        break;
      case 'disclaimer':
        title = 'Disclaimer & Performance Scope | GY Marketing Agency';
        description = 'Review our marketing performance disclaimer. Transparent facts about digital marketing results, SEO times, and platform dependencies.';
        break;
      case 'thank-you':
        title = 'Thank You | Inquiry Submitted | GY Marketing Agency';
        description = 'Thank you for contacting GY Marketing Agency. Our senior strategy consultant will reach out shortly.';
        break;
      case '404':
        title = 'Page Not Found | GY Marketing Agency';
        description = 'The page you are looking for does not exist. Return to GY Marketing Agency home page.';
        break;
    }

    // Set document title
    document.title = title;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Set og:title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    // Set og:description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
  }, [page, subTitle]);

  return null;
}
