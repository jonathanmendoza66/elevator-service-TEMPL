import { createContext, useContext, useState, useCallback } from "react"
import type { Lang } from "./translations"

interface LanguageContextType {
  lang: Lang
  toggleLang: () => void
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("veyra-lang")
    return (saved === "hi" ? "hi" : "en") as Lang
  })

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "en" ? "hi" : "en"
      localStorage.setItem("veyra-lang", next)
      return next
    })
  }, [])

  const setLangAndSave = useCallback((l: Lang) => {
    localStorage.setItem("veyra-lang", l)
    setLang(l)
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang: setLangAndSave }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
