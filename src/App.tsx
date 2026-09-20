import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LanguageProvider } from "@/i18n/LanguageContext"
import Layout from "@/components/layout/Layout"
import HomePage from "@/pages/HomePage"
import AboutPage from "@/pages/AboutPage"
import ServicesPage from "@/pages/ServicesPage"
import ProductsPage from "@/pages/ProductsPage"
import AMCPage from "@/pages/AMCPage"
import ProjectsPage from "@/pages/ProjectsPage"
import ContactPage from "@/pages/ContactPage"
import FAQPage from "@/pages/FAQPage"
import AreasPage from "@/pages/AreasPage"

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="amc" element={<AMCPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="areas" element={<AreasPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
