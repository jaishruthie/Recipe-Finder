import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <main className="bg-blue-100 min-h-screen flex items-center justify-center">
        <section id="home" className="text-center">
          <div className="max-w-lg px-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Discover Delicious Recipes</h2>
            <p className="text-lg text-gray-600 mb-8">Find the perfect recipe for any occasion. From quick weeknight dinners to gourmet meals, we have it all!</p>
            <Link to="/cuisines" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Browse Recipes
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
