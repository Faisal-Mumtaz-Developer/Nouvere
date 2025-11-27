import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";



export interface AccordionItem {
  heading: string;       // matches servicesData.tsx
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion border rounded-md divide-y" style={{
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(124, 58, 237, 0.3) 50%, rgba(109, 40, 217, 0.2) 100%)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  backdropFilter: "blur(7px)"
                }}>
      {items.map((item, idx) => (
        <div key={idx}>
          <button
            className="w-full text-white text-left px-4 py-3 transition flex justify-between items-center " style={{
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(124, 58, 237, 0.3) 50%, rgba(109, 40, 217, 0.2) 100%)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  backdropFilter: "blur(7px)"
                }}
            onClick={() => toggle(idx)}
          >
            <span>{item.heading}</span>
             <span>{openIndex === idx ? <FaAngleUp /> : <FaAngleDown />}</span>
          </button>
          {openIndex === idx && (
            <div className="p-4 bg-[#050300] text-white border-t">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
