import Plusicon from "../assets/icons/add.png"

function FrequentlyAsked() {

  return (
    
     <div>
         <div className=" text-center">
             <h3>Frequently Asked Questions</h3>
             <p className="ga font-thin mt-3 mb-3">Have a question that is not answered? You can contact us at</p>
             <a href="/" className="text-[#04A38A] font-semibold">support@donationtrace.com</a>
         </div>

         <div className="mx-12 mt-10 md:mx-3">
             <div className="flex justify-between mb-5">
               <p className=" font-medium">Is my donation tax-deductible?</p>
               <img src={Plusicon} alt="Icon" className="w-5 h-5"/>
             </div>

            <hr />
             <div className="flex justify-between mb-5">
               <p className="font-medium">What percentage of my donation goes directly to the cause?</p>
               <img src={Plusicon} alt="Icon" className="w-5 h-5"/>
             </div>

             <hr />
             <div className="flex justify-between mb-5">
               <p className="font-medium">Can I start a fundraising campaign for your organization?</p>
               <img src={Plusicon} alt="Icon" className="w-5 h-5"/>
             </div>

             <hr />
             <div className="flex justify-between mb-5">
               <p className="font-medium">Do you accept in-kind donations or only monetary contributions?</p>
               <img src={Plusicon} alt="Icon" className="w-5 h-5"/>
             </div>

             <hr />
             <div className="flex justify-between mb-5">
               <p className="font-medium">Can I specify where my donation goes?</p>
               <img src={Plusicon} alt="Icon" className="w-5 h-5"/>
             </div>

             <hr />
             <div className="flex justify-between mb-5">
               <p className="font-medium">How can I stay updated on your organization's activities and impact?</p>
               <img src={Plusicon} alt="Icon" className="w-5 h-5"/>
             </div>
         </div>
     </div>

  );
}

export default FrequentlyAsked;
