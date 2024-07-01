

import React from 'react';
import { Link } from 'react-router-dom';

const cuisines = [
  { name: 'Italian', description: 'Delicious pasta, pizza, and more.', image: 'https://i.pinimg.com/736x/7c/66/7f/7c667f066925d45acb72a55b72155145.jpg' },
  { name: 'Chinese', description: 'Flavorful stir-fries, dumplings, and more.', image: 'https://i.pinimg.com/564x/87/c0/19/87c01971ce32af768719c251a7b7749f.jpg' },
  { name: 'Mexican', description: 'Spicy tacos, burritos, and more.', image: 'https://i.pinimg.com/564x/b6/0e/91/b60e911cddfbed39c9471fc98e569296.jpg' },
  { name: 'Indian', description: 'Aromatic curries, naan, and more.', image: 'https://i.pinimg.com/564x/6a/82/fe/6a82fe0632d344b8e458441ee5ba14ed.jpg' },
  { name: 'Japanese', description: 'Fresh sushi, ramen, and more.', image: 'https://i.pinimg.com/564x/09/31/42/093142048ac7cb113e20706b6deb42af.jpg' }
];

function Cuisines() {
  return (
    <section className="bg-blue-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Explore Cuisines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cuisines.map((cuisine, index) => (
            <Link to={`/${cuisine.name.toLowerCase()}`} key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={cuisine.image} alt={cuisine.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{cuisine.name}</h3>
                <p className="text-gray-700">{cuisine.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cuisines;
