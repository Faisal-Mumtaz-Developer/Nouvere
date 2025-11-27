import { useParams } from "react-router-dom";
import { services } from "../data/servicesData";
import ServiceForm from "../components/ServiceForm";
import Accordion from "../components/Accordion";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <p>Service not found</p>;

  return (
    <div className="service-page mx-auto">
      {/* First Section: Text + Form */}
      <section className="first-section px-[100px] flex flex-col items-center md:flex-row gap-20 my-8">
        <div className="left w-[60%]">{service.firstSectionText}</div>
        <div className="right w-[40%]">
          <ServiceForm />
        </div>
      </section>

      {/* Other Sections */}
      {service.sections.map((section, idx) => {
        switch (section.type) {
          case "text":
            return (
              <div key={idx} className="my-6 text-black mt-20">
                {section.content}
              </div>
            );

          case "accordion":
            return (
              <div key={idx} className="my-6 px-[100px]">
                <h2 className="text-[50px] font-semibold mb-2 text-center">{section.title}</h2>
                <Accordion items={section.items!} />
              </div>
            );

          case "component":    // <-- ADD THIS CASE
            return (
              <div key={idx} className="my-6">
                {section.component}
              </div>
            );

          case "image":
            return (
              <div key={idx} className="my-6">
                <img src={section.image} alt={section.title} />
              </div>
            );

            case "component":    // <-- ADD THIS CASE
            return (
              <div key={idx} className="my-6">
                {section.component}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default ServiceDetail;
