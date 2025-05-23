import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState('');

  const fetchProductData = () => {
    setLoading(true);
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!productData) {
    return <div>Product not found.</div>;
  }

  const handleImageChange = (newImage) => {
    setImage(newImage);
  };

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item) => (
              <img
                src={item}
                key={item}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
                onClick={() => handleImageChange(item)}  
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="Product Main" className="w-full h-auto" />
          </div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">{productData.name}</h2>
          <div className='flex items-center gap-1 mt-2'>
             <img src={assets.star_icon} alt="" className="w-3 5" />
             <img src={assets.star_icon} alt="" className="w-3 5" />
             <img src={assets.star_icon} alt="" className="w-3 5" />
             <img src={assets.star_icon} alt="" className="w-3 5" />
             <img src={assets.star_dull_icon} alt="" className="w-3 5" />
             <p className='pl-2'>(274)</p>
          </div>
          <p className="text-gray-600 mb-4 mt-2">{productData.description}</p>
          <p className="text-2xl font-bold mb-4">Price: ${productData.price}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-[#b392cd]' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>Handmade fabrics from India.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

     
      <div className='mt-20'>
         <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b> 
          <p className='border px-5 py-3 text-sm'>Reviews(274)</p>    
         </div>
         <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Forever is your destination for timeless style and enduring quality. We curate a diverse collection of fashion, home goods, and lifestyle products designed to last. Discover classic pieces that transcend fleeting trends, alongside modern essentials crafted with sustainable practices. </p>
          <p>At Forever, we believe in investing in items that enrich your life, offering both enduring style and lasting value. Experience seamless online shopping with secure transactions and reliable delivery. Find your forever favorites today.</p>
         </div>
      </div>

      
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  );
};

export default Product;