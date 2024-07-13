import React from 'react';
import Search from '../components/Search';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <Search/>
      <div>
        <h1 className="text-2xl font-bold mb-4">Welcome to the Countries of the World App</h1>
        <p>Explore various countries and learn more about them.</p>
      </div>
    </div>
  );
};

export default Home;
