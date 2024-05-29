import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import { CircularProgress } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Rating from '../Components/Rating';
import Button from '@mui/material/Button';



function About() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: .5,
  });
  
  return (
    <>
    <div className='flex-col' style={{ backgroundImage: 'url("https://thumbs.dreamstime.com/b/seamless-pattern-abstract-outline-silhouette-human-face-modern-avant-garde-poster-white-grey-background-trendy-144736736.jpg")',height:"400px",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:'center'}}>
    <h1 
    className='text-4xl uppercase mb-2'><b>About us</b>
    </h1>
  
    <h1
    className='text-xl p-3 bg-yellow-500 rounded-full text-white'><b>Home - About us</b>
    </h1>
    </div>

     
  <div className='flex flex-wrap w-full p-10  items-center'>
     

      <div className='md:w-1/2 md:p-5 '>
        <h1 className=' text-center sm:text-left text-3xl pb-5'>We Learn Smart Way To Build Bright Futute For Your Children</h1>
        <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="md:w-1/2 p-5 ">
    <img 
        className="" 
        src="https://hellokidsmaruthankuzhi.com/images/about/about.png" 
        alt="About"
    />
     </div>
  </div>

  <div 
      ref={ref} 
      className='w-full shadow-inner p-10 text-white font-medium text-center bg-blue-400 flex flex-wrap items-center justify-evenly h-[800px] md:h-[350px]'
    >
      <div className='w-full sm:w-1/2 md:w-1/4 p-2'>
        <div className='mx-auto rounded-full  relative flex items-center justify-center' style={{backgroundColor:"lightskyblue",height:"150px",width:"150px"}}>
          <CircularProgress duration={4} variant="determinate" value={inView ? 100 : 0} size={170} thickness={3} style={{ position: 'absolute', color: 'lavender'}} className='rounded-full shadow-2xl'/>
          <div className='absolute flex flex-col items-center'>
            <MilitaryTechIcon style={{color:"white"}}/>
            <p className='text-5xl'>
              {inView && <em><CountUp end={20} duration={4} /></em>}
            </p>
            <p style={{fontSize:"12px"}}>Years of <br />Excellence</p>
          </div>
        </div>
      </div>

      <div className='w-full sm:w-1/2 md:w-1/4 p-2'>
        <div className='mx-auto rounded-full  relative flex items-center justify-center' style={{backgroundColor:"lightskyblue",height:"150px",width:"150px"}}>
          <CircularProgress variant="determinate" value={inView ? 100 : 0} size={170} thickness={3} style={{ position: 'absolute', color: 'lavender'  }}  className='rounded-full shadow-2xl'/>
          <div className='absolute flex flex-col items-center'>
            <SchoolIcon style={{color:"white"}}/>
            <p className='text-5xl'>
              {inView && <em><CountUp end={50} duration={4}/></em>}
            </p>
            <p style={{fontSize:"12px"}}>Qualified <br /> Teachers </p>
          </div>
        </div>
      </div>

      <div className='w-full sm:w-1/2 md:w-1/4 p-2'>
        <div className='mx-auto rounded-full  relative flex items-center justify-center' style={{backgroundColor:"lightskyblue",height:"150px",width:"150px"}}>
          <CircularProgress variant="determinate" value={inView ? 100 : 0} size={170} thickness={3} style={{ position: 'absolute', color: 'lavender'}}  className='rounded-full shadow-2xl'/>
          <div className='absolute flex flex-col items-center'>
            <PersonIcon style={{color:"white"}}/>
            <p className='text-5xl'>
              {inView && <em><CountUp end={500} duration={4} /></em>}
            </p>
            <p style={{fontSize:"12px"}}>Students <br /> Enrolled</p>
          </div>
        </div>
      </div>

      <div className='w-full sm:w-1/2 md:w-1/4 p-2'>
        <div className='mx-auto rounded-full relative flex items-center justify-center' style={{backgroundColor:"lightskyblue",height:"150px",width:"150px"}}>
          <CircularProgress variant="determinate" value={inView ? 100 : 0} size={170} thickness={3} style={{ position: 'absolute', color: 'lavender'  }} className='rounded-full shadow-2xl' />
          <div className='absolute flex flex-col items-center'>
            <EmojiEventsIcon style={{color:"white"}}/>
            <p className='text-5xl'>
              {inView && <em><CountUp end={15} duration={4} /></em>}
            </p>
            <p style={{fontSize:"12px"}}>Total <br /> Award</p>
          </div>
        </div>
      </div>
  </div>

  <div className='flex flex-wrap w-full p-10  items-center'>

     <div className="md:w-1/2 p-5 ">
        <img 
            className="" 
            src="https://cutesolution.com/html/rainbow2/assets/img/choose-1.jpg" 
            alt="About"
        />
     </div>

     <div className='md:w-1/2 md:p-5 '>
       <h1 className=' text-center sm:text-left text-3xl pb-5'>We Learn Smart Way To Build Bright Futute For Your Children</h1>
       <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       <br /><br />
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       </p>
     </div>

     
 </div>

<div>

<div>
  <p className='uppercase text-center text-orange-400'style={{fontWeight:"bold"}}>testimonial</p>
  <h1 className='text-center capitalize text-4xl '>parents are saying</h1>
   <Swiper
       modules={[Pagination]}
       spaceBetween={50}
       pagination={{ clickable: true }}
       breakpoints={{
         320: {
           slidesPerView: 1,
           spaceBetween: 20,
         },
         640: {
           slidesPerView: 1,
           spaceBetween: 20,
         },
         768: {
           slidesPerView: 2,
           spaceBetween: 40,
         },
         1024: {
           slidesPerView: 3,
           spaceBetween: 50,
         },
       }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
    >
       <SwiperSlide><Rating/></SwiperSlide>
   
      <SwiperSlide><Rating/></SwiperSlide>
          
      <SwiperSlide><Rating/></SwiperSlide>
  
      <SwiperSlide><Rating/></SwiperSlide>
  
   </Swiper>
</div>

<div style={{backgroundColor:"#95c535"}} className='w-full text-center text-white mt-10 p-8 sm:p-16'>

  <p className='uppercase pb-2 sm:p-4 text-xs sm:text-base' ><b>contact us for a free consultation</b></p>
   <h1 className='capitalize text-lg sm:text-4xl  sm:p-5'><b>let's talk about opportunities</b></h1>
   <p className='p-1 sm:p-4 sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit distinctio unde velit obcaecati id quasi temporibus. Delectus, pariatur cumque nostrum minima, expedita, nesciunt ad nisi magni natus voluptas omnis. Quibusdam?</p>

   <div className=' mt-2 flex items-center justify-center gap-10'>
      <button className='bg-blue-500 p-3 rounded-3xl text-xs sm:text-lg'>Call Now</button>
      <button className='bg-white p-3 rounded-3xl text-xs sm:text-lg text-blue-500'>Contact Us</button>
   </div>

</div>
 
</div>
  

    
    </>

  )}
export default About