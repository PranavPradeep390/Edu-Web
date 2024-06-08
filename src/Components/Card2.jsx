import React from 'react';
const dummyData = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ava Farrington',
    description: 'Teacher',
    
  },
  {
    id:2,
    imageUrl: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ava Farrington',
    description: 'Teacher',
    
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Alishia Fulton',
    description: 'Teacher',
    
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Lucas Martinez',
    description: 'Teacher',
    
  },
  // Add more dummy data as needed
];


function Card() {
  return (
    <>
   
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {dummyData.map((data) => (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-neutral-400">
        {/* Image */}
        <div className="relative h-56">
          <img
            // className="object-cover w-full h-full"
              className=" rounded-lg shadow-lg w-full h-full" style={{backgroundSize: "cover", 
              backgroundPosition: "center"}}
            src={data.imageUrl}
            alt={data.title}
          />
        </div>
        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h1 className="text-xl font-semibold text-gray-800 mb-2">{data.title}</h1>
          {/* Description */}
          <p className="text-gray-700 mb-4">{data.description}</p>
          {/* Author */}
          {/* <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src={data.authorImageUrl}
              alt={data.author}
            />
            <p className="text-sm text-gray-600">{data.author}</p>
          </div> */}
        </div>
      </div>
      ))}
    </div>



    </>
  );
}

export default Card;