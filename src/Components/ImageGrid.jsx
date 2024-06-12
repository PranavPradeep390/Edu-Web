import React, { useEffect, useState } from 'react';
import './imagegrid.css'; 

const dummyData = [
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mathematics Class',
      category: 'Mathematics'
    },
    {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Science Class',
      category: 'Science'
    },
    {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mathematics Class',
      category: 'Mathematics'
    },
    {
      id: 4,
      imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mathematics Class',
      category: 'Mathematics'
    },
    {
      id: 5,
      imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mathematics Class',
      category: 'Mathematics'
    },
    {
      id: 6,
      imageUrl: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Science Class',
      category: 'Science'
    },
    {
      id: 7,
      imageUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mathematics Class',
      category: 'Mathematics'
    },
    {
      id: 8,
      imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mathematics Class',
      category: 'Mathematics'
    },
    {
      id: 9,
      imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mathematics Class',
      category: 'Mathematics'
    },
    {
      id: 10,
      imageUrl: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Science Class',
      category: 'Science'
    },
    {
      id: 11,
      imageUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mathematics Class',
      category: 'Mathematics'
    },
    {
      id: 12,
      imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Mathematics Class',
      category: 'Mathematics'
    },
];

function ImageGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = selectedCategory === 'All' 
    ? dummyData 
    : dummyData.filter(data => data.category === selectedCategory);

  return (
    <>
      <div className="button-group text-center mb-8">
        <button className="filter-button" onClick={() => handleCategoryChange('All')}>All</button>
        <button className="filter-button" onClick={() => handleCategoryChange('Mathematics')}>Mathematics</button>
        <button className="filter-button" onClick={() => handleCategoryChange('Science')}>Science</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-14">
        {filteredData.map((data, index) => (
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
