export const COMPANY = {
  name: "Veyra Lift Systems",
  legalName: "Veyra Lift Systems Private Limited",
  phone: "+91 124 482 7619",
  phoneFormatted: "+91 124 482 7619",
  emergencyPhone: "+91 880 214 6397",
  emergencyPhoneFormatted: "+91 880 214 6397",
  email: "hello@veyralifts.in",
  serviceEmail: "care@veyralifts.in",
  address: "Unit 14, Orchid Business Park, Sector 48, Gurugram, Haryana 122018",
  gstin: "06AAFCV7421K1ZP",
  cin: "U29100HR2016PTC067421",
  hours: "Mon–Sat: 8:00 AM – 7:00 PM",
  whatsappNumber: "911244827619",
  whatsappLink: (message: string) =>
    `https://wa.me/911244827619?text=${encodeURIComponent(message)}`,
}

export const WHATSAPP_MESSAGES = {
  en: {
    general: `Hi Veyra Lift Systems, I'm interested in your elevator services. Please share more details.`,
    quote: `Hi Veyra Lift Systems, I'd like to get a quote for elevator services. Please contact me.`,
    service: `Hi Veyra Lift Systems, I need to book an elevator service. Please assist.`,
    emergency: `URGENT: Hi Veyra Lift Systems, I have an elevator emergency and need immediate assistance.`,
  },
  hi: {
    general: `नमस्ते वेरा लिफ्ट सिस्टम्स, मुझे आपकी लिफ्ट सेवाओं में रुचि है। कृपया अधिक जानकारी साझा करें।`,
    quote: `नमस्ते वेरा लिफ्ट सिस्टम्स, मुझे लिफ्ट सेवाओं के लिए कोटेशन चाहिए। कृपया संपर्क करें।`,
    service: `नमस्ते वेरा लिफ्ट सिस्टम्स, मुझे लिफ्ट सर्विस बुक करनी है। कृपया सहायता करें।`,
    emergency: `अत्यावश्यक: नमस्ते वेरा लिफ्ट सिस्टम्स, मेरी लिफ्ट में इमरजेंसी है, तुरंत सहायता चाहिए।`,
  },
}
