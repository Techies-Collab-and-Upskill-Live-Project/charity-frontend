import facebookicon from "../../assets/icons/facebookicon.png"
import googleicon from "../../assets/icons/googleicon.png"
import Navber from "../Navbar"

import { Link } from "react-router-dom";


const Login = () =>{
    return(

        <div>
            <Navber />

            <div className="flex flex-col pl-96 mb-28 max-sm:pl-0">
                <h3 className="mt-28 ml-40 mb-10 font-medium text-3xl max-sm:text-teal-500 max-sm:ml-24 "  >Welcome Back</h3>

               <form action="" className="pr-80 mr-7 max-sm:pr-0 max-sm:mr-6 max-sm:ml-6">
                   <div className="flex flex-col">
                    <button className="bg-white rounded-md text-sm mb-5 border-2 text-center h-11 font-medium" style={{width: "100%"}}><img src={googleicon} alt="" style={{display: "inline"}} width={20} className="mr-1"/>  Sign in with Google</button>
                    <button className="bg-blue-500 border rounded-md text-sm h-11 font-medium text-white" style={{width: "100%"}}><img src={facebookicon} alt="" style={{display: "inline"}} width={20} className="mr-1"/>  Sign in with Facebook</button>
                   </div>

                   <div className="flex">
                      <hr class="h-1 w-56  bg-gray-100 border-0 rounded mt-10 mb-6 dark:bg-gray-700 ml-5"/>
                      <p className="ml-8 mt-7">OR</p>
                    <hr class="w-56 h-1 bg-gray-100 border-0 rounded mt-10 mb-6 dark:bg-gray-700 ml-8" />
                   </div>

                    <div >
                      <div>
                        <label htmlFor="email" className="mb-10">Email</label>
                        <input type="email" name="email" id="" placeholder="olivia@untitledui.com" className="block  rounded-md border-0 py-1.5 pl-3 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-5 " style={{width: "100%", height: "50px"}} />
                      </div>

                      <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="passsword" id="" placeholder="***********************" className="block  rounded-md border-0 py-1.5 pl-3 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-5 w-96" style={{width: "100%", height: "50px"}}/>
                      </div>

                      <div className="flex mt-0 justify-between">
                        <div className="inline-flex">

                        <input  id="disabled-checked-checkbox" type="checkbox" value="" className=""/>
                            <label htmlFor="checkbox" className="font-medium ml-1">Stay Logged in</label>
                        </div>

                        <div className="">
                            <a href="/" className="text-teal-500">Forgot password?</a>
                        </div>
                      </div>

                      <button type="submit" className="bg-teal-500 rounded-md px-3 text-sm text-white mt-5 w-96 h-10" style={{width: "100%"}}> Login</button>


                       <p className="text-center mt-12">Not A User Yet?
                          <Link to="/signup" className="text-teal-500">Signup</Link>
                       </p>
                    </div>
               </form>
            </div>


        </div>
    )
}

export default Login