import { AnimatePresence, motion } from "framer-motion"
import { Logo } from "./logo"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Ministérios", href: "/#ministerios" },
  { label: "Eventos", href: "/#events" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 border-b ${scrolled
          ? "bg-white/97 backdrop-blur-md border-iisc-gold/15 shadow-[0_1px_24px_rgba(0,0,0,0.08)]"
          : "bg-transparent backdrop-blur-none border-transparent shadow-none"
        }`}
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
              className={`nav-link transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#location"
            className={`
              inline-flex items-center px-5 py-2.5 text-xs font-bold uppercase tracking-widest
              transition-all duration-300 border
              ${scrolled
                ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
                : "bg-white/10 text-white border-white/40 hover:bg-white/20"
              }
            `}
          >
            Venha nos visitar
          </a>
        </nav>

        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={menuOpen}
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
            className="overflow-hidden border-t border-border bg-white md:hidden"
          >
            <nav className="container flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-border/40 px-2 py-3 text-sm font-semibold text-foreground transition-colors hover:text-primary last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/#location"
                onClick={() => setMenuOpen(false)}
                className="mt-3 bg-primary py-3 text-center text-xs font-bold uppercase tracking-widest text-primary-foreground"
              >
                Venha nos visitar
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}