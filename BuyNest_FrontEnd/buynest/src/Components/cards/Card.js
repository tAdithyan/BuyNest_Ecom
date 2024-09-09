import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../Accets/login.png'

const Card = ({ productdetails }) => {
  const { imageUrl, products_name,description, rating, price } = productdetails;

  return (
    <div className="m-4 overflow-hidden border rounded-lg shadow-md border-secondary w-fit hover:shadow-2xl">
      <img src={imageUrl || defaultImage } alt={products_name} className="object-cover w-full h-48" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{products_name}</h2>
        <p className="mt-1 text-gray-600">{description}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">★★★★★</span>
          <span className="ml-2 text-gray-500">({rating})</span>
        </div>
        <p className="mt-2 text-lg font-bold text-gray-900">${price}</p>
        <button className="w-full py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
