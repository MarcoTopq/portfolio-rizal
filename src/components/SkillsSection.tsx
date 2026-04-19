"use client";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "UI Design", level: 90 },
  { name: "UX Design", level: 85 },
  { name: "Figma", level: 92 },
  { name: "Adobe XD", level: 80 },
  { name: "Prototyping", level: 88 },
  { name: "User Research", level: 75 },
  { name: "HTML/CSS", level: 78 },
  { name: "Design Systems", level: 82 },
];

export default function SkillsSection() {
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
    <section id="skills" className="relative w-full min-h-screen flex items-center bg-white py-24">
      <div
        ref={ref}
        className={`max-w-[1200px] mx-auto px-8 md:px-16 w-full transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-sm text-[#999] uppercase tracking-[3px] mb-6">What I Do</p>
        <h2
          className="text-4xl md:text-5xl font-bold mb-16"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          {skills.map((skill, i) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-[#333]">{skill.name}</span>
                <span className="text-sm text-[#999]">{skill.level}%</span>
              </div>
              <div className="w-full h-[6px] bg-[#eee] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#2d2d2d] rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                    transitionDelay: `${i * 100}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { icon: "🎨", title: "UI Design", desc: "Creating beautiful and intuitive interfaces" },
            { icon: "🔍", title: "UX Research", desc: "Understanding user needs and behaviors" },
            { icon: "📱", title: "Mobile Design", desc: "Designing responsive mobile experiences" },
            { icon: "⚡", title: "Prototyping", desc: "Building interactive prototypes" },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#f9f9f9] hover:bg-[#f0f0f0] transition-colors duration-300 group cursor-default"
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="font-semibold text-[#1a1a1a] mb-2">{item.title}</h3>
              <p className="text-sm text-[#888] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
