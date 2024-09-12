import React from 'react'

function Leaner() {
    return (
        <>
            <div className='w-full h-auto bg-custom-background text-white flex justify-center'>

                <div className='w-10/12 pt-10 h-auto'>
                    <div>
                        <h1 className='xl:text-6xl text-4xl'><span className='text-custom-green'>Leaner</span> Benefits</h1>
                    </div>

                    <div className='relative w-full  pb-10 mt-10'>

                        <div className='w-full h-auto flex xl:justify-center z-0'>

                            <div className='w-6/12 h-96 space-y-5 hidden xl:block'>
                                <div className='w-full h-1/2 bg-custom-image1 bg-contain bg-center  bg-no-repeat'>
                                    <h1 className='text-3xl text-start pl-14 pt-8'>World Class Pedagogy</h1>
                                    <p className='w-10/12 pl-14 pt-5'>Learn from the World’s Best Faculty & Industry Experts. Learn with fun Hands-on Exercises & Assignments. Participate in Hackathons & Group Activities.</p>
                                </div>
                                <div className='w-full h-1/2 bg-custom-image1 bg-contain bg-center  bg-no-repeat'>
                                    <h1 className='text-3xl text-start pl-14 pt-8'>Career Assistance</h1>
                                    <p className='w-10/12 pl-14 pt-5'>Resume Building & Mock Interview Prep. 50+ Institution Options. Interview Prep.</p>
                                </div>
                            </div>

                            <div className='xl:w-8/12 w-full xl:h-100 h-96 bg-custom-image bg-contain bg-center bg-no-repeat opacity-75 '>


                                <h1 className='xl:text-3xl text-lg text-start xl:pl-14 pl-2 xl:pt-8 pt-10 xl:hidden'>World Class Pedagogy</h1>
                                <p className='xl:w-10/12 w-9/12 xl:pl-14 pl-2 pt-3 xl:hidden text-xs xl:text-base '>Learn from the World’s Best Faculty & Industry Experts. Learn with fun Hands-on Exercises & Assignments. Participate in Hackathons & Group Activities.</p>

                                <h1 className='text-lg text-start pl-2 pt-2 xl:hidden'>Career Assistance</h1>
                                <p className='w-9/12 pl-2 pt-3  text-xs xl:hidden'>Resume Building & Mock Interview Prep. 50+ Institution Options. Interview Prep.</p>

                                <h1 className='xl:text-3xl text-start xl:pl-32 xl:pt-12 pl-2 pt-2' >Gamified Learning</h1>
                                <p className='xl:w-1/2 w-9/12 xl:pl-32 xl:pt-8 pl-2 pt-2 text-xs xl:text-base'>Dedicated Learning Managers. 24*7 learning Support. Network with Peers & Interact with Industry Leaders.</p>
                            
                            </div>

                        </div>

                        <div className='xl:w-96 w-32 h-32 xl:h-auto absolute xl:right-0 xl:top-2 -right-6 top-16 '>
                            <img src="public/Group 38 1.png" alt="" className='w-full h-96 object-contain z-10' />
                        </div>

                    </div>


                </div>

            </div>
        </>
    )
}

export default Leaner