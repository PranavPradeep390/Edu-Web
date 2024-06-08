
import React, { useEffect, useState } from 'react';
import './imagegrid.css'; // Import CSS file for styling
import { Brightness3 } from '@mui/icons-material';

const dummyData = [
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mathematics Class',
     
    },
    {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Science Class',
     
    },
    {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mathematics Class',
    
    },
    {
      id: 4,
      imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mathematics Class',
      
    }, {
      id: 5,
      imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mathematics Class',
     
    },
    {
      id: 6,
      imageUrl: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Science Class',
     
    },
    {
      id: 7,
      imageUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mathematics Class',
    
    },
    {
      id: 8,
      imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mathematics Class',
      
    },
    {
      id: 9,
      imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mathematics Class',
     
    },
    {
      id: 10,
      imageUrl: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Science Class',
     
    },
    {
      id: 11,
      imageUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mathematics Class',
    
    },
    {
      id: 12,
      imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mathematics Class',
      
    },
  ];

function ImageGrid() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* <div className='flex flex-col justify-center items-center'>
        <h1 className='text-center sm:text-left text-4xl mt-6 pb-5 text-blue-500 uppercase font-semibold'>Gallery</h1>
      </div> */}
       <div className='flex-col' style={{ backgroundImage: 'url("https://images.pexels.com/photos/8422104/pexels-photo-8422104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',height:"400px",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:'center'}}>
    <h1 
    className='text-4xl uppercase mb-2 font-serif'><b>Gallery</b>
    </h1>
  
    <h1
    className='text-xl p-3 bg-yellow-500 rounded-xl text-white'><b>Home - Gallery</b>
    </h1>
    </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-14">
  {dummyData.map((data, index) => (
    <div key={index} className={`image-container ${isVisible ? 'visible' : ''}`}>
      <div
        className="image-wrapper shadow-2xl relative"
        style={{ 
          backgroundImage: `url(${data.imageUrl})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center",  
          minHeight: "300px" 
        }}
        onMouseEnter={(e) => e.currentTarget.querySelector('.p-container').classList.add('visible')}
        onMouseLeave={(e) => e.currentTarget.querySelector('.p-container').classList.remove('visible')}
      >
        <p className='p-container text-3xl font-semibold capitalize text-center absolute bottom-28 left-0 right-0 mb-4 p-2 ms-2 me-2 rounded-lg bg-white'>{data.title}</p>
      </div>
    </div>
  ))}
</div>

    </>
  );
}


export default ImageGrid;
