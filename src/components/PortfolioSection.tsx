"use client";
import { useEffect, useRef, useState } from "react";

const categories = ["All", "Mobile App", "Web Design", "UI/UX"];

const projects = [
  {
    title: "E-Commerce App",
    category: "Mobile App",
    color: "#FF6B6B",
    description: "Shopping experience redesign",
  },
  {
    title: "Travel Platform",
    category: "Web Design",
    color: "#4ECDC4",
    description: "Travel booking website",
  },
  {
    title: "Finance Dashboard",
    category: "UI/UX",
    color: "#45B7D1",
    description: "Banking app dashboard",
  },
  {
    title: "Food Delivery App",
    category: "Mobile App",
    color: "#F7DC6F",
    description: "Food ordering mobile app",
  },
  {
    title: "Health & Fitness",
    category: "Mobile App",
    color: "#82E0AA",
    description: "Fitness tracking application",
  },
  {
    title: "Social Media App",
    category: "UI/UX",
    color: "#BB8FCE",
    description: "Social platform redesign",
  },
  {
    title: "Education Platform",
    category: "Web Design",
    color: "#F0B27A",
    description: "Online learning website",
  },
  {
    title: "Music Streaming",
    category: "Mobile App",
    color: "#1A1A2E",
    description: "Music player interface",
  },
];

function PhoneMockup({ color, title }: { color: string; title: string }) {
  return (
    <div className="relative mx-auto w-[180px] h-[360px]">
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[28px] bg-[#1a1a1a] shadow-xl p-[3px]">
        <div
          className="w-full h-full rounded-[25px] overflow-hidden flex flex-col items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${color}, ${color}dd)` }}
        >
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 px-6 pt-3 flex justify-between text-white/70 text-[8px]">
            <span>9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-3 h-2 border border-white/70 rounded-sm">
                <div className="w-2 h-1 bg-white/70 ml-[1px] mt-[1px] rounded-sm" />
              </div>
            </div>
          </div>
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#1a1a1a] rounded-b-2xl" />
          {/* Content */}
          <div className="text-white/90 text-center px-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 mx-auto mb-3" />
            <p className="text-xs font-semibold">{title}</p>
            <div className="mt-3 space-y-1.5">
              <div className="w-24 h-1.5 bg-white/20 rounded mx-auto" />
              <div className="w-16 h-1.5 bg-white/20 rounded mx-auto" />
            </div>
          </div>
          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative w-full py-24 bg-white">
      <div
        ref={ref}
        className={`max-w-[1200px] mx-auto px-8 md:px-16 w-full transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-sm text-[#999] uppercase tracking-[3px] mb-6">My Work</p>
        <h2
          className="text-4xl md:text-5xl font-bold mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Portfolio
        </h2>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#1a1a1a] text-white"
                  : "bg-[#f0f0f0] text-[#666] hover:bg-[#e0e0e0]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="group cursor-pointer"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease-out ${i * 100}ms`,
              }}
            >
              <div className="bg-[#f9f9f9] rounded-2xl p-6 pb-8 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                <PhoneMockup color={project.color} title={project.title} />
                <div className="mt-6 text-center">
                  <h3 className="font-semibold text-[#1a1a1a]">{project.title}</h3>
                  <p className="text-sm text-[#999] mt-1">{project.description}</p>
                  <span className="inline-block mt-3 text-xs px-3 py-1 bg-[#f0f0f0] text-[#666] rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
