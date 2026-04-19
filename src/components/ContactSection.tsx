"use client";
import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="relative w-full py-24 bg-[#f5f5f5]">
      <div
        ref={ref}
        className={`max-w-[1200px] mx-auto px-8 md:px-16 w-full transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-sm text-[#999] uppercase tracking-[3px] mb-6">Get In Touch</p>
        <h2
          className="text-4xl md:text-5xl font-bold mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Contact
        </h2>
        <p className="text-lg text-[#666] mb-12 max-w-xl">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to discussing new opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="text-sm font-medium text-[#555] mb-2 block">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-5 py-3 bg-white rounded-xl border border-[#e0e0e0] text-[#333] text-sm outline-none focus:border-[#999] transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#555] mb-2 block">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-5 py-3 bg-white rounded-xl border border-[#e0e0e0] text-[#333] text-sm outline-none focus:border-[#999] transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#555] mb-2 block">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-5 py-3 bg-white rounded-xl border border-[#e0e0e0] text-[#333] text-sm outline-none focus:border-[#999] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-fit px-8 py-3 bg-[#1a1a1a] text-white text-sm font-medium rounded-xl hover:bg-[#333] transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-8 md:pl-8">
            <div>
              <h4 className="text-sm font-semibold text-[#999] uppercase tracking-wider mb-3">Email</h4>
              <a href="mailto:muhamadrizal@email.com" className="text-lg text-[#1a1a1a] hover:underline">
                muhamadrizal@email.com
              </a>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#999] uppercase tracking-wider mb-3">Location</h4>
              <p className="text-lg text-[#1a1a1a]">Indonesia</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#999] uppercase tracking-wider mb-3">Social</h4>
              <div className="flex gap-4">
                {["LinkedIn", "Dribbble", "Behance", "Instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-4 py-2 bg-white rounded-lg text-sm text-[#666] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 border border-[#e0e0e0]"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 mt-24 pt-8 border-t border-[#ddd]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#999]">
            &copy; {new Date().getFullYear()} Muhamad Rizal. All rights reserved.
          </p>
          <p className="text-sm text-[#999]">
            Designed with passion
          </p>
        </div>
      </div>
    </section>
  );
}
