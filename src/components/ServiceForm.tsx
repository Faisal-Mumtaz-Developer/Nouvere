const ServiceForm = () => {
  return (
    <div  className="bg-black/40 backdrop-blur-sm rounded-xl px-5 py-6 flex flex-col justify-between h-full"
                style={{
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(124, 58, 237, 0.3) 50%, rgba(109, 40, 217, 0.2) 100%)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  backdropFilter: "blur(7px)"
                }}>
        <div className="text-center mb-5">
            <h4 className="text-[24px]">Early bird discount – Get 50 % Off</h4>
        </div>
        <form className="space-y-4">
            <select className="w-full border p-3 rounded-lg outline-none">
                <option>Launch</option>
                <option>Accelerate</option>
                <option>Dominate</option>
            </select>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg outline-none"
          />

          <input
            type="number"
            placeholder="Your Phone"
            className="w-full border p-3 rounded-lg outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg outline-none"
          />

          <textarea
            placeholder="Your Message"
            className="w-full border p-3 h-24 rounded-lg outline-none"
          />

          <button
            type="submit"
            className="w-full bg-brand text-white bg-black py-3 rounded-lg"
          >
            Submit
          </button>
        </form>
    </div>
  )
}

export default ServiceForm
