import { fadeInUp } from "@/motions";
import { motion } from "framer-motion"
import type { ReactNode } from "react";

interface AboutSectionItemProps {
  title: string;
  children: ReactNode;
}

export function AboutSectionItem({ title, children }: AboutSectionItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="md:flex space-y-4"
    >
      <div className="md:w-2/5 flex items-center">
        <h2 className="text-3xl font-semibold text-accent">{title}</h2>
      </div>
      <div className="md:w-3/5 font-normal">
        {children}
      </div>
    </motion.div>
  )
}