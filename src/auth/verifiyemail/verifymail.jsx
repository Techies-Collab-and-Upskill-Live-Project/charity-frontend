import React from 'react'

const VerifyMail = () => {
    return (
        <div className=" container mx-auto w-full">
            <div className="py-6 md:py-12">
                <div className="max-w-lg w-full mx-auto mt-10">
                    <div className=' flex items-center justify-center'>
                        <img src='/assets/svg/Envelope.svg' alt='envelope' className='w-20 h-20 object-cover ' />
                    </div>
                    <h3 className="text-center ">
                        Email Verification
                    </h3>
                    <p className="text-sm font-medium text-gray-500  text-center">
                        Verify Your Email Address to Complete the Registration Process
                    </p>
                    <p className=' text-[0.85rem] text-center font-medium text-gray-500 py-6'>
                        A verification email has been sent to: <span className=' text-[#04A38A]'>DME101@gmail.com. </span> 
                         Click on the link in this verification email in order to verify your email address.
                    </p>
                    <p className=' text-[0.80rem] text-center font-medium text-[#975805]'>
                        If you haven't received your verification email, it may be in the Bulk/Spam
                        folder of your email account, so please check there before requesting a replacement.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VerifyMail