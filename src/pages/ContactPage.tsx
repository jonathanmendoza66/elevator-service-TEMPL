import { useState } from "react"
import { motion } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  AlertCircle,
  Building2,
  Wrench,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLang } from "@/i18n/LanguageContext"
import { translations } from "@/i18n/translations"
import { COMPANY } from "@/lib/constants"

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
}

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true, margin: "-80px" },
}

const staggerChild = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  viewport: { once: true },
}

export default function ContactPage() {
  const { lang } = useLang()
  const t = translations

  const [showThankYou, setShowThankYou] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    service: "",
    message: "",
  })

  const serviceOptions = [
    { en: "New Elevator", hi: "नई लिफ्ट" },
    { en: "Home Elevator", hi: "होम एलिवेटर" },
    { en: "Elevator AMC", hi: "लिफ्ट AMC" },
    { en: "Elevator Repair", hi: "लिफ्ट मरम्मत" },
    { en: "Modernisation", hi: "आधुनिकीकरण" },
    { en: "Goods Lift", hi: "गुड्स लिफ्ट" },
    { en: "Hospital Lift", hi: "हॉस्पिटल लिफ्ट" },
    { en: "Car Elevator", hi: "कार एलिवेटर" },
    { en: "Site Inspection", hi: "साइट इंस्पेक्शन" },
    { en: "General Enquiry", hi: "सामान्य पूछताछ" },
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowThankYou(true)
  }

  const handleWhatsAppSubmit = () => {
    const message = `Hi Veyra Lift Systems,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nLocation: ${formData.location}\nService: ${formData.service}\nMessage: ${formData.message}`
    window.open(COMPANY.whatsappLink(message), "_blank")
  }

  const contactCards = [
    {
      icon: Headphones,
      title: t.contact.generalEnquiries,
      items: [
        { icon: Phone, text: "+91 124 482 7619", href: "tel:+911244827619" },
        { icon: Mail, text: "hello@veyralifts.in", href: "mailto:hello@veyralifts.in" },
      ],
    },
    {
      icon: Wrench,
      title: t.contact.serviceEnquiries,
      items: [
        { icon: Phone, text: "+91 880 214 6397", href: "tel:+918802146397" },
        { icon: Mail, text: "care@veyralifts.in", href: "mailto:care@veyralifts.in" },
      ],
    },
    {
      icon: Building2,
      title: t.contact.office,
      items: [
        {
          icon: MapPin,
          text: COMPANY.address,
          href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}`,
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-primary py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              {COMPANY.name}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-foreground mb-4">
              {t.contact.title[lang]}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              {t.contact.subtitle[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {contactCards.map((card, idx) => (
              <motion.div key={idx} {...staggerChild}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <card.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">
                        {card.title[lang]}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {card.items.map((item, itemIdx) => (
                      <a
                        key={itemIdx}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <item.icon className="h-4 w-4 mt-0.5 shrink-0" />
                        <span>{item.text}</span>
                      </a>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Separator />

      {/* Contact Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl">
                  {{ en: "Send Us a Message", hi: "हमें संदेश भेजें" }[lang]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {showThankYou ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                      <Send className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <p className="text-lg font-medium text-foreground">
                      {t.contact.thankYou[lang]}
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowThankYou(false)
                        setFormData({ name: "", phone: "", email: "", location: "", service: "", message: "" })
                      }}
                    >
                      {{ en: "Send Another", hi: "एक और भेजें" }[lang]}
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t.contact.name[lang]}</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={{ en: "Your full name", hi: "आपका पूरा नाम" }[lang]}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.contact.phone[lang]}</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.contact.email[lang]}</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={{ en: "your@email.com", hi: "आपका@email.com" }[lang]}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">{t.contact.location[lang]}</Label>
                        <Input
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder={{ en: "e.g. Sector 48, Gurugram", hi: "जैसे सेक्टर 48, गुरुग्राम" }[lang]}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">{t.contact.service[lang]}</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        required
                      >
                        <option value="">
                          {{ en: "Select a service", hi: "सेवा चुनें" }[lang]}
                        </option>
                        {serviceOptions.map((opt, idx) => (
                          <option key={idx} value={opt.en}>
                            {opt[lang]}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t.contact.message[lang]}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={{ en: "How can we help you?", hi: "हम आपकी कैसे मदद कर सकते हैं?" }[lang]}
                        rows={4}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Button type="submit" className="flex-1 gap-2">
                        <Send className="h-4 w-4" />
                        {t.contact.send[lang]}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 gap-2"
                        onClick={handleWhatsAppSubmit}
                      >
                        <MessageCircle className="h-4 w-4" />
                        {t.contact.sendWhatsApp[lang]}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Separator />

      {/* Business Hours */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">
                      {t.contact.hours[lang]}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {{ en: "Monday – Saturday", hi: "सोमवार – शनिवार" }[lang]}
                    </span>
                    <Badge variant="secondary">8:00 AM – 7:00 PM</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {{ en: "Sunday", hi: "रविवार" }[lang]}
                    </span>
                    <Badge variant="outline">
                      {{ en: "Closed", hi: "बंद" }[lang]}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                      <AlertCircle className="h-5 w-5 text-destructive" />
                    </div>
                    <CardTitle className="text-lg">
                      {t.contact.emergency[lang]}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {{ en: "Emergency breakdown assistance is available 24/7 for AMC customers.", hi: "AMC ग्राहकों के लिए 24/7 इमरजेंसी ब्रेकडाउन सहायता उपलब्ध है।" }[lang]}
                  </p>
                  <a href={`tel:${COMPANY.emergencyPhone}`}>
                    <Button variant="destructive" size="sm" className="gap-2">
                      <Phone className="h-4 w-4" />
                      {COMPANY.emergencyPhoneFormatted}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <Separator />

      {/* Map Placeholder */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <div className="flex flex-col items-center justify-center py-16 px-4 bg-muted/50">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {{ en: "Sector 48, Gurugram", hi: "सेक्टर 48, गुरुग्राम" }[lang]}
                </h3>
                <p className="text-sm text-muted-foreground text-center max-w-md">
                  {COMPANY.address}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  <Button variant="outline" size="sm" className="gap-2">
                    <MapPin className="h-4 w-4" />
                    {{ en: "Open in Maps", hi: "मैप में खोलें" }[lang]}
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
