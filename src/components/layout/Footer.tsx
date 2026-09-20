import { Link } from "react-router-dom"
import { Phone, Mail, MapPin, Clock, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useLang } from "@/i18n/LanguageContext"
import { translations } from "@/i18n/translations"
import { COMPANY } from "@/lib/constants"
import { cn } from "@/lib/utils"

const quickLinks = [
  { labelKey: "home" as const, to: "/" },
  { labelKey: "about" as const, to: "/about" },
  { labelKey: "services" as const, to: "/services" },
  { labelKey: "products" as const, to: "/products" },
  { labelKey: "projects" as const, to: "/projects" },
  { labelKey: "contact" as const, to: "/contact" },
]

const serviceLinks = [
  { labelKey: "installation" as const, to: "/services#installation" },
  { labelKey: "homeElevator" as const, to: "/services#home-elevators" },
  { labelKey: "amc" as const, to: "/services#amc" },
  { labelKey: "repair" as const, to: "/services#repair" },
  { labelKey: "modernisation" as const, to: "/services#modernisation" },
  { labelKey: "commercial" as const, to: "/services#commercial" },
]

export default function Footer() {
  const { lang } = useLang()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="space-y-5">
            <Link to="/" className="inline-block">
              <img
                src="/logo.webp"
                alt={COMPANY.name}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              {translations.footer.tagline[lang]}
            </p>
            {/* Social Placeholder */}
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-primary-foreground/50">
                {lang === "en" ? "Follow Us" : "हमें फ़ॉलो करें"}
              </span>
              <div className="flex gap-2">
                {["FB", "IG", "LI"].map((label) => (
                  <span
                    key={label}
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-md",
                      "bg-primary-foreground/10 text-xs font-medium text-primary-foreground/60",
                      "transition-colors hover:bg-primary-foreground/20 hover:text-primary-foreground"
                    )}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              {translations.footer.quickLinks[lang]}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.labelKey}>
                  <Link
                    to={link.to}
                    className={cn(
                      "text-sm text-primary-foreground/70 transition-colors",
                      "hover:text-primary-foreground"
                    )}
                  >
                    {translations.nav[link.labelKey][lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              {translations.footer.ourServices[lang]}
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.labelKey}>
                  <Link
                    to={link.to}
                    className={cn(
                      "text-sm text-primary-foreground/70 transition-colors",
                      "hover:text-primary-foreground"
                    )}
                  >
                    {translations.services[link.labelKey].title[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              {translations.footer.contactInfo[lang]}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/50" />
                <span className="text-sm leading-relaxed text-primary-foreground/70">
                  {COMPANY.address}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className={cn(
                    "flex items-center gap-3 text-sm text-primary-foreground/70",
                    "transition-colors hover:text-primary-foreground"
                  )}
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary-foreground/50" />
                  {COMPANY.phoneFormatted}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className={cn(
                    "flex items-center gap-3 text-sm text-primary-foreground/70",
                    "transition-colors hover:text-primary-foreground"
                  )}
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary-foreground/50" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-primary-foreground/50" />
                <span className="text-sm text-primary-foreground/70">
                  {COMPANY.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-primary-foreground/15" />
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-col items-center gap-1 text-xs text-primary-foreground/60 sm:items-start">
            <p>
              &copy; {new Date().getFullYear()} {COMPANY.name}.{" "}
              {translations.footer.rights[lang]}
            </p>
            <p>GSTIN: {COMPANY.gstin}</p>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className={cn(
              "h-9 w-9 rounded-full",
              "border-primary-foreground/20 bg-primary-foreground/10",
              "text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
            )}
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
