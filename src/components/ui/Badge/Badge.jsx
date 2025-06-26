import { twMerge } from "tailwind-merge";

export const Badge = ({
  label,
  iconStart = null,
  iconEnd = null,
  className = "",
}) => {
  return (
    <div
      className={twMerge(`
        inline-flex items-center gap-1.5
        rounded-full px-3 py-1.5
        text-sm font-medium text-gray-800
        backdrop-blur-md bg-white/40
        ring-1 ring-black/10 shadow-[0_2px_8px_rgba(0,0,0,0.08)]
        hover:brightness-105 hover:scale-105
        transition-all duration-300 cursor-pointer
      `, className)}
    >
      {iconStart && iconStart}
      <span>{label}</span>
      {iconEnd && iconEnd}
    </div>
  );
};