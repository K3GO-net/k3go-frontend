"use client";

import { Tabs, TabsContent, TabsList } from "@/src/components/shared/ui/tabs";
import { renderAddress } from "@/src/utils/renderAddress";
import React from "react";
import { useAccount } from "wagmi";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/src/lib/utils";
import { EarningTabs } from "@/src/components/Dashboard/EarningTabs";
import { OrderPlacedTabs } from "@/src/components/Dashboard/OrderPlacedTabs";
import { YourShareTabs } from "@/src/components/Dashboard/YourShareTabs";
import { ButtonConnectCustom } from "@/src/components/shared/Button/ButtonConncectCustom";

export const DashboardPage = () => {
  const { address, isConnected } = useAccount();

  return (
    <>
      {isConnected ? (
        <div className="py-10">
          <div className="font-bold text-[30px] pb-10">
            <div>
              Hello, <span>{renderAddress(address)}</span>
            </div>
          </div>
          <Tabs defaultValue="earning">
            <TabsList className="flex items-center justify-start gap-10">
              <TabsTrigger value="earning">Earning</TabsTrigger>
              <TabsTrigger value="order-placed">Order Placed</TabsTrigger>
              <TabsTrigger value="your-shares">Your Shares</TabsTrigger>
            </TabsList>
            <TabsContent value="earning">
              <EarningTabs />
            </TabsContent>
            <TabsContent value="order-placed">
              <OrderPlacedTabs />
            </TabsContent>
            <TabsContent value="your-shares">
              <YourShareTabs />
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <ButtonConnectCustom />
        </div>
      )}
    </>
  );
};

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center text-xl whitespace-nowrap py-1.5 font-semibold border-b border-transparent ring-offset-background transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-purple-500 data-[state=active]:text-purple-500 data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
));
