import React from 'react'

function Contact() {
  return (
    <>
   
<div className='flex-col' style={{ backgroundImage: 'url("https://images.pexels.com/photos/8422104/pexels-photo-8422104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',height:"400px",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:'center'}}>
<h1 
    className='text-4xl uppercase mb-2 font-serif'><b>contact us</b>
    </h1>
  
    <h1
    className='text-xl p-3 bg-yellow-500 rounded-xl text-white'><b>Home - Contact us</b>
    </h1>
</div>
 
<form className=' row flex flex-wrap items-center lg:p-15 p-10'>

    <div className='col-lg-3 lg:p-20 p-5'>
        <div className='pb-5 pt-5'>
        <h1 className='text-2xl text-yellow-500'>Our Locations</h1>
        <p>Hellokids, Maruthankuzhi,<br />
        Thiruvananthapuram,Kerala.</p>
        </div>
        <div className='pb-5'>
        <h1 className='text-2xl  text-red-500'>Phone Number</h1>
        <p>8891231789 | 8891232789</p>
        </div>
        <div className='pb-5'>
        <h1 className='text-2xl  text-blue-500'>Email Address</h1>
        <p>nfo@Hellokidslavender.com</p></div>
    </div>
    <div className='col-lg-9 lg:p-20 p-5'>

       <div className='row pb-5'> 
       <input className='w-full m-1' type="text" placeholder='Name'/>
       </div>

      <div className='row pb-5'> 
            <input className='m-1' type="text" placeholder='Phone'/>
            <input className='mt-5 m-1' type="text" placeholder='Email'/>
      </div>

       <div>
            <textarea className='w-full m-1' name="" id="" placeholder='Message'></textarea>
       </div>
       <button className='p-3 mt-5 m-1' style={{backgroundColor:"purple",color:"white",fontSize:"15px"}}><b>Send Message</b></button>

    </div>
</form>

<div>

<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.4921693882093!2d76.87479683922123!3d8.548579991530245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bf9bca82635f%3A0x72d8ed7960ffc184!2sTechnopark%20Phase%203!5e0!3m2!1sen!2sin!4v1716787309117!5m2!1sen!2sin' style={{height:"500px", border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full'/>
</div>

    </>
  )
}

export default Contact