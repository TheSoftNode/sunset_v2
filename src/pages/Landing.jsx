import WhyUs from "../components/Landing/WhyUs"
import Hero from "../components/Landing/Hero"
import SUSNET from "../components/Landing/SUSNET"
import SusnetKits from "../components/Landing/SusnetKits"
import SusnetComponent from "../components/Landing/SusnetComponent"
import Plans from "../components/Landing/Plans"
import QuizSection from "../components/Landing/QuizSection"

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
    </>
  )
}

export default Landing