import { useEffect, useState } from 'react';
import Card from '../cards/Card';
import axios from 'axios';

const Product_Carousel = ({ heading, url }) => {
  const [products, setProducts] = useState([]);
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const apiUrl = process.env.REACT_APP_API_BASE_URL;


       const response = await axios.get(`${apiUrl}/${url}`);

        setProducts(response.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [url]);

  return (
    <div className='relative p-6'>
      <p className='text-2xl font-bold text-secondary'>{heading}</p>
{loading ? <p>Loading....</p> :<div className='flex overflow-x-scroll overflow-y-hidden hide-scrollbar items-center justify-start w-full h-[50vh]'>
        {products.length === 0 ? (
          <p className="w-full text-center">No products available</p>
        ) : (
          products.map((item) => (
            <div key={item.id} className='flex-none w-[300px] h-full mx-2'>
              <Card productdetails={item} />
            </div>
          ))
        )}
      </div>}

    </div>
  );
};

export default Product_Carousel;
