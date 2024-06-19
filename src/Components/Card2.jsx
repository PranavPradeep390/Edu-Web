import React from 'react';
import user_dummy from '../Assets/user_dummy.jpg'

const dummyData = [
  {
    id: 1,
    imageUrl:user_dummy,
    title: 'Bushra B.A.',
    description: 'Principal',
    phone: 7736965145,
    qualification:'B.sc ,B.Ed',
    experience :"25 years experience in india & abroad"
  },
  {
    id: 2,
    imageUrl: user_dummy,
    title: 'Monisha Suresh',
    description: 'Teacher',
    phone: 7994598832,
    qualification:"B.A history, Montessori diploma course ",
    experience :"1 year oxford kids kamaleshwaram, 1year Tagore kindergarten Medical College "
  },
  {
    id: 3,
    imageUrl:user_dummy,
    title: 'Saleema L',
    description: 'Teacher',
    phone: 8714834800,
    qualification:"BA public administration Montessori diploma course ",
    experience :"4yeares caterpillar kindergarten.Anayara, 1 year Little Angels Anayara"
  },
  {
    id: 4,
    imageUrl: user_dummy,
    title: 'Nisa Naser',
    description: 'Teacher',
    phone: 7994598832,
    qualification:"BA English Montessori ppctcc",
    experience :"11 year Al Ameen school.kollam, 1 year Green Dom Balaramapuram, 1 year Alif school kamaleshwaram, 1year Tagore kindergarten Medical College"
  },
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

          <div className='hidden md:inline-block'>
              <p className="text-gray-700 mb-4 text-center">{data.phone}</p>
              <p className="text-gray-700 mb-4 text-center">Qualification: {data.qualification}</p>
              <p className="text-gray-700 mb-4 text-center">Experience: {data.experience}</p>
          </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
