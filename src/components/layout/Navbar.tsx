import { useState, useEffect, useCallback } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Menu, X, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

import { ModeToggle } from "@/components/mode-toggle"
import { useLang } from "@/i18n/LanguageContext"
import { translations } from "@/i18n/translations"
import { COMPANY } from "@/lib/constants"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { key: "home" as const, path: "/" },
  { key: "about" as const, path: "/about" },
  { key: "services" as const, path: "/services" },
  { key: "products" as const, path: "/products" },
  { key: "amc" as const, path: "/amc" },
  { key: "projects" as const, path: "/projects" },
  { key: "areas" as const, path: "/areas" },
  { key: "faq" as const, path: "/faq" },
  { key: "contact" as const, path: "/contact" },
]

export function Navbar() {
  const { lang, toggleLang } = useLang()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
      className={cn(
        "glass-effect fixed inset-x-0 top-0 z-50 border-b border-border/40 transition-shadow duration-300",
        scrolled && "shadow-lg shadow-black/5"
      )}
    >
      {/* Top bar – phone number (desktop only) */}
      <div className="hidden border-b border-border/30 bg-primary/5 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1">
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="size-3" />
            {COMPANY.phoneFormatted}
          </a>
          <span className="text-xs text-muted-foreground">{COMPANY.hours}</span>
        </div>
      </div>

      {/* Main nav bar */}
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-4 lg:h-16">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <motion.img
            src="/logo.webp"
            alt={COMPANY.name}
            className="h-8 w-auto lg:h-10"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          />
          <span className="text-sm font-bold tracking-tight text-foreground lg:text-base">
            {COMPANY.name}
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-0.5 xl:flex">
          {NAV_ITEMS.map((item) => (
            <Link key={item.key} to={item.path}>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  isActive(item.path) &&
                    "bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary"
                )}
              >
                {translations.nav[item.key][lang]}
              </Button>
            </Link>
          ))}
        </div>

        {/* Right-side actions */}
        <div className="flex items-center gap-1.5 lg:gap-2">
          {/* Language toggle */}
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={toggleLang}
            aria-label="Toggle language"
            className="text-muted-foreground hover:text-foreground"
          >
            <Globe />
          </Button>

          {/* Theme toggle */}
          <ModeToggle />

          {/* Desktop CTA */}
          <Button asChild size="sm" className="hidden lg:inline-flex">
            <Link to="/contact">
              {translations.nav.getQuote[lang]}
            </Link>
          </Button>

          {/* Mobile menu */}
          <div className="xl:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Open menu"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={mobileOpen ? "close" : "open"}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      {mobileOpen ? <X /> : <Menu />}
                    </motion.span>
                  </AnimatePresence>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-72 p-0">
                <SheetHeader className="border-b border-border/40 px-5 py-4">
                  <SheetTitle className="flex items-center gap-2 text-left">
                    <img src="/logo.webp" alt={COMPANY.name} className="h-7 w-auto" />
                    <span className="text-sm font-bold tracking-tight">
                      {COMPANY.name}
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-1 px-3 py-3">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.div
                      key={item.key}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.03, duration: 0.2 }}
                    >
                      <SheetClose asChild>
                        <Link to={item.path}>
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-start text-sm font-medium text-muted-foreground hover:text-foreground",
                              isActive(item.path) &&
                                "bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary"
                            )}
                          >
                            {translations.nav[item.key][lang]}
                          </Button>
                        </Link>
                      </SheetClose>
                    </motion.div>
                  ))}
                </div>

                <Separator className="mx-3" />

                {/* Mobile bottom actions */}
                <div className="flex flex-col gap-3 px-5 py-4">
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Phone className="size-4" />
                    {COMPANY.phoneFormatted}
                  </a>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleLang}
                    className="w-full justify-center gap-2"
                  >
                    <Globe className="size-4" />
                    {lang === "en" ? "हिंदी" : "English"}
                  </Button>

                  <SheetClose asChild>
                    <Button asChild size="sm" className="w-full">
                      <Link to="/contact">
                        {translations.nav.getQuote[lang]}
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

export default Navbar
