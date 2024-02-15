"use client";
import CreateGig from "@/src/components/CreateGig";
import TwitterProfile from "@/src/components/TwitterProfile";
import { useSession } from "next-auth/react";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/src/components/shared/ui/button";
import { ButtonConnectCustom } from "@/src/components/shared/Button/ButtonConncectCustom";
import { useAccount } from "wagmi";

const CreateCollabPage = () => {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();

  const { isConnected } = useAccount();

  const step = searchParams.get("step");

  if (!session?.user) return null;

  return (
    <div className="w-full flex flex-col items-center">
      {step === "1" && (
        <TwitterProfile
          name={session?.user?.name ?? ""}
          image={session?.user?.image ?? ""}
        />
      )}
      {step === "2" && <CreateGig />}
      {step === "3" && (
        <>
          {!isConnected && (
            <>
              <p className="font-[600] my-[20px]">
                Final Step, Connect Wallet to receive payment
              </p>
              <ButtonConnectCustom />
            </>
          )}
          {isConnected && (
            <>
              <p className="font-[600] my-[20px]">Start Earning</p>
              <Button onClick={() => router.push("/kols/user")}>
                View Profile
              </Button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CreateCollabPage;
