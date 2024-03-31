import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">© {new Date().getFullYear()} Lento Studio. All rights reserved.</p>
        <p>Designed and Developed by Lento Studio</p>
      </div>
    </footer>
  );
};

export default Footer;