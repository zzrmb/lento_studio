import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* <Navbar /> */}
      <header className="bg-cover bg-center h-screen relative" style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-white text-4xl font-bold">独立设计师的展示网站</h1>
          <p className="text-white text-xl mt-3">设计理念：简约、美观、非常有设计感</p>
        </div>
      </header>

      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8">设计理念</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          设计师的设计理念是将简约、美观和非常有设计感的元素结合在一起，以创造出独特且引人注目的作品。通过对空间、色彩和形状的巧妙运用，设计师致力于为客户提供富有创意和实用性的解决方案。在这里，您可以欣赏到设计师的一些精选作品，并了解更多关于设计师背后的故事和设计理念。
        </p>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;