"use client";
import React, { ChangeEvent, FC, useState } from "react";

interface TwitterProfileProps {
  name: string;
  image: string;
  continue: () => void;
}

const TwitterProfile: FC<TwitterProfileProps> = ({
  name,
  image,
  continue: continueCallback,
}) => {
  const [aboutMe, setInputValue] = useState<string>("");
  const [languages, setLanguages] = useState<string[]>([""]);

  const handleAboutMeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleLanguageChange = (index: number, value: string) => {
    const newLanguages = [...languages];
    newLanguages[index] = value;
    setLanguages(newLanguages);
  };

  const handleAddNew = () => {
    setLanguages([...languages, ""]);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h1>{`Hi ${name} , your profile is ready !`}</h1>
      <img
        src={image}
        alt="profile image"
        className="w-[60px] h-[60px] rounded-full"
      />
      <p>{name}</p>
      <p>Followers: 100,7K</p>
      <div className="w-[800px]">
        <div className="w-full flex items-center gap-[6px] mb-[20px]">
          <label htmlFor="about-me">About me:</label>
          <input
            type="text"
            id="about-me"
            value={aboutMe}
            onChange={handleAboutMeChange}
            placeholder="Tell us something about yourself"
            className="flex-1 border-[1px] border-solid border-black py-[4px] px-[10px] rounded-[4px]"
          />
        </div>
        <div>
          {languages.map((language, index) => (
            <div key={index}>
              <input
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
                className="w-[200px] border-[1px] border-solid border-black py-[4px] px-[10px] rounded-[4px] mb-[10px]"
              />
            </div>
          ))}
          <div
            className="w-max bg-black text-white py-[6px] px-[12px] cursor-pointer"
            onClick={handleAddNew}
          >
            + Add New
          </div>
        </div>
      </div>
      <div
        onClick={continueCallback}
        className="w-max bg-black text-white py-[6px] px-[12px] cursor-pointer"
      >
        Continue
      </div>
    </div>
  );
};

export default TwitterProfile;
