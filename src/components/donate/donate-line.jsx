
import {explorecategorylist} from "../../Data";
import donationimg from "../../assets/icons/Donation.png"
import numdonatedimg from "../../assets/icons/numdonated.png"
import reportflag from "../../assets/icons/flag.png"
import locationimg from "../../assets/icons/location.png"
import calendarimg from "../../assets/icons/calendar.png"
import React, { useState } from 'react';
import clockimg from "../../assets/icons/clock.png"

const DonateLine = () =>{
    const selectedActivity = explorecategorylist[1];

    const [isParagraph1Visible, setParagraph1Visibility] = useState(true);
    const [isParagraph2Visible, setParagraph2Visibility] = useState(false);
    const [isParagraph3Visible, setParagraph3Visibility] = useState(false);

    // Function to toggle visibility of paragraph 1
    const toggleParagraph1Visibility = () => {
    setParagraph1Visibility(!isParagraph1Visible);
    // Hide paragraph 2 when showing paragraph 1
    setParagraph2Visibility(false);
  };

  // Function to toggle visibility of paragraph 2
     const toggleParagraph2Visibility = () => {
    setParagraph2Visibility(!isParagraph2Visible);
    // Hide paragraph 1 when showing paragraph 2
    setParagraph1Visibility(false);
  };

  const toggleParagraph3Visibility = () => {
    setParagraph3Visibility(!isParagraph3Visible);
    // Hide paragraph 1 when showing paragraph 2
    setParagraph2Visibility(false);
    setParagraph1Visibility(false);
  };

    return(
        <div className="container w-full pt-28 flex justify-between max-sm:flex-col">
          <div>
            <img src={selectedActivity.CoverImg} alt="" width={"600px"} height={"10px"} className="round rounded-xl"/>
            <div className="flex mt-5"><img src={donationimg} alt=""/> <h6 className="mt-2 ml-2">Ahmed Tinubu </h6> <p className="mt-2 ml-2 text-gray-500"> started this fundraiser</p> </div>

            <div className="border-2 px-5 py-3 rounded-lg shadow-md hidden max-sm:contents " style={{height: "100%"}}>
            <div className="flex mb-5 max-sm:mt-10">
                <p className="font-medium text-2xl mr-1">$50</p>
                <p className="g mt-2 font-medium text-gray-500">raised of $100 target</p>
            </div>
            <div className="w-[326px] lg:w-[368px] h-[72px] flex-col justify-start items-start gap-1 inline-flex ">
                                        <div className="self-stretch h-12 relative">
                                            <div className="w-[326px] lg:w-[368px] h-2 left-0 top-[40px] absolute">
                                                <div className="w-[326px] lg:w-[368px] h-2 left-0 top-0 absolute bg-neutral-200 rounded-lg" />
                                                <div className="  w-[170.30px] lg:w-[192.24px] h-2 left-0 top-0 absolute bg-teal-600 rounded-lg" />
                                            </div>
                                            <div className="w-[66px] h-9 left-[140.85px] lg:left-[160px] top-0 absolute">
                                                <div className="w-[66px] h-7 px-2 py-1 left-0 top-0 absolute bg-emerald-50 rounded-lg justify-center items-center inline-flex">
                                                    <div className="text-center text-emerald-700 text-sm font-bold font-['Nunito'] leading-tight">{selectedActivity.currentvalue }</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch justify-start items-start inline-flex">
                                            <div className="grow shrink basis-0 h-5 justify-end items-center gap-2.5 flex">
                                                <div className="grow shrink basis-0 text-right text-emerald-700 text-sm font-bold font-['Nunito'] leading-tight">{selectedActivity.targetvalue }</div>
                                            </div>
                                        </div>
            </div>


                <div className="flex mt-3">
                    <img src={numdonatedimg} alt="" />
                    <p className="mt-1 ml-3 font-bold text-orange-400">5k people just donated</p>
                </div>
                <div className="flex flex-col mt-2">
                    <button className="bg-teal-500 rounded-md px-3 text-white mt-5 w-96 h-14 font-bold text-base max-sm:w-80 max-sm:ml-3">Donate now</button>
                    <button className="bg-white rounded-md px-3 text-teal-500 border-2 border-teal-500  font-bold text-base mt-5 w-96 h-14 max-sm:ml-3 max-sm:w-80"> Share Campaign</button>
                </div>
                <hr className="mt-5 mb-5"/>
                <div className="flex">
                   <img src={reportflag} alt="" className="mt-2"/>
                   <p className="mt-2 ml-3">Report Fundraiser</p>

            </div>
         </div>

            <div className="container mt-5 max-sm:mt-10">
            <div>
                <h3 className="max-sm:text-center">Building a Brighter Tomorrow for Orphans in Africa</h3>
                <div className="flex mt-3">
                    <div className="flex">
                        <img src={locationimg} className="" alt="" />
                        <p className="ml-3 text-gray-600 font-medium max-sm:ml-0">Abuja, Nigeria </p>
                    </div>

                    <div className="flex ml-8 max-sm:ml-5">
                        <img src={calendarimg} alt="" />
                        <p className="ml-3 max-sm:ml-0 text-gray-600 font-medium">23 December, 2023</p>
                    </div>

                </div>
                <hr className="mt-10 w"/>

                <div>
                    <div className="flex mt-10 justify-between">
                        <h5 onClick={toggleParagraph1Visibility} className="border-b-4 w-60 text-center pb-5">About this campaign</h5>
                        <div onClick={toggleParagraph2Visibility} className="flex border-b-4 w-60 ml-1 justify-center"><h5>Updates </h5> <p>3</p></div>
                        <div onClick={toggleParagraph3Visibility} className="flex border-b-4 w-60 ml-1 text-center justify-center"><h5>Donations</h5> <p>100</p></div>
                    </div>

                    {isParagraph1Visible && (<div className="mt-7">
                                            <p >Step into a journey of compassion and change with our monumental campaign, "Hearts United for Hope." In the vast landscapes of Africa, where young hearts beat with dreams yet to unfold, we invite you to become a beacon of light and love. This initiative is more than a mere fundraiser; it's a movement to uplift, empower, and secure a brighter tomorrow for orphaned children.</p>
                                            <p className="mt-7">Picture a world where every child has the chance to thrive, regardless of their circumstances. That's the vision we're weaving into reality, and we invite you to be a vital thread in this tapestry of transformation. Your support goes beyond monetary contributions; it's a promise to these children that they are seen, heard, and valued.
                    From providing quality education and nurturing environments to fostering talents and dreams, your generosity becomes the catalyst for a positive ripple effect. Each donation, every share, and the collective energy of our community resonate far beyond the immediate impact, creating a legacy of love that transcends borders and generations.</p>
                                            <p className="mt-7">Join us on this extraordinary journey. Let's stand united, hearts entwined, as we make a profound and lasting difference in the lives of these resilient souls. Together, we can rewrite the narrative for orphaned children in Africa, turning every challenge into an opportunity and every dream into a reality. Hearts United for Hope—because transformation begins with compassion, and change starts with us.</p>
                                        </div>
                                        )}

                    {isParagraph2Visible && (
                    <div>
                        <div className="bg bg-orange-50 py-3 px-9 container mt-10 max-sm:px-3">
                                                <div className="flex">
                                                <img src={donationimg} alt=""/> <h6 className="mt-2 ml-2">Ahmed Tinubu </h6> <p className="mt-2 ml-2 text-gray-500">-fundraiser</p>
                                                </div>

                                                <div className="flex mt-5">
                                                    <div className="flex">
                                                        <img src={calendarimg} alt="" />
                                                        <p className="ml-3 max-sm:ml-0 text-gray-600 font-medium">23 December, 2023</p>
                                                    </div>
                                                    <div className="flex ml-10 max-sm:ml-7">
                                                       <img src={clockimg} alt="" />
                                                       <p>22:11</p>
                                                    </div>
                                                </div>
                                                <p className="mt-5">Step into a journey of compassion and change with our monumental campaign, "Hearts United for Hope." In the vast landscapes of Africa, where young hearts beat with dreams yet to unfold, we invite you to become a beacon of light and love. This initiative is more than a mere fundraiser; it's a movement to uplift, empower, and secure a brighter tomorrow for orphaned children.</p>
                                                <p className="mt-5"> Picture a world where every child has the chance to thrive, regardless of their circumstances. That's the vision we're weaving into reality, and we invite you to be a vital thread in this tapestry of transformation. Your support goes beyond monetary contributions; it's a promise to these children that they are seen, heard, and valued.From providing quality education and nurturing environments to fostering talents and dreams, your generosity becomes the catalyst for a positive ripple effect. Each donation, every share, and the collective energy of our community resonate far beyond the immediate impact, creating a legacy of love that transcends borders and generations.</p>
                                                <p className="mt-5">Join us on this extraordinary journey. Let's stand united, hearts entwined, as we make a profound and lasting difference in the lives of these resilient souls. Together, we can rewrite the narrative for orphaned children in Africa, turning every challenge into an opportunity and every dream into a reality. Hearts United for Hope—because transformation begins with compassion, and change starts with us.</p>

                                                <img src={selectedActivity.CoverImg} alt="" className="mt-5 rounded-xl"/>

                        </div>

                        <div className="bg bg-orange-50 py-3 px-9 container mt-10 max-sm:px-3">
                                                <div className="flex">
                                                <img src={donationimg} alt=""/> <h6 className="mt-2 ml-2">Ahmed Tinubu </h6> <p className="mt-2 ml-2 text-gray-500">-fundraiser</p>
                                                </div>

                                                <div className="flex mt-5">
                                                    <div className="flex">
                                                        <img src={calendarimg} alt="" />
                                                        <p className="ml-3 max-sm:ml-0 text-gray-600 font-medium">23 December, 2023</p>
                                                    </div>
                                                    <div className="flex ml-10 max-sm:ml-7">
                                                       <img src={clockimg} alt="" />
                                                       <p>22:11</p>
                                                    </div>
                                                </div>
                                                <p className="mt-5">Step into a journey of compassion and change with our monumental campaign, "Hearts United for Hope." In the vast landscapes of Africa, where young hearts beat with dreams yet to unfold, we invite you to become a beacon of light and love. This initiative is more than a mere fundraiser; it's a movement to uplift, empower, and secure a brighter tomorrow for orphaned children.</p>
                                                <p className="mt-5"> Picture a world where every child has the chance to thrive, regardless of their circumstances. That's the vision we're weaving into reality, and we invite you to be a vital thread in this tapestry of transformation. Your support goes beyond monetary contributions; it's a promise to these children that they are seen, heard, and valued.From providing quality education and nurturing environments to fostering talents and dreams, your generosity becomes the catalyst for a positive ripple effect. Each donation, every share, and the collective energy of our community resonate far beyond the immediate impact, creating a legacy of love that transcends borders and generations.</p>
                                                <p className="mt-5">Join us on this extraordinary journey. Let's stand united, hearts entwined, as we make a profound and lasting difference in the lives of these resilient souls. Together, we can rewrite the narrative for orphaned children in Africa, turning every challenge into an opportunity and every dream into a reality. Hearts United for Hope—because transformation begins with compassion, and change starts with us.</p>

                                                <img src={selectedActivity.CoverImg} alt="" className="mt-5 rounded-xl"/>

                        </div>
                    </div>






                                )}

                    {isParagraph3Visible && ( <div className="mt-10">
                        <div className="flex">
                            <img src={donationimg} alt="" className="w-12 h-12"/>
                            <div className="flex ">
                                <div className="ml-5 mr-96 max-sm:mr-20">
                                    <h5 className="text text-lg">Tafawa Balewa</h5>
                                    <p className="text text-gray-500">2 days ago</p>
                                </div>

                                <p className="ml-32 max-sm:ml-0">
                                $ 5
                                </p>
                            </div>
                        </div>
                         <hr className="mt-7 mb-7 " />
                        <div className="flex">
                            <img src={donationimg} alt="" className="w-12 h-12" />
                            <div className="flex">
                                <div className="ml-5 mr-96 max-sm:mr-20">
                                    <h5 className="text text-lg">Tafawa Balewa</h5>
                                    <p className="text text-gray-500">1 month ago</p>
                                </div>

                                <p className="ml-32 max-sm:ml-0">
                                $ 5
                                </p>
                            </div>
                        </div>
                          <hr className="mt-7 mb-7"/>
                        <div className="flex">
                            <img src={donationimg} alt="" className="w-12 h-12"/>
                            <div className="flex justify-between">
                                <div className="ml-5 mr-96 max-sm:mr-20">
                                    <h5 className="text text-lg">Tafawa Balewa</h5>
                                    <p className="text text-gray-500">2 month ago</p>
                                </div>

                                <p className="ml-32 max-sm:ml-0">
                                $ 5
                                </p>
                            </div>
                        </div>

                    </div>
                    )}






                </div>
            </div>
        </div>
          </div>

         <div className="border-2 px-5 py-3 rounded-lg shadow-md max-sm:hidden" style={{height: "100%"}}>
            <div className="flex mb-5">
                <p className="font-medium text-2xl mr-1">$50</p>
                <p className="g mt-2 font-medium text-gray-500">raised of $100 target</p>
            </div>
            <div className="w-[326px] lg:w-[368px] h-[72px] flex-col justify-start items-start gap-1 inline-flex">
                                        <div className="self-stretch h-12 relative">
                                            <div className="w-[326px] lg:w-[368px] h-2 left-0 top-[40px] absolute">
                                                <div className="w-[326px] lg:w-[368px] h-2 left-0 top-0 absolute bg-neutral-200 rounded-lg" />
                                                <div className="  w-[170.30px] lg:w-[192.24px] h-2 left-0 top-0 absolute bg-teal-600 rounded-lg" />
                                            </div>
                                            <div className="w-[66px] h-9 left-[140.85px] lg:left-[160px] top-0 absolute">
                                                <div className="w-[66px] h-7 px-2 py-1 left-0 top-0 absolute bg-emerald-50 rounded-lg justify-center items-center inline-flex">
                                                    <div className="text-center text-emerald-700 text-sm font-bold font-['Nunito'] leading-tight">{selectedActivity.currentvalue }</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch justify-start items-start inline-flex">
                                            <div className="grow shrink basis-0 h-5 justify-end items-center gap-2.5 flex">
                                                <div className="grow shrink basis-0 text-right text-emerald-700 text-sm font-bold font-['Nunito'] leading-tight">{selectedActivity.targetvalue }</div>
                                            </div>
                                        </div>
            </div>


                <div className="flex mt-3">
                    <img src={numdonatedimg} alt="" />
                    <p className="mt-1 ml-3 font-bold text-orange-400">5k people just donated</p>
                </div>
                <div className="flex flex-col mt-2">
                    <button className="bg-teal-500 rounded-md px-3 text-white mt-5 w-96 h-14 font-bold text-base">Donate now</button>
                    <button className="bg-white rounded-md px-3 text-teal-500 border-2 border-teal-500  font-bold text-base mt-5 w-96 h-14"> Share Campaign</button>
                </div>
                <hr className="mt-5 mb-5"/>
                <div className="flex">
                   <img src={reportflag} alt="" className="mt-2"/>
                   <p className="mt-2 ml-3">Report Fundraiser</p>

            </div>
         </div>
        </div>
    )
}

export default DonateLine