import React from 'react'
import StarIcon from '@mui/icons-material/Star';

function Rating() {
  return (
    <>
    <div className='w-[340px] h-[350px] bg-slate-100 rounded-2xl text-center p-6 mx-auto m-5'>
        <div style={{color:"goldenrod"}}>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
        </div>
        <div>
            <p style={{lineHeight:1.5,marginTop:"10px",fontWeight:"lighter"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, deleniti, quas nam eaque debitis officiis magni, aspernatur tempore fugiat veritatis ducimus soluta omnis hic voluptates non quam a? Sapiente, adipisci?</p>
        </div>
        <div className='mt-2' > 
                <img className='rounded-full w-10 h-10 mx-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s" alt=""  />
                <p>USER</p>
                <p>Germany</p>
        </div>
    </div>
    </>
  )
}

export default Rating