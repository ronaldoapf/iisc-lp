import { AnimatePresence, motion } from "framer-motion"
import { Logo } from "./logo"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Ministérios", href: "/#ministerios" },
  { label: "Eventos", href: "/#events" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="h-20" aria-hidden="true" />
      <header
        className="fixed top-0 w-full z-50 bg-white duration-300 border-b border-gray-300 shadow-sm"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
          <Link to="/" aria-label="Início">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="nav-link text-gray-800 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#location"
              className="inline-flex items-center px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 border border-iisc-gold/50 text-iisc-gold-light hover:bg-iisc-gold hover:border-iisc-gold hover:text-white"
            >
              Venha nos visitar
            </a>
          </nav>

          <button
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 text-gray-800 transition-colors"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="overflow-hidden border-t border-iisc-gold/10 bg-iisc-midnight md:hidden"
            >
              <nav className="container flex flex-col gap-1 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-white/8 px-2 py-3 text-sm font-semibold text-white/70 transition-colors hover:text-white last:border-0"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="#location"
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 border border-iisc-gold/40 py-3 text-center text-xs font-bold uppercase tracking-widest text-iisc-gold-light hover:bg-iisc-gold hover:text-white transition-all duration-300"
                >
                  Venha nos visitar
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}