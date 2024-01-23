
import NavBar from "../../components/common/Navbar";
import FirstSection from "./first-section";
import CategoryList from "./categorylited";
import StartaCampaign from "../../components/startacampaign";
import ImpactStories from "./inpactstories";
import Footer from "../../components/common/footer";

const DicoverPage = () =>{
    return(
        <div>
          <NavBar />
          <FirstSection />
           <CategoryList />
           <StartaCampaign />
           <ImpactStories />
           <Footer />
        </div>
    )
}

export default DicoverPage