"use client";
import CreateGig from "@/src/components/CreateGig";
import TwitterProfile from "@/src/components/TwitterProfile";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

const CreateGigPage = () => {
  const { data: session } = useSession();
  const [stage, setStage] = useState<number>(0);

  if (!session?.user) return null;

  return (
    <div className="w-full flex flex-col items-center">
      {stage === 0 && (
        <TwitterProfile
          name={session?.user?.name ?? ""}
          image={session?.user?.image ?? ""}
          continue={() => setStage(1)}
        />
      )}
      {stage === 1 && <CreateGig />}
    </div>
  );
};

export default CreateGigPage;
