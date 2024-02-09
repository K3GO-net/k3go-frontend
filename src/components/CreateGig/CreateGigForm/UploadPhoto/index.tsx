import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

interface UploadPhotoProps {
  index: number;
  previewImage: string | ArrayBuffer | null;
  onDrop: (acceptedFiles: File[]) => void;
}

const UploadPhoto: React.FC<UploadPhotoProps> = ({
  index,
  previewImage,
  onDrop,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      image: ["image/png", "image/jpeg", "image/jpg"],
    },
    onDrop,
  });

  return (
    <div
      className="w-[220px] h-[220px] p-[8px] border-[1px] border-dashed border-gray-500 flex flex-col items-center justify-center"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {!previewImage ? (
        <p className="w-full flex flex-col items-center justify-center">
          <span>Drag & drop a Photo or</span>
          <span className="text-blue-600 cursor-pointer">Browse</span>
        </p>
      ) : (
        <img
          src={previewImage as string}
          alt={`Preview Photo ${index + 1}`}
          className="w-full h-full cursor-pointer"
        />
      )}
    </div>
  );
};

export default UploadPhoto;
