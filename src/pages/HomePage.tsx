import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useLang } from "@/i18n/LanguageContext"
import { translations } from "@/i18n/translations"
import { COMPANY, WHATSAPP_MESSAGES } from "@/lib/constants"
import { cn } from "@/lib/utils"
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
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  Wrench,
  Shield,
  Cog,
  Building2,

  ArrowRight,
  Phone,
  MessageCircle,
  Star,
  Clock,
  Users,
  Award,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Zap,
  HeartPulse,
  HardHat,
  Eye,
  FileText,

  Search,
  ClipboardCheck,
  Hammer,
  PackageCheck,
  Building,
  HomeIcon,

  Warehouse,
  Hotel,
  GraduationCap,
  PhoneCall,
  ShieldCheck,

  Settings,
  Globe,
} from "lucide-react"

// ──────────────────────────────────────────────
// Animated counter component
// ──────────────────────────────────────────────
function AnimatedCounter({
  target,
  suffix = "",
  decimals = 0,
}: {
  target: number
  suffix?: string
  decimals?: number
}) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString()
  )
  const [display, setDisplay] = useState(decimals > 0 ? "0.0" : "0")

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v))
    return unsub
  }, [rounded])

  return (
    <motion.span
      onViewportEnter={() => {
        animate(count, target, { duration: 2, ease: "easeOut" })
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {display}
      {suffix}
    </motion.span>
  )
}

// ──────────────────────────────────────────────
// Section wrapper for consistency
// ──────────────────────────────────────────────
function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
}

function SectionHeader({
  title,
  subtitle,
  className,
}: {
  title: string
  subtitle: string
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12 text-center md:mb-16", className)}
    >
      <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto max-w-2xl text-muted-foreground">{subtitle}</p>
    </motion.div>
  )
}

// ──────────────────────────────────────────────
// Data
// ──────────────────────────────────────────────

const heroImages = [
  "/hero-elevator-1.webp",
  "/hero-building-2.webp",
  "/hero-service-3.webp",
]

const serviceImages: Record<string, string> = {
  installation: "/hero-elevator-1.webp",
  homeElevator: "/home-elevator.webp",
  amc: "/safety-inspection.webp",
  repair: "/hero-service-3.webp",
  modernisation: "/modernisation.webp",
  commercial: "/commercial-elevator.webp",
  hospital: "/hospital-elevator.webp",
  goods: "/goods-lift.webp",
  carElevator: "/car-elevator.webp",
}

const serviceKeys = [
  "installation",
  "homeElevator",
  "amc",
  "repair",
  "modernisation",
  "commercial",
  "hospital",
  "goods",
  "carElevator",
] as const

// ──────────────────────────────────────────────
// Component
// ──────────────────────────────────────────────

export default function HomePage() {
  const { lang } = useLang()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % heroImages.length),
      4000
    )
    return () => clearInterval(timer)
  }, [])

  // ─── Inline data ─────────────────────────────

  const statsData = [
    {
      icon: <Wrench className="size-6" />,
      value: 680,
      suffix: "+",
      label: translations.stats.elevators[lang],
    },
    {
      icon: <Building2 className="size-6" />,
      value: 410,
      suffix: "+",
      label: translations.stats.installations[lang],
    },
    {
      icon: <Award className="size-6" />,
      value: 10,
      suffix: "+",
      label: translations.stats.experience[lang],
    },
    {
      icon: <Star className="size-6" />,
      value: 4.8,
      suffix: "/5",
      label: translations.stats.satisfaction[lang],
      decimals: 1,
    },
    {
      icon: <Clock className="size-6" />,
      value: 60,
      suffix: "",
      label: translations.stats.response[lang],
    },
    {
      icon: <BarChart3 className="size-6" />,
      value: 4800,
      suffix: "+",
      label: translations.stats.visits[lang],
    },
  ]

  const products = [
    {
      name: { en: "Arven MRL", hi: "आर्वेन MRL" },
      type: { en: "Commercial Passenger", hi: "कमर्शियल पैसेंजर" },
      spec: { en: "Up to 26 passengers", hi: "26 यात्रियों तक" },
      image: "/commercial-elevator.webp",
    },
    {
      name: { en: "Selka Home", hi: "सेल्का होम" },
      type: { en: "Residential Home", hi: "आवासीय होम" },
      spec: { en: "Compact design, 2-4 stops", hi: "कॉम्पैक्ट डिज़ाइन, 2-4 स्टॉप" },
      image: "/home-elevator.webp",
    },
    {
      name: { en: "Orvane Freight", hi: "ओर्वेन फ्रेट" },
      type: { en: "Goods & Freight", hi: "गुड्स और फ्रेट" },
      spec: { en: "Up to 5000 kg capacity", hi: "5000 kg तक क्षमता" },
      image: "/goods-lift.webp",
    },
    {
      name: { en: "Merovin Hospital", hi: "मेरोविन हॉस्पिटल" },
      type: { en: "Healthcare", hi: "हेल्थकेयर" },
      spec: { en: "Stretcher-compatible", hi: "स्ट्रेचर-संगत" },
      image: "/hospital-elevator.webp",
    },
  ]

  const amcPlans = [
    {
      name: { en: "Essential", hi: "एसेंशियल" },
      price: "₹2,400",
      features: {
        en: [
          "Monthly preventive visits",
          "Safety inspections",
          "Phone support",
          "Basic lubrication & cleaning",
        ],
        hi: [
          "मासिक निवारक विज़िट",
          "सुरक्षा निरीक्षण",
          "फोन सहायता",
          "बेसिक लुब्रिकेशन और सफाई",
        ],
      },
      recommended: false,
    },
    {
      name: { en: "Complete", hi: "कम्प्लीट" },
      price: "₹4,200",
      features: {
        en: [
          "Bi-monthly visits + on-call",
          "Parts replacement included",
          "Priority breakdown response",
          "Quarterly performance reports",
          "Annual safety audit",
        ],
        hi: [
          "द्वि-मासिक विज़िट + ऑन-कॉल",
          "पार्ट्स रिप्लेसमेंट शामिल",
          "प्राथमिकता ब्रेकडाउन रिस्पॉन्स",
          "त्रैमासिक प्रदर्शन रिपोर्ट",
          "वार्षिक सुरक्षा ऑडिट",
        ],
      },
      recommended: true,
    },
    {
      name: { en: "Estate", hi: "एस्टेट" },
      price: "₹3,600",
      features: {
        en: [
          "Monthly visits",
          "Door operator maintenance",
          "Emergency callback support",
          "Wear-part coverage",
        ],
        hi: [
          "मासिक विज़िट",
          "डोर ऑपरेटर मेंटेनेंस",
          "इमरजेंसी कॉलबैक सहायता",
          "वियर-पार्ट कवरेज",
        ],
      },
      recommended: false,
    },
  ]

  const projectsData = [
    {
      name: { en: "Asterra Heights", hi: "एस्टेरा हाइट्स" },
      type: { en: "Residential", hi: "आवासीय" },
      elevators: 6,
      location: { en: "Sector 52, Gurugram", hi: "सेक्टर 52, गुरुग्राम" },
      year: "2023",
    },
    {
      name: { en: "Merrow Business Centre", hi: "मेरो बिज़नेस सेंटर" },
      type: { en: "Commercial", hi: "कमर्शियल" },
      elevators: 4,
      location: {
        en: "Golf Course Extension, Gurugram",
        hi: "गोल्फ कोर्स एक्सटेंशन, गुरुग्राम",
      },
      year: "2024",
    },
    {
      name: { en: "Velora Hospital", hi: "वेलोरा हॉस्पिटल" },
      type: { en: "Healthcare", hi: "हेल्थकेयर" },
      elevators: 3,
      location: { en: "Sector 47, Gurugram", hi: "सेक्टर 47, गुरुग्राम" },
      year: "2024",
    },
  ]

  const testimonialsData = [
    {
      quote: {
        en: "Veyra's team modernised all 4 elevators in our society. The difference in ride quality and door operation is noticeable. Their AMC service has been consistent since.",
        hi: "वेरा की टीम ने हमारी सोसायटी की चारों लिफ्ट का आधुनिकीकरण किया। सवारी की गुणवत्ता और दरवाज़े के संचालन में अंतर ध्यान देने योग्य है।",
      },
      name: { en: "Rajesh Khanna", hi: "राजेश खन्ना" },
      role: {
        en: "RWA President, Sector 56",
        hi: "RWA अध्यक्ष, सेक्टर 56",
      },
      rating: 5,
    },
    {
      quote: {
        en: "We had multiple lift breakdowns with our previous vendor. After switching to Veyra's Complete AMC, the frequency of issues dropped dramatically. Response time is genuinely fast.",
        hi: "पिछले वेंडर के साथ हमें कई बार लिफ्ट खराबी का सामना करना पड़ा। वेरा के Complete AMC पर स्विच करने के बाद समस्याएं काफी कम हो गईं।",
      },
      name: { en: "Priya Sharma", hi: "प्रिया शर्मा" },
      role: {
        en: "Facility Manager, Golf Course Road",
        hi: "फैसिलिटी मैनेजर, गोल्फ कोर्स रोड",
      },
      rating: 5,
    },
    {
      quote: {
        en: "Got a home elevator installed for my parents. The Veyra team was professional, patient with our requirements and delivered on time. Clean installation work.",
        hi: "मेरे माता-पिता के लिए होम एलिवेटर इंस्टॉल कराया। वेरा की टीम प्रोफेशनल थी, हमारी ज़रूरतों के साथ धैर्यवान और समय पर डिलीवर किया।",
      },
      name: { en: "Amit Verma", hi: "अमित वर्मा" },
      role: {
        en: "Homeowner, Sector 49",
        hi: "गृहस्वामी, सेक्टर 49",
      },
      rating: 5,
    },
    {
      quote: {
        en: "Our hospital needed a reliable elevator partner. Veyra understood the critical requirements — stretcher access, smooth operation, zero downtime. They've delivered consistently.",
        hi: "हमारे अस्पताल को एक विश्वसनीय लिफ्ट पार्टनर की ज़रूरत थी। वेरा ने स्ट्रेचर एक्सेस, स्मूथ ऑपरेशन, शून्य डाउनटाइम की ज़रूरतों को समझा।",
      },
      name: { en: "Dr. Neha Gupta", hi: "डॉ. नेहा गुप्ता" },
      role: {
        en: "Hospital Administrator, Sector 47",
        hi: "अस्पताल प्रशासक, सेक्टर 47",
      },
      rating: 5,
    },
  ]

  const whyChooseData = [
    {
      icon: <Users className="size-6" />,
      title: { en: "Local Team", hi: "स्थानीय टीम" },
      desc: {
        en: "Gurugram-based engineers who understand local building conditions and regulations",
        hi: "गुरुग्राम-स्थित इंजीनियर जो स्थानीय भवन स्थितियों और नियमों को समझते हैं",
      },
    },
    {
      icon: <Zap className="size-6" />,
      title: { en: "24/7 Emergency", hi: "24/7 इमरजेंसी" },
      desc: {
        en: "Round-the-clock breakdown support with 60-90 minute response in core Gurugram",
        hi: "कोर गुरुग्राम में 60-90 मिनट रिस्पॉन्स के साथ चौबीसों घंटे ब्रेकडाउन सहायता",
      },
    },
    {
      icon: <ShieldCheck className="size-6" />,
      title: { en: "Preventive Approach", hi: "निवारक दृष्टिकोण" },
      desc: {
        en: "Systematic maintenance that catches issues before they become breakdowns",
        hi: "व्यवस्थित रखरखाव जो ब्रेकडाउन से पहले समस्याओं को पकड़ता है",
      },
    },
    {
      icon: <HardHat className="size-6" />,
      title: { en: "Experienced Engineers", hi: "अनुभवी इंजीनियर" },
      desc: {
        en: "Certified technicians with hands-on experience across all major elevator brands",
        hi: "सभी प्रमुख लिफ्ट ब्रांडों में व्यावहारिक अनुभव वाले प्रमाणित तकनीशियन",
      },
    },
    {
      icon: <Settings className="size-6" />,
      title: { en: "All Brands Serviced", hi: "सभी ब्रांड सर्विस" },
      desc: {
        en: "We maintain and repair elevators from every major manufacturer",
        hi: "हम हर प्रमुख निर्माता की लिफ्ट का रखरखाव और मरम्मत करते हैं",
      },
    },
    {
      icon: <FileText className="size-6" />,
      title: { en: "Transparent Reporting", hi: "पारदर्शी रिपोर्टिंग" },
      desc: {
        en: "Detailed service reports with photos after every visit — no hidden charges",
        hi: "हर विज़िट के बाद फोटो सहित विस्तृत सर्विस रिपोर्ट — कोई छिपा शुल्क नहीं",
      },
    },
  ]

  const processSteps = [
    {
      icon: <Search className="size-6" />,
      title: { en: "Enquiry", hi: "पूछताछ" },
      desc: {
        en: "Reach out via call, WhatsApp or our contact form with your requirement",
        hi: "अपनी ज़रूरत के साथ कॉल, WhatsApp या संपर्क फ़ॉर्म से संपर्क करें",
      },
    },
    {
      icon: <Eye className="size-6" />,
      title: { en: "Site Survey", hi: "साइट सर्वे" },
      desc: {
        en: "Our engineer visits your site to assess the shaft, building conditions and requirements",
        hi: "हमारा इंजीनियर शाफ्ट, भवन स्थिति और ज़रूरतों का आकलन करने आता है",
      },
    },
    {
      icon: <ClipboardCheck className="size-6" />,
      title: { en: "Quotation", hi: "कोटेशन" },
      desc: {
        en: "You receive a detailed, transparent quotation with scope, timeline and terms",
        hi: "आपको स्कोप, टाइमलाइन और शर्तों के साथ विस्तृत, पारदर्शी कोटेशन मिलता है",
      },
    },
    {
      icon: <Hammer className="size-6" />,
      title: { en: "Execution", hi: "निष्पादन" },
      desc: {
        en: "Our team executes the project with regular updates and safety compliance",
        hi: "हमारी टीम नियमित अपडेट और सुरक्षा अनुपालन के साथ प्रोजेक्ट निष्पादित करती है",
      },
    },
    {
      icon: <PackageCheck className="size-6" />,
      title: { en: "Handover", hi: "हैंडओवर" },
      desc: {
        en: "Final inspection, documentation and training before official handover",
        hi: "आधिकारिक हैंडओवर से पहले अंतिम निरीक्षण, दस्तावेज़ीकरण और प्रशिक्षण",
      },
    },
  ]

  const customerSegments = [
    {
      icon: <Building className="size-6" />,
      title: { en: "Residential Societies", hi: "आवासीय सोसायटी" },
      desc: { en: "AMC & modernisation for high-rise societies", hi: "हाई-राइज़ सोसायटी के लिए AMC और आधुनिकीकरण" },
    },
    {
      icon: <HardHat className="size-6" />,
      title: { en: "Builders & Developers", hi: "बिल्डर और डेवलपर" },
      desc: { en: "New installation for under-construction projects", hi: "निर्माणाधीन प्रोजेक्ट के लिए नई इंस्टॉलेशन" },
    },
    {
      icon: <Users className="size-6" />,
      title: { en: "Facility Managers", hi: "फैसिलिटी मैनेजर" },
      desc: { en: "Preventive maintenance & breakdown support", hi: "निवारक रखरखाव और ब्रेकडाउन सहायता" },
    },
    {
      icon: <HomeIcon className="size-6" />,
      title: { en: "Homeowners", hi: "गृहस्वामी" },
      desc: { en: "Compact home elevators for villas & floors", hi: "विला और फ्लोर के लिए कॉम्पैक्ट होम एलिवेटर" },
    },
    {
      icon: <HeartPulse className="size-6" />,
      title: { en: "Hospitals", hi: "अस्पताल" },
      desc: { en: "Stretcher-compatible, high-reliability lifts", hi: "स्ट्रेचर-संगत, उच्च-विश्वसनीयता लिफ्ट" },
    },
    {
      icon: <Warehouse className="size-6" />,
      title: { en: "Warehouses", hi: "वेयरहाउस" },
      desc: { en: "Heavy-duty goods & freight elevators", hi: "हेवी-ड्यूटी गुड्स और फ्रेट एलिवेटर" },
    },
    {
      icon: <Hotel className="size-6" />,
      title: { en: "Hotels", hi: "होटल" },
      desc: { en: "Premium passenger lifts with elegant cabins", hi: "शानदार केबिन के साथ प्रीमियम पैसेंजर लिफ्ट" },
    },
    {
      icon: <GraduationCap className="size-6" />,
      title: { en: "Schools & Institutions", hi: "स्कूल और संस्थान" },
      desc: { en: "Safe, accessible elevators for campuses", hi: "कैम्पस के लिए सुरक्षित, सुलभ लिफ्ट" },
    },
  ]

  const serviceAreas = {
    gurugram: [
      "Sector 48-57",
      "Golf Course Road",
      "Golf Course Extension",
      "Sohna Road",
      "MG Road",
      "Dwarka Expressway",
      "New Gurugram",
      "Palam Vihar",
    ],
    delhiNcr: [
      "South Delhi",
      "Dwarka",
      "Noida",
      "Greater Noida",
      "Faridabad",
      "Ghaziabad",
      "Manesar",
      "Bahadurgarh",
    ],
  }

  const faqData = [
    {
      q: {
        en: "How often should elevator maintenance be done?",
        hi: "लिफ्ट का रखरखाव कितनी बार होना चाहिए?",
      },
      a: {
        en: "For most residential and commercial elevators, monthly preventive maintenance visits are recommended. High-traffic elevators in hospitals or malls may need bi-monthly or even weekly inspections. Regular maintenance prevents unexpected breakdowns and extends equipment life.",
        hi: "अधिकांश आवासीय और कमर्शियल लिफ्ट के लिए मासिक निवारक रखरखाव विज़िट की सिफारिश की जाती है। अस्पतालों या मॉल में हाई-ट्रैफिक लिफ्ट को द्वि-मासिक या साप्ताहिक निरीक्षण की आवश्यकता हो सकती है।",
      },
    },
    {
      q: {
        en: "What is the difference between AMC and on-call repair?",
        hi: "AMC और ऑन-कॉल मरम्मत में क्या अंतर है?",
      },
      a: {
        en: "An AMC (Annual Maintenance Contract) includes scheduled preventive visits, priority response and often parts coverage at a fixed monthly cost. On-call repair is billed per visit and only addresses issues after they occur — it's reactive, not preventive.",
        hi: "AMC (वार्षिक रखरखाव अनुबंध) में निर्धारित निवारक विज़िट, प्राथमिकता रिस्पॉन्स और अक्सर निश्चित मासिक लागत पर पार्ट्स कवरेज शामिल है। ऑन-कॉल मरम्मत प्रति विज़िट बिल की जाती है।",
      },
    },
    {
      q: {
        en: "How long does a new elevator installation take?",
        hi: "नई लिफ्ट इंस्टॉलेशन में कितना समय लगता है?",
      },
      a: {
        en: "A standard residential elevator installation takes 45-60 days from shaft-ready stage. Commercial installations with multiple lifts may take 90-120 days. Timeline depends on building readiness, shaft dimensions and the specific elevator model selected.",
        hi: "शाफ्ट-रेडी स्टेज से एक मानक आवासीय लिफ्ट इंस्टॉलेशन में 45-60 दिन लगते हैं। कई लिफ्ट वाली कमर्शियल इंस्टॉलेशन में 90-120 दिन लग सकते हैं।",
      },
    },
    {
      q: {
        en: "Do you service elevators from all brands?",
        hi: "क्या आप सभी ब्रांड की लिफ्ट की सर्विस करते हैं?",
      },
      a: {
        en: "Yes, our technicians are trained to maintain and repair elevators from all major manufacturers including KONE, Otis, Schindler, ThyssenKrupp, Mitsubishi, Johnson and others. We carry common spare parts for faster resolution.",
        hi: "हां, हमारे तकनीशियन KONE, Otis, Schindler, ThyssenKrupp, Mitsubishi, Johnson और अन्य सभी प्रमुख निर्माताओं की लिफ्ट का रखरखाव और मरम्मत करने के लिए प्रशिक्षित हैं।",
      },
    },
  ]

  // ─── Render ───────────────────────────────────

  return (
    <div className="overflow-x-hidden">
      {/* ============================================ */}
      {/* 1. HERO SECTION                              */}
      {/* ============================================ */}
      <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
        {/* Background carousel */}
        {heroImages.map((img, i) => (
          <div
            key={img}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              i === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <img
              src={img}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl"
          >
            <Badge
              variant="secondary"
              className="mb-6 border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm"
            >
              {translations.hero.badge[lang]}
            </Badge>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {translations.hero.title1[lang]}{" "}
              <span className="gradient-text">{translations.hero.title2[lang]}</span>
              <br />
              {translations.hero.title3[lang]}
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-base text-white/80 sm:text-lg">
              {translations.hero.subtitle[lang]}
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a
                  href={COMPANY.whatsappLink(WHATSAPP_MESSAGES[lang].service)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5" />
                  {translations.hero.bookService[lang]}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:w-auto"
              >
                <Link to="/services">
                  {translations.hero.exploreServices[lang]}
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Stats bar at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-black/40 backdrop-blur-md"
        >
          <div className="container mx-auto grid grid-cols-2 gap-4 px-4 py-4 sm:grid-cols-4 sm:py-6">
            {[
              { n: "680+", l: translations.stats.elevators[lang] },
              { n: "410+", l: translations.stats.installations[lang] },
              { n: "10+", l: translations.stats.experience[lang] },
              { n: "4.8/5", l: translations.stats.satisfaction[lang] },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <div className="text-xl font-bold text-white sm:text-2xl">
                  {s.n}
                </div>
                <div className="text-xs text-white/60 sm:text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* 2. STATS COUNTER SECTION                     */}
      {/* ============================================ */}
      <Section className="bg-muted/50">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="text-center">
                <CardContent className="flex flex-col items-center gap-3 pt-6">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold tracking-tight md:text-3xl">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ============================================ */}
      {/* 3. SERVICES OVERVIEW SECTION                 */}
      {/* ============================================ */}
      <Section>
        <SectionHeader
          title={translations.services.title[lang]}
          subtitle={translations.services.subtitle[lang]}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key, i) => {
            const svc = translations.services[key]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link to="/services" className="block h-full">
                  <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={serviceImages[key]}
                        alt={svc.title[lang]}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2 pt-5">
                      <CardTitle className="text-lg">{svc.title[lang]}</CardTitle>
                      <CardDescription className="line-clamp-2">{svc.desc[lang]}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                        {translations.services.learnMore[lang]}
                        <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button size="lg" variant="outline" asChild>
            <Link to="/services">
              {translations.services.viewAll[lang]}
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </motion.div>
      </Section>

      {/* ============================================ */}
      {/* 4. ABOUT PREVIEW SECTION                     */}
      {/* ============================================ */}
      <Section className="bg-muted/50">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src="/team-working.webp"
              alt={translations.about.title[lang]}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              {translations.about.subtitle[lang]}
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {translations.about.title[lang]}
            </h2>
            <p className="mb-8 text-muted-foreground">
              {translations.about.description[lang]}
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {(
                [
                  { key: "safety", icon: <Shield className="size-5" /> },
                  { key: "accountability", icon: <CheckCircle2 className="size-5" /> },
                  { key: "engineering", icon: <Cog className="size-5" /> },
                  { key: "responsiveness", icon: <Zap className="size-5" /> },
                ] as const
              ).map(({ key, icon }) => (
                <Card key={key} className="border-0 bg-background shadow-sm">
                  <CardContent className="flex items-start gap-3 pt-4">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {icon}
                    </div>
                    <div>
                      <p className="font-semibold">
                        {translations.about.values[key][lang]}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {translations.about.values[`${key}Desc`][lang]}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="outline" asChild className="mt-8">
              <Link to="/about">
                {translations.about.viewMore[lang]}
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* ============================================ */}
      {/* 5. PRODUCTS PREVIEW SECTION                  */}
      {/* ============================================ */}
      <Section>
        <SectionHeader
          title={translations.products.title[lang]}
          subtitle={translations.products.subtitle[lang]}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((prod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name[lang]}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit text-xs">
                    {prod.type[lang]}
                  </Badge>
                  <CardTitle className="text-lg">{prod.name[lang]}</CardTitle>
                  <CardDescription>{prod.spec[lang]}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button size="lg" variant="outline" asChild>
            <Link to="/products">
              {translations.products.viewAll[lang]}
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </motion.div>
      </Section>

      {/* ============================================ */}
      {/* 6. AMC PLANS PREVIEW SECTION                 */}
      {/* ============================================ */}
      <Section className="bg-muted/50">
        <SectionHeader
          title={translations.amcPage.title[lang]}
          subtitle={translations.amcPage.subtitle[lang]}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {amcPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card
                className={cn(
                  "relative h-full",
                  plan.recommended &&
                    "border-primary shadow-lg ring-2 ring-primary/20"
                )}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="px-3 py-1">
                      {translations.amcPage.recommended[lang]}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name[lang]}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">
                      {translations.amcPage.perMonth[lang]}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-4" />
                  <ul className="space-y-3">
                    {plan.features[lang].map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.recommended ? "default" : "outline"}
                    className="mt-6 w-full"
                    asChild
                  >
                    <a
                      href={COMPANY.whatsappLink(WHATSAPP_MESSAGES[lang].quote)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {translations.amcPage.getQuote[lang]}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button size="lg" variant="outline" asChild>
            <Link to="/amc">
              {translations.amcPage.viewPlans[lang]}
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </motion.div>
      </Section>

      {/* ============================================ */}
      {/* 7. PROJECTS PREVIEW SECTION                  */}
      {/* ============================================ */}
      <Section>
        <SectionHeader
          title={translations.projects.title[lang]}
          subtitle={translations.projects.subtitle[lang]}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {projectsData.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="secondary">{project.type[lang]}</Badge>
                    <Badge variant="outline">{project.year}</Badge>
                  </div>
                  <CardTitle className="text-xl">
                    {project.name[lang]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building2 className="size-4" />
                      <span>
                        {project.elevators} {translations.projects.elevators[lang]}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      <span>{project.location[lang]}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button size="lg" variant="outline" asChild>
            <Link to="/projects">
              {translations.projects.viewAll[lang]}
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </motion.div>
      </Section>

      {/* ============================================ */}
      {/* 8. TESTIMONIALS SECTION                      */}
      {/* ============================================ */}
      <Section className="bg-muted/50">
        <SectionHeader
          title={translations.testimonials.title[lang]}
          subtitle={translations.testimonials.subtitle[lang]}
        />

        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4">
          {testimonialsData.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="min-w-[280px] snap-start md:min-w-0"
            >
              <Card className="h-full">
                <CardContent className="flex h-full flex-col pt-6">
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star
                        key={si}
                        className="size-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    "{t.quote[lang]}"
                  </p>
                  <Separator className="mb-4" />
                  <div>
                    <p className="font-semibold">{t.name[lang]}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role[lang]}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ============================================ */}
      {/* 9. WHY CHOOSE US SECTION                     */}
      {/* ============================================ */}
      <Section>
        <SectionHeader
          title={translations.whyChoose.title[lang]}
          subtitle={translations.whyChoose.subtitle[lang]}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="h-full">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">{item.title[lang]}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.desc[lang]}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ============================================ */}
      {/* 10. HOW WE WORK / PROCESS SECTION            */}
      {/* ============================================ */}
      <Section className="bg-muted/50">
        <SectionHeader
          title={translations.process.title[lang]}
          subtitle={translations.process.subtitle[lang]}
        />

        <div className="relative">
          {/* Connecting line — vertical on mobile, horizontal on desktop */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:left-0 md:right-0 md:top-6 md:mx-auto md:h-0.5 md:w-full md:bottom-auto" />

          <div className="grid gap-8 md:grid-cols-5 md:gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex gap-4 md:flex-col md:items-center md:text-center"
              >
                {/* Step number circle */}
                <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">{step.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.desc[lang]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================ */}
      {/* 11. CUSTOMER SEGMENTS SECTION                */}
      {/* ============================================ */}
      <Section>
        <SectionHeader
          title={translations.customerSegments.title[lang]}
          subtitle={translations.customerSegments.subtitle[lang]}
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {customerSegments.map((seg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Card className="h-full text-center transition-shadow hover:shadow-md">
                <CardContent className="flex flex-col items-center gap-3 pt-6">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {seg.icon}
                  </div>
                  <h3 className="text-sm font-semibold">{seg.title[lang]}</h3>
                  <p className="text-xs text-muted-foreground">
                    {seg.desc[lang]}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ============================================ */}
      {/* 12. SERVICE AREAS PREVIEW                    */}
      {/* ============================================ */}
      <Section className="bg-muted/50">
        <SectionHeader
          title={translations.areas.title[lang]}
          subtitle={translations.areas.subtitle[lang]}
        />

        <div className="grid gap-8 md:grid-cols-2">
          {(
            [
              {
                title: translations.areas.gurugram[lang],
                areas: serviceAreas.gurugram,
                icon: <MapPin className="size-5" />,
              },
              {
                title: translations.areas.delhiNcr[lang],
                areas: serviceAreas.delhiNcr,
                icon: <Globe className="size-5" />,
              },
            ] as const
          ).map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: gi * 0.15 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {group.icon}
                    </div>
                    <CardTitle>{group.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.areas.map((area) => (
                      <Badge key={area} variant="secondary" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button size="lg" variant="outline" asChild>
            <Link to="/areas">
              {translations.areas.viewAll[lang]}
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </motion.div>
      </Section>

      {/* ============================================ */}
      {/* 13. FAQ PREVIEW SECTION                      */}
      {/* ============================================ */}
      <Section>
        <SectionHeader
          title={translations.faq.title[lang]}
          subtitle={translations.faq.subtitle[lang]}
        />

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <AccordionItem value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base">
                    {faq.q[lang]}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a[lang]}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button size="lg" variant="outline" asChild>
            <Link to="/faq">
              {translations.faq.viewAll[lang]}
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </motion.div>
      </Section>

      {/* ============================================ */}
      {/* 14. CTA / CONTACT SECTION                    */}
      {/* ============================================ */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {translations.cta.title[lang]}
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              {translations.cta.subtitle[lang]}
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="w-full sm:w-auto"
              >
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>
                  <Phone className="size-5" />
                  {translations.cta.callUs[lang]}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground sm:w-auto"
              >
                <a
                  href={COMPANY.whatsappLink(WHATSAPP_MESSAGES[lang].general)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5" />
                  {translations.cta.whatsapp[lang]}
                </a>
              </Button>
            </div>

            <Separator className="mx-auto my-8 max-w-xs bg-primary-foreground/20" />

            <div className="flex flex-col items-center gap-4 text-sm text-primary-foreground/70 sm:flex-row sm:justify-center sm:gap-8">
              <div className="flex items-center gap-2">
                <PhoneCall className="size-4" />
                <span>{COMPANY.phoneFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="size-4" />
                <span>
                  {translations.contact.emergency[lang]}:{" "}
                  {COMPANY.emergencyPhoneFormatted}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
