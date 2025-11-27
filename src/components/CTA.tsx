import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { useState } from "react";

// Validation schema
const schema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  budget: Yup.string(),
  message: Yup.string().required("Message is required"),
  attachment: Yup.mixed(),
});

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  budget?: string;
  message: string;
  attachment?: FileList;
}

const CTA = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    try {
      const form = document.getElementById("ctaForm") as HTMLFormElement;
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form,
        "YOUR_PUBLIC_KEY"
      );

      alert("Email sent successfully!");
      reset();
    } catch (err) {
      console.error(err);
      alert("Error sending email.");
    }

    setLoading(false);
  };

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-[35%_65%] lg:grid-cols-[35%_65%] gap-6 border border-transparent [border-image:linear-gradient(to_bottom,#7b09a9,#571783,#39175d,#201138,#0a0114)_1] w-full px-4 py-8 backdrop-blur-xl">
        
        {/* Left Info Section */}
        <div className="flex flex-col bg-transparent h-64 rounded-xl p-6 justify-between">
          <h4 className="text-[22px] font-normal max-sm:text-[23px]">Your Path to Digital!</h4>
          <p className="text-[32px] font-normal max-sm:text-[23px]">Launch, accelerate, and dominate.</p>
          <div className="flex flex-col gap-4">
            <h5 className="text-[24px] font-regular">+068 5681 96 96</h5>
            <p className="text-[14px] font-regular text-[#BBBBBB]">Call us for urgent</p>
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
          <form
            id="ctaForm"
            className="w-[90%]"
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data"
          >
            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-2 gap-14 mb-8 max-sm:grid-cols-1">
              <div>
                <label className="block w-full text-[14px] font-normal">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("fullName")}
                  className={`p-2.5 border-b w-full ${
                    errors.fullName ? "border-red-500" : "border-white/45"
                  }`}
                  placeholder="Enter Your Name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-[12px] mt-1">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label className="block w-full text-[14px] font-normal">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className={`p-2.5 border-b w-full ${
                    errors.email ? "border-red-500" : "border-white/45"
                  }`}
                  placeholder="Your Email Address"
                />
                {errors.email && (
                  <p className="text-red-500 text-[12px] mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Row 2: Subject & Budget */}
            <div className="grid grid-cols-2 gap-14 mb-8 max-sm:grid-cols-1">
              <div>
                <label className="block w-full text-[14px] font-normal">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("subject")}
                  className={`p-2.5 border-b w-full ${
                    errors.subject ? "border-red-500" : "border-white/45"
                  }`}
                >
                  <option value="">Select a Subject</option>
                  <option value="Design">Design</option>
                  <option value="Development">Development</option>
                  <option value="Marketing">Marketing</option>
                </select>
                {errors.subject && (
                  <p className="text-red-500 text-[12px] mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label className="block w-full text-[14px] font-normal">
                  Your Budget <span>(Optional)</span>
                </label>
                <input
                  type="text"
                  {...register("budget")}
                  className="p-2.5 border-b border-white/45 w-full"
                  placeholder="A range of budget for project"
                />
              </div>
            </div>

            {/* Row 3: Message */}
            <div className="mb-8">
              <label className="block w-full text-[14px] font-normal">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("message")}
                className={`p-2.5 border-b w-full ${
                  errors.message ? "border-red-500" : "border-white/45"
                }`}
                placeholder="Write your message here..."
              />
              {errors.message && (
                <p className="text-red-500 text-[12px] mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Attachments */}
            <div className="mb-8 flex items-center gap-2">
              <FaLink className="inline-block" />{" "}
              <input type="file" {...register("attachment")} />
            </div>

            {/* Submit Button */}
            <div className="mb-8 text-right">
              <button
                type="submit"
                disabled={loading}
                className="text-black bg-white text-[14px] font-semibold rounded-[25px] px-4 py-3"
              >
                {loading ? "Sending..." : "Send Your Message"}{" "}
                <MdOutlineArrowOutward className="inline-block text-[18px] ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CTA;
