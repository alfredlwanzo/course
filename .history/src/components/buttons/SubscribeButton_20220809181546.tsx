import React from "react";

interface Props {
  label?: string;
}

const SubscribeButton = ({ label }: Props) => {
  return (
    <a
      href="https://wa.me/+243978154329"
      target="_blank"
      rel="noreferrer"
      className="bg-gray-900 text-primary animate-pulse py-4 px-10 text-xl font-semibold rounded-full border-4 border-gray-800 hover:bg-opacity-95 hover:border-gray-900"
    >
      {label ?? "Inscrivez-vous!"}
    </a>
  );
};

export default SubscribeButton;
