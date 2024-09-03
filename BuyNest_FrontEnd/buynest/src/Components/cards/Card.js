import React from 'react';
import myImage from '../../Accets/login.png';
const Card = ({ title, price, rating, description }) => {
  return (
    <div className="m-4 overflow-hidden border rounded-lg shadow-md border-secondary w-fit hover:shadow-2xl ">
      <img src={myImage} alt={title} className="object-cover w-full h-48" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-1 text-gray-600">{description}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">★★★★★</span>
          <span className="ml-2 text-gray-500">({rating})</span>
        </div>
        <p className="mt-2 text-lg font-bold text-gray-900">${price}</p>
        <button className="w-full py-2 mt-4 text-white bg-blue-500 rounded hover:bg-white">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
