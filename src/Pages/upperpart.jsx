import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'

function Upperpart() {
  return (
    <>
    <div style={{ backgroundImage: `url("/public/green-abstract-wall-wave-architecture-abstract-background-3d-rendering-green-background-presentation 1.png")`,   
         height: 'auto',  
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         position: 'relative'

        }} className='xl:w-11/12 w-full'>
             {/* <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent z-0"></div> */}
             {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div> */}

             <div className="absolute inset-0 bg-custom-gradient z-0"></div>

        <Header/>
        <Banner/>
    </div>
    </>
  )
}

export default Upperpart