import React from "react";
import { ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: "text-sm px-3 py-1",
  medium: "text-base px-4 py-2",
  large: "text-lg px-5 py-3",
};

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  onClick,
  className = "",
}) => {
  const baseStyles = "bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200";
  const combinedClasses = `${baseStyles} ${sizeClasses[size]} ${shape} ${className}`;

  return (
    <button onClick={onClick} className={combinedClasses}>
      {title}
    </button>
  );
};

export default Button;
