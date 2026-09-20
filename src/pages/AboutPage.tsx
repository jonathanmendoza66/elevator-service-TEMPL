import { motion } from "framer-motion"
import {
  Shield,
  Target,
  Wrench,
  Zap,
  CheckCircle2,
  Phone,
  MessageCircle,
  Award,
  Users,
  Building2,
  TrendingUp,
  Percent,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
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
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true, margin: "-80px" },
}

const staggerChild = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  viewport: { once: true },
}

export default function AboutPage() {
  const { lang } = useLang()
  const t = translations

  const valueIcons = [Shield, Target, Wrench, Zap]
  const valueKeys: Array<{
    title: keyof typeof t.about.values
    desc: keyof typeof t.about.values
  }> = [
    { title: "safety", desc: "safetyDesc" },
    { title: "accountability", desc: "accountabilityDesc" },
    { title: "engineering", desc: "engineeringDesc" },
    { title: "responsiveness", desc: "responsivenessDesc" },
  ]

  const keyNumbers = [
    {
      value: "680+",
      label: { en: "Elevators Serviced", hi: "लिफ्ट सर्विस की गईं" },
      icon: Building2,
    },
    {
      value: "410+",
      label: { en: "Installations Completed", hi: "इंस्टॉलेशन पूर्ण" },
      icon: TrendingUp,
    },
    {
      value: "42",
      label: { en: "Team Members", hi: "टीम सदस्य" },
      icon: Users,
    },
    {
      value: "31",
      label: { en: "Residential Communities", hi: "आवासीय समुदाय" },
      icon: Building2,
    },
    {
      value: "94%",
      label: { en: "First-Visit Resolution", hi: "पहली विज़िट में समाधान" },
      icon: Percent,
    },
    {
      value: "99.1%",
      label: { en: "Visit Completion Rate", hi: "विज़िट पूर्णता दर" },
      icon: CheckCircle2,
    },
  ]

  const teamMembers = [
    {
      name: "Aviraj Kohli",
      initials: "AK",
      designation: { en: "Managing Director", hi: "प्रबंध निदेशक" },
      experience: { en: "17 years", hi: "17 वर्ष" },
      specialisation: {
        en: "Elevator Operations & Business Development",
        hi: "लिफ्ट संचालन और व्यवसाय विकास",
      },
    },
    {
      name: "Maithili Vora",
      initials: "MV",
      designation: { en: "Head of Engineering", hi: "इंजीनियरिंग प्रमुख" },
      experience: { en: "13 years", hi: "13 वर्ष" },
      specialisation: {
        en: "Elevator Systems Engineering",
        hi: "लिफ्ट सिस्टम इंजीनियरिंग",
      },
    },
    {
      name: "Rehan Dutt",
      initials: "RD",
      designation: { en: "Service Operations Manager", hi: "सर्विस ऑपरेशन मैनेजर" },
      experience: { en: "11 years", hi: "11 वर्ष" },
      specialisation: {
        en: "AMC Operations & Service Delivery",
        hi: "AMC संचालन और सर्विस डिलीवरी",
      },
    },
    {
      name: "Eshaan Mirza",
      initials: "EM",
      designation: { en: "Project Manager", hi: "प्रोजेक्ट मैनेजर" },
      experience: { en: "9 years", hi: "9 वर्ष" },
      specialisation: {
        en: "New Installations & Project Delivery",
        hi: "नई इंस्टॉलेशन और प्रोजेक्ट डिलीवरी",
      },
    },
    {
      name: "Tavishi Nair",
      initials: "TN",
      designation: { en: "Customer Service Lead", hi: "कस्टमर सर्विस लीड" },
      experience: { en: "8 years", hi: "8 वर्ष" },
      specialisation: {
        en: "Service Coordination & Client Relations",
        hi: "सर्विस समन्वय और ग्राहक संबंध",
      },
    },
    {
      name: "Kairav Bedi",
      initials: "KB",
      designation: { en: "Technical Supervisor", hi: "तकनीकी सुपरवाइज़र" },
      experience: { en: "10 years", hi: "10 वर्ष" },
      specialisation: {
        en: "Breakdown Diagnostics & Troubleshooting",
        hi: "ब्रेकडाउन डायग्नोस्टिक्स और समस्या निवारण",
      },
    },
  ]

  const safetyPractices = [
    {
      en: "Lock-out / tag-out procedures on every maintenance visit",
      hi: "हर मेंटेनेंस विज़िट पर लॉक-आउट / टैग-आउट प्रक्रिया",
    },
    {
      en: "Mandatory safety harness use during shaft work",
      hi: "शाफ्ट कार्य के दौरान अनिवार्य सेफ्टी हार्नेस",
    },
    {
      en: "Pre-commissioning safety checklists for new installations",
      hi: "नई इंस्टॉलेशन के लिए प्री-कमीशनिंग सेफ्टी चेकलिस्ट",
    },
    {
      en: "Monthly safety circuit and governor testing",
      hi: "मासिक सेफ्टी सर्किट और गवर्नर परीक्षण",
    },
    {
      en: "Emergency rescue training for all field technicians",
      hi: "सभी फील्ड तकनीशियनों के लिए इमरजेंसी रेस्क्यू ट्रेनिंग",
    },
    {
      en: "Fire-rated landing doors on all new installations",
      hi: "सभी नई इंस्टॉलेशन पर फायर-रेटेड लैंडिंग दरवाज़े",
    },
    {
      en: "Compliance with IS 14665 and ASME A17.1 standards",
      hi: "IS 14665 और ASME A17.1 मानकों का अनुपालन",
    },
    {
      en: "Documented inspection reports shared with building management",
      hi: "भवन प्रबंधन के साथ दस्तावेज़ी निरीक्षण रिपोर्ट साझा",
    },
  ]

  const warrantyCards = [
    {
      title: t.warranty.newInstall[lang],
      months: 12,
      desc: {
        en: "Full coverage on parts, labour and controller systems for all new elevator installations.",
        hi: "सभी नई लिफ्ट इंस्टॉलेशन के लिए पार्ट्स, लेबर और कंट्रोलर सिस्टम पर पूर्ण कवरेज।",
      },
    },
    {
      title: t.warranty.homeElevator[lang],
      months: 12,
      desc: {
        en: "Comprehensive warranty on home elevator systems including cabin, door operator and drive unit.",
        hi: "होम एलिवेटर सिस्टम पर व्यापक वारंटी — केबिन, डोर ऑपरेटर और ड्राइव यूनिट सहित।",
      },
    },
    {
      title: t.warranty.modernisation[lang],
      months: 6,
      desc: {
        en: "Coverage on upgraded components including controllers, drives and safety circuits.",
        hi: "अपग्रेड किए गए कंपोनेंट्स पर कवरेज — कंट्रोलर, ड्राइव और सेफ्टी सर्किट सहित।",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden bg-primary py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            src="/hero-building-2.webp"
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <Badge variant="secondary" className="mb-6">
              {COMPANY.name}
            </Badge>
            <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              {t.about.title[lang]}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
              {t.about.subtitle[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Company Story ── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div {...fadeUp}>
              <Badge variant="outline" className="mb-4">
                {{ en: "Est. 2016", hi: "स्थापना 2016" }[lang]}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {{ en: "Our Story", hi: "हमारी कहानी" }[lang]}
              </h2>
              <Separator className="my-6 w-16" />
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t.about.description[lang]}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {
                  {
                    en: "Starting with a small team of four technicians in 2016, Veyra has grown to a 42-member operation serving more than 680 elevator units across 31 residential communities, commercial offices, hospitals and industrial facilities. Our service backbone is a preventive AMC programme with a 94% first-visit resolution rate and a 99.1% scheduled-visit completion rate — numbers that reflect our commitment to showing up and fixing things right the first time.",
                    hi: "2016 में चार तकनीशियनों की एक छोटी टीम से शुरू होकर, वेरा 42 सदस्यीय संगठन बन गया है जो 31 आवासीय समुदायों, वाणिज्यिक कार्यालयों, अस्पतालों और औद्योगिक सुविधाओं में 680 से अधिक लिफ्ट यूनिट्स को सेवा प्रदान करता है। हमारी सेवा की रीढ़ एक निवारक AMC कार्यक्रम है जिसमें 94% पहली-विज़िट समाधान दर और 99.1% अनुसूचित-विज़िट पूर्णता दर है।",
                  }[lang]
                }
              </p>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="overflow-hidden rounded-xl"
            >
              <img
                src="/team-working.webp"
                alt={
                  { en: "Veyra team at work", hi: "वेरा टीम काम पर" }[lang]
                }
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {{ en: "Our Core Values", hi: "हमारे मूल सिद्धांत" }[lang]}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {
                {
                  en: "The principles that guide everything we do",
                  hi: "वे सिद्धांत जो हमारे हर काम का मार्गदर्शन करते हैं",
                }[lang]
              }
            </p>
          </motion.div>
          <motion.div
            {...staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {valueKeys.map((vk, i) => {
              const Icon = valueIcons[i]
              return (
                <motion.div key={i} {...staggerChild}>
                  <Card className="h-full text-center transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-lg">
                        {t.about.values[vk.title][lang]}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {t.about.values[vk.desc][lang]}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Key Numbers ── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {{ en: "Veyra by the Numbers", hi: "संख्याओं में वेरा" }[lang]}
            </h2>
          </motion.div>
          <motion.div
            {...staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {keyNumbers.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div key={i} {...staggerChild}>
                  <Card className="text-center transition-shadow hover:shadow-lg">
                    <CardContent className="pt-6">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                        <Icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <p className="text-4xl font-extrabold tracking-tight text-primary">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm font-medium text-muted-foreground">
                        {stat.label[lang]}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Leadership Team ── */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t.about.team.title[lang]}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {t.about.team.subtitle[lang]}
            </p>
          </motion.div>
          <motion.div
            {...staggerContainer}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {teamMembers.map((member, i) => (
              <motion.div key={i} {...staggerChild}>
                <Card className="h-full text-center transition-shadow hover:shadow-lg">
                  <CardContent className="pt-8">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                      {member.initials}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="mt-2">
                      {member.designation[lang]}
                    </Badge>
                    <Separator className="mx-auto my-4 w-12" />
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium text-foreground">
                          {{ en: "Experience: ", hi: "अनुभव: " }[lang]}
                        </span>
                        {member.experience[lang]}
                      </p>
                      <p>
                        <span className="font-medium text-foreground">
                          {{ en: "Focus: ", hi: "विशेषज्ञता: " }[lang]}
                        </span>
                        {member.specialisation[lang]}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Safety & Compliance ── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t.safety.title[lang]}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {t.safety.subtitle[lang]}
            </p>
          </motion.div>
          <motion.div
            {...staggerContainer}
            className="mx-auto max-w-3xl space-y-4"
          >
            {safetyPractices.map((practice, i) => (
              <motion.div
                key={i}
                {...staggerChild}
                className="flex items-start gap-4 rounded-lg border bg-card p-4 transition-shadow hover:shadow-md"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                <p className="text-sm leading-relaxed text-foreground">
                  {practice[lang]}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Warranty Information ── */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t.warranty.title[lang]}
            </h2>
          </motion.div>
          <motion.div
            {...staggerContainer}
            className="grid gap-6 sm:grid-cols-3"
          >
            {warrantyCards.map((w, i) => (
              <motion.div key={i} {...staggerChild}>
                <Card className="h-full text-center transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                      <Award className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-lg">{w.title}</CardTitle>
                    <CardDescription>
                      <span className="text-3xl font-extrabold text-primary">
                        {w.months}
                      </span>{" "}
                      <span className="text-muted-foreground">
                        {t.warranty.months[lang]}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {w.desc[lang]}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              {t.cta.title[lang]}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              {t.cta.subtitle[lang]}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                asChild
              >
                <a href={`tel:${COMPANY.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {t.cta.callUs[lang]}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a
                  href={COMPANY.whatsappLink(WHATSAPP_MESSAGES[lang].general)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t.cta.whatsapp[lang]}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
