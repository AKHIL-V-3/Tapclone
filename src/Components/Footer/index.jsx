import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react'
import React from 'react'

function Footer() {
    return (
        <>
            <div className='w-full h-auto mb-10  flex justify-center text-white'>

                <div className='w-10/12  pb-10 rounded-3xl border'>

                    <div className='xl:flex w-full'>
                        <div className='flex justify-center w-full xl:w-4/12 text-sm'>
                            <div className='w-8/12'>
                                <div className='mt-20 opacity-50'>
                                     <p className='opacity-20 mb-2'>Phone</p>
                                    <p>9656300567</p>
                                    <p>9037206760</p>
                                </div>
                                
                                <div className='mt-6'>
                                <p className='opacity-20 mb-2'>Email</p>
                                <p className=' opacity-50'>Admissions@co.in</p>
                                </div>
                                  
                                <div className='mt-16'>
                                <p className='opacity-20 mb-2'>Address</p>
                                <p className='w-1/2  opacity-50'> 2nd Floor, Cental Arcade. Cherooty Road, Calicut - 673032</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center  w-full xl:w-4/12' >
                             <div className='w-8/12 pt-14'>
                                <h1 className='text-lg text-custom-green mb-4'>Explore</h1>
                                <div className='opacity-50 flex-col space-y-4 text-sm'>
                                <p>Home</p>
                                <p>About us</p>
                                <p>Courses</p>
                                <p>Gallery</p>
                                <p>Contact us</p>
                                <p>Privacy Policy</p>
                                </div>
                             </div>
                        </div>


                        <div className='flex justify-center w-full xl:w-4/12' >
                             <div className='w-8/12 pt-14'>
                                <h1 className='text-lg text-custom-green mb-4'>Courses</h1>
                                <div className='opacity-50 flex-col space-y-4 text-sm'>
                                <p>Full Stack Developer and Certification courses</p>
                                <p>Bachelor of Commerce (Bcom)</p>
                                <p>BBA Computer Application</p>
                                <p>Bsc computer science -AI and Data Science</p>
                                <p>BBA Aviation Management</p>
                                </div>
                             </div>
                        </div>
                        

                    </div>

                    <div className='w-full h-14 flex justify-end'>

                         <div className='xl:w-4/12 w-full flex space-x-4 xl:justify-center justify-end mr-5 mt-5 xl:mr-0 xl:mt-0'>

                         <div className='w-8 h-8 bg-custom-green flex justify-center items-center text-black rounded-sm'>
                            <IconBrandFacebook/>
                         </div>

                         <div className='w-8 h-8 bg-custom-green flex justify-center items-center text-black rounded-sm'>
                            <IconBrandInstagram/>
                         </div>

                         <div className='w-8 h-8 bg-custom-green flex justify-center items-center text-black rounded-sm'>
                            <IconBrandLinkedin/>
                         </div>

                         </div>


                    </div>
    

                </div>

            </div>
        </>
    )
}

export default Footer