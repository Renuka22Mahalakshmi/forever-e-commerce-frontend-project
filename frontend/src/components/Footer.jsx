import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Curated finds, delivered to your doorstep: discover beauty in the
            everyday. Where artistry meets commerce, and your style finds its
            home. Elevating online shopping with thoughtful selections and a
            touch of elegance.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/about">Delivery</Link>
            </li>
            <li>
              <Link to="/about">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1 548 522 5489</li>
            <li>contact@forever.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@forever.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;