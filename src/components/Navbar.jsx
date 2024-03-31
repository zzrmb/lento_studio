import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Lento Studio
          </Link>
          {/* <div className="flex space-x-4">
            <Link to="/portfolio" className="text-gray-600 hover:text-gray-800">
              作品
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-800">
              联系方式
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-800">
              设计师介绍
            </Link>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;