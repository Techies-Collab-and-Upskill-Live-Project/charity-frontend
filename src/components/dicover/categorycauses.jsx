import { Link } from "react-router-dom";
import { discoverpagesdata } from "../../Data";
import { HiOutlineChevronRight } from "react-icons/hi2";

const CategoryList = () =>{
    return(
        <div className="container mx-auto w-full pt-28 text-center">
            <div className="">
                <h3>Explore & Discover Impactful Causes</h3>
                <p className=" text-zinc-500">Trace the Stories, Suport the Change</p>
            </div>


                <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2 mt-10 lg:mt-16'>
                        {discoverpagesdata.map((discoverpagesdata) => (
                            <div key={discoverpagesdata.id} className=' relative inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2'>
                                <div className='flex flex-col h-full'>
                                    <img
                                        src={discoverpagesdata.CoverImg}
                                        className="object-cover w-full h-64"
                                        alt={discoverpagesdata.text}
                                        
                                    />
                                    <div className=' absolute mt-6 left-4 top-0 rounded-md bg-[#0A0A0AA3]'>
                                        <p className=' px-4 py-3 bg-transparent text-white font-normal text-[12px]'>
                                            {discoverpagesdata.text}
                                        </p>
                                    </div>
                                    <div className='flex-grow'>
                                        <div className='p-4'>
                                            <Link to="/">
                                            <button className="mt-4 text-[12px] bg-transparent">
                                                <span className="  text-[#04A38A]  flex items-center justify-center space-x-5">
                                                    Donate Now
                                                    <HiOutlineChevronRight size={15}/>
                                                </span>
                                            </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


        </div>
    )
}

export default CategoryList