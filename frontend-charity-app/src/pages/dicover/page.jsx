
import NavBar from "../../components/common/Navbar";
import CategoryList from "./categorycauses";
import StartaCampaign from "../../components/startacampaign";
import Footer from "../../components/common/footer";

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