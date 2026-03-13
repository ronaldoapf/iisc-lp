import { fadeInUp } from "@/motions";
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface AboutSectionItemProps {
  icon?: LucideIcon;
  title: string;
  number: string;
  children: ReactNode;
}

export function AboutSectionItem({ number, icon: Icon, title, children }: AboutSectionItemProps) {
  return (
    <motion.div key={number} variants={fadeInUp} className="group relative grid md:grid-cols-[1fr_2fr] space-y-4">
      <div className="w-full items-center">
        <div className="relative">
          <span className="pointer-events-none select-none text-8xl font-bold leading-none font-display text-iisc-green/12">
            {number}
          </span>

          {Icon && (
            <Icon className="absolute h-7 w-7 bottom-4 text-iisc-green" />
          )}
        </div>

        <h3 className="text-2xl font-bold font-display text-iisc-text-dark">
          {title}
        </h3>
      </div>
      <div className="w-full flex justify-center flex-col">
        {children}
      </div>
    </motion.div>
  )
}