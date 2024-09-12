import { IconDeviceGamepad, IconDeviceGamepad2, IconMessage, IconMessage2, IconMessage2Pin, IconMessageCircleShare, IconMessageShare, IconStairs, IconStairsUp, IconStar, IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react'
import React from 'react'
import "./banner.css"
import Customshape from '../customshape'

function Banner() {
    return (
        <>
            <div className='text-white w-full h-full flex justify-center z-10'>

                <div className='h-full xl:flex justify-between xl:relative'>

                    <div className='xl:pt-32 pt-10 w-full xl:pl-10 pl-5'>

                        <div>
                            <h5 className='xl:text-xl text-md mb-6'>Professional Certification & Degree Programs</h5>

                            <h1 className='xl:text-6xl text-2xl xl:leading-tight'>Accelerate Your <span className='text-custom-green'>Career</span><br /><span className='text-custom-green'>Growth</span> & UpskillYourself</h1>

                        </div>

                        <div className='xl:w-9/12 w-full bg-slate-600 h-16 rounded-full text-white text-center flex xl:justify-between justify-center items-center mt-8'>
                            <input type="text" placeholder='Enter your Email' className='w-8/12 h-full rounded-full bg-slate-600 pl-6 text-xl border-none outline-none' />
                            <button className='bg-custom-green w-3/12 text-black rounded-3xl xl:h-5/6 h-4/6 me-2 xl:text-2xl text-xl'>Send</button>
                        </div>


                        <div className='xl:w-7/12 w-full xl:flex gap-2 xl:absolute xl:left-10 xl:bottom-80 z-0'>

                            <div className=' w-80 h-full border-none pt-10 xl:pt-0'>
                                <div className='flex justify-between  '>
                                <div className='border-2 rounded-tl-xl border-b-0 border-r-0 p-5 w-9/12 bg-custom-green/15'></div>
                                <div className='border-2 border-t-0 p-5 w-3/12 rounded-bl-xl border-r-0'></div>
                                </div>
                                
                                <div className='w-full border-2 border-t-0 h-4/6 text-3xl rounded-b-xl pl-5 bg-custom-green/15'>
                                    <div className='flex gap-1 '>
                                        <IconStarFilled size={26} style={{ color: '#01F19B' }} />
                                        <IconStarFilled size={26} style={{ color: '#01F19B' }} />
                                        <IconStarFilled size={26} style={{ color: '#01F19B' }} />
                                        <IconStarFilled size={26} style={{ color: '#01F19B' }} />
                                        <IconStarHalfFilled size={26} style={{ color: '#01F19B' }} />
                                       
                                    </div>
                                    <div className='text-gradient'>

                                    <h1 className='mt-6'>4.5/5</h1>
                                    <h1 className='pb-14'>rating</h1>
                                    </div>
                                </div>
                            </div>


                            <div className=' w-80 h-full border-none hidden xl:block'>
                                <div className='flex justify-between  '>
                                <div className='border-2 rounded-tl-xl border-b-0 border-r-0 p-5 w-9/12 bg-custom-green/15'></div>
                                <div className='border-2 border-t-0 p-5 w-3/12 rounded-bl-xl border-r-0'></div>
                                </div>
                                
                                <div className='w-full border-2 border-t-0 h-4/6 text-2xl rounded-b-xl pl-5 bg-custom-green/15'>
                                    <div className='flex gap-1 '>
                                        <IconStairsUp size={32} style={{ color: '#01F19B' }}/>
                                       
                                    </div>

                                    <div className='text-gradient'>
                                    <h1 className='mt-6'>1000</h1>
                                    <h1 className=''>Career</h1>
                                    <h1 className='pb-7'>Transaction</h1>
                                    </div>
                                </div>
                            </div>


                            <div className=' w-80 h-full border-none hidden xl:block'>
                                <div className='flex justify-between  '>
                                <div className='border-2 rounded-tl-xl border-b-0 border-r-0 p-5 w-9/12 bg-custom-green/15'></div>
                                <div className='border-2 border-t-0 p-5 w-3/12 rounded-bl-xl border-r-0'></div>
                                </div>
                                
                                <div className='w-full  border-2 border-t-0 h-4/6 text-2xl rounded-b-xl pl-5 bg-custom-green/15'>
                                    <div className='flex mb-2'>
                                        <IconDeviceGamepad2 size={32} style={{ color: '#01F19B' }}/>
                                       
                                    </div>

                                    <div className='text-gradient'>
                                    <h1 >Gamified</h1>
                                    <h1 >Learning</h1>
                                    <h1 className=''>24*7 learning</h1>
                                    <h1 className='pb-3'>support</h1>
                                    </div>
                                </div>
                            </div>


                            <div className=' w-80 h-full border-none hidden xl:block'>
                                <div className='flex justify-between  '>
                                <div className='border-2 rounded-tl-xl border-b-0 border-r-0 p-5 w-9/12 bg-custom-green/15'></div>
                                <div className='border-2 border-t-0 p-5 w-3/12 rounded-bl-xl border-r-0'></div>
                                </div>
                                
                                <div className='w-full border-2 border-t-0 h-4/6 text-2xl rounded-b-xl pl-5 bg-custom-green/15'>
                                    <div className='flex gap-1 '>
                                        <IconMessageCircleShare style={{ color: '#01F19B' }}/>
                                    </div>
                                    <div className='text-gradient'>
                                    <h1 className='mt-6'>1:1</h1>
                                    <h1 >with industry</h1>
                                    <h1 className='pb-9'>mentors</h1>
                                    </div>
                                </div>
                            </div>


                           

                        </div>



                    </div>


                    <div className='w-full flex justify-end items-start'>
                        <img src="public/Group 141.png" className='w-full xl:h-144 h-96 object-contain z-10' alt="" />
                    </div>


                </div>

            </div>
        </>
    )
}

export default Banner