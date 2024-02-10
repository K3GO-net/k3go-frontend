"use client";

import { useModal } from "@/src/hooks/useModal";
import { Dialog, DialogContent } from "../shared/ui/dialog";
import { X } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { DialogResult } from "./DialogResult";
import { ChangeEvent, useState } from "react";

export const HeaderProfileKol = ({
  isScrolled,
  headerRef,
  activeSection,
}: {
  isScrolled: boolean;
  headerRef: any;
  activeSection: string;
}) => {
  const { open, openModal, closeModal } = useModal();
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
          <img src="/example/avt.png" alt="avt" className="w-[60px] h-[60px]" />
          <div>5</div>
          <img src="/images/star.svg" alt="start" />
          <p className="text-gray-400">(222)</p>
        </div>
        <div className="flex items-center gap-4">
          <Statistic content="100k" title="Total Followers" />
          <Statistic content="200 ETH" title="Total Volume" />
          <Statistic content="300" title="Owners" />
          <Statistic content="800" title="Shares" />
          <Statistic content="100 ETH" title="Revenue Earn" />
          <div className="flex items-center gap-2">
            <button
              className="text-white font-bold bg-purple-500 px-3 py-1.5"
              onClick={openModal}
            >
              Buy Key
            </button>
            <button className="text-white font-bold bg-purple-500 px-3 py-1.5">
              Mess
            </button>
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

const DialogBuyKey = ({
  open,
  closeModal,
}: {
  open: boolean;
  closeModal: () => void;
}) => {
  const { open: openDialog, openModal, closeModal: closeDialog } = useModal();
  const [amountKeys, setAmountKeys] = useState<number>();

  const handleChangeAmountKeys = (e: any) => {
    setAmountKeys(e.target.value);
  };

  const handleOpenDialogResult = () => {
    closeModal();
    openModal();
  };

  return (
    <Dialog open={open}>
      <DialogContent className="bg-white flex items-center justify-center p-[40px]">
        <div
          className="absolute top-4 right-4"
          role="button"
          onClick={closeModal}
        >
          <X className="h-4 w-4" />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-10">
              <p className="text-xl font-semibold">Henry's Key:</p>
              <p className="text-lg">100 ETH</p>
            </div>
            <p className="text-gray-400 italic">You owned 0 key</p>
            <input
              placeholder="Amount"
              type="number"
              min={0}
              className="border px-2 py-1 border-black outline-none"
              value={amountKeys}
              onChange={handleChangeAmountKeys}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className={cn(
                " text-white px-4 py-1 text-base transition-all duration-300",
                !amountKeys ? "bg-gray-400" : "bg-green-500"
              )}
              disabled={!amountKeys}
              onClick={handleOpenDialogResult}
            >
              Buy
            </button>
            <button
              className={cn(
                "text-white px-4 py-1 text-base transition-all duration-300",
                !amountKeys ? "bg-gray-400" : "bg-red-500"
              )}
              disabled={!amountKeys}
            >
              Sell
            </button>
          </div>
        </div>
      </DialogContent>
      <Dialog open={openDialog}>
        <DialogContent className="bg-white">
          <div className="p-10 flex flex-col items-center justify-between gap-10">
            <p className="font-bold text-lg">
              Your've acquired {amountKeys} keys
            </p>
            <div className="w-full justify-between items-center flex">
              <button className="bg-green-500 text-white py-1.5 px-3 text-lg font-semibold">
                <a href="/dashboard">Check Dashboard</a>
              </button>
              <button
                onClick={closeDialog}
                className="border border-gray-500 text-lg font-semibold py-1.5 px-3"
              >
                Cancel
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Dialog>
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
        "py-2 border-b  text-xl",
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
