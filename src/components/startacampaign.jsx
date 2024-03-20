import { Link } from "react-router-dom";
import donantiontrace from "../assets/Screenshot (31)_prev_ui.png";

const StartaCampaign = () => {
  return (
    <div className=" container w-full mx-auto">
      <div className="py-16 lg:py-20 mx-auto">
        <div className="bg-[#026354] rounded-md h-80">
          <div className=" flex flex-col md:flex-row items-center justify-center lg:justify-between px-2 lg:px-8 ">
            <div className="py-12">
              <h3 className="text-white max-w-lg mb-8">
                Ready to start a campaign? Join Donation Trace today
              </h3>
              <Link
                to="/home"
                className="bg-white text-teal-500 rounded-md  px-4 py-3 text-sm font-normal"
              >
                Start a Campaign
              </Link>
            </div>
            <div className=" mt-4 md:mt-[200px]">
              <img
                src={donantiontrace}
                alt=""
                className="lg:w-[200px] w-[150px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartaCampaign;
