import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { VscTriangleDown } from "react-icons/vsc";
import GetQuoteModal from "./GetQuoteModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile menu
  const [isServicesOpen, setIsServicesOpen] = useState(false); // dropdown
  const [isModalOpen, setIsModalOpen] = useState(false); // MODAL
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);

      if (desktop) {
        setIsServicesOpen(false); // close dropdown
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-[#0E011C33] w-full z-20 px-10 max-md:px-2">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={Logo}
            className="w-[213px] max-lg:w-[130px]"
            alt="Logo"
          />
        </Link>

        {/* Buttons Right Side */}
        <div className="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          
          {/* Start Project Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-[14px] font-semibold bg-white text-black rounded-[25px] px-3 py-2 max-md:text-[12px] max-md:px-2 max-md:py-1"
          >
            Start Project
            <MdOutlineArrowOutward className="inline-block text-[18px] ml-2" />
          </button>

          {/* Modal */}
          <GetQuoteModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center p-2 w-9 h-9 justify-center text-sm rounded-base md:hidden"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
              )}
            </svg>
          </button>
        </div>

        {/* Navbar Menu */}
        <div
          className={`${isMenuOpen ? "flex" : "hidden"} w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 border border-[#555767] rounded-[25px] md:flex-row md:space-x-8 max-md:w-full max-md:text-center">
            
            {/* Home */}
            <li>
              <Link to="/" className="inline-block px-6 py-3 text-white text-[14px] uppercase rounded-[25px] hover:bg-[#5C5C5C]">
                Home
              </Link>
            </li>

            {/* Portfolio */}
            <li>
              <Link to="/portfolio" className="inline-block px-6 py-3 text-white text-[14px] uppercase rounded-[25px] hover:bg-[#5C5C5C]">
                Portfolio
              </Link>
            </li>

            {/* Services Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => isDesktop && setIsServicesOpen(true)}
              onMouseLeave={() => isDesktop && setIsServicesOpen(false)}
            >
              {isDesktop ? (
                <Link
                  to="/services"
                  className="inline-block px-6 py-3 text-white text-[14px] uppercase rounded-[25px] hover:bg-[#5C5C5C]"
                >
                  Services <VscTriangleDown className="inline-block ml-1" />
                </Link>
              ) : (
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="inline-block px-6 py-3 w-full text-white text-[14px] uppercase rounded-[25px] hover:bg-[#5C5C5C]"
                >
                  Services <VscTriangleDown className="inline-block ml-1" />
                </button>
              )}

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <ul className="absolute left-0 mt-2 top-9 w-max bg-[#111] text-white rounded-[15px] shadow-lg border border-[#333] z-50">
                  <li><Link to="/services/brand-management" className="block border-b border-[#555767] px-3 py-2 hover:bg-[#222]">Brand Management</Link></li>
                  <li><Link to="/services/website-development" className="block border-b border-[#555767] px-3 py-2 hover:bg-[#222]">Website Development</Link></li>
                  <li><Link to="/services/app-development" className="block border-b border-[#555767] px-3 py-2 hover:bg-[#222]">App Development</Link></li>
                  <li><Link to="/services/seo" className="block border-b border-[#555767] px-3 py-2 hover:bg-[#222]">SEO</Link></li>
                  <li><Link to="/services/social-media-marketing" className="block border-b border-[#555767] px-3 py-2 hover:bg-[#222]">Social Media</Link></li>
                  <li><Link to="/services/ppc" className="block border-b border-[#555767] px-3 py-2 hover:bg-[#222]">PPC</Link></li>
                  <li><Link to="/services/ui-ux-designs" className="block border-b border-[#555767] px-3 py-2 hover:bg-[#222]">UI/UX Design</Link></li>
                  <li><Link to="/services/content-creative-services" className="block border-b border-[#555767] px-3 py-2 hover:bg-[#222]">Content & Creative</Link></li>
                  <li><Link to="/services/graphic-designs" className="block border-b border-[#555767] px-3 py-2 hover:bg-[#222]">Graphic Design</Link></li>
                  <li><Link to="/services/sem" className="block border-b border-[#555767] px-3 py-2 hover:bg-[#222]">SEM</Link></li>
                  <li><Link to="/services/youtube-marketing" className="block border-b border-[#555767] px-3 py-2 hover:bg-[#222]">YouTube Marketing</Link></li>
                  <li><Link to="/services/crm" className="block border-b border-[#555767] px-3 py-2 hover:bg-[#222]">CRM Solutions</Link></li>
                  <li><Link to="/services/video-production" className="block border-b border-[#555767] px-3 py-2 hover:bg-[#222]">Video Productions</Link></li>
                  <li><Link to="/services/animation-services" className="block border-b border-[#555767] px-3 py-2 hover:bg-[#222]">Animation Services</Link></li>
                  <li><Link to="/services/email-marketing" className="block border-b border-[#555767] px-3 py-2 hover:bg-[#222]">Email Marketing</Link></li>
                  <li><Link to="/services/custom-services" className="block px-3 py-2 hover:bg-[#222]">Custom Services</Link></li>
                </ul>
              )}
            </li>

            {/* Contact */}
            <li>
              <Link to="/contact-us" className="inline-block px-6 py-3 text-white text-[14px] uppercase rounded-[25px] hover:bg-[#5C5C5C]">
                Contact Us
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
