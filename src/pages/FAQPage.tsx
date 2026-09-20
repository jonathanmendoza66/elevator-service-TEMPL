import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Phone,
  MessageCircle,
  HelpCircle,
  ArrowRight,
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
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { useLang } from "@/i18n/LanguageContext"
import { translations } from "@/i18n/translations"
import { COMPANY, WHATSAPP_MESSAGES } from "@/lib/constants"

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
}


const staggerChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  viewport: { once: true },
}

const faqItems = [
  {
    q: { en: "How often should an elevator be serviced?", hi: "लिफ्ट की सर्विसिंग कितनी बार होनी चाहिए?" },
    a: { en: "For most elevators, preventive maintenance should be carried out monthly. Veyra schedules monthly preventive visits for elevators under standard AMC arrangements.", hi: "अधिकांश लिफ्ट के लिए, निवारक रखरखाव मासिक होना चाहिए। वेरा मानक AMC अनुबंध के तहत मासिक निवारक विज़िट शेड्यूल करता है।" },
  },
  {
    q: { en: "How quickly can you attend an elevator breakdown?", hi: "लिफ्ट ब्रेकडाउन पर कितनी जल्दी पहुंच सकते हैं?" },
    a: { en: "For AMC customers within core Gurugram, the target emergency response time is 60-90 minutes, subject to traffic, site accessibility and the nature of the fault.", hi: "गुरुग्राम के मुख्य क्षेत्रों में AMC ग्राहकों के लिए, लक्ष्य इमरजेंसी रिस्पॉन्स समय 60-90 मिनट है, ट्रैफ़िक, साइट की पहुंच और खराबी की प्रकृति के अधीन।" },
  },
  {
    q: { en: "Do you provide 24/7 breakdown support?", hi: "क्या आप 24/7 ब्रेकडाउन सहायता प्रदान करते हैं?" },
    a: { en: "Yes. Emergency breakdown assistance is available 24/7 for customers with applicable service coverage.", hi: "हां। लागू सर्विस कवरेज वाले ग्राहकों के लिए 24/7 इमरजेंसी ब्रेकडाउन सहायता उपलब्ध है।" },
  },
  {
    q: { en: "Can an old elevator be modernised instead of replaced?", hi: "क्या पुरानी लिफ्ट को बदलने की बजाय आधुनिक किया जा सकता है?" },
    a: { en: "In many cases, yes. The feasibility depends on the condition of the machine, controller, shaft, cabin, doors and safety components. A technical inspection is required.", hi: "कई मामलों में, हां। यह मशीन, कंट्रोलर, शाफ्ट, केबिन, दरवाज़ों और सुरक्षा उपकरणों की स्थिति पर निर्भर करता है। तकनीकी निरीक्षण आवश्यक है।" },
  },
  {
    q: { en: "Do you install home elevators?", hi: "क्या आप होम एलिवेटर इंस्टॉल करते हैं?" },
    a: { en: "Yes. Veyra supplies and installs compact home elevator systems for villas, independent houses and duplex residences.", hi: "हां। वेरा विलाओं, स्वतंत्र घरों और डुप्लेक्स आवासों के लिए कॉम्पैक्ट होम एलिवेटर सिस्टम की आपूर्ति और स्थापना करता है।" },
  },
  {
    q: { en: "Do you provide elevator AMC in Gurugram?", hi: "क्या आप गुरुग्राम में लिफ्ट AMC प्रदान करते हैं?" },
    a: { en: "Yes. AMC coverage is available across major Gurugram sectors, including DLF phases, Golf Course Road, Sohna Road, New Gurugram, Dwarka Expressway and Manesar.", hi: "हां। AMC कवरेज गुरुग्राम के प्रमुख सेक्टरों में उपलब्ध है, जिसमें DLF फेज़, गोल्फ कोर्स रोड, सोहना रोड, न्यू गुरुग्राम, द्वारका एक्सप्रेसवे और मानेसर शामिल हैं।" },
  },
  {
    q: { en: "Do you service elevators installed by other companies?", hi: "क्या आप अन्य कंपनियों द्वारा लगाई गई लिफ्ट की सर्विस करते हैं?" },
    a: { en: "Yes. Subject to equipment compatibility and technical assessment, Veyra can provide maintenance, repairs and modernisation for elevators installed by other manufacturers.", hi: "हां। उपकरण अनुकूलता और तकनीकी मूल्यांकन के अधीन, वेरा अन्य निर्माताओं द्वारा लगाई गई लिफ्ट के लिए रखरखाव, मरम्मत और आधुनिकीकरण प्रदान कर सकता है।" },
  },
  {
    q: { en: "How long does elevator installation take?", hi: "लिफ्ट इंस्टॉलेशन में कितना समय लगता है?" },
    a: { en: "Installation time varies by building readiness, shaft condition, equipment type and floors. A typical passenger elevator takes approximately 4-8 weeks after the site is ready and equipment is available.", hi: "इंस्टॉलेशन का समय बिल्डिंग की तैयारी, शाफ्ट की स्थिति, उपकरण प्रकार और मंज़िलों पर निर्भर करता है। एक सामान्य यात्री लिफ्ट साइट तैयार होने और उपकरण उपलब्ध होने के बाद लगभग 4-8 सप्ताह में लगती है।" },
  },
  {
    q: { en: "Do you provide lift modernisation?", hi: "क्या आप लिफ्ट आधुनिकीकरण प्रदान करते हैं?" },
    a: { en: "Yes. Modernisation can include controller, drive, door operator, cabin, machine, safety circuit and landing equipment upgrades.", hi: "हां। आधुनिकीकरण में कंट्रोलर, ड्राइव, डोर ऑपरेटर, केबिन, मशीन, सेफ्टी सर्किट और लैंडिंग उपकरण अपग्रेड शामिल हो सकते हैं।" },
  },
  {
    q: { en: "Do you provide goods lifts?", hi: "क्या आप गुड्स लिफ्ट प्रदान करते हैं?" },
    a: { en: "Yes. Veyra supplies heavy-duty goods elevators for warehouses, factories, hotels, restaurants, retail facilities and other commercial applications.", hi: "हां। वेरा गोदामों, कारखानों, होटलों, रेस्तरां, रिटेल और अन्य कमर्शियल उपयोग के लिए हेवी-ड्यूटी गुड्स एलिवेटर की आपूर्ति करता है।" },
  },
]

export default function FAQPage() {
  const { lang } = useLang()
  const t = translations

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-primary py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <HelpCircle className="h-3 w-3 mr-1" />
              {{ en: "Knowledge Base", hi: "ज्ञान आधार" }[lang]}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-foreground mb-4">
              {t.faq.title[lang]}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              {t.faq.subtitle[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, idx) => (
                <motion.div key={idx} {...staggerChild}>
                  <AccordionItem value={`faq-${idx}`}>
                    <AccordionTrigger className="text-left text-base md:text-lg font-medium">
                      {item.q[lang]}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {item.a[lang]}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Separator />

      {/* Still Have Questions CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-primary/10 mb-4">
                  <HelpCircle className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  {{ en: "Still Have Questions?", hi: "अभी भी प्रश्न हैं?" }[lang]}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {{ en: "Our team is here to help. Get in touch and we'll respond promptly.", hi: "हमारी टीम मदद के लिए तैयार है। संपर्क करें और हम जल्द जवाब देंगे।" }[lang]}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a href={`tel:${COMPANY.phone}`}>
                    <Button className="gap-2 w-full sm:w-auto">
                      <Phone className="h-4 w-4" />
                      {{ en: "Call Us", hi: "हमें कॉल करें" }[lang]}
                    </Button>
                  </a>
                  <a
                    href={COMPANY.whatsappLink(WHATSAPP_MESSAGES[lang].general)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="gap-2 w-full sm:w-auto">
                      <MessageCircle className="h-4 w-4" />
                      {{ en: "WhatsApp Us", hi: "WhatsApp करें" }[lang]}
                    </Button>
                  </a>
                  <Link to="/contact">
                    <Button variant="secondary" className="gap-2 w-full sm:w-auto">
                      <ArrowRight className="h-4 w-4" />
                      {t.nav.contact[lang]}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
