
const SuccessMessage = () => {
    
    return (
        <div className=" container mx-auto w-full">
            <div className="py-6 md:py-12">
                <div className="max-w-md w-full mx-auto mt-10">
                    <div className=' flex items-center justify-center'>
                        <img src='/assets/svg/objects.svg' alt='object_image' className='w-20 h-20 object-cover ' />
                    </div>
                    <h4 className="text-center text-[#04A38A] ">
                        Password has been changed successfully 
                    </h4>
                    <p className="text-sm font-medium text-gray-500  text-center">
                       You have just reset your password, click on the button below to log in.
                    </p>
                    <a
                  href="/login"
                  className="w-full bg-teal-500 rounded-md px-4 text-sm text-white mt-5  py-3 flex items-center justify-center"
                >
                 
                      Sign In
                    
                </a>
                </div>
            </div>
        </div>
    )
}

export default SuccessMessage