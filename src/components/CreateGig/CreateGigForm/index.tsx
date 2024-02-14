import React, { ChangeEvent, useState } from "react";
import { useGigFormContext } from "@/src/context/GigForm/context";
import UploadPhoto from "./UploadPhoto";
import { Textarea } from "@/src/components/shared/ui/textarea";
import CheckboxCustom from "./CheckboxCustom";
import PartnerInput from "./PartnerInput";
import { Button } from "@/src/components/shared/ui/button";
import Slider from "react-slider";
import { useRouter } from "next/navigation";

interface CheckboxItem {
  id: string;
  title: string;
  checked: boolean;
}

const CreateGigForm = () => {
  const { formData, updateFormData } = useGigFormContext();
  const [files, setFiles] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<
    (string | ArrayBuffer | null)[]
  >([null, null, null]);
  const [description, setDescription] = useState<string>("");
  const [services, setServices] = useState<CheckboxItem[]>([
    { id: "threads", title: "Threads", checked: false },
    { id: "posts", title: "Posts", checked: false },
    { id: "spaces", title: "Spaces", checked: false },
    { id: "ama", title: "AMA", checked: false },
    { id: "videos", title: "Videos", checked: false },
    { id: "partnership", title: "Partnership", checked: false },
    { id: "review", title: "Review", checked: false },
    { id: "other", title: "Other", checked: false },
  ]);
  const [tags, setTags] = useState<CheckboxItem[]>([
    { id: "nft", title: "NFT", checked: false },
    { id: "perpetual", title: "Perpetual", checked: false },
    { id: "wallet", title: "Wallet", checked: false },
    { id: "security", title: "Security", checked: false },
    { id: "fantoken", title: "Fantoken", checked: false },
    { id: "music", title: "Music", checked: false },
    { id: "defi", title: "DeFi", checked: false },
    { id: "dex", title: "DEX", checked: false },
    { id: "onchain-tools", title: "Onchain Tools", checked: false },
    { id: "ai", title: "AI", checked: false },
    { id: "gaming", title: "Gaming", checked: false },
    { id: "trading", title: "Trading", checked: false },
    { id: "infrastructure", title: "Infrastructure", checked: false },
    { id: "cex", title: "CEX", checked: false },
    { id: "yield-aggregator", title: "Yield Aggregator", checked: false },
    { id: "amm", title: "AMM", checked: false },
    { id: "mev", title: "MEV", checked: false },
    {
      id: "portfolio-management",
      title: "Portfolio Management",
      checked: false,
    },
    { id: "data", title: "Data", checked: false },
    { id: "analytics", title: "Analytics", checked: false },
  ]);
  const [partners, setPartners] = useState<string[]>([]);
  const [price, setPrice] = useState<number[]>([100, 5000]);

  const router = useRouter();

  const handleDrop = (index: number) => (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[index] = reader.result;
        return updatedImages;
      });
    };
    reader.readAsDataURL(file);
    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles[index] = file;
      return updatedFiles;
    });
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleServicesChange = (id: string) => {
    setServices((prev) =>
      prev.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  const handleTagsChange = (id: string) => {
    setTags((prev) =>
      prev.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const checkedServices = services.filter((item) => item.checked);
    const checkedTags = tags.filter((item) => item.checked);

    updateFormData("photos", files);
    updateFormData("description", description);
    updateFormData("services", checkedServices);
    updateFormData("tags", checkedTags);
    updateFormData("partners", partners);
    updateFormData("price", price);

    router.push("/create-collab?step=3");
  };

  return (
    <form
      onKeyDown={handleKeyDown}
      onSubmit={submitHandler}
      className="w-full mb-[40px]"
    >
      <div className="w-full mb-[10px]">
        <h1 className="font-[600] mb-[10px]">Upload Preview Image</h1>
        <div className="flex items-center gap-[10px]">
          {[0, 1, 2].map((item) => (
            <UploadPhoto
              key={item}
              index={item}
              previewImage={previewImages[item]}
              onDrop={handleDrop(item)}
            />
          ))}
        </div>
      </div>

      <div className="w-full">
        <label htmlFor="description" className="font-[600]">
          Description
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          className="mt-[10px]"
          rows={3}
          // placeholder=""
        />
        <div className="w-full text-end mt-[8px]">{`${description.length}/300 words`}</div>
      </div>
      <div className="w-full mb-[10px]">
        <h1 className="font-[600] mb-[10px]">Services</h1>
        <div className="w-full flex items-center gap-[20px]">
          {services.map((item) => (
            <CheckboxCustom
              id={item.id}
              title={item.title}
              checked={item.checked}
              handleCheckboxChange={() => handleServicesChange(item.id)}
            />
          ))}
        </div>
      </div>
      <div className="w-max mb-[10px]">
        <h1 className="font-[600] mb-[10px]">Tags</h1>
        <div className="w-full grid grid-cols-6 gap-y-[10px]">
          {tags.map((item) => (
            <CheckboxCustom
              id={item.id}
              title={item.title}
              checked={item.checked}
              handleCheckboxChange={() => handleTagsChange(item.id)}
            />
          ))}
        </div>
      </div>
      <div className="w-max min-w-[300px] mb-[10px]">
        <h1 className="font-[600] mb-[10px]">Top 3 Partners</h1>
        <PartnerInput partners={partners} setPartners={setPartners} />
      </div>
      <div className="mb-[20px]">
        <h1 className="font-[600] mb-[10px]">
          Set Average Price for your Collabs
        </h1>
        <div className="w-[600px]">
          <div>{`Min: ${price[0]}$ - Max: ${price[1]}$`}</div>
          <Slider
            className="slider"
            value={price}
            onChange={setPrice}
            min={100}
            max={5000}
            step={50}
            minDistance={250}
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button type="submit">Create Collab</Button>
      </div>
    </form>
  );
};

export default CreateGigForm;
