import { useEffect } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function GetQuoteModal({ open, onClose }: ModalProps) {
  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white text-black rounded-2xl p-6 w-[90%] max-w-md shadow-xl relative animate-scaleIn"
        onClick={(e) => e.stopPropagation()} // prevent close
      >
        <h2 className="text-2xl font-semibold mb-4">Get a Quote</h2>

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

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black hover:text-black"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
