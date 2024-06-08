import React from 'react';
import StarIcon from '@mui/icons-material/Star';

function Rating({ rating, review, user, location, image,description }) {
  return (
    <div className='w-[340px] h-[350px] rounded-2xl text-center p-6 mx-auto m-5 border-t-4 border-y-4 border-green-400'style={{backgroundColor:"#f5ecda"}}>
        <div style={{ color: "goldenrod" }}>
            {Array.from({ length: rating }, (_, index) => (
                <StarIcon key={index} />
            ))}
        </div>
        <div>
            <p style={{ lineHeight: 1.5, marginTop: "10px",fontSize:"20px" }}>
                {review}
            </p>
        </div>
        <div className='mt-2'>
            <img className='rounded-full w-10 h-10 mx-auto' src={image} alt={user} />
            <p className='text-xl'>{user}</p>
            <p className='mt-2'>{location}</p>
            <p className='mt-5 font italic'>"{description}"</p>
        </div>
    </div>
  );
}

export default Rating;