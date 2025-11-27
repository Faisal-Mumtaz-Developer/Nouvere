import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaLink } from "react-icons/fa";

const CTA = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-[35%_65%] lg:grid-cols-[35%_65%] gap-6 border border-transparent [border-image:linear-gradient(to_bottom,#7b09a9,#571783,#39175d,#201138,#0a0114)_1] w-full px-4 py-8 backdrop-blur-xl">
        
        {/* Left Info Section */}
        <div className="flex flex-col bg-transparent h-64 rounded-xl p-6 justify-between">
          <h4 className="text-[22px] font-normal max-sm:text-[23px]">Your Path to Digital!</h4>
          <p className="text-[32px] font-normal max-sm:text-[23px]">Launch, accelerate, and dominate.</p>
          <div className="flex flex-col gap-4">
            <h5 className="text-[24px] font-normal">+068 5681 96 96</h5>
            <p className="text-[14px] font-normal text-[#BBBBBB]">Call us for urgent</p>
            <Link
              to="/"
              className="inline-block text-[16px] font-semibold capitalize bg-transparent text-white px-4 py-2 rounded-[25px] w-fit border border-white"
            >
              get direction <MdOutlineArrowOutward className="inline-block text-[18px] ml-2" />
            </Link>
          </div>
        </div>

        {/* Form Section */}
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-14 mb-8 max-sm:grid-cols-1">
              <div>
                <label className="block w-full text-[14px] font-normal">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full p-2 rounded bg-white/10 text-white placeholder-white"
                />
              </div>
              <div>
                <label className="block w-full text-[14px] font-normal">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full p-2 rounded bg-white/10 text-white placeholder-white"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-14 mb-8 max-sm:grid-cols-1">
              <div>
                <label className="block w-full text-[14px] font-normal">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select className="w-full p-2 rounded bg-white/10 text-white">
                  <option value="">Select a Subject</option>
                  <option value="Design">Design</option>
                  <option value="Development">Development</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>
              <div>
                <label className="block w-full text-[14px] font-normal">
                  Your Budget <span>(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="A range of budget for project"
                  className="w-full p-2 rounded bg-white/10 text-white"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="mb-8">
              <label className="block w-full text-[14px] font-normal">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Write your message here..."
                className="w-full p-2 rounded bg-white/10 text-white"
              />
            </div>

            {/* Attachments */}
            <div className="mb-8 flex items-center gap-2">
              <FaLink className="inline-block" />{" "}
              <input type="file" className="text-white" />
            </div>

            {/* Submit */}
            <div className="mb-8 text-right">
              <button
                type="submit"
                className="text-black bg-white text-[14px] font-semibold rounded-[25px] px-4 py-3"
              >
                Submit <MdOutlineArrowOutward className="inline-block text-[18px] ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CTA;
