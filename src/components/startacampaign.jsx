import { Link } from "react-router-dom";
import donantiontrace from "../assets/Screenshot (31)_prev_ui.png"

const StartaCampaign = () =>{
    return (
        <div className=" container w-full mx-auto">
            <div className="py-16 lg:py-20 mx-auto">
                <div className="bg-teal-800 container mx-auto w-full mt-28 text-center flex rounded-md h-80 mb-20 max-sm:flex-col max-sm:mt-2">
            <div className="ml-12 mr-44 mt-10 max-sm:ml-0 max-sm:mr-0 max-sm:mt-2">

                  <h3 className="text-white">Ready to start a campaign? <br /> Join Donation Trace today</h3>


                    <Link to="/">
                    <button className="bg-white text-teal-500 rounded-md ml-4 px-3 py-3 text-sm font-medium mt-10 max-sm:mt-2 max-sm:ml-0">Start a Campaign</button>
                    </Link>

            </div>

            <div>
                <img src={donantiontrace} alt=""  className="w-96 mt-24 max-sm:mt-5 max-sm:w-72 max-sm:ml-5"/>
            </div>
        </div>
            </div>
        </div>
        
    )
}

export default StartaCampaign