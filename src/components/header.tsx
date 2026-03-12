import { motion } from "framer-motion"
import { Logo } from "./logo"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <motion.header
      animate={{ y: 0 }}
      initial={{ y: -100 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-b-gray-200 bg-white font-sans shadow-sm"
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <a href="sobre" className="text-sm font-bold transition-colors hover:text-primary">
              Sobre
            </a>
            <a href="ministerios" className="text-sm font-bold transition-colors hover:text-primary">
              Ministérios
            </a>
            <a href="eventos" className="text-sm font-bold transition-colors hover:text-primary">
              Eventos
            </a>
            <a href="#contato" className="text-sm font-bold transition-colors hover:text-primary">
              Contato
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}