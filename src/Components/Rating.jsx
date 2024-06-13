import React from 'react';
import StarIcon from '@mui/icons-material/Star';

function Rating({ rating, review, user, image,description }) {
  return (
    <div className='w-[240px] h-[350px] lg:w-[300px] lg:h-[400px]  rounded-2xl text-center p-6 mx-auto m-5 border-t-4 border-y-4 border-green-400'style={{backgroundColor:"#ebeef2"}}>
        <div style={{ color: "goldenrod" }}>
            {Array.from({ length: rating }, (_, index) => (
                <StarIcon key={index} />
            ))}
        </div>
        <div>
            <p style={{ lineHeight: 1.5, marginTop: "5px",fontSize:"27px",color:['#5a5e66'] }}>
                <b>{review}</b>
            </p>
        </div>
        <div className='mt-1 md:mt-7 flex flex-wrap md:gap-7 items-center justify-center'>
           <div className=''>
                <img className='rounded-full w-10 h-10 mx-auto ' src={image} alt={user} />              
                <p className='text-xl mb-1'>{user}</p>
           </div>
           <div className=''>
                
                <p className='bg-white p-2  rounded-2xl font italic w-60 '>"{description}"</p>
                {/* <ChatBubbleIcon className=''/> */}
           </div>
        </div>
    </div>
  );
}

export default Rating;