import strict from "assert/strict";

export interface CardProps {
    title: string,
    content: string
}


 export interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
  className?: string; // optional custom class
}


export interface PostProps{
    title: string;
    content: string;
    userId: number;
    id?: number
}