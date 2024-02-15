"use client";

import { useModal } from "@/src/hooks/useModal";
import { cn } from "@/src/lib/utils";
import { Button } from "../shared/ui/button";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { DialogBuyKey } from "./DialogBuyKey";

export const HeaderProfileKol = ({
  isScrolled,
  headerRef,
  activeSection,
}: {
  isScrolled: boolean;
  headerRef: any;
  activeSection: string;
}) => {
  const { data: session } = useSession();
  const params = useParams();
  // console.log(params, session);
  const { open, openModal, closeModal } = useModal();
  const { id } = useParams();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const headerHeight = headerRef.current.offsetHeight;
    if (section) {
      const push = sectionId === "about-me" ? 40 : 0;

      const sectionTop = section.offsetTop - headerHeight + push; // Calculate the position to scroll to, accounting for the header
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col items-start",
        isScrolled ? "sticky top-0 z-50 bg-white gap-4 pt-4" : "py-4"
      )}
      ref={headerRef}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <img
            src={
              params.id === "user"
                ? session?.user?.image ?? "/example/avt.png"
                : "/example/avt.png"
            }
            alt="avt"
            className="w-[60px] h-[60px] rounded-full"
          />
          <div>5</div>
          <img src="/images/star.svg" alt="start" />
          <p className="text-gray-400">(222)</p>
        </div>
        <div className="flex items-center gap-8">
          <Statistic content="100k" title="Total Followers" />
          <Statistic content="200 ETH" title="Total Volume" />
          <Statistic content="300" title="Owners" />
          <Statistic content="800" title="Shares" />
          <Statistic content="100 ETH" title="Revenue Earn" />
          <div className="flex items-center gap-2">
            <Button className="" onClick={openModal}>
              Buy Key
            </Button>
            <Button>
              <a href={`/kols/${id}/contact`}>
                <img
                  src="/images/message.png"
                  alt="message"
                  className="w-6 h-6"
                />
              </a>
            </Button>
          </div>
        </div>
        <DialogBuyKey open={open} closeModal={closeModal} />
      </div>
      <div
        className={cn(
          "items-center gap-6 transition-all duration-300",
          isScrolled ? "flex opacity-100" : "hidden opacity-0"
        )}
      >
        <ItemMenuNav
          section="about-me"
          menu="About Me"
          activeSection={activeSection === "about-me"}
          scrollToSection={scrollToSection}
        />
        <ItemMenuNav
          section="services"
          menu="Services"
          activeSection={activeSection === "services"}
          scrollToSection={scrollToSection}
        />
        <ItemMenuNav
          section="tags"
          menu="Tags"
          activeSection={activeSection === "tags"}
          scrollToSection={scrollToSection}
        />
        <ItemMenuNav
          section="partners"
          menu="Partners"
          activeSection={activeSection === "partners"}
          scrollToSection={scrollToSection}
        />
        <ItemMenuNav
          section="my-collabs"
          menu="My Collabs"
          activeSection={activeSection === "my-collabs"}
          scrollToSection={scrollToSection}
        />
        <ItemMenuNav
          section="reviews"
          menu="Reviews"
          activeSection={activeSection === "reviews"}
          scrollToSection={scrollToSection}
        />
      </div>
    </div>
  );
};

const Statistic = ({ content, title }: { content: string; title: string }) => {
  return (
    <div className="flex items-start flex-col">
      <p className="font-bold text-neutral-900 text-base">{content}</p>
      <p className="font-normal text-gray-500 text-sm">{title}</p>
    </div>
  );
};

const ItemMenuNav = ({
  section,
  menu,
  activeSection,
  scrollToSection,
}: {
  section: string;
  menu: string;
  activeSection: boolean;
  scrollToSection: any;
}) => {
  return (
    <div
      className={cn(
        "py-2 border-b text-xl",
        activeSection
          ? "text-green-400 border-green-400"
          : "text-gray-400 border-transparent"
      )}
      role="button"
      onClick={() => scrollToSection(section)}
    >
      {menu}
    </div>
  );
};
