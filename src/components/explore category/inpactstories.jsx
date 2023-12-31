import girlimge from "../../assets/Ellipse 171.png"
import lefticon from "../../assets/icons/arrow-left.png"
import righticon from "../../assets/icons/arrow-right.png"
import collumimg from "../../assets/fluent_text-quote-24-filled.png"

const ImpactStories = () =>{
    return(
        <div className="container w-full mt-20">
            <h3 className="text-center">Our Impact Stories</h3>
            <div className="flex mt-10 max-sm:flex-col" >
                <div className="cx rounded-md bg-orange-50 mr-16 px-10 py-7  max-sm:mr-0 max-sm:mb-5">
                    <img src={collumimg} alt="" />
                    <p className="text-black font-medium max-sm:text-center">Grateful for the website's support that funded my medical treatment, restoring both my health and faith in humanity.</p>
                    <div className="flex mt-5">
                        <img src={girlimge} alt="" className="max-sm:w-20 max-sm:h-20"/>
                        <div className="mt-7 ml-5 max-sm:mt-2 max-sm:ml-2">
                            <p className="font-medium">Jennifer Nwachukwu</p>
                            <p className="font-medium text-gray-500 max-sm:text-xs">Community Health Advocate</p>
                        </div>
                    </div>
                </div>

                <div className="cx rounded-md bg-orange-50 px-10 py-7  max-sm:mr-0 max-sm:mb-5">
                    <img src={collumimg} alt="" />
                    <p className="fg font-medium max-sm:text-center">Thanks to the website, my dream of education is now a reality. Generous  donors have anchored my aspirations.</p>
                    <div className="flex mt-5">
                        <img src={girlimge} alt="" className="max-sm:w-20 max-sm:h-20"/>
                        <div className="mt-7 ml-5 max-sm:mt-2 max-sm:ml-2">
                            <p className="font-medium">Bayo Mohammed</p>
                            <p className="font-medium text-gray-500  max-sm:text-xs">Student Scholar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImpactStories;