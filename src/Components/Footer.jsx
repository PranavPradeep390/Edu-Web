import React from 'react'
// import Button from 'react-bootstrap/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
function Footer() {
  return (
    <>
   <div className=' bg-slate-500 w-full' style={{backgroundImage:'url("https://i.pngimg.me/thumb/f/720/comrawpixel5990802.jpg")',backgroundSize:"cover"}}>
        <div className='flex flex-wrap items-center justify-around pt-10'>
              <div className='text-center p-3'>
                <h1 style={{fontWeight:"bold",fontSize:"30px"}}>Sign Up Our Newsletter</h1>
                <p className='mt-2'>We Offer An Informative Monthly Technology Newsletter - Check It Out.</p>
              </div>

              <div className='ps-8 flex flex-wrap items-center'>
                <input className='mb-2 mt-2 lg:mb-0 lg:mt-0'  type="text" placeholder=' Enter Your Email' style={{width:"320px",height:"36px",outline:"none"}} />

                <Button variant="contained" className='w-80
                sm:max-w-36'>Subscribe</Button>
          
              </div>

              
        </div> 
        <div className='flex flex-wrap ps-10 md:ps-40 pe-10 pt-10 w-full '>
              <div className=' w-full sm:w-1/2 lg:w-1/4 mb-4 p-3 mx-auto' style={{lineHeight:"1.7rem"}}>
                <p>Heading</p>
                <p className='text-justify'>Lorem ipsum dolor sit, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <FacebookIcon style={{color:"blue",fontSize:"26px"}}/>
                <WhatsAppIcon style={{color:"blue",fontSize:"26px"}} className='ms-2 me-2'/>
                <LinkedInIcon style={{color:"blue",fontSize:"26px"}} className='me-2'/>
                <YouTubeIcon style={{color:"blue",fontSize:"26px"}}/>
              </div>
              <div className=' w-full sm:w-1/2 lg:w-1/4 mb-4 p-3 mx-auto' style={{lineHeight:"2rem"}}>
                <ul className='lg:ps-9'>
                  <li><b>All Programs</b></li>
                  <li>Preschool</li>
                  <li>Kindergarden</li>
                  <li>Middle School</li>
                  <li>Kids Activity Club</li>
                  <li>Summer Camp</li>
                </ul>
              </div>
              <div className=' w-full sm:w-1/2 lg:w-1/4 mb-4 p-3 mx-auto' style={{lineHeight:"2rem"}}>
                <ul>
                  <li><b>All Programs</b></li>
                  <li>Preschool</li>
                  <li>Kindergarden</li>
                  <li>Middle School</li>
                  <li>Kids Activity Club</li>
                  <li>Summer Camp</li>
                </ul>
              </div>
              <div className='w-full sm:w-1/2 lg:w-1/4 p-3 mx-auto' style={{lineHeight:"2rem"}}>
                <ul>
                  <li><b>Contact Info</b></li>
                  <li>Phone</li>
                  <li>Email</li> 
                  <li>Address</li>
                </ul>
              </div>
        </div>
        <div className='w-full bg-sky-800 h-24'>
        </div>
   </div>
    </>
  )
}
export default Footer