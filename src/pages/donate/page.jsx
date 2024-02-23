
import NavBar from "../../components/common/Navbar";
import Footer from "../../components/common/footer";
import DonateLine from "./donate-line";
import Othercomponent from "./other-component";

const DicoverPage = () =>{
    return(
        <div>
          <NavBar />
           <DonateLine />
           <Othercomponent />
           <Footer />
        </div>
    )
}

export default DicoverPage