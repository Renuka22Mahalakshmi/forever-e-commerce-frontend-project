import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const navigate = useNavigate();

  const shouldShowSearchBar = showSearch && (location.pathname === '/' || location.pathname.includes('collection'));

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearch(inputValue);

    if (location.pathname === '/') {
      navigate(`/collection?search=${encodeURIComponent(inputValue)}`);
    }
  };

  const handleSearch = () => {
    if (location.pathname !== '/') {
      setShowSearch(false);
    }
  };

  return shouldShowSearchBar ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={handleInputChange} 
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img onClick={handleSearch} className="w-4" src={assets.search_icon} alt="" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;