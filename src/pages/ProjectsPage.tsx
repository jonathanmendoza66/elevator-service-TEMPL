import { motion } from "framer-motion"
import {
  MapPin,
  Calendar,
  Building2,
  Home,
  Stethoscope,
  Factory,
  Hotel,
  GraduationCap,
  ShoppingBag,
  Warehouse,
  Users,
  Phone,
  MessageCircle,
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
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { useLang } from "@/i18n/LanguageContext"
import { translations } from "@/i18n/translations"
import { COMPANY, WHATSAPP_MESSAGES } from "@/lib/constants"
import { cn } from "@/lib/utils"

const projects = [
  {
    name: { en: "Asterra Heights", hi: "एस्टेरा हाइट्स" },
    location: { en: "Sector 52, Gurugram", hi: "सेक्टर 52, गुरुग्राम" },
    image: "/commercial-elevator.webp",
    type: { en: "Residential", hi: "आवासीय" },
    typeVariant: "default" as const,
    details: {
      scope: {
        en: "6 Passenger Elevators — New Installation + 5-Year AMC",
        hi: "6 पैसेंजर एलिवेटर — नई इंस्टॉलेशन + 5 साल AMC",
      },
      capacity: { en: "680 kg, 18 Floors", hi: "680 kg, 18 मंज़िलें" },
      services: {
        en: "Installation + AMC",
        hi: "इंस्टॉलेशन + AMC",
      },
      year: "2024",
    },
  },
  {
    name: { en: "Merrow Business Centre", hi: "मेरो बिज़नेस सेंटर" },
    location: {
      en: "Golf Course Extension Road, Gurugram",
      hi: "गोल्फ कोर्स एक्सटेंशन रोड, गुरुग्राम",
    },
    image: "/home-elevator.webp",
    type: { en: "Commercial", hi: "वाणिज्यिक" },
    typeVariant: "secondary" as const,
    details: {
      scope: {
        en: "4 Elevators, 1000 kg, 1.75 m/s",
        hi: "4 एलिवेटर, 1000 kg, 1.75 m/s",
      },
      capacity: { en: "1000 kg", hi: "1000 kg" },
      services: {
        en: "Installation + Commissioning",
        hi: "इंस्टॉलेशन + कमीशनिंग",
      },
      year: "2023",
    },
  },
  {
    name: {
      en: "Velora Specialty Hospital",
      hi: "वेलोरा स्पेशलिटी हॉस्पिटल",
    },
    location: { en: "Sector 47, Gurugram", hi: "सेक्टर 47, गुरुग्राम" },
    image: "/hospital-elevator.webp",
    type: { en: "Healthcare", hi: "स्वास्थ्य" },
    typeVariant: "outline" as const,
    details: {
      scope: {
        en: "2 Hospital Lifts + 1 Service Lift",
        hi: "2 अस्पताल लिफ्ट + 1 सर्विस लिफ्ट",
      },
      capacity: { en: "1600 kg / 1000 kg", hi: "1600 kg / 1000 kg" },
      services: {
        en: "Installation + AMC",
        hi: "इंस्टॉलेशन + AMC",
      },
      year: "2025",
    },
  },
  {
    name: { en: "Nivelle Residences", hi: "निवेल रेजिडेंसेस" },
    location: { en: "DLF Phase V, Gurugram", hi: "DLF फेज V, गुरुग्राम" },
    image: "/goods-lift.webp",
    type: { en: "Luxury Residential", hi: "लक्ज़री आवासीय" },
    typeVariant: "default" as const,
    details: {
      scope: {
        en: "8 Elevators — Modernisation + Cabin Refurbishment",
        hi: "8 एलिवेटर — आधुनिकीकरण + केबिन रीफर्बिशमेंट",
      },
      capacity: { en: "8 Units", hi: "8 यूनिट" },
      services: {
        en: "Modernisation + Refurbishment",
        hi: "आधुनिकीकरण + रीफर्बिशमेंट",
      },
      year: "2022",
    },
  },
  {
    name: { en: "Corven Logistics Park", hi: "कोर्वन लॉजिस्टिक्स पार्क" },
    location: { en: "Manesar, Gurugram", hi: "मानेसर, गुरुग्राम" },
    image: "/commercial-elevator.webp",
    type: { en: "Industrial", hi: "औद्योगिक" },
    typeVariant: "secondary" as const,
    details: {
      scope: {
        en: "3 Goods Elevators, 2000 kg",
        hi: "3 गुड्स एलिवेटर, 2000 kg",
      },
      capacity: { en: "2000 kg", hi: "2000 kg" },
      services: {
        en: "Installation + Annual Maintenance",
        hi: "इंस्टॉलेशन + वार्षिक रखरखाव",
      },
      year: "2025",
    },
  },
]

const customerSegments = [
  {
    icon: Building2,
    label: { en: "Residential Societies", hi: "आवासीय सोसाइटी" },
  },
  {
    icon: Building2,
    label: { en: "Builders & Developers", hi: "बिल्डर और डेवलपर" },
  },
  {
    icon: Users,
    label: { en: "Facility Managers", hi: "फैसिलिटी मैनेजर" },
  },
  {
    icon: Home,
    label: { en: "Homeowners", hi: "गृहस्वामी" },
  },
  {
    icon: Stethoscope,
    label: { en: "Hospitals", hi: "अस्पताल" },
  },
  {
    icon: Warehouse,
    label: { en: "Warehouses", hi: "गोदाम" },
  },
  {
    icon: Hotel,
    label: { en: "Hotels", hi: "होटल" },
  },
  {
    icon: GraduationCap,
    label: { en: "Schools & Colleges", hi: "स्कूल और कॉलेज" },
  },
  {
    icon: ShoppingBag,
    label: { en: "Retail", hi: "रिटेल" },
  },
  {
    icon: Factory,
    label: { en: "Industrial", hi: "औद्योगिक" },
  },
]

export default function ProjectsPage() {
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
              {translations.projects.title[lang]}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/70">
              {translations.projects.subtitle[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Cards */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={project.name.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  i >= 3 && "lg:col-span-1",
                  projects.length === 5 && i === 3 && "lg:col-start-1",
                  projects.length === 5 && i === 4 && "lg:col-start-2"
                )}
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name[lang]}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <Badge variant={project.typeVariant}>
                        {project.type[lang]}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge
                        variant="secondary"
                        className="gap-1.5 bg-background/90 text-foreground backdrop-blur-sm"
                      >
                        <Calendar className="h-3 w-3" />
                        {project.details.year}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {project.name[lang]}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {project.location[lang]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium text-muted-foreground">
                            {{ en: "Scope", hi: "कार्यक्षेत्र" }[lang]}
                          </TableCell>
                          <TableCell>
                            {project.details.scope[lang]}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-muted-foreground">
                            {translations.products.capacity[lang]}
                          </TableCell>
                          <TableCell>
                            {project.details.capacity[lang]}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-muted-foreground">
                            {{ en: "Services", hi: "सेवाएं" }[lang]}
                          </TableCell>
                          <TableCell>
                            {project.details.services[lang]}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-muted-foreground">
                            {{ en: "Year", hi: "वर्ष" }[lang]}
                          </TableCell>
                          <TableCell>{project.details.year}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Segments */}
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
              {translations.customerSegments.title[lang]}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {translations.customerSegments.subtitle[lang]}
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {customerSegments.map((segment, i) => (
              <motion.div
                key={segment.label.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Card className="h-full text-center transition-shadow hover:shadow-md">
                  <CardContent className="flex flex-col items-center gap-3 pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <segment.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium">
                      {segment.label[lang]}
                    </span>
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
