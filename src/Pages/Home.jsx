import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Card from '../Components/Card';
import { CircularProgress } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import Card2 from '../Components/Card2';
import Rating from '../Components/Rating';
import { Autoplay } from 'swiper/modules';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



function Home() {

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
  <div> 





<div className='w-full flex flex-wrap items-center justify-around pb-5' style={{backgroundColor:"#f5ced4"}}>

    <div className='text-center p-3 mt-20 sm:w-[600px] sm:text-left sm:ps-24'>
        <p className='text-xl'><span className='text-green-500 font-semibold'>PLAY.</span><span className='text-blue-500'>LEARN</span><span className='text-green-500'>.GROW</span></p>
        <h2 style={{lineHeight:"1.4"}} className='text-4xl capitalize font-semibold'>global learning experience at <span className='text-blue-500'>kids & kindergarden school</span></h2>
        <p className='text-center mt-2  sm:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat maiores culpa quae officiis, alias adipisci dolorum facere quos dicta eveniet, repudiandae consectetur? Dolor eos delectus debitis repudiandae optio nobis sequi</p>
       <div className='flex items-center justify-center gap-5 mt-7 sm:justify-start'>
            <div>
                <button className='p-2 w-28 bg-white rounded-3xl shadow-xl text-blue-500 font-semibold'>Enroll Now</button>
            </div>
            <div>
                <button className='p-2 w-28  bg-blue-500 shadow-xl text-white rounded-3xl font-semibold'>Careers</button >
            </div>
       </div>
    </div>
    <div className='mx-auto  sm:w-1/2'>
     <img src="https://cutesolution.com/html/rainbow2/assets/img/home-font.png" alt="" srcset="" />
    </div>

</div>
 
 
  <div className='flex flex-wrap w-full p-10 row'>
     <div className="md:w-1/2 p-5 col">
    <img 
        className=" mx-auto h-[270px] w-[400px] md:h-[400px] md:w-[500px] " 
        src="https://hellokidsmaruthankuzhi.com/images/about/about.png" 
        alt="About"
    />
     </div>

      <div className='md:w-1/2 p-5 text-center col border-l-8  border-b-8 border-amber-400 rounded-3xl shadow-2xl' style={{ backgroundColor: '#f0ebeb' }}
>
        <h1 className='pt-10 pb-8 text-4xl  text-[#404040] font-semibold font-serif'>About Our KidsAcademy</h1>
        <p className='text-justify' style={{lineHeight:"1.7"}}>Hello Kids Maruthankuzhi is a renowned Montessori-based educational school, where children can experience the joy of learning. Our classrooms and equipment are designed to make children curious, independent, speed. Our education focuses on academics, social and emotional development, and practical life skills. We believe in keeping strong communication with parents and involving them in their child's education. Our campus is colourful, safe, and exciting for children to explore and learn. We provide age-appropriate  play areas, and activities that match each child's interests and needs. Come and see how Montessori education at Hello Kids Maruthankuzhi Montessori School can transform your child's future.</p>
      </div>
  </div>

 
  <div className='p-14'style={{backgroundColor:"wheat"}}>
  <div className='flex flex-col justify-center items-center'>
    <h1 className=' text-center sm:text-left text-1xl pb-5 text-green-800'>ON GOING CLASSES</h1>
    <h1 className=' text-center sm:text-left text-3xl pb-5 text-[#404040] font-semibold font-serif'style={{fontSize:'33px'}}>Popular Classes</h1>
    </div>
  <Card/>
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

<div className='mt-9'>
  <h1 className='text-center capitalize text-4xl text-[#404040] font-semibold font-serif'>parents are saying</h1>
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

{/* gallery */}
<div className='w-full'>
  <h1 className='capitalize text-center text-4xl font-serif font-semibold text-[#404040] py-10'>gallery</h1>
  
<div className='w-full flex flex-wrap items-center justify-around gap-6 px-20'>
  <div className='border-l-8 border-red-600 rounded-2xl'><img src="https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-[200px] w-[300px] md:h-[300px] md:w-[300px] rounded-xl shadow-lg' /></div>
  <div className='border-l-8 border-red-600 rounded-2xl'><img src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-[200px] w-[300px] md:h-[300px] md:w-[300px] rounded-xl shadow-lg'  /></div>
  <div className='border-l-8 border-red-600 rounded-2xl'><img src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-[200px] w-[300px] md:h-[300px] md:w-[300px] rounded-xl shadow-lg' /></div>
  <div className='border-l-8 border-red-600 rounded-2xl'><img src="https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""className=' h-[200px] w-[300px] md:h-[300px] md:w-[300px] rounded-xl shadow-lg ' /></div>

</div>

<p className='text-center text-xl text-blue-700 m-5'><a href="/gallery">see more<ChevronRightIcon/></a></p>
</div>

  <div className='flex flex-wrap w-full p-10 row items-center'>
    

      <div className='md:w-1/2 p-5 text-center col  border-r-8  border-b-8 border-amber-400 rounded-3xl pb-8 shadow-xl' style={{ backgroundColor: '#f0ebeb' }}>
        <h2 className='pt-10 pb-10 text-4xl  text-[#404040] font-semibold font-serif'>Why Choose Us</h2>
        <h1 className='justify-start text-2xl mb-4 font-serif'>We Are Here to Help Parents Raise Happy and Healthy Children</h1>
        <p className='justify-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4"></h1>

      <div className='flex flex-wrap gap-6'>
      <div>
        <div className='w-50 h-15 font-semibold ms-9 sm:ms-0 rounded-lg shadow-inner border-l-green-500 border-l-4 bg-white p-6 mb-6'><p>Innovative Learning</p></div>
        <div className='w-50 h-15 font-semibold ms-9 sm:ms-0 rounded-lg shadow-inner border-l-green-500 border-l-4 bg-white  p-6 mb-6'><p> Safe Environment</p></div>
        <div className='w-50 h-15 font-semibold ms-9 sm:ms-0 rounded-lg shadow-inner border-l-green-500 border-l-4 bg-white p-6'><p>Experienced Educators</p></div>
      </div>
      <div>
        <div className='w-50 h-15 font-semibold ms-9 sm:ms-0 rounded-lg shadow-inner border-l-green-500 border-l-4 bg-white  p-6 mb-6'><p>Interactive Learning</p></div>
        <div className='w-50 h-15 font-semibold ms-9 sm:ms-0 rounded-lg shadow-inner border-l-green-500 border-l-4 bg-white p-6 mb-6'><p>Cultural Diversity</p></div>
        <div className='w-50 h-15 font-semibold ms-9 sm:ms-0 rounded-lg shadow-inner border-l-green-500 border-l-4 bg-white  p-6'><p>  Valued Education</p></div>
      </div>
      </div>
    </div>
      
      </div>

      <div className="md:w-1/2 p-5 col">
    <img 
        className=" mx-auto h-[270px] w-[400px] md:h-[400px] md:w-[500px]" 
        src="https://hellokidsmaruthankuzhi.com/images/about/about.png" 
        alt="About"
    />
     </div>
    


  </div>



  <div className='p-10' style={{backgroundColor:"wheat"}}>
  <div className='flex flex-col justify-center items-center'>
    <h1 className=' text-center sm:text-left text-2xl pb-5  mt-1'>Team Member</h1>
    <h1 className=' text-center sm:text-left text-3xl pb-5 text-[#404040] font-semibold font-serif'>Expert Teacher</h1>
    </div>
  <Card2/>
  </div>




  </div>
  )
}

export default Home