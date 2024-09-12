import React from 'react'

function About() {
    return (
        <>
            <div className='text-white w-full flex justify-center'>

                <div className='m-10  w-full rounded-2xl border-2 border-white h-auto '>

                    <div className='xl:p-12 p-4 pt-7'>

                        <div className='xl:flex justify-between w-full h-36 relative'>
                            <div className='xl:w-1/2 w-full mb-10 xl:mb-0'>
                                <h1 className='text-3xl'><span className='text-custom-green'>About of</span> School of Science <br className='hidden xl:block' /> & management</h1>
                            </div>
                            <div className='xl:w-1/2 w-full '>
                                <p>Regnanz Academy Is a fully accredited institution with its headquarter in Calicut. The institution prides itself for being a vibrant effort from the part of highly experienced entrepreneurs who had successfully proved themselves in a range of academic fields</p>

                                <button className='absolute right-0 xl:right-4 xl:bottom-0 border-2 rounded-full px-6 py-2 text-custom-green border-white mt-8'>Read More</button>

                            </div>
                        </div>

                        <div className='flex xl:mt-20 mt-56 gap-10 overflow-x-auto'>

                            <div className='flex-none xl:w-72 w-full h-80 rounded-3xl border-2 p-8 relative bg-custom-radial'>
                                <div className='flex flex-col'>
                                    <h1 className='text-5xl mb-3 number-gradient'>01</h1>
                                    <h2 className='text-xl mb-6 text-gradient'>What we offer</h2>
                                    <p className='text-sm'>The skill set required for jobs are changing every day.</p>
                                    <button className='absolute right-5 bottom-8 text-custom-green border-2 rounded-full px-4 py-1'>Read more</button>
                                </div>
                            </div>

                            <div className='flex-none xl:w-72 w-full h-80 rounded-3xl border-2 p-8 relative bg-custom-radial'>
                                <div className='flex flex-col'>
                                    <h1 className='text-5xl mb-3 number-gradient'>02</h1>
                                    <h2 className='text-xl mb-5 text-gradient'>Overseas consultancy</h2>
                                    <p className='text-sm'>Our Overseas education consultants will be helping you to find the best course or university</p>
                                    <button className='absolute right-5 bottom-8 text-custom-green border-2 rounded-full px-4 py-1'>Read more</button>
                                </div>
                            </div>

                            <div className='flex-none xl:w-72 w-full h-80 rounded-3xl border-2 p-8 relative bg-custom-radial'>
                                <div className='flex flex-col'>
                                    <h1 className='text-5xl mb-3 number-gradient'>03</h1>
                                    <h2 className='text-xl mb-6 text-gradient'>Distance education programs</h2>
                                    <p className='text-sm mb-5'>We believe education is life-long. Our distance education program for students will help them acquire</p>
                                    <button className='absolute right-5 bottom-8 text-custom-green border-2 rounded-full px-4 py-1'>Read more</button>
                                </div>
                            </div>

                            <div className='flex-none xl:w-72 w-full h-80 rounded-3xl border-2 p-8 relative bg-custom-radial'>
                                <div className='flex flex-col'>
                                    <h1 className='text-5xl mb-3 number-gradient'>04</h1>
                                    <h2 className='text-xl mb-6 text-gradient'>Add-on courses</h2>
                                    <p className='text-sm mb-5'>Add-on courses are an excellent way of getting more out of your degree and career.</p>
                                    <button className='absolute right-5 bottom-8 text-custom-green border-2 rounded-full px-4 py-1'>Read more</button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default About