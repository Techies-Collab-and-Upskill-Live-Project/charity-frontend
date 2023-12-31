import { explorecategorylist } from "../../Data";

const CategoryList = () => {
    return(
        <div className="container w-full mt-10">
            <div>
                  <label htmlFor="selctcategory" className="mr-5 font-medium">Enquiry type:</label>
                  <select name="selctcategory" id="" className=" rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-5 w-96 max-sm:w-80" >
                    <option value="Technical Support">Technical Support</option>
                  </select>
            </div>

            <div>
                <button  className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2">Trending</button>
                <button  className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2">Ending soon</button>
                <button  className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2">Newest</button>
                <button  className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2">Most Funded</button>
                <button  className="bg-white rounded-md px-3 text-sm text-black mt-5 h-10 border-2 mr-2">Least Funded</button>
            </div>

            <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:max-w-full sm:mx-auto xl:max-w-full mt-10 lg:mt-16'>
                        {explorecategorylist.map((explorelist) => (
                            <div key={explorelist.id} className='overflow-hidden transition-shadow duration-300 bg-white rounded-md'>
                                <img src={explorelist.CoverImg} className='0bject-cover w-full h-64 rounded-md' alt='trending_inage' />
                                <div className='p-2'>
                                    <h5 className=' text-[#161616] '>{explorelist.title}</h5>
                                    <p className='text-[12px] text-[#515151]'> {explorelist.content }</p>
                                </div>
                                {/*--- prohress bar----*/}
                                <div className="w-[326px] lg:w-[368px] h-[72px] flex-col justify-start items-start gap-1 inline-flex">
                                    <div className="self-stretch h-12 relative">
                                        <div className="w-[326px] lg:w-[368px] h-2 left-0 top-[40px] absolute">
                                            <div className="w-[326px] lg:w-[368px] h-2 left-0 top-0 absolute bg-neutral-200 rounded-lg" />
                                            <div className="  w-[170.30px] lg:w-[192.24px] h-2 left-0 top-0 absolute bg-teal-600 rounded-lg" />
                                        </div>
                                        <div className="w-[66px] h-9 left-[140.85px] lg:left-[160px] top-0 absolute">
                                            <div className="w-[66px] h-7 px-2 py-1 left-0 top-0 absolute bg-emerald-50 rounded-lg justify-center items-center inline-flex">
                                                <div className="text-center text-emerald-700 text-sm font-bold font-['Nunito'] leading-tight">{explorelist.currentvalue }</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 h-5 justify-end items-center gap-2.5 flex">
                                            <div className="grow shrink basis-0 text-right text-emerald-700 text-sm font-bold font-['Nunito'] leading-tight">{explorelist.targetvalue }</div>
                                        </div>
                                    </div>
                                </div>
                                {/*==============people donation======*/}
                                <div className="flex-col justify-start items-start gap-3 flex">
                                    <div className="justify-start items-start inline-flex">
                                        <div className="justify-start items-start flex">
                                            <img className="w-8 h-8 rounded-full border border-white" alt='trending1' src={explorelist.donatingImg} />
                                            <img className="w-8 h-8 -ml-2 rounded-full border border-white" alt='trending3' src={explorelist.donatingImg2} />
                                            <img className="w-8 h-8 -ml-2 rounded-full border border-white" alt='trending2' src={explorelist.donatingImg3} />
                                        </div>
                                        <div className="w-[190px] px-4 py-2 bg-orange-50 rounded-[20px] justify-center items-center flex">
                                            <div className="text-yellow-800 text-sm font-semibold  leading-tight">{explorelist.totalDonation }</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-10 flex items-center justify-center'>
                         <button className="border border-[#04A38A] text-[#04A38A] rounded-md py-3 px-5 font-medium">Load More</button>
                    </div>
        </div>
    )
}

export default CategoryList;