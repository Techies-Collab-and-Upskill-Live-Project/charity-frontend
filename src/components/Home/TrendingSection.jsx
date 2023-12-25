import React from 'react'
import { trendingdata } from '../../Data'

const TrendingSection = () => {
    return (
        <div className=' bg-[#FEFEFE] w-full'>
            <div className='container mx-auto w-full'>
                <div className='py-6 md:py-12'>
                    <div className="flex flex-col items-center sm:max-auto">
                        <h3 className="mb-4 tracking-wide text-center "> Discover Trending Causes</h3>
                        <p className="max-w-2xl font-medium text-center leading-5 text-[#515151] text-md">
                            Each cause is a chapter in our collective story of compassion. Explore, engage,
                            and make a lasting impact – because changing the world starts with your support.
                        </p>
                    </div>
                    <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:max-w-full sm:mx-auto xl:max-w-full mt-10 lg:mt-16'>
                        {trendingdata.map((trendings) => (
                            <div key={trendings.id} className='overflow-hidden transition-shadow duration-300 bg-white rounded-md'>
                                <img src={trendings.CoverImg} className='0bject-cover w-full h-64 rounded-md' alt='trending_inage' />
                                <div className='p-2'>
                                    <h5 className=' text-[#161616] '>{trendings.title}</h5>
                                    <p className='text-[12px] text-[#515151]'> {trendings.content }</p>
                                </div>
                                {/*---- prohress bar----*/}
                                <div className="w-[326px] lg:w-[368px] h-[72px] flex-col justify-start items-start gap-1 inline-flex">
                                    <div className="self-stretch h-12 relative">
                                        <div className="w-[326px] lg:w-[368px] h-2 left-0 top-[40px] absolute">
                                            <div className="w-[326px] lg:w-[368px] h-2 left-0 top-0 absolute bg-neutral-200 rounded-lg" />
                                            <div className="  w-[170.30px] lg:w-[192.24px] h-2 left-0 top-0 absolute bg-teal-600 rounded-lg" />
                                        </div>
                                        <div className="w-[66px] h-9 left-[140.85px] lg:left-[160px] top-0 absolute">
                                            <div className="w-[66px] h-7 px-2 py-1 left-0 top-0 absolute bg-emerald-50 rounded-lg justify-center items-center inline-flex">
                                                <div className="text-center text-emerald-700 text-sm font-bold font-['Nunito'] leading-tight">{trendings.currentvalue }</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch justify-start items-start inline-flex">
                                        <div className="grow shrink basis-0 h-5 justify-end items-center gap-2.5 flex">
                                            <div className="grow shrink basis-0 text-right text-emerald-700 text-sm font-bold font-['Nunito'] leading-tight">{trendings.targetvalue }</div>
                                        </div>
                                    </div>
                                </div>
                                {/*==============people donation======*/}
                                <div className="flex-col justify-start items-start gap-3 flex">
                                    <div className="justify-start items-start inline-flex">
                                        <div className="justify-start items-start flex">
                                            <img className="w-8 h-8 rounded-full border border-white" alt='trending1' src={trendings.donatingImg} />
                                            <img className="w-8 h-8 -ml-2 rounded-full border border-white" alt='trending3' src={trendings.donatingImg2} />
                                            <img className="w-8 h-8 -ml-2 rounded-full border border-white" alt='trending2' src={trendings.donatingImg3} />
                                        </div>
                                        <div className="w-[190px] px-4 py-2 bg-orange-50 rounded-[20px] justify-center items-center flex">
                                            <div className="text-yellow-800 text-sm font-semibold font-['Nunito'] leading-tight">{trendings.totalDonation }</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TrendingSection