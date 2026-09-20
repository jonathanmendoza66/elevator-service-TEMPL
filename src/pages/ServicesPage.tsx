import { motion } from "framer-motion"
import {
  Building2,
  Home,
  ShieldCheck,
  WrenchIcon,
  RefreshCw,
  Briefcase,
  HeartPulse,
  Package,
  Car,
  MessageCircle,
  Phone,
  CheckCircle2,
  ClipboardCheck,
  Ruler,
  Settings,
  Plug,
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
import { cn } from "@/lib/utils"
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
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: "-80px" },
}

const staggerChild = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  viewport: { once: true },
}

export default function ServicesPage() {
  const { lang } = useLang()
  const t = translations

  const services = [
    {
      key: "installation" as const,
      image: "/hero-elevator-1.webp",
      icon: Building2,
      features: {
        en: [
          "Site assessment & structural evaluation",
          "Shaft measurement & civil coordination",
          "Lift specification & load planning",
          "Equipment sourcing & procurement",
          "Installation & alignment",
          "Electrical integration & wiring",
          "Safety testing & certification",
          "Commissioning & handover",
        ],
        hi: [
          "साइट मूल्यांकन और संरचनात्मक मूल्यांकन",
          "शाफ्ट माप और सिविल समन्वय",
          "लिफ्ट स्पेसिफिकेशन और लोड प्लानिंग",
          "उपकरण सोर्सिंग और खरीद",
          "इंस्टॉलेशन और एलाइनमेंट",
          "इलेक्ट्रिकल इंटीग्रेशन और वायरिंग",
          "सेफ्टी टेस्टिंग और सर्टिफिकेशन",
          "कमीशनिंग और हैंडओवर",
        ],
      },
      suitableFor: {
        en: [
          "Apartments",
          "Villas",
          "Offices",
          "Retail Spaces",
          "Hospitals",
          "Schools",
          "Warehouses",
          "Hotels",
        ],
        hi: [
          "अपार्टमेंट",
          "विला",
          "कार्यालय",
          "रिटेल स्पेस",
          "अस्पताल",
          "स्कूल",
          "गोदाम",
          "होटल",
        ],
      },
    },
    {
      key: "homeElevator" as const,
      image: "/home-elevator.webp",
      icon: Home,
      features: {
        en: [
          "Capacity: 250–450 kg",
          "2–4 stops configuration",
          "Glass or stainless steel cabin options",
          "Automatic or manual door systems",
          "Compact shaft requirement",
          "Machine-room-less (MRL) configuration",
        ],
        hi: [
          "क्षमता: 250-450 किलोग्राम",
          "2-4 स्टॉप कॉन्फिगरेशन",
          "ग्लास या स्टेनलेस स्टील केबिन विकल्प",
          "ऑटोमैटिक या मैनुअल डोर सिस्टम",
          "कॉम्पैक्ट शाफ्ट आवश्यकता",
          "मशीन-रूम-लेस (MRL) कॉन्फिगरेशन",
        ],
      },
      suitableFor: {
        en: [
          "Independent Homes",
          "Villas",
          "Duplexes",
          "Multi-generational Residences",
        ],
        hi: [
          "स्वतंत्र घर",
          "विला",
          "डुप्लेक्स",
          "बहु-पीढ़ी आवास",
        ],
      },
    },
    {
      key: "amc" as const,
      image: "/safety-inspection.webp",
      icon: ShieldCheck,
      features: {
        en: [
          "Door & brake mechanism inspection",
          "Rope/belt condition assessment",
          "Controller & drive checks",
          "Electrical system verification",
          "Safety circuit testing",
          "Lubrication of moving parts",
          "Emergency alarm & intercom testing",
          "Ride quality assessment",
        ],
        hi: [
          "दरवाज़ा और ब्रेक तंत्र निरीक्षण",
          "रोप/बेल्ट स्थिति मूल्यांकन",
          "कंट्रोलर और ड्राइव जांच",
          "इलेक्ट्रिकल सिस्टम सत्यापन",
          "सेफ्टी सर्किट परीक्षण",
          "चलने वाले पार्ट्स का स्नेहन",
          "इमरजेंसी अलार्म और इंटरकॉम परीक्षण",
          "राइड क्वालिटी मूल्यांकन",
        ],
      },
      suitableFor: {
        en: [
          "Preventive AMC",
          "Comprehensive AMC",
          "Non-comprehensive AMC",
          "Residential AMC",
          "Commercial AMC",
        ],
        hi: [
          "प्रिवेंटिव AMC",
          "कॉम्प्रिहेंसिव AMC",
          "नॉन-कॉम्प्रिहेंसिव AMC",
          "रेसिडेंशियल AMC",
          "कमर्शियल AMC",
        ],
      },
      suitableLabel: { en: "AMC Types", hi: "AMC प्रकार" },
    },
    {
      key: "repair" as const,
      image: "/hero-service-3.webp",
      icon: WrenchIcon,
      features: {
        en: [
          "Lift not starting or responding",
          "Door opening / closing issues",
          "Stopping between floors",
          "Uneven floor levelling",
          "Vibration or unusual noise",
          "Frequent shutdowns",
          "Fault code diagnosis",
          "Alarm & intercom malfunction",
          "Cabin lighting failures",
        ],
        hi: [
          "लिफ्ट शुरू या रिस्पॉन्ड नहीं हो रही",
          "दरवाज़ा खुलने / बंद होने में समस्या",
          "मंज़िलों के बीच रुकना",
          "असमान फ़्लोर लेवलिंग",
          "कंपन या असामान्य आवाज़",
          "बार-बार शटडाउन",
          "फॉल्ट कोड डायग्नोसिस",
          "अलार्म और इंटरकॉम खराबी",
          "केबिन लाइटिंग विफलता",
        ],
      },
      suitableFor: undefined,
      suitableLabel: undefined,
      featuresLabel: {
        en: "Common Issues We Fix",
        hi: "सामान्य समस्याएं जो हम ठीक करते हैं",
      },
    },
    {
      key: "modernisation" as const,
      image: "/modernisation.webp",
      icon: RefreshCw,
      features: {
        en: [
          "Controller replacement / upgrade",
          "VVVF drive installation",
          "Door operator upgrade",
          "Landing door replacement",
          "Cabin refurbishment",
          "COP & LOP panel upgrade",
          "Machine & traction system replacement",
          "Safety circuit modernisation",
          "Emergency battery backup",
          "Energy efficiency improvements",
        ],
        hi: [
          "कंट्रोलर रिप्लेसमेंट / अपग्रेड",
          "VVVF ड्राइव इंस्टॉलेशन",
          "डोर ऑपरेटर अपग्रेड",
          "लैंडिंग डोर रिप्लेसमेंट",
          "केबिन रीफर्बिशमेंट",
          "COP और LOP पैनल अपग्रेड",
          "मशीन और ट्रैक्शन सिस्टम रिप्लेसमेंट",
          "सेफ्टी सर्किट आधुनिकीकरण",
          "इमरजेंसी बैटरी बैकअप",
          "ऊर्जा दक्षता सुधार",
        ],
      },
      suitableFor: undefined,
      featuresLabel: {
        en: "Upgrade Scope",
        hi: "अपग्रेड का दायरा",
      },
    },
    {
      key: "commercial" as const,
      image: "/commercial-elevator.webp",
      icon: Briefcase,
      features: {
        en: [
          "Capacity: 544–1,360 kg",
          "Speed: 0.75–2.5 m/s",
          "Machine-room-less (MRL) option",
          "Geared & gearless traction systems",
          "Single-entry & through-car configurations",
        ],
        hi: [
          "क्षमता: 544-1,360 किलोग्राम",
          "गति: 0.75-2.5 मी/सेकंड",
          "मशीन-रूम-लेस (MRL) विकल्प",
          "गियर्ड और गियरलेस ट्रैक्शन सिस्टम",
          "सिंगल-एंट्री और थ्रू-कार कॉन्फिगरेशन",
        ],
      },
      suitableFor: {
        en: ["Offices", "Malls", "Hotels", "Business Parks", "Mixed-use Buildings"],
        hi: ["कार्यालय", "मॉल", "होटल", "बिज़नेस पार्क", "मिश्रित-उपयोग भवन"],
      },
    },
    {
      key: "hospital" as const,
      image: "/hospital-elevator.webp",
      icon: HeartPulse,
      features: {
        en: [
          "Large cabin for stretcher & bed access",
          "Smooth acceleration & deceleration",
          "Wide automatic doors",
          "Emergency operation mode",
          "Stainless steel interior",
          "Anti-bacterial flooring",
          "Backup lighting system",
          "Overload protection",
        ],
        hi: [
          "स्ट्रेचर और बेड के लिए बड़ा केबिन",
          "सुचारू त्वरण और मंदन",
          "चौड़े ऑटोमैटिक दरवाज़े",
          "इमरजेंसी ऑपरेशन मोड",
          "स्टेनलेस स्टील इंटीरियर",
          "एंटी-बैक्टीरियल फ़्लोरिंग",
          "बैकअप लाइटिंग सिस्टम",
          "ओवरलोड प्रोटेक्शन",
        ],
      },
      suitableFor: undefined,
    },
    {
      key: "goods" as const,
      image: "/goods-lift.webp",
      icon: Package,
      features: {
        en: [
          "Capacity: 500–3,000 kg",
          "Heavy-duty traction systems",
          "Wide cabin for goods movement",
          "Manual or automatic doors",
          "Durable cabin interior",
        ],
        hi: [
          "क्षमता: 500-3,000 किलोग्राम",
          "हेवी-ड्यूटी ट्रैक्शन सिस्टम",
          "सामान ढुलाई के लिए चौड़ा केबिन",
          "मैनुअल या ऑटोमैटिक दरवाज़े",
          "टिकाऊ केबिन इंटीरियर",
        ],
      },
      suitableFor: {
        en: [
          "Warehouses",
          "Manufacturing Units",
          "Restaurants",
          "Hotels",
          "Retail Stores",
          "Commercial Kitchens",
          "Auto Facilities",
        ],
        hi: [
          "गोदाम",
          "विनिर्माण इकाइयां",
          "रेस्तरां",
          "होटल",
          "रिटेल स्टोर",
          "कमर्शियल किचन",
          "ऑटो फैसिलिटी",
        ],
      },
    },
    {
      key: "carElevator" as const,
      image: "/car-elevator.webp",
      icon: Car,
      features: {
        en: [
          "High load capacity for vehicles",
          "Wide platform with guide rails",
          "Heavy-duty hydraulic or traction drive",
          "Pit-mounted or surface-level design",
          "Safety interlocks & sensors",
        ],
        hi: [
          "वाहनों के लिए उच्च लोड क्षमता",
          "गाइड रेल के साथ चौड़ा प्लेटफॉर्म",
          "हेवी-ड्यूटी हाइड्रोलिक या ट्रैक्शन ड्राइव",
          "पिट-माउंटेड या सतह-स्तरीय डिज़ाइन",
          "सेफ्टी इंटरलॉक और सेंसर",
        ],
      },
      suitableFor: {
        en: [
          "Residential Towers",
          "Commercial Buildings",
          "Private Residences",
          "Automated Parking",
          "Showrooms",
        ],
        hi: [
          "आवासीय टावर",
          "कमर्शियल बिल्डिंग",
          "निजी आवास",
          "ऑटोमेटेड पार्किंग",
          "शोरूम",
        ],
      },
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: { en: "Site Survey & Assessment", hi: "साइट सर्वे और मूल्यांकन" },
      desc: {
        en: "Our engineers visit the site to assess structural readiness, shaft dimensions, electrical provisions and access logistics.",
        hi: "हमारे इंजीनियर साइट का दौरा करके संरचनात्मक तैयारी, शाफ्ट आयाम, इलेक्ट्रिकल प्रावधान और एक्सेस लॉजिस्टिक्स का मूल्यांकन करते हैं।",
      },
      icon: ClipboardCheck,
    },
    {
      step: "02",
      title: { en: "Specification & Planning", hi: "स्पेसिफिकेशन और प्लानिंग" },
      desc: {
        en: "We prepare detailed lift specifications, load calculations, equipment selection and project timelines.",
        hi: "हम विस्तृत लिफ्ट स्पेसिफिकेशन, लोड कैलकुलेशन, उपकरण चयन और प्रोजेक्ट टाइमलाइन तैयार करते हैं।",
      },
      icon: Ruler,
    },
    {
      step: "03",
      title: { en: "Installation & Integration", hi: "इंस्टॉलेशन और इंटीग्रेशन" },
      desc: {
        en: "Equipment is installed, aligned and integrated with the building's electrical and fire safety systems.",
        hi: "उपकरण इंस्टॉल, एलाइन और भवन के इलेक्ट्रिकल और फायर सेफ्टी सिस्टम से इंटीग्रेट किए जाते हैं।",
      },
      icon: Settings,
    },
    {
      step: "04",
      title: { en: "Testing & Safety Checks", hi: "परीक्षण और सुरक्षा जांच" },
      desc: {
        en: "Comprehensive safety tests — overload, emergency stop, door reversal, buffer impact and governor tripping.",
        hi: "व्यापक सुरक्षा परीक्षण — ओवरलोड, इमरजेंसी स्टॉप, डोर रिवर्सल, बफर इम्पैक्ट और गवर्नर ट्रिपिंग।",
      },
      icon: ShieldCheck,
    },
    {
      step: "05",
      title: { en: "Commissioning & Handover", hi: "कमीशनिंग और हैंडओवर" },
      desc: {
        en: "Final commissioning, documentation, user training and warranty activation. Your lift is ready.",
        hi: "अंतिम कमीशनिंग, दस्तावेज़ीकरण, उपयोगकर्ता ट्रेनिंग और वारंटी सक्रियण। आपकी लिफ्ट तैयार है।",
      },
      icon: Plug,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden bg-primary py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            src="/hero-elevator-1.webp"
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
              {t.services.title[lang]}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
              {t.services.subtitle[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Service Detail Sections ── */}
      {services.map((service, index) => {
        const svc = t.services[service.key]
        const Icon = service.icon
        const isEven = index % 2 === 0
        const defaultFeaturesLabel = {
          en: "What's Included",
          hi: "क्या शामिल है",
        }
        const defaultSuitableLabel = {
          en: "Suitable For",
          hi: "के लिए उपयुक्त",
        }
        const featLabel =
          (service as any).featuresLabel ?? defaultFeaturesLabel
        const suitLabel =
          (service as any).suitableLabel ?? defaultSuitableLabel

        return (
          <section
            key={service.key}
            className={cn(
              "py-16 md:py-24",
              index % 2 !== 0 && "bg-muted/50"
            )}
          >
            <div className="container mx-auto px-4">
              <div
                className={cn(
                  "grid items-center gap-12 lg:grid-cols-2",
                  !isEven && ""
                )}
              >
                {/* Image */}
                <motion.div
                  {...fadeUp}
                  className={cn(
                    "overflow-hidden rounded-xl",
                    !isEven && "lg:order-2"
                  )}
                >
                  <img
                    src={service.image}
                    alt={svc.title[lang]}
                    className="aspect-[4/3] h-full w-full object-cover"
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className={cn(!isEven && "lg:order-1")}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                      {svc.title[lang]}
                    </h2>
                  </div>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    {svc.desc[lang]}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                      {featLabel[lang]}
                    </h3>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {service.features[lang].map((feat, fi) => (
                        <li
                          key={fi}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suitable For */}
                  {service.suitableFor && (
                    <div className="mb-6">
                      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                        {suitLabel[lang]}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.suitableFor[lang].map((item, si) => (
                          <Badge key={si} variant="secondary">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <Button asChild size="lg" className="mt-2">
                    <a
                      href={COMPANY.whatsappLink(
                        {
                          en: `Hi Veyra Lift Systems, I'm interested in your ${svc.title.en} service. Please share details.`,
                          hi: `नमस्ते वेरा लिफ्ट सिस्टम्स, मुझे आपकी ${svc.title.hi} सेवा में रुचि है। कृपया जानकारी दें।`,
                        }[lang]
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      {
                        {
                          en: "Enquire on WhatsApp",
                          hi: "WhatsApp पर पूछताछ करें",
                        }[lang]
                      }
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* ── Installation Process ── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              {t.process.title[lang]}
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {
                {
                  en: "How Installation Works",
                  hi: "इंस्टॉलेशन कैसे होता है",
                }[lang]
              }
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {t.process.subtitle[lang]}
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="relative mx-auto max-w-4xl"
          >
            {/* Vertical line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:block" />

            {processSteps.map((step, i) => {
              const StepIcon = step.icon
              return (
                <motion.div
                  key={i}
                  {...staggerChild}
                  className="relative mb-8 flex gap-6 last:mb-0 md:ml-6"
                >
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-md">
                    {step.step}
                  </div>
                  <Card className="flex-1">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <StepIcon className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">
                          {step.title[lang]}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {step.desc[lang]}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
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
              <Button size="lg" variant="secondary" asChild>
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
