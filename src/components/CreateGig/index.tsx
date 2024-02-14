"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import CreateGigForm from "./CreateGigForm";
import { Button } from "@/src/components/shared/ui/button";

const CreateGig = () => {
  const [createGig, setCreateGig] = useState<boolean>(false);
  const { data: session } = useSession();

  return (
    <div className="w-full flex flex-col items-center mt-[20px]">
      <h1 className="mb-[20px]">Create your first Collab</h1>
      {!createGig ? (
        <>
          <div className="w-max border-[1px] border-solid border-black p-[16px] mb-[20px]">
            <div className="relative">
              <img
                src="/images/upload.png"
                alt="upload image"
                className="w-[240px] h-[240px]"
              />
              <img
                src={session?.user?.image ?? ""}
                alt="profile image"
                className="w-[40px] h-[40px] rounded-full absolute left-[20px] bottom-0 translate-y-1/2"
              />
            </div>
            <p className="mt-[40px] pb-[60px]">Description</p>
          </div>
          <Button
            onClick={() => {
              setCreateGig(true);
            }}
          >
            Create Collab
          </Button>
        </>
      ) : (
        <CreateGigForm />
      )}
    </div>
  );
};

export default CreateGig;
