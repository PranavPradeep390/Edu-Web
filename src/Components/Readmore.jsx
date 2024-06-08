import React from 'react';
import { useParams } from 'react-router-dom';

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

const Readmore = () => {
  const { id } = useParams();
  const card = dummyData.find(item => item.id === parseInt(id));

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-56">
          <img
            className="object-cover w-full h-full"
            src={card.imageUrl}
            alt={card.title}
          />
        </div>
        <div className="p-6" style={{ backgroundColor: "lavender" }}>
          <h1 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h1>
          <p className="text-gray-700 mb-4">{card.description}</p>
          <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src={card.authorImageUrl}
              alt={card.author}
            />
            <p className="text-sm text-gray-600">{card.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readmore;