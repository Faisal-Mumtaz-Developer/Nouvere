import { Link } from "react-router-dom";
import BannerLogo from "../assets/hero-logo.png";
import BannerBottom from "../assets/banner-bottom.png";
import FeaturedWork from "../assets/featured-work.png";
import FeaturedAngle from "../assets/featured-angle.png";
import FeaturedImg1 from "../assets/featured-img1.png";
import FeaturedImg2 from "../assets/featured-img2.png";
import FeaturedImg3 from "../assets/featured-img3.png";
import FeaturedImg4 from "../assets/featured-img4.png";
import Client1 from "../assets/client1.webp";
import Client2 from "../assets/client2.webp";
import Client3 from "../assets/client3.webp";
import Client4 from "../assets/client4.webp";
import Client5 from "../assets/client5.webp";
import Client6 from "../assets/client6.webp";
import Article1 from "../assets/article1.png";
import Article2 from "../assets/article2.png";
import ServicesLine from "../assets/our-services-line.png";

import { FaAngleRight } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";

import Testimonial from "../components/Testimonial";
import CTA from "../components/CTA";
import ServiceCard from "../components/ServiceCard";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <>
      <section className="bg-black text-white">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm" />
        </div>

        <div className="container-fluid mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-screen px-10 max-md:px-2">
            {/* Left */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <h1 className="text-[85px] leading-[90px] uppercase font-semibold max-xl:text-[65px] max-xl:leading-[65px] max-sm:text-[50px] max-sm:leading-[50px]">
                Creative{" "}
                <span className="italic font-extralight text-[#ABABAB]">
                  success
                </span>
              </h1>
              <Link
                to="/"
                className="relative font-semibold border border-[#6D6E7F] my-[35px] rounded-[25px] px-6 py-2 inline-block w-fit max-sm:mx-auto"
              >
                Get Custom Audit
                <span className="w-2 h-2 bg-[#8806CE] absolute top-1/2 -translate-y-1/2 right-2 rounded-full border border-white"></span>
              </Link>
              <h4 className="text-[22px] mt-4 max-xl:text-[20px]">
                Your Digital Success Begins Here.{" "}
              </h4>
              <h5 className="text-[20px] mt-4 max-xl:text-[22px] font-semibold italic">
                Take The Leap Today!
              </h5>
              <p className="text-[18px] mt-4 max-xl:text-[20px]">
                Experience end-to-end digital transformation solutions that
                align strategy, design, and tech-driven insights to bring
                maximum value to your business.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <img src={BannerLogo} alt="Banner Logo" />
            </div>

            <div className="flex items-end justify-center">
              <h2 className="text-[85px] leading-[90px] uppercase italic font-extralight max-xl:text-[65px] max-xl:leading-[65px] max-sm:text-[50px] max-sm:leading-[50px] max-sm:text-center">
                success{" "}
                <span className="not-italic! font-semibold">Creative</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="py-[30px]">
          <img src={BannerBottom} alt="Banner Bottom" className="mx-auto" />
        </div>

        <div
          className="w-full min-h-screen bg-cover bg-center bg-no-repeat p-6 md:p-12"
          style={{ backgroundImage: "url('/src/assets/services-bg.webp')" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-md:grid-cols-1">
            <div>
              <div className="flex items-start gap-2">
                <p className="inline-block px-5 py-2 bg-[#050300] uppercase text-white font-normal rounded-[35px] border border-[#C655F9] w-fit italic text-[20px]"
                >
                  <img
                    src={FeaturedAngle}
                    alt=""
                    className="inline-block mr-2"
                  />{" "}
                  our services
                </p>
                <img
                  src={ServicesLine}
                  alt=""
                  className="w-[450px] max-xl:hidden"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-[30px] font-normal leading-12 max-sm:text-[22px] max-sm:leading-8">
                Your Digital Edge.
              </h4>
              <h5 className="text-[36px] font-normal leading-12 max-sm:text-[22px] max-sm:leading-8">
                Your Full Scale 360-Degree Design, Development, & Digital
                Marketing Agency.
              </h5>
              <p className="text-[18px] font-normal leading-6 italic max-sm:text-[22px] max-sm:leading-8">
                At Nouvere Private Limited, we believe digital shouldn't feel
                complicated. That's why we've taken the time to sharpen our
                services through constant research, testing, and refinement, so
                you don't waste a second struggling to find your place in the
                market.
              </p>
              <p className="text-[18px] font-normal leading-6 italic max-sm:text-[22px] max-sm:leading-8">
                We're not just another agency ticking boxes. We're a team that
                obsesses over delivering digital solutions that actually deliver
                real-time results. We help your business and brand grow online
                and stay ahead of the competition.{" "}
              </p>
              <p className="text-[18px] font-normal leading-6 italic max-sm:text-[22px] max-sm:leading-8">
                From strategy to creative to tech, everything we do is built to
                solve real problems, drive measurable growth, and provide your
                consumers with experiences they will remember. Go Digital Today.
              </p>
              <Link
                to="/"
                className="inline-block mt-10 px-5 py-2 bg-white text-black font-semibold rounded-[35px] border border-[#6D6E7F] w-fit"
              >
                Learn More <FaAngleRight className="inline-block ml-2" />
              </Link>
            </div>
          </div>

          <ServiceCard />

          <div className="w-full flex justify-center my-3">
            <div className="w-full max-w-[800px] h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm" />
          </div>

          <div className="grid grid-cols-2 gap-8 my-10 max-xl:grid-cols-1">
            <div>
              <img src={FeaturedWork} alt="Featured Work" />
            </div>
            <div>
              <div className="rounded-[25px] border-2 border-transparent [border-image:linear-gradient(to_left_bottom,#c653e0,#9947b9,#713a92,#4d2c6a,#2e1d44,#4d2c6a,#713a92,#9947b9,#c653e0)_1] py-[100px] px-7 w-[70%] mx-auto backdrop-blur-2xl max-xl:w-full max-sm:px-3">
                <p className="inline-block mt-4 px-5 py-2 bg-[#050300] uppercase text-white text-[20px] italic font-normal rounded-[35px] border border-[#C655F9] w-fit max-sm:text-[18px]"
                >
                  <img
                    src={FeaturedAngle}
                    alt=""
                    className="inline-block mr-2"
                  />{" "}
                  our philosophy
                </p>
                <p className="w-[80%] text-[36px] font-normal leading-12 my-6 max-sm:text-[22px] max-sm:leading-8 max-md:w-full">
                  What We Deliver?
                </p>
                <p className="w-[80%] text-[18px] font-normal leading-6 my-6 max-sm:text-[22px] max-sm:leading-6 max-md:w-full">
                  We design solutions that redefine how businesses lead in a
                  digital-first world with intelligent, scalable, and
                  built-to-accelerate real growth solutions.{" "}
                </p>
                <ul className="pl-4">
                  <li className="list-disc">Future-Ready Strategy</li>
                  <li className="list-disc">Growth You Can Measure</li>
                  <li className="list-disc">Design That Works Smarter</li>
                  <li className="list-disc">Systems Built to Scale</li>
                  <li className="list-disc">Agility in the Digital Game</li>
                  <li className="list-disc">Leadership That Lasts</li>
                </ul>
                <Link
                  to="/"
                  className="inline-block mt-4 px-5 py-2 bg-white text-black font-semibold rounded-[35px] border border-[#6D6E7F] w-fit"
                >
                  view more{" "}
                  <FaArrowDownLong className="inline-block ml-1 text-[12px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 px-10 max-lg:inline-block max-xl:w-full">
            <div>
              <p className="inline-block mt-4 px-5 py-2 bg-[#050300] uppercase text-white font-normal italic rounded-[35px] border border-[#C655F9] w-fit text-[20px]"
              >
                <img src={FeaturedAngle} alt="" className="inline-block mr-2" />{" "}
                Featured Work
              </p>
            </div>
            <div className="text-right mt-5">
              <h4 className="text-[22px] font-normal text-white m-0 max-sm:text-[25px]">
                Want a sneak peek? See how our user-centric design and
                development solutions have changed the game for brands and
                enterprises.{" "}
              </h4>
            </div>
          </div>
          <div
            className="w-full min-h-screen bg-cover bg-center bg-no-repeat p-6 md:p-12"
            style={{ backgroundImage: "url('/src/assets/featured-bg.webp')" }}
          >
            <div className="grid grid-cols-2 mt-6 gap-5 max-md:grid-cols-1">
              <div>
                <div
                  className="p-0.5 rounded-[25px]"
                  style={{
                    border: "1px solid",
                    borderImageSlice: 1,
                    borderWidth: "1px",
                    borderImageSource:
                      "linear-gradient(to bottom, #7b09a9, #571783, #39175d, #201138, #0a0114)",
                  }}
                >
                  <div className="rounded-3xl h-[550px] max-md:h-[350px] p-6 flex flex-col justify-between backdrop-blur-lg">
                    <h4 className="text-[32px] font-normal">
                      Archin Architecture Studio
                    </h4>

                    <div className="flex flex-col gap-4">
                      <p className="text-[14px] font-normal text-[#BBBBBB]">
                        This paragraph is short description to describe about
                        this project, you can use it to improve SEO or highlight
                        some key result of this project
                      </p>

                      <ul className="flex items-center max-sm:inline-block">
                        <li className="text-[14px] font-normal border border-[#666666] rounded-[25px] px-2 py-1 mr-1 max-sm:mb-1">
                          Mobile Responsive
                        </li>
                        <li className="text-[14px] font-normal border border-[#666666] rounded-[25px] px-2 py-1 mr-1">
                          UX Design
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={FeaturedImg1}
                  alt=""
                  className="w-[729px] h-[571] max-lg:w-auto max-lg:h-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 mt-6 gap-5 max-md:grid-cols-1">
              <div>
                <img
                  src={FeaturedImg2}
                  alt=""
                  className="w-[729px] h-[571] max-lg:w-auto max-lg:h-auto"
                />
              </div>
              <div>
                <div
                  className="p-0.5 rounded-[25px]"
                  style={{
                    border: "1px solid",
                    borderImageSlice: 1,
                    borderWidth: "1px",
                    borderImageSource:
                      "linear-gradient(to bottom, #7b09a9, #571783, #39175d, #201138, #0a0114)",
                  }}
                >
                  <div className="bg-black/30 backdrop-blur-lg p-6 h-[550px] max-md:h-[350px] flex flex-col justify-between">
                    <h4 className="text-[32px] font-normal">
                      Archin Architecture Studio
                    </h4>

                    <div className="flex flex-col gap-4">
                      <p className="text-[14px] font-normal text-[#BBBBBB]">
                        This paragraph is short description to describe about
                        this project, you can use it to improve SEO or highlight
                        some key result of this project
                      </p>

                      <ul className="flex items-center max-sm:inline-block">
                        <li className="text-[14px] font-normal border border-[#666666] rounded-[25px] px-2 py-1 mr-1 max-sm:mb-1">
                          Mobile Responsive
                        </li>
                        <li className="text-[14px] font-normal border border-[#666666] rounded-[25px] px-2 py-1 mr-1">
                          UX Design
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 mt-6 gap-5 max-md:grid-cols-1">
              <div>
                <div
                  className="p-0.5 rounded-[25px]"
                  style={{
                    border: "1px solid",
                    borderImageSlice: 1,
                    borderWidth: "1px",
                    borderImageSource:
                      "linear-gradient(to bottom, #7b09a9, #571783, #39175d, #201138, #0a0114)",
                  }}
                >
                  <div className="bg-black/30 backdrop-blur-lg p-6 h-[550px] max-md:h-[350px] flex flex-col justify-between">
                    <h4 className="text-[32px] font-normal">
                      Archin Architecture Studio
                    </h4>

                    <div className="flex flex-col gap-4">
                      <p className="text-[14px] font-normal text-[#BBBBBB]">
                        This paragraph is short description to describe about
                        this project, you can use it to improve SEO or highlight
                        some key result of this project
                      </p>

                      <ul className="flex items-center max-sm:inline-block">
                        <li className="text-[14px] font-normal border border-[#666666] rounded-[25px] px-2 py-1 mr-1 max-sm:mb-1">
                          Mobile Responsive
                        </li>
                        <li className="text-[14px] font-normal border border-[#666666] rounded-[25px] px-2 py-1 mr-1">
                          UX Design
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={FeaturedImg3}
                  alt=""
                  className="w-[729px] h-[571] max-lg:w-auto max-lg:h-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 mt-6 gap-5 max-md:grid-cols-1">
              <div>
                <img
                  src={FeaturedImg4}
                  alt=""
                  className="w-[729px] h-[571] max-lg:w-auto max-lg:h-auto"
                />
              </div>
              <div>
                <div
                  className="p-0.5 rounded-[25px]"
                  style={{
                    border: "1px solid",
                    borderImageSlice: 1,
                    borderWidth: "1px",
                    borderImageSource:
                      "linear-gradient(to bottom, #7b09a9, #571783, #39175d, #201138, #0a0114)",
                  }}
                >
                  <div className="rounded-[15px] bg-black/30 backdrop-blur-lg p-6 h-[550px] max-md:h-[350px] flex flex-col justify-between">
                    <h4 className="text-[32px] font-normal">
                      Archin Architecture Studio
                    </h4>

                    <div className="flex flex-col gap-4">
                      <p className="text-[14px] font-normal text-[#BBBBBB]">
                        This paragraph is short description to describe about
                        this project, you can use it to improve SEO or highlight
                        some key result of this project
                      </p>

                      <ul className="flex items-center max-sm:inline-block">
                        <li className="text-[14px] font-normal border border-[#666666] rounded-[25px] px-2 py-1 mr-1 max-sm:mb-1">
                          Mobile Responsive
                        </li>
                        <li className="text-[14px] font-normal border border-[#666666] rounded-[25px] px-2 py-1 mr-1">
                          UX Design
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center my-3">
          <div
            className="w-full max-w-[800px] h-0.5 rounded-full 
        bg-gradient-to-r from-[#ffffff00] via-[#ffffff] to-[#ffffff00]"
          />
        </div>

        <div className="py-[30px] pb-[60px] px-10">
          <div className="flex items-center justify-between max-lg:inline-block max-xl:w-full">
            <div className="text-left mt-5">
              <h4 className="text-[36px] font-normal text-white max-sm:text-[25px]">
                User-first design, revenue-first results.
              </h4>
              <p className="text-[36px] font-normal text-[#ffffff85] max-sm:text-[25px]">
                Experience the pinnacle of <b>digital 360-degree solutions.</b>
              </p>
            </div>
            <div>
              <p className="inline-block mt-4 px-5 py-2 bg-[#050300] uppercase text-white font-normal text-[20px] rounded-[35px] border border-[#C655F9] w-fit"
              >
                <img src={FeaturedAngle} alt="" className="inline-block mr-2" />{" "}
                our clients
              </p>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-3 mt-10 text-center">
            <div className="text-center mx-auto">
              <img src={Client1} alt="" className="w-[100px]" />
            </div>
            <div className="text-center mx-auto">
              <img src={Client2} alt="" className="w-[100px]" />
            </div>
            <div className="text-center mx-auto">
              <img src={Client3} alt="" className="w-[100px]" />
            </div>
            <div className="text-center mx-auto">
              <img src={Client4} alt="" className="w-[100px]" />
            </div>
            <div className="text-center mx-auto">
              <img src={Client5} alt="" className="w-[100px]" />
            </div>
            <div className="text-center mx-auto">
              <img src={Client6} alt="" className="w-[100px]" />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center my-3">
          <div
            className="w-full max-w-[800px] h-0.5 rounded-full 
        bg-gradient-to-r from-[#ffffff00] via-[#ffffff] to-[#ffffff00]"
          />
        </div>

        <Pricing />

        <div>
          <Testimonial />
        </div>

        <div>
          <div className="grid grid-cols-2 justify-between mb-7 px-10 max-lg:grid-cols-1 max-sm:px-3">
            <div>
              <p className="inline-block mt-4 px-5 py-2 bg-[#050300] uppercase text-white font-semibold rounded-[35px] border border-[#C655F9] w-fit max-sm:text-[18px] max-sm:mb-2"
              >
                <img src={FeaturedAngle} alt="" className="inline-block mr-2" />{" "}
                our articles
              </p>
            </div>
            <div className="text-right">
              <h4 className="text-[36px] font-normal text-white max-sm:text-[25px]">
                Let's decode what drives transformation. Our articles offer
                insights to help you stay competitive, agile, and
                future-focused.
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 px-10 max-sm:grid-cols-1 max-sm:px-3">
            <div>
              <img src={Article1} alt="" />
              <Link
                to="https://medium.com/@inquisitively.prerna/experience-is-the-new-currency-the-shift-in-value-and-why-businesses-must-design-for-connection-6495a7ea1b09"
                className="text-[24px] text-white"
              >
                UX is now the backbone of growth; here's why every brand should
                care.
              </Link>
            </div>
            <div>
              <img src={Article2} alt="" />
              <Link
                to="https://www.pansofic.com/blog/digital-marketing-strategies-bootstrapped-startups"
                className="text-[24px] text-white"
              >
                UX is now the backbone of growth; here's why every brand should
                care.
              </Link>
            </div>
          </div>
          <div className="text-center mt-20">
            <Link
              to="/"
              className="inline-block text-[16px] font-semibold capitalize bg-white text-black px-4 py-2 rounded-[25px]"
            >
              view all articles{" "}
              <MdOutlineArrowOutward className="inline-block text-[18px] ml-2" />
            </Link>
          </div>
        </div>

        <div
          className="w-full min-h-screen bg-cover bg-center bg-no-repeat p-6 md:p-12"
          style={{ backgroundImage: "url('/src/assets/form-bg.webp')" }}
        >
          <CTA />
        </div>
      </section>
    </>
  );
};

export default Home;