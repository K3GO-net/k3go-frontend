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

const reviewDummy = [
  {
    address: "0x49..48dn",
    review:
      "You has delivered above expectations! Grew a brand new Twitter account 10X organically with followers from the relevant niche. Would recommend to anyone looking to gain starter follower traction on socials.",
    user: "/example/u1.png",
    result: "/example/r1.png",
  },
  {
    address: "0xab..12az",
    review:
      "Really thankful for your precision marketing on web 3 users , hope for the best in next order . We will try to make it a great news channel",
    user: "/example/u2.png",
    result: "/example/r2.png",
  },
  {
    address: "0x49..48dn",
    review:
      "My order was delivered sooner than expected with the results i was beyond expectations. Thank you very much. Looking forward to buy more twitter marketing. Highly recommended services A+++",
    user: "/example/u3.png",
    result: "/example/r3.png",
  },
  {
    address: "0xab..12az",
    review:
      "You did a very good job of increasing Followers. I now have almost a thousand Followers and have made a number of quality contacts with people.",
    user: "/example/u4.png",
    result: "/example/r4.png",
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
          world! With more than 12,000 collabs successfully completed here on
          K3GO, our work has been featured on the K3GO Blog and prominent
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
          {params.id !== "user" &&
            reviewDummy.map((item, index) => {
              return (
                <Reviews
                  key={index}
                  address={item.address}
                  review={item.review}
                  user={item.user}
                  result={item.result}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

const Reviews = ({
  address,
  review,
  user,
  result,
}: {
  address: string;
  review: string;
  user: string;
  result: string;
}) => {
  return (
    <div className="flex items-start justify-between">
      <div className="flex-1 flex items-center gap-4">
        <img
          src={user}
          alt=""
          className="w-[80px] h-[80px] rounded-full bg-gray-200 shrink-0"
        />
        <div>
          <div className="text-xl font-bold">{address}</div>
          <p className="">{`Reviews: ${review}`}</p>
        </div>
      </div>
      <div>
        <p className="text-gray-500 italic text-xl">ordered</p>
        <div className="flex items-center gap-4">
          <img src={result} alt="" className="w-20 h-20 bg-gray-200 shrink-0" />
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
