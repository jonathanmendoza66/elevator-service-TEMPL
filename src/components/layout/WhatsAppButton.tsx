import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { COMPANY, WHATSAPP_MESSAGES } from "@/lib/constants";
import { useLang } from "@/i18n/LanguageContext";

const TOOLTIP_LABELS = {
  en: "Chat with us",
  hi: "हमसे चैट करें",
} as const;

export default function WhatsAppButton() {
  const { lang } = useLang();
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = COMPANY.whatsappLink(WHATSAPP_MESSAGES[lang].general);
  const tooltipLabel = TOOLTIP_LABELS[lang];

  return (
    <motion.div
      className="fixed bottom-20 right-6 z-50 flex items-center gap-3 xl:bottom-6"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
    >
      {/* Tooltip label */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white shadow-lg",
              "pointer-events-none select-none"
            )}
          >
            {tooltipLabel}
          </motion.span>
        )}
      </AnimatePresence>

      {/* WhatsApp button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={tooltipLabel}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <motion.div
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-full shadow-lg",
            "cursor-pointer transition-shadow hover:shadow-xl"
          )}
          style={{ backgroundColor: "#25D366" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(37, 211, 102, 0.4)",
              "0 0 0 12px rgba(37, 211, 102, 0)",
            ],
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            },
          }}
        >
          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="white"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <path d="M16.004 2.667A13.26 13.26 0 0 0 2.87 19.71L1.333 30.667l11.22-1.503A13.27 13.27 0 1 0 16.004 2.667Zm0 24.266a10.95 10.95 0 0 1-5.583-1.527l-.4-.237-4.147.556.556-4.076-.26-.414a10.99 10.99 0 1 1 9.834 5.698Zm6.028-8.23c-.33-.166-1.955-.965-2.26-1.075-.303-.112-.524-.166-.745.166-.22.33-.855 1.075-1.048 1.296-.193.22-.387.248-.717.083-.33-.166-1.394-.514-2.655-1.639-.982-.875-1.645-1.955-1.837-2.285-.193-.33-.021-.51.145-.674.149-.148.33-.387.496-.58.166-.193.22-.33.33-.552.112-.22.056-.414-.028-.58-.083-.166-.745-1.796-1.02-2.46-.27-.644-.543-.557-.745-.567l-.636-.011a1.22 1.22 0 0 0-.883.414c-.303.33-1.158 1.13-1.158 2.756s1.186 3.198 1.352 3.418c.166.22 2.335 3.565 5.658 5 .79.342 1.407.546 1.888.698.793.252 1.515.217 2.085.132.636-.095 1.955-.8 2.232-1.573.276-.772.276-1.434.193-1.572-.083-.139-.303-.22-.636-.387Z" />
          </svg>
        </motion.div>
      </a>
    </motion.div>
  );
}
