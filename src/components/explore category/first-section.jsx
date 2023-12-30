import { Link } from "react-router-dom";
import arrowicon from "../../assets/icons/arrow-left.png";
import donate from "../../assets/Video place holder.png"


const FirstSection = () =>{
    return(
        <div>
           <div className="w-full pt-28 bg-orange-50 flex px-20 pb-20">
             <div className="mt-20">
                <Link to="/discover" className="flex ml-5 mb-5 mr-96">
                  <img src={arrowicon} alt="" />
                  All categories
                </Link>

                <h3>Empowering futures: child Walfare Campaigns</h3>
                <p className="text-gray-500">Explore campaigns dedicated to ensuring the well-being and bright future of every child. Your support can make a lasting impact on young lives.</p>
             </div>

             <div>
                <img src={donate} alt="" className="mt-10"/>
             </div>
           </div>

        </div>
    )
}

export default FirstSection