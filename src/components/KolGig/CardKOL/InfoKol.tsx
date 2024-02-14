"use client";

import { InfoKols } from "@/src/types/KOL";
import { Check } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../shared/ui/carousel";

export const InfoKol = ({ kol }: { kol: InfoKols }) => {
  return (
    <div className="group h-full">
      <a href="/kols/2">
        <div className="flex flex-col gap-6 border border-gray-200 rounded-lg p-2 h-full">
          <div className="flex flex-col items-center">
            <div className="relative shrink-0">
              <Carousel>
                <CarouselContent className="">
                  {kol.bg?.map((bg, index) => {
                    return (
                      <CarouselItem key={index}>
                        <img
                          src={bg}
                          alt="bg"
                          className="w-[400px] h-[300px] object-cover rounded-lg "
                        />
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>
              <div className="absolute -bottom-7 left-2">
                <img
                  src={kol.avt}
                  alt="avt"
                  className="roudned-full h-14 w-14 relative"
                />
                <div className="absolute -bottom-2 -right-1 bg-blue-400 rounded-full p-1">
                  <Check className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            <div>Follwers: {kol.followers}</div>
          </div>
          <div className="flex flex-col gap-4 h-full px-4">
            <div className="group-hover:text-purple-500 group-hover:underline">
              {kol.description}
            </div>
            <div className="mt-auto">
              <p className="flex items-center gap-2">
                <img src="/images/star.svg" />
                4,9 <span>(30)</span>
              </p>
              From: $$$$
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
