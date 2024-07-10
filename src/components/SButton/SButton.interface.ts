import { Color } from "../Component.interface";

export interface SButtonProps {
  type?: "button" | "submit" | "reset";
  text?: string;
  size?: "sm" | "lg";
  color?: Color;
  loading?: boolean;
  disabled?: boolean;
}
