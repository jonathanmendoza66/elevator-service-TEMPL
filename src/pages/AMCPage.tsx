
import { motion } from "framer-motion"
import {
  Check,
  Clock,
  Shield,
  TrendingUp,
  IndianRupee,
  Headphones,
  FileText,
  Wrench,
  DoorOpen,
  Settings,
  Zap,
  AlertTriangle,
  Gauge,
  Droplets,
  Bell,
  Activity,
  Replace,
  Phone,
  MessageCircle,
  X,
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
import { useLang } from "@/i18n/LanguageContext"
import { translations } from "@/i18n/translations"
import { COMPANY, WHATSAPP_MESSAGES } from "@/lib/constants"
import { cn } from "@/lib/utils"

const amcPlans = [
  {
    name: { en: "Essential AMC", hi: "एसेंशियल AMC" },
    price: "2,400",
    recommended: false,
    features: [
      { en: "12 planned maintenance visits", hi: "12 नियोजित रखरखाव विज़िट" },
      { en: "Basic breakdown support", hi: "बेसिक ब्रेकडाउन सहायता" },
      { en: "Safety inspection", hi: "सुरक्षा निरीक्षण" },
      { en: "Lubrication & cleaning", hi: "लुब्रिकेशन और सफ़ाई" },
      { en: "Service reporting", hi: "सर्विस रिपोर्टिंग" },
      { en: "Emergency call support", hi: "इमरजेंसी कॉल सहायता" },
    ],
    exclusion: {
      en: "Excludes major parts replacement",
      hi: "प्रमुख पार्ट्स रिप्लेसमेंट शामिल नहीं",
    },
    note: null,
  },
  {
    name: { en: "Complete AMC", hi: "कंप्लीट AMC" },
    price: "4,200",
    recommended: true,
    features: [
      {
        en: "Comprehensive preventive maintenance",
        hi: "व्यापक निवारक रखरखाव",
      },
      { en: "Full breakdown support", hi: "पूर्ण ब्रेकडाउन सहायता" },
      { en: "24/7 emergency response", hi: "24/7 इमरजेंसी रिस्पॉन्स" },
      { en: "Safety compliance checks", hi: "सुरक्षा अनुपालन जांच" },
      { en: "Door system inspection", hi: "दरवाज़ा प्रणाली निरीक्षण" },
      {
        en: "Controller & drive inspection",
        hi: "कंट्रोलर और ड्राइव निरीक्षण",
      },
      { en: "Labour for repairs included", hi: "मरम्मत श्रम शामिल" },
      { en: "Detailed service reports", hi: "विस्तृत सर्विस रिपोर्ट" },
      { en: "Priority response time", hi: "प्राथमिकता प्रतिक्रिया समय" },
    ],
    exclusion: null,
    note: null,
  },
  {
    name: { en: "Estate AMC", hi: "एस्टेट AMC" },
    price: "3,600",
    recommended: false,
    features: [
      {
        en: "Dedicated service coordinator",
        hi: "समर्पित सर्विस कोऑर्डिनेटर",
      },
      {
        en: "Preventive maintenance schedule",
        hi: "निवारक रखरखाव अनुसूची",
      },
      { en: "Monthly performance reports", hi: "मासिक प्रदर्शन रिपोर्ट" },
      {
        en: "Priority breakdown response",
        hi: "प्राथमिकता ब्रेकडाउन रिस्पॉन्स",
      },
      { en: "Quarterly health review", hi: "तिमाही स्वास्थ्य समीक्षा" },
      {
        en: "Multi-lift planning & coordination",
        hi: "मल्टी-लिफ्ट प्लानिंग और कोऑर्डिनेशन",
      },
    ],
    exclusion: null,
    note: {
      en: "For societies, business parks, hotels, hospitals (min. 5 lifts)",
      hi: "सोसाइटी, बिज़नेस पार्क, होटल, अस्पतालों के लिए (न्यूनतम 5 लिफ्ट)",
    },
  },
]

const maintenanceActivities = [
  {
    icon: DoorOpen,
    label: { en: "Door system inspection", hi: "दरवाज़ा प्रणाली निरीक्षण" },
  },
  {
    icon: Shield,
    label: {
      en: "Brake inspection & adjustment",
      hi: "ब्रेक निरीक्षण और समायोजन",
    },
  },
  {
    icon: Activity,
    label: {
      en: "Rope & sheave inspection",
      hi: "रोप और शीव निरीक्षण",
    },
  },
  {
    icon: Settings,
    label: { en: "Controller health checks", hi: "कंट्रोलर स्वास्थ्य जांच" },
  },
  {
    icon: Zap,
    label: {
      en: "Electrical connections check",
      hi: "इलेक्ट्रिकल कनेक्शन जांच",
    },
  },
  {
    icon: AlertTriangle,
    label: { en: "Safety circuit testing", hi: "सेफ्टी सर्किट परीक्षण" },
  },
  {
    icon: Gauge,
    label: { en: "Levelling accuracy", hi: "लेवलिंग सटीकता" },
  },
  {
    icon: Wrench,
    label: { en: "Cabin condition check", hi: "केबिन स्थिति जांच" },
  },
  {
    icon: Droplets,
    label: { en: "Lubrication schedule", hi: "लुब्रिकेशन अनुसूची" },
  },
  {
    icon: Bell,
    label: { en: "Emergency alarm testing", hi: "इमरजेंसी अलार्म परीक्षण" },
  },
  {
    icon: Activity,
    label: { en: "Ride quality assessment", hi: "राइड गुणवत्ता मूल्यांकन" },
  },
  {
    icon: Replace,
    label: {
      en: "Preventive replacement recommendations",
      hi: "निवारक रिप्लेसमेंट सिफारिशें",
    },
  },
]

const amcBenefits = [
  {
    icon: Clock,
    title: { en: "Reduce Downtime", hi: "डाउनटाइम कम करें" },
    desc: {
      en: "Regular maintenance catches problems early, keeping your elevators running consistently.",
      hi: "नियमित रखरखाव समस्याओं को जल्दी पकड़ता है, जिससे आपकी लिफ्ट लगातार चलती रहती है।",
    },
  },
  {
    icon: TrendingUp,
    title: { en: "Extend Equipment Life", hi: "उपकरण जीवन बढ़ाएं" },
    desc: {
      en: "Systematic upkeep extends the operational life of critical components.",
      hi: "व्यवस्थित देखभाल महत्वपूर्ण घटकों की परिचालन जीवन को बढ़ाती है।",
    },
  },
  {
    icon: Shield,
    title: { en: "Safety Compliance", hi: "सुरक्षा अनुपालन" },
    desc: {
      en: "Every visit includes safety checks to help meet regulatory requirements.",
      hi: "हर विज़िट में नियामक आवश्यकताओं को पूरा करने के लिए सुरक्षा जांच शामिल है।",
    },
  },
  {
    icon: IndianRupee,
    title: { en: "Cost Savings", hi: "लागत बचत" },
    desc: {
      en: "Planned maintenance is significantly cheaper than emergency repairs.",
      hi: "नियोजित रखरखाव आपातकालीन मरम्मत से काफी सस्ता है।",
    },
  },
  {
    icon: Headphones,
    title: { en: "Priority Response", hi: "प्राथमिकता प्रतिक्रिया" },
    desc: {
      en: "AMC customers receive faster response times for breakdowns and service calls.",
      hi: "AMC ग्राहकों को ब्रेकडाउन और सर्विस कॉल के लिए तेज़ प्रतिक्रिया समय मिलता है।",
    },
  },
  {
    icon: FileText,
    title: { en: "Detailed Reporting", hi: "विस्तृत रिपोर्टिंग" },
    desc: {
      en: "Service reports after every visit keep you informed about your elevator's health.",
      hi: "हर विज़िट के बाद सर्विस रिपोर्ट आपको आपकी लिफ्ट की स्थिति से अवगत रखती है।",
    },
  },
]

const amcStats = [
  {
    value: "214",
    label: { en: "Active Contracts", hi: "सक्रिय अनुबंध" },
  },
  {
    value: "31",
    label: { en: "Societies Served", hi: "सोसाइटी सेवित" },
  },
  {
    value: "99.1%",
    label: { en: "Visit Completion", hi: "विज़िट पूर्णता" },
  },
  {
    value: "91%",
    label: { en: "Renewal Rate", hi: "नवीनीकरण दर" },
  },
]

export default function AMCPage() {
  const { lang } = useLang()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-foreground/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge variant="secondary" className="mb-6">
              {COMPANY.name}
            </Badge>
            <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              {translations.amcPage.title[lang]}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/70">
              {translations.amcPage.subtitle[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* AMC Plan Cards */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {
                {
                  en: "Choose Your AMC Plan",
                  hi: "अपनी AMC योजना चुनें",
                }[lang]
              }
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {
                {
                  en: "Flexible maintenance plans designed for different needs and budgets.",
                  hi: "विभिन्न आवश्यकताओं और बजट के लिए डिज़ाइन की गई लचीली रखरखाव योजनाएं।",
                }[lang]
              }
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {amcPlans.map((plan, i) => (
              <motion.div
                key={plan.name.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  className={cn(
                    "relative h-full",
                    plan.recommended &&
                      "ring-2 ring-primary shadow-lg scale-[1.02]"
                  )}
                >
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="px-4 py-1 text-xs">
                        {translations.amcPage.recommended[lang]}
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">
                      {plan.name[lang]}
                    </CardTitle>
                    <div className="mt-4">
                      <span className="text-sm text-muted-foreground">
                        {translations.amcPage.startingAt[lang]}
                      </span>
                      <div className="mt-1 flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-extrabold tracking-tight">
                          ₹{plan.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {translations.amcPage.perMonth[lang]}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Separator />
                    <div className="space-y-1">
                      <p className="mb-3 text-sm font-medium">
                        {translations.amcPage.includes[lang]}:
                      </p>
                      <ul className="space-y-2.5">
                        {plan.features.map((feature, fi) => (
                          <li key={fi} className="flex items-start gap-3">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span className="text-sm">{feature[lang]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {plan.exclusion && (
                      <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {plan.exclusion[lang]}
                        </span>
                      </div>
                    )}
                    {plan.note && (
                      <p className="rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground">
                        {plan.note[lang]}
                      </p>
                    )}
                    <Button
                      asChild
                      variant={plan.recommended ? "default" : "outline"}
                      className="w-full gap-2"
                    >
                      <a
                        href={COMPANY.whatsappLink(
                          `${WHATSAPP_MESSAGES[lang].quote} Plan: ${plan.name.en}`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4" />
                        {translations.amcPage.getQuote[lang]}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Activities */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {
                {
                  en: "What AMC Covers",
                  hi: "AMC में क्या शामिल है",
                }[lang]
              }
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {
                {
                  en: "A comprehensive checklist of maintenance activities performed during each service visit.",
                  hi: "प्रत्येक सर्विस विज़िट के दौरान की जाने वाली रखरखाव गतिविधियों की व्यापक चेकलिस्ट।",
                }[lang]
              }
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {maintenanceActivities.map((activity, i) => (
              <motion.div
                key={activity.label.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Card className="h-full">
                  <CardContent className="flex items-center gap-4 pt-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <activity.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">
                      {activity.label[lang]}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC Benefits */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {
                {
                  en: "Benefits of AMC",
                  hi: "AMC के लाभ",
                }[lang]
              }
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {
                {
                  en: "Why a maintenance contract is one of the smartest investments for your building.",
                  hi: "रखरखाव अनुबंध आपकी इमारत के लिए सबसे स्मार्ट निवेशों में से एक क्यों है।",
                }[lang]
              }
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {amcBenefits.map((benefit, i) => (
              <motion.div
                key={benefit.title.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold">
                      {benefit.title[lang]}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.desc[lang]}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC Stats */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {
                {
                  en: "AMC at a Glance",
                  hi: "AMC एक नज़र में",
                }[lang]
              }
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {amcStats.map((stat, i) => (
              <motion.div
                key={stat.label.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <p className="text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {stat.label[lang]}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              {translations.cta.title[lang]}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">
              {translations.cta.subtitle[lang]}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="gap-2"
              >
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>
                  <Phone className="h-4 w-4" />
                  {translations.cta.callUs[lang]}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className={cn(
                  "gap-2 border-primary-foreground/20 bg-primary-foreground/10",
                  "text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
                )}
              >
                <a
                  href={COMPANY.whatsappLink(WHATSAPP_MESSAGES[lang].quote)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  {translations.cta.whatsapp[lang]}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
