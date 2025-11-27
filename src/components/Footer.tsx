import { Link } from "react-router-dom";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";
import Dribble from "../assets/dribble.png";
import Behance from "../assets/behance.png";
import Github from "../assets/github.png";
import FooterLogo from "../assets/footer-logo.png";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, alt: "Twitter", to: "/" },
    { icon: Instagram, alt: "Instagram", to: "/" },
    { icon: Dribble, alt: "Dribble", to: "/" },
    { icon: Behance, alt: "Behance", to: "/" },
    { icon: Github, alt: "Github", to: "/" },
  ];

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Services", to: "/services" },
    { label: "Contact Us", to: "/contact-us" },
    { label: "Terms & Conditions", to: "/terms" },
    { label: "Privacy Policy", to: "/privacy" },
  ];

  return (
    <footer className="bg-[#1515152B] text-white py-12 border-t border-[#999999]">
      <div className="max-w-7xl mx-auto px-4 md:px-0 grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          <img src={FooterLogo} alt="Nouvere Logo" className="w-[300px]" />
          <p className="text-sm text-gray-400">© 2025 Nouvere. All Rights Reserved</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between">
          <h3 className="text-2xl md:text-3xl font-normal mb-8">
            We hope to empower users and simplify <span className="font-semibold">their everyday lives</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-xs text-gray-400 mb-1">Location</h4>
              <p className="text-base text-white">152 Thatcher Road St, Mahattan, NY 10463, US</p>
            </div>
            <div>
              <h4 className="text-xs text-gray-400 mb-1">Inquiry</h4>
              <p className="text-base text-white">hello@hubfolio.agency</p>
              <p className="text-base text-white">+0685689696</p>
            </div>
          </div>

          <ul className="flex space-x-4 mt-4">
            {socialLinks.map((social, idx) => (
              <li key={idx}>
                <Link
                  to={social.to}
                  className="inline-block rounded-full hover:bg-gray-700 transition"
                >
                  <img src={social.icon} alt={social.alt} />
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-6 mt-14">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.to}
                  className="text-sm text-gray-200 hover:text-white transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
