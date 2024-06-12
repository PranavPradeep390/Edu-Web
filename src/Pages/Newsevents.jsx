import React from 'react'
import NewsEventsCard from '../Components/NewsEventsCard'
import sections_bg from '../Assets/sections_bg.png'

function Newsevents() {
  return (
    <>
    <div>
    <div className='flex-col' style={{ backgroundImage:` url(${sections_bg})`,height:"400px",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:'center'}}>
 
   <h1 
    className='text-4xl md:text-6xl uppercase font-extrabold mb-2 md:mb-4 text-white ' style={{fontFamily:'cursive'}}>News & Events
    </h1>
  
    <h1
    className='text-xl p-3 bg-yellow-600 rounded-xl text-white  'style={{fontFamily:'cursive'}}><b>Home - News & Events</b>
    </h1>
    </div>

    <div className='p-24'>
      
      <NewsEventsCard/>
      
    </div>
    

    </div>
    </>
  )
}

export default Newsevents