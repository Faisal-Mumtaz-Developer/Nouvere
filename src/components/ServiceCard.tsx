import { Link } from "react-router-dom";

import ServiceIcon from '../assets/strategy-icon.png';
import ServiceIcon2 from '../assets/strategy-icon.png';
import ServiceIcon3 from '../assets/strategy-icon.png';
import ServiceIcon4 from '../assets/strategy-icon.png';
import ServiceIcon5 from '../assets/strategy-icon.png';
import ServiceIcon6 from '../assets/strategy-icon.png';
import BrandManagement from '../assets/brand-management.webp';
import WebDevelopment from '../assets/web-development.webp';
import AppDevelopment from '../assets/mobile-app-development.webp';
import SEO from '../assets/seo.webp';
import SocialMedia from '../assets/social-media-marketin.webp';
import PPC from '../assets/ppc.webp';
import UIUX from '../assets/ui-ux.webp';
import ContentServices from '../assets/content-management.webp';
import GraphicDesign from '../assets/graphic-design.webp';
import SEM from '../assets/search-engine-marketing.webp';
import YoutubeMarketing from '../assets/youtube-marketing.webp';
import CRM from '../assets/crm.webp';
import VideoProduction from '../assets/video-production.webp';
import AnimationServices from '../assets/animation-services.webp';
import EmailMarketing from '../assets/email-marketing.webp';
import CustomServices from '../assets/custom-services.webp';


const ServiceCard = () => {
  return (
    <>
    <div className="w-full min-h-screen bg-cover bg-center bg-no-repeat p-6 md:p-12"
          style={{ backgroundImage: "url('/src/assets/services-bg.webp')" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 items-stretch">
          {[
            {
              title: "Brand Management",
              slug: "brand-management",
              desc: "Building strategic frameworks that define, position, and strengthen brands for long-term recognition and market leadership.",
              icon: ServiceIcon,
              images: [BrandManagement],
            },
            {
              title: "Website Development",
              slug: "website-development",
              desc: "Developing enterprise-grade websites built for scalability, performance, and user-centric engagement across devices.",
              icon: ServiceIcon2,
              images: [WebDevelopment],
            },
            {
              title: "Mobile App Development",
              slug: "app-development",
              desc: "Apps that are intuitive and future-ready mobile that connect businesses with customers anywhere, anytime.",
              icon: ServiceIcon3,
              images: [AppDevelopment],
            },
            {
              title: "Search Engine Optimization (SEO)",
              slug: "seo",
              desc: "Designing data-driven optimization strategies that maximize visibility, credibility, and organic growth.",
              icon: ServiceIcon4,
              images: [SEO],
            },
            {
              title: "Social Media Marketing",
              slug: "social-media-marketing",
              desc: "People-driven social media campaigns that amplify presence and foster authentic brand communities.",
              icon: ServiceIcon5,
              images: [SocialMedia],
            },
            {
              title: "Pay Per Click (PPC)",
              slug: "ppc",
              desc: "Targeted performance marketing engineered to deliver immediate, measurable ROI, and long-term success.",
              icon: ServiceIcon6,
              images: [PPC],
            },
            {
              title: "UI/UX Design Services",
              slug: "ui-ux-designs",
              desc: "Delivering human-centered digital experiences designed to simplify complexity and inspire interaction.",
              icon: ServiceIcon6,
              images: [UIUX],
            },
            {
              title: "Content & Creative Services",
              slug: "content-creative-services",
              desc: "Purpose-built narratives and creative assets that drive engagement, awareness, and influence decisions.",
              icon: ServiceIcon6,
              images: [ContentServices],
            },
            {
              title: "Graphic Design ",
              slug: "graphic-designs",
              desc: "Boosting impactful visual communication that strengthens identity and elevates brand perception.",
              icon: ServiceIcon6,
              images: [GraphicDesign],
            },
            {
              title: "Search Engine Marketing (SEM)",
              slug: "sem",
              desc: "Strategic paid advertising solutions that optimize reach, relevance, and conversions for startups and enterprise-grade businesses.",
              icon: ServiceIcon6,
              images: [SEM],
            },
            {
              title: "YouTube Marketing",
              slug: "youtube-marketing",
              desc: "Content-driven campaigns that leverage video storytelling to boost visibility and engagement.",
              icon: ServiceIcon6,
              images: [YoutubeMarketing],
            },
            {
              title: "CRM solution services",
              slug: "crm",
              desc: "Automated, data-led campaigns that strengthen relationships and enhance lifetime customer value.",
              icon: ServiceIcon6,
              images: [CRM],
            },
            {
              title: "Video production services",
              slug: "video-production",
              desc: "",
              icon: ServiceIcon6,
              images: [VideoProduction],
            },
            {
              title: "Animation Services",
              slug: "animation-services",
              desc: "High-performance interfaces that merge usability with flawless functionality.",
              icon: ServiceIcon6,
              images: [AnimationServices],
            },
            {
              title: "Email Marketing",
              slug: "email-marketing",
              desc: "Secure, scalable systems engineered for reliability and efficiency.",
              icon: ServiceIcon6,
              images: [EmailMarketing],
            },
            {
              title: "Custom Services",
              slug: "custom-services",
              desc: "Conversion-focused platforms designed to optimize digital retail experiences.",
              icon: ServiceIcon6,
              images: [CustomServices],
            },
          ].map((service, idx) => (
            <div
              key={idx}
               className="bg-black/40 backdrop-blur-sm rounded-xl px-5 py-6 flex flex-col justify-between h-full"
                style={{
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(124, 58, 237, 0.3) 50%, rgba(109, 40, 217, 0.2) 100%)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  backdropFilter: "blur(7px)"
                }}
            >
              {/* Title + Icon */}
              <div className="flex items-center gap-2 mb-2 w-full justify-between">
               <Link
                to={`/services/${service.slug}`}
                className="text-[24px] font-normal text-left"
              >
                {service.title}
              </Link>

                <img
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  className="w-[60px] h-[60px]"
                />
              </div>


              {/* Description */}
              <p className="text-sm text-left font-normal w-full mt-6 mb-4 flex-1">{service.desc}</p>

              {/* Images */}
              <div className="mt-4 w-full grid grid-cols-1 gap-2">
                {(Array.isArray(service.images) ? service.images : [service.images]).map(
                  (img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${service.title} Image ${i + 1}`}
                      className="w-[417px] h-[254px] object-cover rounded-md"
                    />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ServiceCard
