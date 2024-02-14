"use client";
import React, { ChangeEvent, FC, MouseEventHandler, useState } from "react";
import { Input } from "@/src/components/shared/ui/input";
import { Button } from "@/src/components/shared/ui/button";
import { useGigFormContext } from "@/src/context/GigForm/context";
import { useRouter } from "next/navigation";

interface TwitterProfileProps {
  name: string;
  image: string;
}

const TwitterProfile: FC<TwitterProfileProps> = ({ name, image }) => {
  const [aboutMe, setInputValue] = useState<string>("");
  const [languages, setLanguages] = useState<string[]>([""]);
  const { updateFormData } = useGigFormContext();

  const router = useRouter();

  const handleAboutMeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleLanguageChange = (index: number, value: string) => {
    const newLanguages = [...languages];
    newLanguages[index] = value;
    setLanguages(newLanguages);
  };

  const handleAddNew: MouseEventHandler<HTMLButtonElement> = () => {
    setLanguages([...languages, ""]);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateFormData("aboutMe", aboutMe);
    updateFormData("languages", languages);
    setInputValue("");
    setLanguages([""]);
    router.push("/create-collab?step=2");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="my-[20px] flex flex-col items-center gap-[6px]">
        <h1>{`Hi ${name} , your profile is ready !`}</h1>
        <img
          src={image}
          alt="profile image"
          className="w-[60px] h-[60px] rounded-full"
        />
        <p>{name}</p>
        <p>Followers: 100,7K</p>
      </div>

      <form
        onSubmit={submitHandler}
        className="w-[800px] flex flex-col gap-[20px] items-center"
      >
        <div className="w-full flex items-center gap-[10px]">
          <label htmlFor="about-me" className="min-w-[80px]">
            About me:
          </label>
          <Input
            type="text"
            id="about-me"
            value={aboutMe}
            onChange={handleAboutMeChange}
            placeholder="Tell us something about yourself"
          />
        </div>
        <div className="w-full">
          {languages.map((language, index) => (
            <Input
              key={index}
              type="text"
              value={language}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleLanguageChange(index, e.target.value)
              }
              placeholder={`Input ${index + 1}${
                index === 0
                  ? "st"
                  : index === 1
                  ? "nd"
                  : index === 2
                  ? "rd"
                  : "th"
              } language`}
              className="w-[200px] mb-[10px]"
            />
          ))}
          <Button type="button" onClick={handleAddNew}>
            + Add New
          </Button>
        </div>
        <Button type="submit">Continue</Button>
      </form>
    </div>
  );
};

export default TwitterProfile;
