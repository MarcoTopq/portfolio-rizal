"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Intro", href: "#intro" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => {
        const el = document.querySelector(link.href);
        if (!el) return { label: link.label, top: 0 };
        return { label: link.label, top: el.getBoundingClientRect().top };
      });

      const current = sections.reduce((prev, curr) => {
        if (curr.top <= 200 && curr.top > prev.top) return curr;
        return prev;
      }, sections[0]);

      if (current) setActive(current.label);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f5f5f5]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1512px] mx-auto px-8 md:px-16 py-5 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-semibold tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Muhamad Rizal
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`text-sm font-medium transition-all duration-200 relative pb-1 ${
                active === link.label
                  ? "text-[#1a1a1a]"
                  : "text-[#888] hover:text-[#1a1a1a]"
              }`}
            >
              {link.label}
              {active === link.label && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1a1a1a]" />
              )}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-6 h-[2px] bg-[#1a1a1a] transition-transform ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`w-6 h-[2px] bg-[#1a1a1a] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-[2px] bg-[#1a1a1a] transition-transform ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#f5f5f5]/95 backdrop-blur-md border-t border-[#e0e0e0] px-8 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActive(link.label);
                setMenuOpen(false);
              }}
              className={`block py-3 text-sm font-medium ${
                active === link.label ? "text-[#1a1a1a]" : "text-[#888]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
