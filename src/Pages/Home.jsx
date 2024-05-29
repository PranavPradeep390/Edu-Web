import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Home() {
  return (
  <div> 
 <Swiper
    modules={[ Pagination]}
    spaceBetween={50}
    slidesPerView={1}
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
     <SwiperSlide style={{ backgroundImage: 'url("https://img.freepik.com/premium-vector/boy-pushing-lawn-mower-garden_1308-15108.jpg?w=360")',height:"600px",backgroundSize:"cover"}}>Slide 1</SwiperSlide>
 
    <SwiperSlide style={{ backgroundImage: 'url("https://img.freepik.com/premium-vector/boy-pushing-lawn-mower-garden_1308-15108.jpg?w=360")',height:"600px",backgroundSize:"cover"}}>Slide 2</SwiperSlide>
        
    <SwiperSlide style={{ backgroundImage: 'url("https://img.freepik.com/premium-vector/boy-pushing-lawn-mower-garden_1308-15108.jpg?w=360")',height:"600px",backgroundSize:"cover"}}>Slide 3</SwiperSlide>

    <SwiperSlide style={{ backgroundImage: 'url("https://img.freepik.com/premium-vector/boy-pushing-lawn-mower-garden_1308-15108.jpg?w=360")',height:"600px",backgroundSize:"cover"}}>Slide 4</SwiperSlide>

 </Swiper>
 
  <div className='flex flex-wrap w-full p-10 row'>
     <div className="md:w-1/2 p-5 col">
    <img 
        className="" 
        src="https://hellokidsmaruthankuzhi.com/images/about/about.png" 
        alt="About"
    />
     </div>

      <div className='md:w-1/2 p-5 text-center col'>
        <h1 className='pt-10 pb-10'>About Our KidsAcademy</h1>
        <p className='text-justify'>Hello Kids Maruthankuzhi is a renowned Montessori-based educational school, where children can experience the joy of learning. Our classrooms and equipment are designed to make children curious, independent, and love discovering new things. We have qualified teachers who create a supportive and interesting environment. They help children feel confident and think critically. We understand that every child develops at their own pace , so we allow them to learn at their own speed. Our education focuses on academics, social and emotional development, and practical life skills. We believe in keeping strong communication with parents and involving them in their child's education. Our campus is colourful, safe, and exciting for children to explore and learn. We provide age-appropriate materials, outdoor play areas, and activities that match each child's interests and needs. Come and see how Montessori education at Hello Kids Maruthankuzhi Montessori School can transform your child's future.</p>
      </div>
  </div>

  <div className='flex flex-wrap w-full'>
    <div className=' lg:w-1/4   p-5'>
        <h1 className='text-center pb-9'>Active Learning</h1>
        <p className='text-center'>At Hello Kids Montessori, we believe in promoting active learning through entertaining and interactive activities, enabling children to actively learn , discover, and form meaningful connections with the world around them.</p>
    </div>
    <div className='lg:w-1/4   p-5'>

        <h1 className='text-center pb-9'>Active Learning</h1>
        <p className='text-center'>At Hello Kids Montessori, we believe in promoting active learning through entertaining and interactive activities, enabling children to actively learn , discover, and form meaningful connections with the world around them.</p>
    </div>   

    <div className='lg:w-1/4   p-5'>
        <h1 className='text-center pb-9'>Active Learning</h1>
        <p className='text-center'>At Hello Kids Montessori, we believe in promoting active learning through entertaining and interactive activities, enabling children to actively learn , discover, and form meaningful connections with the world around them.</p>
    </div>

    <div className=' lg:w-1/4   p-5'>
        <h1 className='text-center pb-9'>Active Learning</h1>
        <p className='text-center'>At Hello Kids Montessori, we believe in promoting active learning through entertaining and interactive activities, enabling children to actively learn , discover, and form meaningful connections with the world around them.</p>
    </div>

  </div>

  
<div className=''>
    <h1 className='text-center tex'>Our Popular Classes</h1>
      <div className='flex flex-wrap w-full '>
        
        <div className=' lg:w-1/4   p-5'>
           <div style={{backgroundColor:"red"}}> <img className='p-5'  src="https://hellokidsmaruthankuzhi.com/images/Pre-NurseryPlay%20Group.png" alt=""  /></div>
           <div className='flex items-center justify-around'>
            <p className='text-sm p-3'>Years Old1.5</p>
            <p className='text-sm  p-3'>Affordable & <br /> Nominal Fees</p>
           </div>
           <div className='text-base text-center'>Pre-Nursery/Play Group</div>
            
        </div>
        <div className=' lg:w-1/4   p-5'>
           <div style={{backgroundColor:"red"}}> <img className='p-5'  src="https://hellokidsmaruthankuzhi.com/images/Pre-NurseryPlay%20Group.png" alt=""  /></div>
           <div className='flex items-center justify-around'>
            <p className='text-sm p-3'>Years Old1.5</p>
            <p className='text-sm  p-3'>Affordable & <br /> Nominal Fees</p>
           </div>
           <div className='text-base text-center'>Pre-Nursery/Play Group</div>
            
        </div>
        <div className=' lg:w-1/4   p-5'>
           <div style={{backgroundColor:"red"}}> <img className='p-5'  src="https://hellokidsmaruthankuzhi.com/images/Pre-NurseryPlay%20Group.png" alt=""  /></div>
           <div className='flex items-center justify-around'>
            <p className='text-sm p-3'>Years Old1.5</p>
            <p className='text-sm  p-3'>Affordable & <br /> Nominal Fees</p>
           </div>
           <div className='text-base text-center'>Pre-Nursery/Play Group</div>
            
        </div>
        <div className=' lg:w-1/4   p-5'>
           <div style={{backgroundColor:"red"}}> <img className='p-5'  src="https://hellokidsmaruthankuzhi.com/images/Pre-NurseryPlay%20Group.png" alt=""  /></div>
           <div className='flex items-center justify-around'>
            <p className='text-sm p-3'>Years Old1.5</p>
            <p className='text-sm  p-3'>Affordable & <br /> Nominal Fees</p>
           </div>
           <div className='text-base text-center'>Pre-Nursery/Play Group</div>
            
        </div>
    
      </div>
    
</div>

 <div>
    <h1 className='text-center text-5xl pt-5'>What Parents Say</h1>
     <Swiper
        // modules={[ Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        // pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className="p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus officia corrupti quisquam modi amet a, explicabo voluptatem praesentium vero. Molestiae, consequuntur. Recusandae similique accusamus explicabo quae velit placeat quidem.</p>
            <h4 className='text-red-700 text-xl'>Jolly Smith</h4>
        </SwiperSlide>
    
        <SwiperSlide className="p-5"> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus officia corrupti quisquam modi amet a, explicabo voluptatem praesentium vero. Molestiae, consequuntur. Recusandae similique accusamus explicabo quae velit placeat quidem.</p>
            <h4 className='text-red-700 text-xl'>Jolly Smith</h4>
        </SwiperSlide>
    
        <SwiperSlide className="p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus officia corrupti quisquam modi amet a, explicabo voluptatem praesentium vero. Molestiae, consequuntur. Recusandae similique accusamus explicabo quae velit placeat quidem.</p>
            <h4 className='text-red-700 text-xl'>Jolly Smith</h4>
        </SwiperSlide>
    
        <SwiperSlide className="p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus officia corrupti quisquam modi amet a, explicabo voluptatem praesentium vero. Molestiae, consequuntur. Recusandae similique accusamus explicabo quae velit placeat quidem.</p>
            <h4 className='text-red-700 text-xl'>Jolly Smith</h4>
        </SwiperSlide>
    
        <SwiperSlide className="p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus officia corrupti quisquam modi amet a, explicabo voluptatem praesentium vero. Molestiae, consequuntur. Recusandae similique accusamus explicabo quae velit placeat quidem.</p>
            <h4 className='text-red-700 text-xl'>Jolly Smith</h4>
        </SwiperSlide>
    
        <SwiperSlide className="p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus officia corrupti quisquam modi amet a, explicabo voluptatem praesentium vero. Molestiae, consequuntur. Recusandae similique accusamus explicabo quae velit placeat quidem.</p>
            <h4 className='text-red-700 text-xl'>Jolly Smith</h4>
        </SwiperSlide>
    
        <SwiperSlide className="p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus officia corrupti quisquam modi amet a, explicabo voluptatem praesentium vero. Molestiae, consequuntur. Recusandae similique accusamus explicabo quae velit placeat quidem.</p>
            <h4 className='text-red-700 text-xl'>Jolly Smith</h4>
        </SwiperSlide>
    
     </Swiper>
 </div>

  </div>
  )
}

export default Home