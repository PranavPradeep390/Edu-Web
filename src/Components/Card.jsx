import React from 'react';
const dummyData = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mathematics Class',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Mona George',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Science Class',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'John Doe',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mathematics Class',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Mona George',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mathematics Class',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Mona George',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  // Add more dummy data as needed
];


function Card() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {dummyData.map((data) => (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image */}
        <div className="relative h-56">
          <img
            className="object-cover w-full h-full"
            src={data.imageUrl}
            alt={data.title}
          />
        </div>
        {/* Content */}
        <div className="p-6" style={{backgroundColor:"lavender"}}>
          {/* Title */}
          <h1 className="text-xl font-semibold text-gray-800 mb-2">{data.title}</h1>
          {/* Description */}
          <p className="text-gray-700 mb-4">{data.description}</p>
          {/* Author */}
          <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src={data.authorImageUrl}
              alt={data.author}
            />
            <p className="text-sm text-gray-600">{data.author}</p>
          </div>
        </div>
      </div>
      ))}
    </div>
    </>
  );
}

export default Card;