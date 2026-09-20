import { motion } from "framer-motion"
import {
  MessageCircle,
  Shield,
  Zap,
  Volume2,
  Palette,
  Phone,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useLang } from "@/i18n/LanguageContext"
import { translations } from "@/i18n/translations"
import { COMPANY, WHATSAPP_MESSAGES } from "@/lib/constants"
import { cn } from "@/lib/utils"

const products = [
  {
    name: { en: "Arven MRL Passenger Lift", hi: "आर्वेन MRL पैसेंजर लिफ्ट" },
    image: "/commercial-elevator.webp",
    type: { en: "MRL Passenger", hi: "MRL पैसेंजर" },
    specs: {
      capacity: "680 kg",
      passengers: "8",
      speed: "1.0 m/s",
      stops: "2–12",
      drive: { en: "Gearless Traction", hi: "गियरलेस ट्रैक्शन" },
      door: { en: "Auto Centre-Opening", hi: "ऑटो सेंटर-ओपनिंग" },
      doorWidth: "800 mm",
      power: { en: "415V 3-Phase", hi: "415V 3-फेज" },
      control: "VVVF",
      application: {
        en: "Residential / Commercial",
        hi: "आवासीय / वाणिज्यिक",
      },
    },
  },
  {
    name: { en: "Selka Home Lift", hi: "सेल्का होम लिफ्ट" },
    image: "/home-elevator.webp",
    type: { en: "Home Elevator", hi: "होम एलिवेटर" },
    specs: {
      capacity: "320 kg",
      passengers: "4",
      speed: "0.3 m/s",
      stops: "2–4",
      drive: { en: "Compact Traction", hi: "कॉम्पैक्ट ट्रैक्शन" },
      door: { en: "Automatic", hi: "ऑटोमैटिक" },
      application: {
        en: "Villas / Independent Homes",
        hi: "विलाज़ / स्वतंत्र घर",
      },
    },
  },
  {
    name: { en: "Orvane Freight Lift", hi: "ऑर्वेन फ्रेट लिफ्ट" },
    image: "/goods-lift.webp",
    type: { en: "Goods Elevator", hi: "गुड्स एलिवेटर" },
    specs: {
      capacity: "2000 kg",
      speed: "0.5 m/s",
      stops: "2–8",
      door: { en: "Auto / Manual", hi: "ऑटो / मैनुअल" },
      cabin: { en: "Heavy-Duty", hi: "हेवी-ड्यूटी" },
      application: {
        en: "Warehouses / Commercial / Industrial",
        hi: "गोदाम / वाणिज्यिक / औद्योगिक",
      },
    },
  },
  {
    name: { en: "Merovin Hospital Lift", hi: "मेरोविन हॉस्पिटल लिफ्ट" },
    image: "/hospital-elevator.webp",
    type: { en: "Hospital / Stretcher", hi: "अस्पताल / स्ट्रेचर" },
    specs: {
      capacity: "1600 kg",
      passengers: "21",
      speed: "1.0 m/s",
      stops: "2–15",
      door: { en: "Auto Centre-Opening", hi: "ऑटो सेंटर-ओपनिंग" },
      application: {
        en: "Hospitals / Medical Facilities",
        hi: "अस्पताल / चिकित्सा सुविधाएं",
      },
    },
  },
]

const whyFeatures = [
  {
    icon: Shield,
    title: { en: "Quality Components", hi: "गुणवत्ता घटक" },
    desc: {
      en: "Sourced from trusted manufacturers for long-lasting performance and reliability.",
      hi: "लंबे समय तक प्रदर्शन और विश्वसनीयता के लिए विश्वसनीय निर्माताओं से प्राप्त।",
    },
  },
  {
    icon: Zap,
    title: { en: "Energy Efficient", hi: "ऊर्जा कुशल" },
    desc: {
      en: "VVVF drives and gearless motors that reduce power consumption significantly.",
      hi: "VVVF ड्राइव और गियरलेस मोटर जो बिजली की खपत को काफी कम करते हैं।",
    },
  },
  {
    icon: Volume2,
    title: { en: "Low Noise Operation", hi: "कम शोर संचालन" },
    desc: {
      en: "Engineered for quiet, smooth rides — ideal for residential and hospital environments.",
      hi: "शांत, सुचारू सवारी के लिए इंजीनियर्ड — आवासीय और अस्पताल वातावरण के लिए आदर्श।",
    },
  },
  {
    icon: Palette,
    title: { en: "Customisable Designs", hi: "अनुकूलनीय डिज़ाइन" },
    desc: {
      en: "Cabin finishes, lighting and controls tailored to your building's aesthetic.",
      hi: "आपकी इमारत की सुंदरता के अनुरूप केबिन फिनिश, लाइटिंग और कंट्रोल।",
    },
  },
]

export default function ProductsPage() {
  const { lang } = useLang()

  const specLabel = (key: string) => {
    const labels: Record<string, { en: string; hi: string }> = {
      capacity: translations.products.capacity,
      passengers: translations.products.passengers,
      speed: translations.products.speed,
      stops: translations.products.stops,
      drive: translations.products.drive,
      door: translations.products.door,
      application: translations.products.application,
      doorWidth: { en: "Door Width", hi: "दरवाज़े की चौड़ाई" },
      power: { en: "Power Supply", hi: "बिजली आपूर्ति" },
      control: { en: "Control System", hi: "कंट्रोल सिस्टम" },
      cabin: { en: "Cabin", hi: "केबिन" },
    }
    return labels[key]?.[lang] ?? key
  }

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
              {translations.products.title[lang]}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/70">
              {translations.products.subtitle[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product, i) => (
              <motion.div
                key={product.name.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name[lang]}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <Badge>{product.type[lang]}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {product.name[lang]}
                    </CardTitle>
                    <CardDescription>
                      {translations.products.specs[lang]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[40%]">
                            {{ en: "Specification", hi: "विशिष्टता" }[lang]}
                          </TableHead>
                          <TableHead>
                            {{ en: "Detail", hi: "विवरण" }[lang]}
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {Object.entries(product.specs).map(([key, value]) => (
                          <TableRow key={key}>
                            <TableCell className="font-medium text-muted-foreground">
                              {specLabel(key)}
                            </TableCell>
                            <TableCell>
                              {typeof value === "object" ? value[lang] : value}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <Separator />
                    <Button asChild className="w-full gap-2">
                      <a
                        href={COMPANY.whatsappLink(
                          `${WHATSAPP_MESSAGES[lang].quote} Product: ${product.name.en}`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4" />
                        {translations.products.enquireNow[lang]}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Products */}
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
              {{ en: "Why Our Products", hi: "हमारे उत्पाद क्यों" }[lang]}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {
                {
                  en: "Every elevator we supply is built for safety, efficiency and long service life.",
                  hi: "हम जो भी लिफ्ट प्रदान करते हैं वह सुरक्षा, दक्षता और लंबी सेवा जीवन के लिए बनी है।",
                }[lang]
              }
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyFeatures.map((feature, i) => (
              <motion.div
                key={feature.title.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold">{feature.title[lang]}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.desc[lang]}
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
