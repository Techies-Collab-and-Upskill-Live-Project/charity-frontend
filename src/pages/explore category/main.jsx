
import NavBar from "../../components/common/Navbar";
import FirstSection from "./first-section";
import CategoryList from "./categorylited";
import StartaCampaign from "../../components/startacampaign";
//import ImpactStories from "./inpactstories";
import Footer from "../../components/common/footer";
import ImpactStorySection from "../../components/ImpactStorySection";

const DicoverPage = () =>{
    return(
        <div>
          <NavBar />
          <FirstSection />
           <CategoryList />
           <StartaCampaign />
           <ImpactStorySection/>
           <Footer />
        </div>
    )
}

export default DicoverPage