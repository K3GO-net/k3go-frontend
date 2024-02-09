import { createContext, useContext } from "react";

export interface CheckboxItem {
  id: string;
  title: string;
  checked: boolean;
}

export interface GigFormData {
  aboutMe: string;
  languages: string[];
  photos: File[];
  description: string;
  services: CheckboxItem[];
  tags: CheckboxItem[];
  partners: string[];
  price: number[];
}

export interface GigFormContextType {
  formData: GigFormData;
  updateFormData: (
    field: string,
    value: string | string[] | File[] | CheckboxItem[] | number[]
  ) => void;
}

const GigFormContext = createContext<GigFormContextType | undefined>(undefined);

export const useGigFormContext = () => {
  const context = useContext(GigFormContext);
  if (!context) {
    throw new Error("useGigFormContext must be used within a GigFormProvider");
  }
  return context;
};

export default GigFormContext;
