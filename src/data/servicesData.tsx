import type { ReactNode } from "react";
import Testimonial from "../components/Testimonial";
import ChooseUs from '../assets/choose-us.webp'
import Branding from '../assets/professional-branding.jpg'
import { Link } from "react-router-dom";

export interface SectionType {
  type: "text" | "accordion" | "image" | "component";
  content?: ReactNode;                                // For text sections
  title?: string;   
  component?: ReactNode;                                  // For accordion or tabs
  items?: { heading: string; content: ReactNode }[]; // For accordion
   testimonial?: { name: string; content: ReactNode }[];
  image?: string;                                     // For image sections
}


export interface ServiceType {
  slug: string;
  title: string;
  firstSectionText: ReactNode;
  sections: SectionType[];
}

export const services: ServiceType[] = [
  {
    slug: "brand-management",
    title: "Brand Management",
    firstSectionText: (
      <div>
        <h1 className="text-[32px] font-bold">Be Recognizable. Be Relevant. Be YOU </h1>
        <h4 className="text-[22px] italic mt-2 font-normal">Brand management services built on impactful strategies and competence.</h4>
        <p className="text-[16px] mt-5">At Nouvere, we help businesses build, protect, and grow their brand identity through comprehensive brand management services. As a full-scale brand consulting firm, we take a strategic approach to shaping how your audience perceives your business across every touchpoint. From developing a strong brand strategy to maintaining consistent communication, our team ensures your brand stands out with clarity, credibility, and impact. Whether you're a startup looking to establish your identity or an established company aiming to refresh your brand presence, Nouvere brings experience, creativity, and data-driven insights to give your brand a boost in a competitive marketplace.</p>
      </div>
    ),
    sections: [
      {
        type: "text",
        content: (
          <div className="grid grid-cols-2 items-center text-white gap-10 px-[100px]">
            <div>
              <img src={Branding} alt="" className="w-auto"/>
            </div>
            <div>
              <h4 className="text-[40px] font-bold">Why is Professional Brand Management Important?</h4>
              <p>In today’s digital-first world, your brand is more than just a logo — it’s the story, reputation, and emotional connection you build with your audience. Partnering with a professional brand development agency ensures your brand is guided with expertise, consistency, and long-term vision.</p>
              <h5>Here’s why working with experts in business brand management truly matters:</h5>
              <ul className="mt-5 list-disc pl-7 leading-10 italic">
                <li>Strong brand presence strengthens credibility</li>
                <li>Strategic direction for your business</li>
                <li>Crisis and reputation management</li>
                <li>Scalable growth</li>
                <li>Saves time and resources</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        type: "text",
        content: (
          <div className="text-white text-center bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: "url('/src/assets/packages-bg.png')" }}>
            <h4 className="text-[32px] font-bold">Our Approach to Managing Your Brand</h4>
            <p className="text-[20px] font-normal w-[70%] mx-auto">At Nouvere, our approach combines creativity, research, and strategic execution. As a results-driven brand strategy services provider, we craft a clear roadmap tailored to your business goals. We don’t just manage your brand — we nurture and grow it.</p>
            <h5 className="mt-10">Here’s how we help your brand thrive:</h5>
            <div className="grid grid-cols-2 gap-20 mt-10">
              <div className="w-[70%] mx-auto">
                <h4 className="text-[24px]">Brand Strategy Management</h4>
                <p className="text-[16px] mt-5">We create a clear strategic roadmap that defines your purpose, positioning, messaging, and long-term vision. This is the foundation of our brand strategy services, ensuring your business communicates with clarity and consistency. </p>
              </div>
              <div className="w-[70%] mx-auto">
                <h4 className="text-[24px]">Brand Identity Design And Enhancement</h4>
                <p className="text-[16px] mt-5">From logos to visual guidelines, we shape and refine the elements that make your brand recognizable.  This includes visual identity creation, redesigns, and a complete brand identity</p>
              </div>
              <div className="w-[70%] mx-auto">
                <h4 className="text-[24px]">Brand Performance Monitoring</h4>
                <p className="text-[16px] mt-5">Our team tracks brand perception, engagement, and online reputation to maintain a positive brand image. This includes sentiment analysis, competitor tracking, and brand progress reports. </p>
              </div>
              <div className="w-[70%] mx-auto">
                <h4 className="text-[24px]">Brand Expansion And Rebranding Services</h4>
                <p className="text-[16px] mt-5">From reworking existing brands to expanding into new markets, we guide your business through every phase of digital transformation with professional support. </p>
              </div>
            </div>
          </div>
        )
      },
      {
        type: "text",
        content: (
          <div className="grid grid-cols-2 items-center text-white gap-10 px-[100px]">
            <div>
              <img src={ChooseUs} alt="" className="w-auto"/>
            </div>
            <div>
              <h4 className="text-[40px] font-bold">Why Choose Us?</h4>
              <ul className="mt-5 list-disc pl-7 leading-10 italic">
                <li>Stronger brand identity and recognition</li>
                <li>Improved audience trust and loyalty</li>
                <li>Consistent messaging across all customer touchpoints</li>
                <li>Enhanced industry authority and credibility</li>
                <li>A scalable brand foundation for long-term growth</li>
                <li>Clear positioning that differentiates you from competitors</li>
              </ul>
            </div>
          </div>
        )
      },
      {
      type: "component",
      component: <Testimonial />,
      },
      {
          type: "accordion",
          title: "FAQ's",
          items: [
              { heading: "What is included in brand strategy services?", 
                content: <div>
                  <p className="text-white">People often ask what a brand strategy actually consists of. In simple words, it’s the blueprint of your entire brand. Our brand strategy services include audience research, competitor analysis, brand positioning, storytelling, tone of voice, communication guidelines, and long-term vision planning.</p>
                <p className="text-white mt-1">
                This strategy guides every decision you make — how you market, how you communicate, how you design, and how you build customer relationships. A strong strategy makes your brand clearer, more recognizable, and more impactful.
                </p>
                </div> },
              { heading: "Is there a difference between a brand consulting firm and a brand development agency?", 
              content: 
              <div>
                <p className="text-white">
                  Yes — and it’s a common question online. A brand consulting firm analyzes your brand, identifies gaps, and gives expert recommendations to improve your identity and market presence.
                </p>
                <p className="text-white mt-1">
                  A brand development agency takes things further by creating the actual elements of your brand — such as your logo, design system, website, messaging, and marketing assets.
                </p>
                <p className="text-white mt-1">
                  We offer both brand consulting and full brand development, so you get strategy + execution under one roof.
                </p>
              </div> },
              { heading: "How much do brand management services cost?", 
              content: 
              <div>
                <p className="text-white">
                  One of the most searched questions is about pricing. The cost of professional brand management depends on how much work your brand needs — whether it’s ongoing management, a full rebrand, or strategy development.
                </p>
                <p className="text-white mt-1">
                  Small businesses may only need basic brand identity and messaging, while larger companies require deeper brand strategy, full creative execution, and long-term brand supervision. We create custom packages that match your business goals, industry, and budget so you only pay for what you actually need.
                </p>
              </div> },
              { heading: "How long does it take to build or refresh a brand?", 
              content: 
              <div>
                <p className="text-white">
                  This is another question people frequently search. The duration depends on the complexity of your project. A simple refresh — updated visuals, minor messaging edits — can take a few weeks. A complete brand overhaul that includes strategy, identity, guidelines, website, and brand rollout may take a few months.
                </p>
                <p className="text-white mt-1">
                  As a full-service brand development agency, we work efficiently while maintaining quality. We also keep you involved throughout the process so your brand feels aligned with your vision and values.
                </p>
              </div> },
              { heading: "Can brand management services help my business grow faster?", 
              content: 
              <div>
                <p className="text-white">
                  Absolutely — and many people search this before investing. Effective business brand management improves audience recognition, builds customer trust, and strengthens your overall market presence. When your brand is clear, consistent, and positioned correctly, all your marketing performs better.
                </p>
                <p className="text-white mt-1">
                  A strong brand makes customers feel confident buying from you. It also reduces long-term marketing costs because recognition and loyalty replace constant paid promotion. In short, a strong brand grows faster.
                </p>
              </div> },
          ],
        },
        {
        type: "text",
        content: (
          <div className="px-[100px] text-white">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl px-5 py-6 flex flex-col justify-between h-full"  style={{
          background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(124, 58, 237, 0.3) 50%, rgba(109, 40, 217, 0.2) 100%)",
          border: "1px solid rgba(139, 92, 246, 0.3)",
          backdropFilter: "blur(7px)"
        }}>
      <div className="w-[80%] mx-auto text-center">
        <div className="relative after:absolute after:-bottom-5 after:h-1 after:w-fullafter:bg-blue-600 after:left-0 after:right-0 after:mx-auto after:rounded-full">
          <h2 className="text-white text-4xl font-bold !leading-tight">Let’s Set Your Brand Journey in Motion!</h2>
        </div>
        <div className="mt-12">
          <p className="text-gray-50 text-base">A number of firms have put their trust in us. We have returned that trust by creating a research-driven brand image that always excels within the industry. With our brand management services, you’ll have clarity, consistency, and a partner committed to keeping your brand sharp and relevant.</p>
          <p className="text-gray-50 text-base mt-5">Whether you’re exploring brand strategy services for the first time or searching for a brand consulting firm to refine what you already have, our team is ready to help. </p>
          <p className="text-gray-50 text-base mt-5">Book your free brand audit today. Let’s co-create a brand that people can’t ignore.</p>
        </div>

        <div className="flex max-sm:flex-col justify-center gap-6 mt-12 max-w-xs mx-auto">
          <Link
            to="/"
            className="min-w-[140px] rounded-sm cursor-pointer px-4 py-2.5 text-sm tracking-wider font-medium outline-none border text-white border-[#C655F9] bg-[#C655F9] hover:bg-transparent hover:text-[#C655F9] transition-all duration-300"
          >
            Try now
          </Link>
        </div>
      </div>
    </div>
          </div>
        )
      }
    ]
  },
  {
    slug: "website-development",
    title: "Website Development",
    firstSectionText: (
      <div>
        <h1>Website Development</h1>
        <p>Intro paragraph about your website development services...</p>
      </div>
    ),
    sections: [
      {
        type: "text",
        content: (
          <div>
            <h2>Overview</h2>
            <p>Details about website development...</p>
          </div>
        )
      }
    ]
  },
  {
    slug: "app-development",
    title: "App Development",
    firstSectionText: (
      <div>
        <h1>App Development</h1>
        <p>Intro paragraph about app development services...</p>
      </div>
    ),
    sections: [
      {
        type: "text",
        content: (
          <div className="grid grid-cols-2">
            <h2>Mobile App Development</h2>
            <p>Details about mobile app development process...</p>
          </div>
        )
      },
      {
        type: "accordion",
        title: "App Development Steps",
        items: [
          { heading: "Planning", content: <p className="text-black">Step 1 details...</p> },
          { heading: "Design", content: <p className="text-black">Step 2 details...</p> },
          { heading: "Deployment", content: <p className="text-black">Step 3 details...</p> }
        ]
      }
    ]
  },
  // Add remaining 13 services in the same structure
];
