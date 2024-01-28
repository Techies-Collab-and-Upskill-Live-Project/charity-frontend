
import NavBar from "../../components/common/Navbar";
import ExploreHeroSection from "./ExploreHeroSection";
import CategoryList from "./categorylist";
import StartaCampaign from "../../components/startacampaign";
//import ImpactStories from "./inpactstories";
import Footer from "../../components/common/footer";
import ImpactStorySection from "../../components/ImpactStorySection";

const DicoverPage = () =>{
    return(
        <div>
          <NavBar />
          <ExploreHeroSection />
           <CategoryList />
           <StartaCampaign />
           <ImpactStorySection/>
           <Footer />
        </div>
    )
}

export default DicoverPage