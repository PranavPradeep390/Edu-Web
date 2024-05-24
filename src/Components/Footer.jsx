import React from 'react'

function Footer() {
  return (
    <>
   <div className="w-full lg:h-40 md:h-48 sm:h-56 h-64 bg-purple-500 flex flex-wrap items-center justify-around">
      <div><h1>join our newsletter</h1></div>
      <div className='flex flex-wrap'>
        <input type="text" value="" placeholder='Enter your email here'/>
        <button>Subscribe</button>
      </div>
   </div>
   
   <div className='w-full  bg-purple-700 flex flex-wrap items-center justify-around'>

    <div className='lg:w-1/4 sm:w-1/2 w-full flex flex-col items-center' style={{listStyle:"none",padding:"35px"}}>
      <img src="" alt="" srcset="" />
      <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cupiditate voluptatem nisi quibusdam? Fugit dignissimos sit itaque a odio, tempora architecto quam quod aspernatur molestiae distinctio fugiat doloremque pariatur consequatur.</p>
    </div>

    <div className='lg:w-1/4 sm:w-1/2 w-full flex flex-col items-center' style={{padding:"35px"}}>
      <h1>Quick Link</h1>
      <ul style={{listStyle:"none",color:"white",lineHeight:"2"}}>
        <li>Home</li>
        <li>About</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </div>
    
    <div className='lg:w-1/4 sm:w-1/2 w-full flex flex-col items-center' style={{padding:"35px"}}>
  <h1 className="text-center">Services</h1>
  <ul style={{listStyle:"none",color:"white",lineHeight:"2"}}>
    <li>Home</li>
    <li>About</li>
    <li>Gallery</li>
    <li>Contact</li>
  </ul>
    </div>
   
    <div className='lg:w-1/4 sm:w-1/2 w-full flex flex-col items-center' style={{padding:"35px"}}>
      <h1>Contacts</h1>
      <ul style={{listStyle:"none",color:"white"}}>
        <li>123 Main Street <br />
            Anytown, USA <br />
            123 Main Street <br />
            Anytown, USA</li>
        
        <li>Contact</li>
      </ul>
    </div>

   </div>

   <div className='w-full lg:h-30 md:h-40 sm:h-50 h-56 bg-slate-100 flex flex-wrap '>
    <div><h5>© 2024. Designed By A2Z Alphabetsolutionz PVT Ltd.</h5></div>
    <div><ul style={{listStyle:"none"}}>
      <li>fb</li>
      <li>wt</li>
      <li>in</li>
      <li>pi</li>
      </ul></div>

   </div>
    </>

    
  )
}
export default Footer