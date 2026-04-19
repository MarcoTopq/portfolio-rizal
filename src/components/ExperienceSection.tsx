"use client";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    period: "2023 - Present",
    role: "UI/UX Designer",
    company: "Freelance",
    description:
      "Working with various clients to design mobile and web applications. Focused on user-centered design and creating intuitive digital experiences.",
    skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
  },
  {
    period: "2022 - 2023",
    role: "UI Designer",
    company: "Creative Agency",
    description:
      "Designed user interfaces for mobile applications and websites. Collaborated with development teams to ensure pixel-perfect implementation.",
    skills: ["Adobe XD", "Figma", "Design Systems", "Wireframing"],
  },
  {
    period: "2021 - 2022",
    role: "Junior Designer",
    company: "Startup",
    description:
      "Started career in design, working on various design projects including branding, social media, and UI design for web applications.",
    skills: ["Photoshop", "Illustrator", "UI Design", "Branding"],
  },
];

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="relative w-full py-24 bg-[#f5f5f5]">
      <div
        ref={ref}
        className={`max-w-[1200px] mx-auto px-8 md:px-16 w-full transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-sm text-[#999] uppercase tracking-[3px] mb-6">My Journey</p>
        <h2
          className="text-4xl md:text-5xl font-bold mb-16"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-[#ddd]" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative pl-8 md:pl-20 transition-all duration-700"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-20px)",
                  transitionDelay: `${i * 200}ms`,
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-5px] md:left-[27px] top-2 w-3 h-3 rounded-full bg-[#2d2d2d] border-2 border-white" />

                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <span className="text-sm text-[#999] font-medium">{exp.period}</span>
                  <h3 className="text-xl font-semibold text-[#1a1a1a] mt-2">{exp.role}</h3>
                  <p className="text-[#666] font-medium mt-1">{exp.company}</p>
                  <p className="text-[#888] mt-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-[#f5f5f5] text-[#555] rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
