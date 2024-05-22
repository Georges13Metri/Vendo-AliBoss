"use client";
import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";

interface FormMessageProps {
  type: "success" | "error";
  message: string;
  onClose?: () => void;
}

const FormMessage: React.FC<FormMessageProps> = ({
  type,
  message,
  onClose,
}) => {
  const [closed, setClosed] = useState(false);

  const handleClose = () => {
    setClosed(true);
    if (onClose) onClose();
  };

  if (closed) return null;

  return (
    <div
      className={`${
        type === "success"
          ? "bg-green-100 border border-green-400 text-green-700"
          : "bg-red-100 border border-red-400 text-red-700"
      } px-4 py-3 rounded relative mt-5`}
      role="alert"
    >
      <p className="inline">{message}</p>
      <button
        title="close"
        className="inline float-right text-black text-xl"
        onClick={handleClose}
      >
        <VscChromeClose />
      </button>
    </div>
  );
};

export default FormMessage;
