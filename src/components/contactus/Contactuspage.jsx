import NavBar from "../Navbar"
import FrequentlyAsked from "../frequentlyask"
import Footer from "../footer"
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