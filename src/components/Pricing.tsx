import FeaturedAngle from "../assets/featured-angle.png";
import { useState } from "react";
import GetQuoteModal from "./GetQuoteModal";

const Pricing = () => {
   const [open, setOpen] = useState(false);
  return (
    <div>
          <div className="grid grid-cols-2 mt-12 px-10 max-lg:inline-block max-xl:w-full max-sm:px-3">
            <div>
              <p className="inline-block mt-4 px-5 py-2 bg-[#050300] uppercase text-white italic rounded-[35px] border border-[#C655F9] w-fit text-[20px] font-normal max-sm:text-[18px] max-sm:mb-2"
              >
                <img src={FeaturedAngle} alt="" className="inline-block mr-2" />{" "}
                our packages
              </p>
            </div>
            <div className="text-right">
              <h4 className="text-[36px] font-normal text-white max-sm:text-[25px]">
                Smart development, intuitive design, & results-driven marketing
                that scales as fast as you do.
              </h4>
            </div>
          </div>
          <div
            className="w-full min-h-screen bg-cover bg-center bg-no-repeat p-6 md:p-12"
            style={{ backgroundImage: "url('/src/assets/packages-bg.png')" }}
          >
            <div className="grid grid-cols-3 gap-12 max-md:grid-cols-1 max-lg:grid-cols-1">
              <div className="relative rounded-xl p-[3px] bg-gradient-to-br from-[#7b09a9] via-[#571783] to-[#0a0114]">
                <div className="bg-[#1515152B] rounded-xl flex flex-col justify-between h-full 4 p-6 max-sm:px-3">
                  <h4 className="text-[40px] font-semibold">Launch</h4>
                  <p className="text-[20px] font-medium">
                    Our launch package is perfect for brands looking to make a
                    significiant impact with a smaller investment. ideal for
                    those just getting started or testing new strategy
                  </p>
                  <h5 className="text-[64px] font-semibold text-[#C653E0]">
                    $6,300
                  </h5>
                  <ul className="my-3">
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                  </ul>
                  <button
                    onClick={() => setOpen(true)}
                    className="border border-white cursor-pointer text-white px-3 py-2 mt-4 inline-block rounded-[5px] w-fit"
                  >
                    <span className="bg-white h-2 w-2 inline-block rounded-[25px] relative top-0 mr-2"></span>{" "}
                    Schedule a Consultation
                  </button>
                </div>
              </div>

              <div className="relative rounded-xl p-[3px] bg-[#9D36CB]">
                <div className="bg-[#9D36CB] rounded-xl flex flex-col justify-between h-full 4 p-6 max-sm:px-3">
                  <h4 className="text-[40px] font-semibold relative">
                    Accelerate{" "}
                    <span className="absolute text-[16px] right-0 top-5 bg-white text-[#C653E0] px-3 rounded-[25px] uppercase">
                      popular
                    </span>
                  </h4>
                  <p className="text-[20px] font-medium">
                    Our launch package is perfect for brands looking to make a
                    significiant impact with a smaller investment. ideal for
                    those just getting started or testing new strategy
                  </p>
                  <h5 className="text-[64px] font-semibold text-white">
                    $6,300
                  </h5>
                  <ul className="my-3">
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                  </ul>
                  <button
                    onClick={() => setOpen(true)}
                    className="border border-white cursor-pointer text-black px-3 py-2 mt-4 inline-block rounded-[5px] w-fit bg-white font-semibold"
                  >
                    <span className="bg-[#C655F9] border border-black h-3 w-3 inline-block rounded-[25px] relative top-0 mr-2"></span>{" "}
                    Schedule a Consultation
                  </button>
                </div>
              </div>

              <div className="relative rounded-xl p-[3px] bg-gradient-to-br from-[#7b09a9] via-[#571783] to-[#0a0114]">
                <div className="bg-[#1515152B] rounded-xl flex flex-col justify-between h-full 4 p-6 max-sm:px-3">
                  <h4 className="text-[40px] font-semibold">Dominate</h4>
                  <p className="text-[20px] font-medium">
                    Our launch package is perfect for brands looking to make a
                    significiant impact with a smaller investment. ideal for
                    those just getting started or testing new strategy
                  </p>
                  <h5 className="text-[64px] font-semibold text-[#C653E0]">
                    $6,300
                  </h5>
                  <ul className="my-3">
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                    <li className="text-[16px] font-regular leading-8">
                      12 video ads
                    </li>
                  </ul>
                  <button
                    onClick={() => setOpen(true)}
                    className="border border-white cursor-pointer text-white px-3 py-2 mt-4 inline-block rounded-[5px] w-fit"
                  >
                    <span className="bg-white h-2 w-2 inline-block rounded-[25px] relative top-0 mr-2"></span>{" "}
                    Schedule a Consultation
                  </button>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
          <GetQuoteModal open={open} onClose={() => setOpen(false)} />
        </div>
  )
}

export default Pricing
