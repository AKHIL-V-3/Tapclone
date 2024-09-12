import React from 'react'

function Customshape() {
    return (
        <>

            <div className=' w-80 h-full border-none'>
                <div className='flex justify-between  '>
                    <div className='border-2 rounded-tl-xl border-b-0 border-r-0 p-5 w-9/12 bg-transparant-green'></div>
                    <div className='border-2 border-t-0 p-5 w-3/12 rounded-bl-xl border-r-0'></div>
                </div>

                <div className='w-full border-2 border-t-0 h-4/6 text-3xl rounded-b-xl pl-5 bg-transparant-green'>
                    <div className='flex gap-1 '>
                        <IconStarFilled size={26} style={{ color: '#01F19B' }} />
                        <IconStarFilled size={26} style={{ color: '#01F19B' }} />
                        <IconStarFilled size={26} style={{ color: '#01F19B' }} />
                        <IconStarFilled size={26} style={{ color: '#01F19B' }} />
                        <IconStarHalfFilled size={26} style={{ color: '#01F19B' }} />

                    </div>
                    <h1 className='mt-6'>4.5/5</h1>
                    <h1 className='pb-10'>rating</h1>
                </div>
            </div>

        </>
    )
}

export default Customshape