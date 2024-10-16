import WhyUs from "../components/Landing/WhyUs"
import Hero from "../components/Landing/Hero"
import SUSNET from "../components/Landing/SUSNET"
import SusnetKits from "../components/Landing/SusnetKits"
import SusnetComponent from "../components/Landing/SusnetComponent"
import Plans from "../components/Landing/Plans"
import QuizSection from "../components/Landing/QuizSection"
import ContactSection from "../components/Landing/ContactSection"
import ContactCTASection from "../components/Landing/ContactCTASection"

const Landing = () =>
{
  return (
    <>
      <Hero />
      <WhyUs />
      <SUSNET />
      <SusnetComponent />
      {/* <SusnetKits /> */}
      <Plans />
      <QuizSection />
      <ContactCTASection />
      {/* <ContactSection /> */}
    </>
  )
}

export default Landing