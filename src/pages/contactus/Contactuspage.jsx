import NavBar from "../../components/common/Navbar"
import FrequentlyAsked from "../../components/frequentlyask"
import Footer from "../../components/common/footer"
import ContactUsForm from "./contactform"



const ContactUs = () => {
  return (
    <div>
        <NavBar />
        <ContactUsForm />
        <FrequentlyAsked />

        <Footer />
    </div>

  )
}

export default ContactUs