"use client";

import Image from "next/image";

interface SkillProps {
  name: string;
  image: string;
}

const Skill = ({ name, image }: SkillProps) => {
  return (
    // 'group' tracks the hover state for this specific skill card
    <div className="relative group flex flex-col items-center gap-2 p-2 rounded-xl transition-all duration-300">
      
      {/* 1. Small Image (Always visible, changes opacity/style on hover if desired) */}
      <div className="w-8 h-8 relative flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
        <Image
          src={image}
          alt={`${name} small icon`}
          width={32}
          height={32}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Skill Name */}
      <span
        className="
          cursor-pointer
          text-base
          sm:text-lg
          font-semibold
          text-zinc-400
          transition-colors
          duration-300
          group-hover:text-orange-500
        "
      >
        {name}
      </span>

      {/* 2. Large Image Popover (Appears ONLY on hover) */}
      <div
        className="
          absolute
          left-1/2
          bottom-full
          mb-4
          -translate-x-1/2
          opacity-0
          scale-75
          pointer-events-none
          transition-all
          duration-300
          ease-out
          group-hover:opacity-100
          group-hover:scale-100
          z-50
          bg-zinc-950
          p-3
          rounded-2xl
          shadow-[0_0_30px_rgba(0,0,0,0.6)]
          border border-zinc-800
        "
      >
        {/* Fixed bounding box forcing the large image to be uniformly sized */}
        <div className="w-20 h-20 relative flex items-center justify-center">
          <Image
            src={image}
            alt={`${name} large preview`}
            width={80}
            height={80}
            className="object-contain w-full h-full"
            priority={false}
          />
        </div>
        {/* Small decorative triangle arrow at the bottom of the popover */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-zinc-950"></div>
      </div>
    </div>
  );
};

export default Skill;