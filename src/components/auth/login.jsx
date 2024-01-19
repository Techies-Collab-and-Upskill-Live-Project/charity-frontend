import facebookicon from "../../assets/icons/facebookicon.png"
import googleicon from "../../assets/icons/googleicon.png"
import Navber from "../Navbar"
import Footer from "../footer"


const Login = () =>{
    return(

        <div>
            <Navber />

            <div className="flex flex-col">
                <h3 className="mt-28" >Welcome Back</h3>

               <form action="" className="">
                    <button><img src={googleicon} alt="" />  Sign in with Google</button>
                    <button><img src={facebookicon} alt="" />  Sign in with Facebook</button>

                    <div >
                      <div>
                        <label htmlFor="email" className="mb-10">Email</label>
                        <input type="email" name="email" id="" placeholder="olivia@untitledui.com" className="block  rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-5 w-96" />
                      </div>

                      <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="passsword" id="" placeholder="************" className="block  rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-5 w-96" />
                      </div>

                      <div>
                        <div>
                            <label htmlFor="checkbox">Stay Logged in</label>
                            <input type="checkbox" name="checkbox" id="" />
                        </div>

                        <div>
                            <a href="/">Forget password?</a>
                        </div>
                      </div>

                      <button type="submit" className="bg-teal-500 rounded-md px-3 text-sm text-white mt-5 w-96 h-10"> Submit</button>

                    </div>
               </form>
            </div>

            {/* <Footer /> */}
        </div>
    )
}

export default Login