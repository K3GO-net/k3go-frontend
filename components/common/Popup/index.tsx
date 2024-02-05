import React, { FC } from "react";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-[0.5]">
      <div className="w-max flex flex-col items-center bg-white relative py-[15px] px-[36px]">
        <div
          className="absolute w-[32px] h-[32px] top-0 right-0 cursor-pointer flex items-center justify-center text-[32px]"
          onClick={onClose}
        >
          &times;
        </div>
        <h1 className="text-[24px] leading-[24px] mb-[30px]">{title}</h1>
        {children}
        <div
          onClick={onClose}
          className="text-[16px] self-end mt-[50px] cursor-pointer"
        >
          I’ll look around for now
        </div>
      </div>
    </div>
  );
};

export default Popup;
