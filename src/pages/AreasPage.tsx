import { motion } from "framer-motion"
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  AlertCircle,
  Navigation,
  Building2,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useLang } from "@/i18n/LanguageContext"
import { translations } from "@/i18n/translations"
import { COMPANY, WHATSAPP_MESSAGES } from "@/lib/constants"

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
}

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.06 } },
  viewport: { once: true, margin: "-80px" },
}

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  viewport: { once: true },
}

const gurugramSectors = [
  14, 15, 17, 21, 29, 40, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
]

const keyAreas = [
  { en: "Golf Course Road", hi: "गोल्फ कोर्स रोड" },
  { en: "Golf Course Extension Road", hi: "गोल्फ कोर्स एक्सटेंशन रोड" },
  { en: "Sohna Road", hi: "सोहना रोड" },
  { en: "MG Road", hi: "एमजी रोड" },
  { en: "DLF Phase I", hi: "DLF फेज़ I" },
  { en: "DLF Phase II", hi: "DLF फेज़ II" },
  { en: "DLF Phase III", hi: "DLF फेज़ III" },
  { en: "DLF Phase IV", hi: "DLF फेज़ IV" },
  { en: "DLF Phase V", hi: "DLF फेज़ V" },
  { en: "New Gurugram", hi: "न्यू गुरुग्राम" },
  { en: "Dwarka Expressway", hi: "द्वारका एक्सप्रेसवे" },
  { en: "Manesar", hi: "मानेसर" },
]

const delhiNcrAreas = [
  { en: "South Delhi", hi: "दक्षिण दिल्ली", icon: Building2 },
  { en: "Dwarka", hi: "द्वारका", icon: Building2 },
  { en: "Noida", hi: "नोएडा", icon: Building2 },
  { en: "Greater Noida", hi: "ग्रेटर नोएडा", icon: Building2 },
  { en: "Faridabad", hi: "फरीदाबाद", icon: Building2 },
  { en: "Ghaziabad", hi: "गाज़ियाबाद", icon: Building2 },
  { en: "Manesar", hi: "मानेसर", icon: Building2 },
]

export default function AreasPage() {
  const { lang } = useLang()
  const t = translations

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-primary py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.05),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="h-3 w-3 mr-1" />
              {{ en: "Coverage Area", hi: "कवरेज क्षेत्र" }[lang]}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-foreground mb-4">
              {t.areas.title[lang]}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              {t.areas.subtitle[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gurugram Sectors */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
              {t.areas.gurugram[lang]}
            </h2>
            <p className="text-muted-foreground text-lg">
              {{ en: "Sectors and key localities we serve in Gurugram", hi: "गुरुग्राम में हमारे सेवा क्षेत्र और प्रमुख इलाके" }[lang]}
            </p>
          </motion.div>

          {/* Sectors Grid */}
          <motion.div {...fadeUp} className="mb-10">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {{ en: "Sectors", hi: "सेक्टर" }[lang]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {gurugramSectors.map((sector) => (
                <Badge
                  key={sector}
                  variant="secondary"
                  className="text-sm px-3 py-1.5"
                >
                  {{ en: `Sector ${sector}`, hi: `सेक्टर ${sector}` }[lang]}
                </Badge>
              ))}
            </div>
          </motion.div>

          <Separator className="my-8" />

          {/* Key Areas Grid */}
          <motion.div {...fadeUp}>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {{ en: "Key Areas", hi: "प्रमुख क्षेत्र" }[lang]}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {keyAreas.map((area, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="justify-center text-sm px-3 py-2"
                >
                  <MapPin className="h-3 w-3 mr-1.5 shrink-0" />
                  {area[lang]}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Separator />

      {/* Delhi-NCR */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
              {t.areas.delhiNcr[lang]}
            </h2>
            <p className="text-muted-foreground text-lg">
              {{ en: "Extended service coverage across the National Capital Region", hi: "राष्ट्रीय राजधानी क्षेत्र में विस्तारित सेवा कवरेज" }[lang]}
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {delhiNcrAreas.map((area, idx) => (
              <motion.div key={idx} {...staggerChild}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center gap-3 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <area.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{area[lang]}</p>
                      <p className="text-xs text-muted-foreground">
                        {{ en: "Service Available", hi: "सेवा उपलब्ध" }[lang]}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Separator />

      {/* Emergency Response */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <Card className="border-primary/20 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {{ en: "Emergency Response", hi: "इमरजेंसी रिस्पॉन्स" }[lang]}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Navigation className="h-4 w-4 mt-1 text-primary shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        {{ en: "60-90 minute target response time in core Gurugram for AMC customers", hi: "AMC ग्राहकों के लिए कोर गुरुग्राम में 60-90 मिनट का लक्ष्य रिस्पॉन्स समय" }[lang]}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-4 w-4 mt-1 text-primary shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        {{ en: "24/7 emergency breakdown support for AMC customers", hi: "AMC ग्राहकों के लिए 24/7 इमरजेंसी ब्रेकडाउन सहायता" }[lang]}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-4 w-4 mt-1 text-primary shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        {{ en: "Subject to traffic conditions, site accessibility and fault nature", hi: "ट्रैफ़िक, साइट पहुंच और खराबी की प्रकृति के अधीन" }[lang]}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/5 p-6 md:p-8 flex flex-col items-center justify-center text-center">
                  <div className="text-5xl md:text-6xl font-extrabold text-primary mb-2">
                    60-90
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {{ en: "minutes response time", hi: "मिनट रिस्पॉन्स समय" }[lang]}
                  </p>
                  <Badge className="mt-3">
                    {{ en: "Core Gurugram", hi: "कोर गुरुग्राम" }[lang]}
                  </Badge>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Separator />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {{ en: "Need Elevator Service in Your Area?", hi: "अपने क्षेत्र में लिफ्ट सेवा चाहिए?" }[lang]}
            </h2>
            <p className="text-muted-foreground text-lg">
              {{ en: "Contact us to check coverage and schedule a site visit.", hi: "कवरेज जांचने और साइट विज़िट शेड्यूल करने के लिए संपर्क करें।" }[lang]}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a href={`tel:${COMPANY.phone}`}>
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <Phone className="h-4 w-4" />
                  {{ en: "Call Now", hi: "अभी कॉल करें" }[lang]}
                </Button>
              </a>
              <a
                href={COMPANY.whatsappLink(WHATSAPP_MESSAGES[lang].general)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                  <MessageCircle className="h-4 w-4" />
                  {{ en: "WhatsApp Us", hi: "WhatsApp करें" }[lang]}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
