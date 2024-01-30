//import { explorecategorylist } from "../../Data";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { categories } from "../../Data";

const CategoryList = () => {
    const [selectedCategory, setSelectedCategory] = useState(1);
    return(
        <div className="container w-full mx-auto">
            <div className="py-16 lg:py-20 mx-auto">
                <div className="">
                  <label htmlFor="selctcategory" className="mr-5 font-medium">Category:</label>
                    <select name="selctcategory" id="" className=" rounded-md ring-gray-600  ring-2 focus:ring-2 focus:outline-none focus:ring-teal-500 font-medium  text-sm px-4 py-2.5  " >
                        <option className="hover:bg-teal-500 hover:text-white" value="Old Welfare">Old Welfare</option>
                        <option className="hover:bg-teal-500 hover:text-white" value="Education">Education</option>
                        <option value="Animal">Animal</option>
                        <option value="Disaster Relief">Disaster Relief</option>
                        <option value="Health Aid">Health Aid</option>
                        <option value="Human Rights">Human Rights</option>
                        <option value="Poverty Relief">Poverty Relief</option>
                        <option value="Faith">Faith</option>
                        <option value="Sport">Sport</option>
                    </select>
                </div>
                <div className=" flex justify-center md:justify-start">
                    <ul className="flex flex-row flex-wrap mb-0 list-none space-x-4 md:space-x-6 space-y-3 md:space-y-0 pt-3 pb-4" role="tablist">
                        {categories.map((Category) => (
                            <li className="-mb-px list:mr-0" key={Category.id}>
                                <button
                                    className={`p-lg capitalize ${selectedCategory === Category.id ? 'rounded-md p-lg text-black bg-[#E6F6F3] px-2 md:px-4 py-2' : 'rounded-md p-lg bg-transparent border border-grey-50 px-2 md:px-4 py-2'}`}
                                    onClick={() => setSelectedCategory(Category.id)}
                                    role="tab"
                                >
                                    {Category.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=' relative'>
                    <div className="tab-content tab-space">
                        {categories.map((category) => (
                             <div key={category.id} className={ selectedCategory === category.id ? "block" : "hidden"}>
                                <div className=" grid gap-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:max-w-full sm:mx-auto xl:max-w-full mt-10 lg:mt-16">
                                    {category.categorylist.map((categoryitems) => (
                                        <div key={categoryitems.id} className='overflow-hidden transition-shadow duration-300 bg-white rounded-md'>
                                            <Link to="/donate-page">
                                                <img src={categoryitems.CoverImg} className='0bject-cover w-full h-64 rounded-md' alt='trending_inage' />
                                            </Link>
                                            <div className='p-2'>
                                                <h5 className=' text-[#161616] '>{categoryitems.title}</h5>
                                                <p className='text-[12px] text-[#515151]'> {categoryitems.content}</p>
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
                                                            <div className="text-center text-emerald-700 text-sm font-bold font-['Nunito'] leading-tight">{categoryitems.currentvalue}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="self-stretch justify-start items-start inline-flex">
                                                    <div className="grow shrink basis-0 h-5 justify-end items-center gap-2.5 flex">
                                                        <div className="grow shrink basis-0 text-right text-emerald-700 text-sm font-bold font-['Nunito'] leading-tight">{categoryitems.targetvalue}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*==============people donation======*/}
                                            <div className="flex-col justify-start items-start gap-3 flex">
                                                <div className="justify-start items-start inline-flex">
                                                    <div className="justify-start items-start flex">
                                                        <img className="w-8 h-8 rounded-full border border-white" alt='trending1' src={categoryitems.donatingImg} />
                                                        <img className="w-8 h-8 -ml-2 rounded-full border border-white" alt='trending3' src={categoryitems.donatingImg2} />
                                                        <img className="w-8 h-8 -ml-2 rounded-full border border-white" alt='trending2' src={categoryitems.donatingImg3} />
                                                    </div>
                                                    <div className="w-[190px] px-4 py-2 bg-orange-50 rounded-[20px] justify-center items-center flex">
                                                        <div className="text-yellow-800 text-sm font-semibold  leading-tight">{categoryitems.totalDonation}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mt-10 flex items-center justify-center'>
                    <button className="border border-[#04A38A] text-[#04A38A] rounded-md py-3 px-5 font-medium">Load More</button>
                </div>
            </div>
        </div>
    )
}

export default CategoryList;