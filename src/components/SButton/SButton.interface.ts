export interface SButtonProps {
  type?: "button" | "submit" | "reset";
  text?: string;
  size?: "sm" | "lg";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";

  loading?: boolean;
  disabled?: boolean;
}
