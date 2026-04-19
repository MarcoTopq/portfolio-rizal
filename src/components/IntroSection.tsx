"use client";
import { useEffect, useRef, useState } from "react";

export default function IntroSection() {
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
    <section id="intro" className="relative w-full min-h-screen flex items-center bg-[#f5f5f5] py-24">
      <div
        ref={ref}
        className={`max-w-[1200px] mx-auto px-8 md:px-16 w-full transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-sm text-[#999] uppercase tracking-[3px] mb-6">Introduction</p>
        <h2
          className="text-5xl md:text-7xl font-bold mb-12 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Hello!
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg leading-relaxed text-[#555] mb-6">
              I&apos;m <span className="text-[#1a1a1a] font-semibold">Muhamad Rizal</span>, a passionate
              UI/UX Designer based in Indonesia. I specialize in creating beautiful,
              functional, and user-centered digital experiences.
            </p>
            <p className="text-lg leading-relaxed text-[#555]">
              With a keen eye for detail and a deep understanding of user behavior,
              I transform complex problems into simple, intuitive, and elegant
              design solutions.
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-[#555] mb-6">
              My approach combines creativity with analytical thinking. I believe
              that great design is not just about how things look, but how they work.
              Every pixel has a purpose.
            </p>
            <div className="flex gap-6 mt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#1a1a1a]">3+</p>
                <p className="text-sm text-[#999] mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#1a1a1a]">20+</p>
                <p className="text-sm text-[#999] mt-1">Projects Done</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#1a1a1a]">15+</p>
                <p className="text-sm text-[#999] mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
