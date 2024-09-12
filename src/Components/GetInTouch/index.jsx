import { IconArrowAutofitRight, IconArrowRight, IconArrowRightBar } from '@tabler/icons-react'
import React from 'react'

function GetinTouch() {
    return (


        <div className='w-full h-auto pb-10  text-white flex justify-center'>
            <div className='w-10/12 h-auto xl:flex'>
                <div className='w-4/12 h-auto xl:border-r border-gray-200 border-opacity-25'>
                    <h1 className='xl:text-7xl text-3xl'><span className='text-custom-green'>Let’s Get</span> in Touch</h1>

                    <div className='xl:mt-20 mt-12 flex flex-col gap-8'>
                        <div className=''>
                            <p className='opacity-50 mb-1'>Phone</p>
                            <p>9656300567</p>
                            <p>9037206760</p>
                        </div>

                        <div>
                            <p className='opacity-50 mb-1'>Email</p>
                            <p>Admissions.co.in</p>
                        </div>

                        <div>
                            <p className='opacity-50 mb-1'>Address</p>
                            <p className='xl:w-1/2 w-full'>Education, 2nd Floor, Cental Arcade. Cherooty Road, Calicut - 673032</p>
                        </div>
                   </div>
               </div>

                            <div className='xl:w-8/12 w-full mt-10 xl:mt-0'>

                                <div className='hidden xl:block' >
                                    <div className='flex items-center justify-center'>

                                        <div className='w-1/2 flex justify-end mr-10'>
                                            <IconArrowRight />
                                        </div>

                                        <div className='w-1/2 flex justify-center border-l border-custom-green border-opacity-35'>
                                            <p className='w-10/12 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                                        </div>

                                    </div>
                                </div>

                                <div className='w-full h-96 xl:mt-10 flex xl:justify-end '>

                                    <div className='bg-white xl:w-1/2 w-full h-full rounded-2xl p-5 '>

                                        <h1 className='text-black text-xl font-semibold mb-6'>Contact</h1>


                                        <div className='flex-col space-y-5'>
                                            <input type="text" placeholder='First Name' className='w-10/12 h-8 border-b outline-none text-black' />
                                            <input type="text" placeholder='Last Name' className='w-10/12 h-8 border-b outline-none text-black' />
                                            <input type="text" placeholder='Email' className='w-10/12 h-8 border-b outline-none text-black' />
                                            <input type="text" placeholder='Phone' className='w-10/12 h-8 border-b outline-none text-black' />
                                            <input type="text" placeholder='Courses' className='w-10/12 h-8 border-b outline-none text-black' />
                                        </div>

                                        <div>
                                            <button className='w-10/12 h-10 mt-4 bg-custom-green text-black rounded-xl font-semibold'>Submit</button>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        
                    </div>
            </div>
     
             ) 
} 

export default GetinTouch