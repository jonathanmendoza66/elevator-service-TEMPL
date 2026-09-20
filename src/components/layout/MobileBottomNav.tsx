import { Link, useLocation } from "react-router-dom"
import { Home, Wrench, Package, ShieldCheck, Phone } from "lucide-react"
import { useLang } from "@/i18n/LanguageContext"
import { cn } from "@/lib/utils"

const BOTTOM_NAV_ITEMS = [
  { labelEn: "Home", labelHi: "होम", path: "/", icon: Home },
  { labelEn: "Services", labelHi: "सेवाएं", path: "/services", icon: Wrench },
  { labelEn: "Products", labelHi: "उत्पाद", path: "/products", icon: Package },
  { labelEn: "AMC", labelHi: "AMC", path: "/amc", icon: ShieldCheck },
  { labelEn: "Contact", labelHi: "संपर्क", path: "/contact", icon: Phone },
] as const

export default function MobileBottomNav() {
  const location = useLocation()
  const { lang } = useLang()

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path)

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-background/80 backdrop-blur-xl xl:hidden">
      <div className="mx-auto flex h-16 max-w-lg items-stretch justify-around">
        {BOTTOM_NAV_ITEMS.map((item) => {
          const active = isActive(item.path)
          const Icon = item.icon
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "group relative flex flex-1 flex-col items-center justify-center gap-0.5 text-muted-foreground transition-colors",
                active && "text-primary"
              )}
            >
              {active && (
                <span className="absolute inset-x-3 top-0 h-0.5 rounded-full bg-primary" />
              )}
              <Icon
                className={cn(
                  "size-5 transition-transform group-active:scale-90",
                  active && "stroke-[2.5px]"
                )}
              />
              <span
                className={cn(
                  "text-[10px] leading-tight font-medium",
                  active && "font-semibold"
                )}
              >
                {lang === "en" ? item.labelEn : item.labelHi}
              </span>
            </Link>
          )
        })}
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  )
}
