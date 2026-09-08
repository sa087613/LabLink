"use client";
import { IntroChrome } from "@/components/intro-chrome";
import { GradientBackground } from "@/components/paper-design-shader-background";
import React, { useState } from 'react';
import { Search, Tag, ArrowRight, Users } from 'lucide-react';
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const FOOTER_LINKS = {
  Product: [
    { label: "How it works", href: "/#how-it-works" },
    { label: "FAQ", href: "/#faq" },
  ],
  Company: [{ label: "Contact", href: "/contact" }],
  Legal: [
    { label: "Terms of service", href: "/terms" },
    { label: "Privacy policy", href: "/privacy" },
  ],
};

interface Lab {
  id: number;
  name: string;
  description: string;
  department: string;
  pi: string;
  piAvatar: string;
  image: string;
  tags: string[];
  slug: string;
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const departments = ['All', 'Computer Science', 'Chemical Engineering', 'Biomedical Engineering', "Industrial Engineering", "Aerospace Engineering", "Mechanical Engineering", ];
  const labs: Lab[] = [
    {
      id: 1,
      name: "Robotics & Perception Lab",
      description: "Open to undergrads with experience in computer vision, sensor fusion, or embedded systems.",
      department: "Computer Science",
      pi: "Dr. Sarah Chen",
      piAvatar: "/avatars/sarah-chen.png",
      image: "/labs/robotics-lab.png",
      tags: ["Advanced College of Computing",],
      slug: "robotics-perception-lab",
    },
  ];
  const filteredLabs = labs.filter((lab) => {
    const matchesSearch =
      lab.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || lab.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });
  return (
    <div className="relative w-full min-h-screen bg-black px-6 py-4">
      <IntroChrome/>
      <section className="relative w-full flex items-center justify-center pt-28 py-4">
        <div className="relative w-[90%] max-w-6xl min-h-[100px] max-h-[200px] md:aspect-video md:min-h-0 overflow-hidden">
          <div className="absolute inset-0 border-2 border-dashed border-[#B39051] overflow-hidden z-0">
            <GradientBackground scale={2.5} />
          </div>
          <div className="absolute flex items-center text-center justify-center inset-0">
            <h1
              className="text-white text-3xl md:text-5xl italic font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Explore Labs
            </h1>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <div className="max-w-6xl mx-auto pt-8">
        <div className="border-2 border-dashed border-[#B39051] rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
  <div className="flex-1 min-w-0 relative">
    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
    <input
      type="text"
      placeholder="Search labs..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full pl-12 pr-4 py-3 bg-white/10 border-2 border-white/20 text-white placeholder:text-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B39051] focus:border-[#B39051] transition-colors"
    />
  </div>

  <div className="flex gap-2 overflow-x-auto md:max-w-[55%]">
    {departments.map((department) => (
      <button
        key={department}
        onClick={() => setSelectedDepartment(department)}
        className={`px-6 py-3 rounded-xl text-sm whitespace-nowrap transition-all shrink-0 ${
          selectedDepartment === department
            ? 'bg-[#B39051] text-[#051E39]'
            : 'bg-white/5 text-white/70 hover:bg-white/10'
        }`}
      >
        {department}
      </button>
    ))}
  </div>
</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {filteredLabs.map((lab) => (
            <a
              key={lab.id}
              href={`/labs/${lab.slug}`}
              className="border-2 border-dashed border-[#B39051] rounded-2xl overflow-hidden hover:border-white/60 transition-all duration-300 hover:-translate-y-1 group cursor-pointer block no-underline"
            >
              <div className="relative h-48 overflow-hidden bg-white/5 flex items-center justify-center p-4">
                <img
                  src={lab.image}
                  alt={lab.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/80 backdrop-blur-sm text-[#B39051] px-3 py-1 rounded-full text-xs font-semibold">
                    {lab.department}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2
                  className="text-xl italic font-bold text-white mb-3 group-hover:text-[#B39051] transition-colors line-clamp-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {lab.name}
                </h2>
                <p className="text-white/50 mb-4 line-clamp-3 text-sm">{lab.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {lab.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 text-xs text-white/60 bg-white/5 px-2 py-1 rounded-md"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <img src={lab.piAvatar} alt={lab.pi} className="w-8 h-8 rounded-full" />
                    <span className="text-sm font-medium text-white/80">{lab.pi}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-white/40">
                    <Users className="w-3 h-3" />
                    Hiring
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-[#B39051] text-sm font-semibold">
                  View lab
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredLabs.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-full mb-4">
              <Search className="w-8 h-8 text-white/40" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No labs found</h3>
            <p className="text-white/50">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/*FOOTER*/}
      <footer className="relative w-full bg-black px-6 md:px-16 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
                {/* Logo */}
                <span
                  className="pl-2 pr-1 text-lg font-semibold italic tracking-tight text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  LabLink
                </span>
      
                {/* Link columns */}
                <div className="flex flex-wrap gap-16">
                  {Object.entries(FOOTER_LINKS).map(([category, links]) => (
                    <div key={category} className="flex flex-col gap-4">
                      <h4 className="text-white font-semibold text-sm">{category}</h4>
                      {links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="text-white/40 hover:text-white/70 transition-colors text-xs"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
      
              <div className="border-t-2 border-dashed border-[#B39051] pt-8">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="text-white/40 text-xs flex flex-col gap-1">
                    <p>Copyright © 2026 LabLink.</p>
                    <p>All rights reserved.</p>
                  </div>
      
                  <div className="flex items-center gap-4">
                    <a href="#" className="text-white/40 hover:text-white/70 transition-colors">
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-white/40 hover:text-white/70 transition-colors">
                      <FaGithub className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
      </footer>
    </div>
  );
}