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
// import Button from '@mui/material/Button';
import { Autoplay } from 'swiper/modules';



function About() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: .5,
  });

  const ratingData = [
    { 
      rating: 5, 
      review: 'Great service!', 
      user: 'User 1', 
      location: 'Germany', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s',
      description: 'The service exceeded my expectations. Highly professional and efficient.'
    },
    { 
      rating: 4, 
      review: 'Very satisfied!', 
      user: 'User 2', 
      location: 'USA', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s',
      description: 'Good experience overall. Prompt service and friendly staff.'
    },
    { 
      rating: 3, 
      review: 'Good experience.', 
      user: 'User 3', 
      location: 'UK', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s',
      description: 'The service was decent, though there is room for improvement in some areas.'
    },
    { 
      rating: 5, 
      review: 'Excellent!', 
      user: 'User 4', 
      location: 'France', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s',
      description: 'Absolutely outstanding service! I would definitely recommend it to others.'
    },
    { 
      rating: 4, 
      review: 'Very good!', 
      user: 'User 5', 
      location: 'Italy', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s',
      description: 'Very happy with the service. The team was professional and courteous.'
    },
    { 
      rating: 3, 
      review: 'Satisfied.', 
      user: 'User 6', 
      location: 'Spain', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s',
      description: 'An average experience. The service was satisfactory but not exceptional.'
    },
    { 
      rating: 5, 
      review: 'Highly recommended!', 
      user: 'User 7', 
      location: 'Netherlands', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s',
      description: 'Phenomenal service! I am extremely pleased and will use it again.'
    },
    { 
      rating: 4, 
      review: 'Good job!', 
      user: 'User 8', 
      location: 'Belgium', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s',
      description: 'Great job by the team. I am very satisfied with the outcome.'
    },
  ];
  

  
  return (
    <>
    <div className='flex-col' style={{ backgroundImage: 'url("https://images.pexels.com/photos/8422104/pexels-photo-8422104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',height:"400px",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:'center'}}>
    <h1 
    className='text-4xl uppercase mb-2  font-serif'><b>About Us</b>
    </h1>
  
    <h1
    className='text-xl p-3 bg-yellow-500 rounded-xl text-white  font-serif'><b>Home - About us</b>
    </h1>
    </div>

     
  <div className='flex flex-wrap w-full p-10  items-center'>
     

      <div className='md:w-1/2 p-5 text-center col  border-r-8  border-b-8 border-amber-400 rounded-3xl pb-8 shadow-xl py-10' style={{ backgroundColor: '#f0ebeb' }}>
        <h1 className=' text-center sm:text-left text-3xl pb-5  text-[#404040] font-serif'>We Learn Smart Way To Build Bright Futute For Your Children</h1>
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
      className='w-full shadow-inner p-10 text-white font-medium text-center flex flex-wrap items-center justify-evenly h-[800px] md:h-[310px]' style={{backgroundColor:"#37d4e6"}}
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

     <div className='md:w-1/2 p-5 text-center col  border-l-8  border-b-8 border-amber-400 rounded-3xl pb-8 shadow-xl py-10' style={{ backgroundColor: '#f0ebeb' }}>
       <h1 className=' text-center sm:text-left text-3xl pb-5  text-[#404040] font-serif'>We Learn Smart Way To Build Bright Futute For Your Children</h1>
       <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       <br /><br />
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       </p>
     </div>

     
 </div>

<div>

<div>
  <p className='uppercase text-center text-orange-400'style={{fontWeight:"bold"}}>testimonial</p>
  <h1 className='text-center capitalize text-4xl font-serif '>parents are saying</h1>
  <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      autoplay={{ delay: 2000 }}
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
      {ratingData.map((data, index) => (
        <SwiperSlide key={index}>
          <Rating
            rating={data.rating}
            review={data.review}
            user={data.user}
            location={data.location}
            image={data.image}
            description={data.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
</div>

<div style={{backgroundColor:"#95c535"}} className='w-full text-center text-white mt-10 p-8 sm:p-16'>

  <p className='uppercase pb-2 sm:p-4 text-xs sm:text-base font-semibold' >contact us for a free consultation</p>
   <h1 className='capitalize text-lg sm:text-4xl  sm:p-5 font-serif'><b>let's talk about opportunities</b></h1>
   <p className='p-1 sm:p-4 sm:text-base w-1/2 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit distinctio unde velit obcaecati id quasi temporibus. Delectus, pariatur cumque nostrum minima, expedita, nesciunt ad nisi magni natus voluptas omnis. Quibusdam?</p>

   <div className=' mt-2 flex items-center justify-center gap-10'>
      <button className='bg-blue-500 p-3 rounded-3xl text-xs sm:text-lg'>Call Now</button>
      <button className='bg-white p-3 rounded-3xl text-xs sm:text-lg text-blue-500'>Contact Us</button>
   </div>

</div>
 
</div>
  

    
    </>

  )}
export default About