import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';

function About() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: .8,
  });
  
  return (
    <>
    <div className='flex-col' style={{ backgroundImage: 'url("https://img.freepik.com/premium-vector/boy-pushing-lawn-mower-garden_1308-15108.jpg?w=360")',height:"300px",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:'center'}}>
    <h1 
    className='text-2xl uppercase'>About us
    </h1>
  
    <h1
    className='text-xl p-3 bg-yellow-500 rounded-full text-white'>Home-About us
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
      className='w-full p-0 text-white font-medium text-center bg-blue-400 flex flex-wrap items-center justify-evenly' 
      style={{height:"400px"}}
    >
      <div className='w-full sm:w-1/2 md:w-1/4'>
        
        <p className='text-5xl'>
          {inView && <CountUp end={20} duration={2.5} />}+
        </p>
        <p>Years of Excellence</p>
        <MilitaryTechIcon style={{color:"lightgray"}}/>
      </div>
      <div className='w-full sm:w-1/2 md:w-1/4'>
        
        <p className='text-5xl'>
          {inView && <CountUp end={50} duration={2.5} />}+<SchoolIcon style={{color:"lightgray",fontSize:"80px",marginRight:"20px"}}/>
        </p>
        <p>Qualified Teachers </p>
       
      </div>
      <div className='w-full sm:w-1/2 md:w-1/4'>
        
        <p className='text-5xl'>
          {inView && <CountUp end={500} duration={2.5} />}+
        </p>
        <p>Students Enrolled</p>
        <PersonIcon style={{color:"lightgray"}}/>
      </div>
      <div className='w-full sm:w-1/2 md:w-1/4'>
        
        <p className='text-5xl'>
          {inView && <CountUp end={15} duration={2.5} />}+
        </p>
        <p>Total Award</p>
        <EmojiEventsIcon style={{color:"lightgray"}}/>
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

  

    
    </>

  )}
export default About