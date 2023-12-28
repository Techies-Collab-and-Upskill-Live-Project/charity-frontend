import { Link } from "react-router-dom";
import NavBar from "../Navbar";


const Forgotpassword = () =>{
    return(

        <div>
       <NavBar />
            <div className="flex flex-col pl-96 mb-28 max-sm:pl-0">
                <h3 className="mt-28 ml-32 mb-5 font-medium text-3xl max-sm:text-teal-500 max-sm:ml-16 "  >Forgot Password?</h3>
                <p className="text-sm font-medium text-gray-500 ml-1 max-sm:text-center">Enter the email address associated with your account to get a code?</p>

               <form action="" className="pr-80 mt-5 mr-7 max-sm:pr-0 max-sm:mr-6 max-sm:ml-6">

                    <div >
                      <div>
                        <label htmlFor="email" className="mb-10">Email</label>
                        <input type="email" name="email" id="" placeholder="olivia@untitledui.com" className="block  rounded-md border-2 py-1.5 pl-3 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-5 " style={{width: "100%", height: "50px"}} />
                      </div>

                      <button type="submit" className="bg-teal-500 rounded-md px-3 text-sm text-white mt-5 w-96 h-10" style={{width: "100%"}}> Send Code</button>

                    </div>
               </form>
            </div>


        </div>
    )
}

export default Forgotpassword