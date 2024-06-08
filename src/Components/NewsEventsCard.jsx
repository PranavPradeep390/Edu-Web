import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const dummyData = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mathematics Class',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
    author: 'Mona George',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Science Class',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'John Doe',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mathematics Class',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
    author: 'Mona George',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mathematics Class',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
    author: 'Mona George',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mathematics Class',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
    author: 'Mona George',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 6,
    imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Science Class',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'John Doe',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 7,
    imageUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mathematics Class',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
    author: 'Mona George',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 8,
    imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mathematics Class',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
    author: 'Mona George',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 9,
    imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mathematics Class',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
    author: 'Mona George',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 10,
    imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Science Class',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'John Doe',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 11,
    imageUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mathematics Class',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
    author: 'Mona George',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 12,
    imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mathematics Class',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
    author: 'Mona George',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 13,
    imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mathematics Class',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
    author: 'Mona George',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 14,
    imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Science Class',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'John Doe',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 15,
    imageUrl: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mathematics Class',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
    author: 'Mona George',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 16,
    imageUrl: 'https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mathematics Class',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor',
    author: 'Mona George',
    authorImageUrl: 'https://picsum.photos/200/300',
  },
  // Add more dummy data as needed
];

const ITEMS_PER_PAGE = 8;

function NewsEventsCard() {
  const [expanded, setExpanded] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dummyData.length / ITEMS_PER_PAGE);

  const toggleExpand = (index) => {
    setExpanded(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return dummyData.slice(startIndex, endIndex);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {getPaginatedData().map((data, index) => (
          <div key={data.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image */}
            <div className="relative h-56">
              <img
                className="object-cover w-full h-full"
                src={data.imageUrl}
                alt={data.title}
              />
            </div>
            {/* Content */}
            <div className="p-6" style={{ backgroundColor: "lavender" }}>
              {/* Title */}
              <h1 className="text-xl font-semibold text-gray-800 mb-2">{data.title}</h1>
              {/* Description */}
              <p className="text-gray-700 mb-4">
                {expanded[index] ? data.description : `${data.description.slice(0, 50)}...`}
                {data.description.length > 50 && (
                  <Link to={`/readmore/${data.id}`} className="text-blue-500 cursor-pointer">
                    Read more
                  </Link>
                )}
              </p>
              {/* Author */}
              <div className="flex items-center">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src={data.authorImageUrl}
                  alt={data.author}
                />
                <p className="text-sm text-gray-600">{data.author}</p>
                {/* <p>{data.id}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <button 
          onClick={handlePreviousPage} 
          disabled={currentPage === 1} 
          className="px-4 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages} 
          className="px-4 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsEventsCard;