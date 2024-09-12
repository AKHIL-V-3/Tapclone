import React from 'react'

function Courses() {
    return (
        <>
            <div className='w-full h-auto bg-custom-background text-white'>

                <div className='w-full h-2/6'>
                    <div className='w-full h-64 flex justify-center bg-course-gradient '>
                        <div className='w-9/12 h-full  flex justify-center items-end'>
                            <button className='px-8 py-3 bg-course-button text-white rounded-full'>Courses</button>
                        </div>
                    </div>
                    <div>
                        <div className='text-6xl text-center'><span className='text-custom-green'>Courses</span> Available</div>
                        <div className='flex justify-center'>
                            <div className='w-1/2'>
                                <p className='text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' w-full h-full flex justify-center'>

                    <div className='mt-10 w-full xl:w-11/12 h-auto rounded-3xl p-5 gap-5 border bg-course-bottom overflow-x-auto flex snap-x snap-mandatory xl:flex-wrap xl:gap-5 xl:p-5'>

                        <div className='flex-shrink-0 w-full xl:w-96 h-96 rounded-3xl border border-custom-green p-1 relative snap-start'>
                            <div className='py-3 px-5'>
                                <h1 className='text-2xl'>Full Stack Developer and Certification courses</h1>
                            </div>
                            <div className='py-3 px-5'>
                                <p>Every day, new technologies having the potential to transform interpersonal and professional relationships are born. Businesses are rapidly changing to digital. As a result, the need for IT professionals is also growing. According to recent studies, the demand for IT professionals will rise by 50-70 percent in the future.</p>
                            </div>
                            <div className='flex justify-end items-start px-5 py-2 absolute bottom-3 right-2'>
                                <button className='border-2 rounded-full px-4 py-1 text-custom-green border-white'>Read More</button>
                            </div>
                        </div>

                        <div className='flex-shrink-0 w-full xl:w-96 h-96 rounded-3xl border border-custom-green relative snap-start'>
                            <div className='py-3 px-5'>
                                <h1 className='text-2xl'>Bachelor of Commerce (Bcom)</h1>
                            </div>
                            <div className='py-3 px-5'>
                                <p>Bachelor of Commerce (B.Com.) is a 3-year full time program designed to cultivate business acumen among students and aims to develop various skills, to make students capable to be an effective part of the Organisation in various capacities.</p>
                            </div>
                            <div className='flex justify-end items-start px-5 py-2 absolute bottom-3 right-2'>
                                <button className='border-2 rounded-full px-4 py-1 text-custom-green border-white'>Read More</button>
                            </div>
                        </div>

                        <div className='flex-shrink-0 w-full xl:w-96 h-96 rounded-3xl border border-custom-green relative snap-start'>
                            <div className='py-3 px-5'>
                                <h1 className='text-2xl'>BBA Computer Application</h1>
                            </div>
                            <div className='py-3 px-5'>
                                <p>BBA in Computer Application is a three-year bachelor degree designed to provide some advanced application of computer science to the students. The program trains students to tackle diverse opportunities and challenges in the IT industries. Since the IT sector is growing rapidly, the demand for skilled and qualified IT professionals has also increased.</p>
                            </div>
                            <div className='flex justify-end items-start px-5 py-2 absolute bottom-3 right-2'>
                                <button className='border-2 rounded-full px-4 py-1 text-custom-green border-white'>Read More</button>
                            </div>
                        </div>

                        <div className='flex-shrink-0 w-full xl:w-96 h-96 rounded-3xl border border-custom-green relative snap-start'>
                            <div className='py-3 px-5'>
                                <h1 className='text-2xl'>Bsc computer science - AI and Data Science</h1>
                            </div>
                            <div className='py-3 px-5'>
                                <p>Artificial Intelligence and Data science is a new branch of study that deals with scientific methodologies, processes, and techniques drawn in different domains like statistics, cognitive science, and computing the information science to extract knowledge from structured data and unstructured data. This knowledge is applied in various intelligent decisions in business applications.</p>
                            </div>
                            <div className='flex justify-end items-start px-5 py-2 absolute bottom-3 right-2'>
                                <button className='border-2 rounded-full px-4 py-1 text-custom-green border-white'>Read More</button>
                            </div>
                        </div>

                        <div className='flex-shrink-0 w-full xl:w-96 h-96 rounded-3xl border border-custom-green relative snap-start'>
                            <div className='py-3 px-5'>
                                <h1 className='text-2xl'>BBA Aviation Management</h1>
                            </div>
                            <div className='py-3 px-5'>
                                <p>The Bachelor of Business Administration (BBA) in Aviation management is an undergraduate Programme designed for those who are seeking to prepare themselves for managerial responsibilities. This will help them to develop their ability to recognize and solve problems and to understand the role of business in the ever-changing scenario.</p>
                            </div>
                            <div className='flex justify-end items-start px-5 py-2 absolute bottom-3 right-2'>
                                <button className='border-2 rounded-full px-4 py-1 text-custom-green border-white'>Read More</button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Courses