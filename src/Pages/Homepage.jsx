import React from 'react'
import Upperpart from './upperpart'
import Middlepart from './Middlepart'
import Middlepart2 from './Middlepart2'
import Middlepart3 from './Middlepart3'
import Lowerpart from './Lowerpart'
import Footerpart from './Footerpart'

function Homepage() {
    return (
        <>
            <div className='flex justify-center bg-black h-full'>
                <Upperpart />                
            </div>

            <div className='flex justify-center bg-black h-full'>
            <Middlepart/>
            </div>

            <div className='flex justify-center bg-black h-full'>
            <Middlepart2 />
            </div>

            <div className='flex justify-center bg-black h-full'>
            <Middlepart3 />
            </div>

            <div className='flex justify-center bg-black h-full'>
            <Lowerpart />
            </div>
            <div className='flex justify-center bg-black h-full'>
            <Footerpart />
            </div>
        </>
    )
}

export default Homepage