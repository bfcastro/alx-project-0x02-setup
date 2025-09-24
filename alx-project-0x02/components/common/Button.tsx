import { type ButtonProps } from "@/interfaces";

export default function Button({
  label,
  size = "medium",
  shape = "rounded-md",
  onClick,
}: ButtonProps) {
  let sizeClasses = "";
  switch (size) {
    case "small":
      sizeClasses = "px-2 py-1 text-sm";
      break;
    case "large":
      sizeClasses = "px-6 py-3 text-lg";
      break;
    default:
      sizeClasses = "px-4 py-2 text-base";
  }

  const baseClasses =
    "bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${shape}`}
    >
      {label}
    </button>
  );
}