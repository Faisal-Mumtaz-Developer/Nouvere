

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";


import Avatar1 from '../assets/avatar1.webp'
import Avatar2 from '../assets/avatar2.webp'
import Avatar3 from '../assets/avatar3.webp'
import Avatar4 from '../assets/avatar4.webp'
import Avatar5 from '../assets/avatar5.webp'
import Avatar6 from '../assets/avatar6.webp'
import Star from '../assets/star.png'
import Ratings from '../assets/ratings.png'
import FeaturedAngle from '../assets/featured-angle.png'


const TestimonialSlider = () => {

  return (
    <div className="container-fluid mx-auto py-12">
      <div className="w-full flex justify-center my-3">
      <div className="w-full max-w-[800px] h-0.5 rounded-full 
        bg-gradient-to-r from-[#ffffff00] via-[#ffffff] to-[#ffffff00]" />
    </div>
        <div className="grid grid-cols-2 justify-between mt-22 px-10 max-lg:grid-cols-1 max-xl:w-full max-sm:px-3">
          <div>
            <p className="inline-block mt-4 px-5 py-2 bg-[#050300] uppercase text-white font-normal rounded-[35px] border border-[#C655F9] w-fit text-[20px] italic max-sm:text-[18px] max-sm:mb-2"
            >
             <img src={FeaturedAngle} alt="" className="inline-block mr-2"/> Client Testimonials
            </p>

          </div>
          <div>
            <p className="text-[36px] font-normal text-white max-sm:text-[28px] max-md:mb-3">How We’ve Helped Businesses Through Their Digital Presence Journey</p>
            <img src={Ratings} alt="" />
          </div>
        </div>
        <div
            className="w-full min-h-screen bg-cover bg-center bg-no-repeat p-6 md:p-12 max-sm:px-3"
            style={{ backgroundImage: "url('/src/assets/testimonial-bg.webp')" }}
          >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          350: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
          <SwiperSlide>
            <div className="bg-gray-900 text-white flex flex-col text-center border-4 border-transparent [border-image:linear-gradient(to_bottom,#7b09a9,#571783,#39175d,#201138,#0a0114)_1] p-6 rounded-[25px]">
              <div className="rounded-[25px]">
                <ul className="flex items-center gap-3">
                <li>5.0</li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
              </ul>

              <p className="text-[15px] font-normal text-white text-left italic mt-3">
                I run a small e-commerce store and was honestly drowning before Nouvere stepped in. My website wasn’t showing up anywhere, ads were eating my budget, and I wasn’t sure what I was doing wrong. Their team took over the SEO and SEM, fixed technical errors I didn’t even know existed, and set up proper tracking so I could finally understand where my sales were coming from.
              </p>
              <p className="text-[15px] font-normal text-white text-left italic mt-3">
                Within a few weeks, I saw actual results — not huge, unrealistic jumps, but steady, reliable growth. For the first time, my store feels like a business instead of a guessing game. They explain everything in normal language, not in complicated marketing jargon. Really grateful for their help.
              </p>

              <div className="flex items-center gap-3 mt-10">
                <div>
                    <img src={Avatar1} alt="" className="w-[50px] rounded-4xl" />
                </div>
                <div className="text-left">
                    <h5 className="text-[18px] font-regular text-white">Neil Bryan Kovalski </h5>
                    <p className="text-[14px] font-normal text-[#BBBBBB]">Retail E-Commerce</p>
                </div>
              </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-900 text-white flex flex-col text-center border-4 border-transparent [border-image:linear-gradient(to_bottom,#7b09a9,#571783,#39175d,#201138,#0a0114)_1] p-6 rounded-[25px]">
              <div className="rounded-[25px]">
                <ul className="flex items-center gap-3">
                <li>5.0</li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
              </ul>

              <p className="text-[15px] font-normal text-white text-left italic mt-3">
                Nouvere Pvt Ltd recently completed our website redevelopment and brand identity update. Their project management approach was impressive — timelines were clearly communicated, revisions were handled systematically, and every phase was delivered with attention to detail.
              </p>
              <p className="text-[15px] font-normal text-white text-left italic mt-3">
                The new website reflects our corporate values more accurately, with improved performance and user experience. Their team also offered valuable recommendations based on analytics and industry benchmarks. We found them reliable, responsive, and solution-oriented. They have certainly added value to our digital presence.
              </p>

              <div className="flex items-center gap-3 mt-10">
                <div>
                    <img src={Avatar2} alt="" className="w-[50px] rounded-4xl" />
                </div>
                <div className="text-left">
                    <h5 className="text-[18px] font-regular text-white">Daniel Reed </h5>
                    <p className="text-[14px] font-normal text-[#BBBBBB]">Tech Startup</p>
                </div>
              </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-900 text-white flex flex-col text-center border-4 border-transparent [border-image:linear-gradient(to_bottom,#7b09a9,#571783,#39175d,#201138,#0a0114)_1] p-6 rounded-[25px]">
              <div className="rounded-[25px]">
                <ul className="flex items-center gap-3">
                <li>5.0</li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
              </ul>

              <p className="text-[15px] font-normal text-white text-left italic mt-3">
                As a restaurant owner, social media used to overwhelm me. I’d post randomly, engagement was low, and nothing matched the personality of my café. When Nouvere took over, everything started changing — slowly but surely.
              </p>
              <p className="text-[15px] font-normal text-white text-left italic mt-3">
                Their team photographed our dishes beautifully, created stories and reels that felt authentic, and chose colors and captions that actually represented our brand. People started mentioning they saw us on Instagram, and weekend traffic increased noticeably. It’s not just the design — their work added personality and warmth to our brand. I genuinely felt seen as a small business.
              </p>

              <div className="flex items-center gap-3 mt-10">
                <div>
                    <img src={Avatar3} alt="" className="w-[50px] rounded-4xl" />
                </div>
                <div className="text-left">
                    <h5 className="text-[18px] font-regular text-white">Mariam Al-Farsi </h5>
                    <p className="text-[14px] font-normal text-[#BBBBBB]">Mobile App Founder</p>
                </div>
              </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-900 text-white flex flex-col text-center border-4 border-transparent [border-image:linear-gradient(to_bottom,#7b09a9,#571783,#39175d,#201138,#0a0114)_1] p-6 rounded-[25px]">
              <div className="rounded-[25px]">
                <ul className="flex items-center gap-3">
                <li>5.0</li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
              </ul>

              <p className="text-[15px] font-normal text-white text-left italic mt-3">
                As a tech founder, I’m extremely particular about development quality and documentation. Nouvere’s app development team exceeded my expectations. They mapped out our user journey clearly, created logical wireframes, and built a clean, lightweight app that handles data efficiently.
              </p>
              <p className="text-[15px] font-normal text-white text-left italic mt-3">
                Their backend structure was well-organized, and they were open to multiple testing cycles — which is rare. We had constant communication, weekly sprints, and transparent progress updates. The app is now stable and scalable for future upgrades. I’d recommend them to any startup looking for mature, process-driven developers.
              </p>

              <div className="flex items-center gap-3 mt-10">
                <div>
                    <img src={Avatar4} alt="" className="w-[50px] rounded-4xl" />
                </div>
                <div className="text-left">
                    <h5 className="text-[18px] font-regular text-white">James Kevin </h5>
                    <p className="text-[14px] font-normal text-[#BBBBBB]">Lifestyle Brand</p>
                </div>
              </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-900 text-white flex flex-col text-center border-4 border-transparent [border-image:linear-gradient(to_bottom,#7b09a9,#571783,#39175d,#201138,#0a0114)_1] p-6 rounded-[25px]">
              <div className="rounded-[25px]">
                <ul className="flex items-center gap-3">
                <li>5.0</li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
              </ul>

              <p className="text-[15px] font-normal text-white text-left italic mt-3">
                We work in real estate, and visuals are everything. Nouvere created 3D animations and architectural walkthroughs for our latest project, and the quality was shockingly good. The materials, textures, and lighting looked almost real.
              </p>
              <p className="text-[15px] font-normal text-white text-left italic mt-3">
                These visual assets became the backbone of our pre-launch marketing — clients could imagine the final space without stepping foot on the site. We closed several bookings purely because the animations gave buyers confidence. Their creative team understands the real estate market well, which made the collaboration smooth.
              </p>

              <div className="flex items-center gap-3 mt-10">
                <div>
                    <img src={Avatar5} alt="" className="w-[50px] rounded-4xl" />
                </div>
                <div className="text-left">
                    <h5 className="text-[18px] font-regular text-white">Sofia Romero </h5>
                    <p className="text-[14px] font-normal text-[#BBBBBB]">Media & Entertainment</p>
                </div>
              </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-900 text-white flex flex-col text-center border-4 border-transparent [border-image:linear-gradient(to_bottom,#7b09a9,#571783,#39175d,#201138,#0a0114)_1] p-6 rounded-[25px]">
              <div className="rounded-[25px]">
                <ul className="flex items-center gap-3">
                <li>5.0</li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
                <li><img src={Star} /></li>
              </ul>

              <p className="text-[15px] font-normal text-white text-left italic mt-3">
                Our brand caters to a very visual audience, so we needed someone who understood aesthetics, mood, and storytelling — not just marketing. Nouvere’s creative team absolutely nailed it.
              </p>
              <p className="text-[15px] font-normal text-white text-left italic mt-3">
                They redesigned our highlight covers, created a beautiful color palette, shot our products in a clean editorial style, and completely upgraded how our Instagram feed looked. Our page finally feels cohesive and premium. Since the redesign, our DMs and collaboration requests have increased noticeably. They understand fashion, and honestly, that’s rare.
              </p>

              <div className="flex items-center gap-3 mt-10">
                <div>
                    <img src={Avatar6} alt="" className="w-[50px] rounded-4xl" />
                </div>
                <div className="text-left">
                    <h5 className="text-[18px] font-regular text-white">Nate Williams </h5>
                    <p className="text-[14px] font-normal text-[#BBBBBB]">B2B SaaS</p>
                </div>
              </div>
              </div>
            </div>
          </SwiperSlide>
      </Swiper>
      <div className="w-full flex justify-center my-3">
                <div className="w-full max-w-[800px] h-0.5 rounded-full 
                  bg-gradient-to-r from-[#ffffff00] via-[#ffffff] to-[#ffffff00]" />
              </div>
          </div>
    </div>
  );
};

export default TestimonialSlider;
