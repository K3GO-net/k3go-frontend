"use client";
import React, { useState } from "react";
import GigFormContext, {
  GigFormContextType,
  GigFormData,
  CheckboxItem,
} from "./context";

interface Props {
  children: React.ReactNode;
}

const initialGigFormData: GigFormData = {
  aboutMe: "",
  languages: [],
  photos: [],
  description: "",
  services: [],
  tags: [],
  partners: [],
  price: [],
  // Add more fields as needed
};

const GigFormProvider: React.FC<Props> = ({ children }) => {
  const [formData, setFormData] = useState<GigFormData>(initialGigFormData);

  const updateFormData = (
    field: string,
    value: string | string[] | File[] | CheckboxItem[] | number[]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const contextValue: GigFormContextType = {
    formData,
    updateFormData,
  };

  return (
    <GigFormContext.Provider value={contextValue}>
      {children}
    </GigFormContext.Provider>
  );
};

export default GigFormProvider;
