"use client";

import { HeaderProfileKol } from "@/src/components/Profile-KOLs/Header";
import { useEffect, useRef, useState } from "react";

export const ProfileKolPage = () => {
  const headerRef = useRef<any>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const headerHeight = headerRef.current.offsetHeight;
    const handleScroll = () => {
      const isScrolled = window.scrollY > headerHeight;
      setIsScrolled(isScrolled);
    };

    // Lắng nghe sự kiện scroll
    window.addEventListener("scroll", handleScroll);

    // Dọn dẹp khi component bị unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollPage = () => {
    const sections = ["about-me", "services", "reviews"];
    const scrollPosition = window.scrollY;
    const headerHeight = headerRef.current.offsetHeight;

    let currentActiveSection = sections[0];

    for (let i = 0; i < sections.length; i++) {
      const section: any = document.getElementById(sections[i]);
      const sectionTop = section.offsetTop - headerHeight - 100;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentActiveSection = sections[i];
        break;
      }
    }

    const bottomOfPage =
      window.innerHeight + scrollPosition >= document.body.offsetHeight;
    if (bottomOfPage) {
      currentActiveSection = sections[sections.length - 1];
    }

    setActiveSection(currentActiveSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPage);

    return () => {
      window.removeEventListener("scroll", handleScrollPage);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <HeaderProfileKol
        isScrolled={isScrolled}
        headerRef={headerRef}
        activeSection={activeSection}
      />
      <div id="about-me" className="pb-4 pt-10">
        <p className="text-[40px] font-bold">About Me</p>
        <p className="w-1/2">
          For more than ten years I've worked as an independent voice actor, and
          the creative director of my own business, JumpStart Video in Boulder,
          CO. We are a US-based team that have become experts in creating video
          content of many different types and styles for clients all over the
          world! With more than 12,000 gigs successfully completed here on
          Fiverr, our work has been featured on the Fiverr Blog and prominent
          publications like CNBC "Make It", Business Insider, Fast Company, and
          Rise of the Entrepreneur to name a few.
        </p>
      </div>
      <div id="services" className="pb-4">
        <p className="text-[40px] font-bold">My Gigs</p>
        <div className="flex items-center justify-between gap-4">
          <img src="/example/kols.png" alt="" />
          <img src="/example/kols.png" alt="" />
          <img src="/example/kols.png" alt="" />
          <img src="/example/kols.png" alt="" />
          <img src="/example/kols.png" alt="" />
          <img src="/example/kols.png" alt="" />
          <img src="/example/kols.png" alt="" />
        </div>
      </div>
      <div id="reviews" className="pb-4">
        <p className="text-[40px] font-bold">Review</p>
        <div className="flex flex-col gap-10">
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center justify-center gap-4 w-1/3">
        <div className="w-[100px] h-[100px] rounded-full bg-gray-200 shrink-0"></div>
        <div>
          <div className="text-xl font-bold">0x11...3456</div>
          <p className="line-clamp-1">
            Reviews: Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
      </div>
      <div>
        <p className="text-gray-500 italic text-xl">ordered</p>
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gray-200 shrink-0"></div>
          <div className="flex justify-between flex-col">
            <p>Promote Project</p>
            <p>From $$</p>
          </div>
        </div>
      </div>
    </div>
  );
};
