"use client";

import { HeaderProfileKol } from "@/src/components/Profile-KOLs/Header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/src/components/shared/ui/carousel";
import { useGigFormContext } from "@/src/context/GigForm/context";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const partners = [
  {
    img: "/example/a16z.jpeg",
    partner: "A16z",
  },
  {
    img: "/example/crypto-logo.png",
    partner: "Crypto.com",
  },
  {
    img: "/example/c98.png",
    partner: "Coin98",
  },
];

export const ProfileKolPage = () => {
  const params = useParams();
  const headerRef = useRef<any>(null);
  const { formData } = useGigFormContext();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const headerHeight = headerRef.current.offsetHeight;
    const handleScroll = () => {
      const isScrolled = window.scrollY > headerHeight;
      setIsScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollPage = () => {
    const sections = [
      "about-me",
      "services",
      "tags",
      "partners",
      "my-collabs",
      "reviews",
    ];
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
      <div id="about-me" className="py-10">
        <p className="text-xl font-bold pb-6">About Me</p>
        <p className="w-1/2 text-base">
          {params.id === "user"
            ? formData.aboutMe
            : `For more than ten years I've worked as an independent voice actor, and
          the creative director of my own business, JumpStart Video in Boulder,
          CO. We are a US-based team that have become experts in creating video
          content of many different types and styles for clients all over the
          world! With more than 12,000 gigs successfully completed here on
          Fiverr, our work has been featured on the Fiverr Blog and prominent
          publications like CNBC "Make It", Business Insider, Fast Company, and
          Rise of the Entrepreneur to name a few.`}
        </p>
      </div>

      <div id="services" className="pb-10 flex items-center gap-10">
        <p className="text-xl font-bold">Services</p>
        {params.id === "user" ? (
          <p>{formData?.services?.map((obj) => obj.title).join(" - ")}</p>
        ) : (
          <p>AMA - Spaces - Twitters Posts</p>
        )}
      </div>

      <div id="tags" className="pb-10 flex items-center gap-10">
        <p className="text-xl font-bold">Tags</p>
        {params.id === "user" ? (
          <p>{formData?.tags?.map((obj) => obj.title).join(" - ")}</p>
        ) : (
          <p>NFT - DeFi - CEX</p>
        )}
      </div>

      <div id="partners" className="pb-10">
        <p className="text-xl font-bold pb-6">Top 3 Partners</p>
        <div className="flex items-center gap-20">
          {params.id === "user"
            ? formData?.partners?.map((partner, index) => (
                <Partner key={index} img="/example/eth.png" partner={partner} />
              ))
            : partners.map((partner, index) => (
                <Partner
                  key={index}
                  img={partner.img}
                  partner={partner.partner}
                />
              ))}
        </div>
      </div>

      <div id="my-collabs" className="pb-10">
        <p className="text-xl font-bold pb-6">My Collabs</p>
        <Carousel>
          <CarouselContent className="flex items-center">
            {params.id === "user" &&
              formData?.photos?.map((photo, index) => (
                <CarouselItem key={index} className="basis-1/5">
                  <img src={URL.createObjectURL(photo)} alt="" />
                </CarouselItem>
              ))}
            {params.id !== "user" && (
              <>
                <CarouselItem className="basis-1/5">
                  <img src="/example/kols.png" alt="" />
                </CarouselItem>
                <CarouselItem className="basis-1/5">
                  <img src="/example/1.png" alt="" />
                </CarouselItem>
                <CarouselItem className="basis-1/5">
                  <img src="/example/2.png" alt="" />
                </CarouselItem>
                <CarouselItem className="basis-1/5">
                  <img src="/example/4.png" alt="" />
                </CarouselItem>
                <CarouselItem className="basis-1/5">
                  <img src="/example/6.png" alt="" />
                </CarouselItem>
                <CarouselItem className="basis-1/5">
                  <img src="/example/7.png" alt="" />
                </CarouselItem>
                <CarouselItem className="basis-1/5">
                  <img src="/example/8.png" alt="" />
                </CarouselItem>
                <CarouselItem className="basis-1/5">
                  <img src="/example/9.png" alt="" />
                </CarouselItem>
                <CarouselItem className="basis-1/5">
                  <img src="/example/10.png" alt="" />
                </CarouselItem>
              </>
            )}
          </CarouselContent>
        </Carousel>
      </div>
      <div id="reviews" className="pb-10">
        <p className="text-xl font-bold pb-6">Review</p>
        <div className="flex flex-col gap-10">
          {params.id !== "user" && (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center justify-center gap-4 w-1/3">
        <div className="w-[80px] h-[80px] rounded-full bg-gray-200 shrink-0"></div>
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

const Partner = ({ img, partner }: { img: string; partner: string }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={img}
        alt={img}
        className="flex items-center justify-center rounded-full overflow-hidden w-16 h-16 shrink-0"
      />
      <p className="text-base font-medium">{partner}</p>
    </div>
  );
};
