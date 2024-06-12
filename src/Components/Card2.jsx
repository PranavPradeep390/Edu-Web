import React from 'react';

const dummyData = [
  {
    id: 1,
    imageUrl: 'https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png',
    title: 'Ava Farrington',
    description: 'Teacher',
  },
  {
    id: 2,
    imageUrl: 'https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team1.png',
    title: 'Fulton Farrington',
    description: 'Teacher',
  },
  {
    id: 3,
    imageUrl: 'https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team3.png',
    title: 'Alishia Fulton',
    description: 'Teacher',
  },
  {
    id: 4,
    imageUrl: 'https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team1.png',
    title: 'Lucas Martinez',
    description: 'Teacher',
  },
  // Add more dummy data as needed
];

function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {dummyData.map((data) => (
        <div key={data.id} className="bg-white rounded-lg overflow-hidden">
          <div className="relative h-56 p-1">
            <img
              className="w-63% h-full mx-auto rounded-3xl"
              style={{ backgroundSize: "cover", backgroundPosition: "center" }}
              src={data.imageUrl}
              alt={data.title}
            />
          </div>
          <div className="p-6">
            <h1 className="text-xl text-center font-semibold text-[#12265a] mb-1">
              {data.title}
            </h1>
            <p className="text-gray-700 mb-4 text-center">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
