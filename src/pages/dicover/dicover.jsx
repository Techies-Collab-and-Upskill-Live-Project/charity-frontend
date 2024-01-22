import { Link } from "react-router-dom";
import NavBar from "../Navbar";
import CategoryList from "./categorycauses";
import StartaCampaign from "../../components/startacampaign";
import Footer from "../footer";

const DicoverPage = () =>{
    return(
        <div>
          <NavBar />
          <CategoryList />
          <StartaCampaign />
          <Footer />
        </div>
    )
}

export default DicoverPage