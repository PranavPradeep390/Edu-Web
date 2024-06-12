import React from 'react'
import NewsEventsCard from '../Components/NewsEventsCard'
import sections_bg from '../Assets/sections_bg.png'

function Newsevents() {
  return (
    <>
    <div>
    <div className='flex-col' style={{ backgroundImage:` url(${sections_bg})`,height:"400px",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:'center'}}>
    <h1 
    className='text-4xl uppercase mb-2 font-serif'><b>News & Events</b>
    </h1>
  
    <h1
    className='text-xl p-3 bg-yellow-500 rounded-xl text-white'><b>Home - News & Events</b>
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