import React from 'react';

const italian = [
  {
    "dishName": "Pasta Carbonara",
    "typeOfCuisine": "Italian",
    "image": 'https://i.pinimg.com/564x/e0/e2/67/e0e2677cb75dd29f93ce17de3cc73731.jpg',
    "cookingIngredients": ["Pasta", "Eggs", "Pancetta", "Parmesan Cheese", "Black Pepper"],
    "simpleRecipe": "Cook pasta. In a separate bowl, beat eggs and mix with grated Parmesan. Cook pancetta until crispy. Combine pasta, pancetta, and egg mixture. Season with black pepper.",
    "timeDuration": "20 minutes"
  },
  {
    "dishName": "Margherita Pizza",
    "typeOfCuisine": "Italian",
    "image": 'https://i.pinimg.com/564x/0a/1b/ec/0a1bec5aaf513ecd82aeec0269f19f31.jpg',
    "cookingIngredients": ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Fresh Basil", "Olive Oil"],
    "simpleRecipe": "Spread tomato sauce on pizza dough. Add mozzarella cheese. Bake until crust is golden. Top with fresh basil and drizzle with olive oil.",
    "timeDuration": "30 minutes"
  },
  {
    "dishName": "Lasagna",
    "typeOfCuisine": "Italian",
    "image": 'https://i.pinimg.com/564x/43/26/68/432668a82636fbed0ff12842bff5b6bd.jpg',
    "cookingIngredients": ["Lasagna Noodles", "Ground Beef", "Tomato Sauce", "Ricotta Cheese", "Mozzarella Cheese"],
    "simpleRecipe": "Cook lasagna noodles. Brown ground beef and mix with tomato sauce. Layer noodles, beef mixture, and cheeses in a baking dish. Bake until bubbly.",
    "timeDuration": "1 hour"
  },
  {
    "dishName": "Tiramisu",
    "typeOfCuisine": "Italian",
    "image": 'https://i.pinimg.com/564x/cc/52/f0/cc52f00f9d02116b8292725d0a4e8faa.jpg',
    "cookingIngredients": ["Ladyfingers", "Mascarpone Cheese", "Coffee", "Cocoa Powder", "Sugar"],
    "simpleRecipe": "Dip ladyfingers in coffee. Layer with mascarpone cheese mixture. Repeat layers. Dust with cocoa powder. Refrigerate before serving.",
    "timeDuration": "4 hours"
  },
  {
    "dishName": "Risotto",
    "typeOfCuisine": "Italian",
    "image": 'https://i.pinimg.com/564x/e7/20/3d/e7203dd685720ab53be6e81830b4b3b1.jpg',
    "cookingIngredients": ["Arborio Rice", "Chicken Broth", "Onion", "White Wine", "Parmesan Cheese"],
    "simpleRecipe": "Sauté onion. Add rice and toast. Add white wine. Gradually add broth, stirring constantly. Stir in Parmesan cheese.",
    "timeDuration": "30 minutes"
  }
];

function Italian() {
  return (
    <div className="bg-blue-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Italian Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {italian.map((dish, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={dish.image} alt={dish.dishName} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-3xl font-bold mb-4">{dish.dishName}</h3>
                <p className="text-gray-700 mb-4"><strong>Ingredients:</strong> {dish.cookingIngredients.join(', ')}</p>
                <p className="text-gray-700 mb-4"><strong>Recipe:</strong> {dish.simpleRecipe}</p>
                <p className="text-gray-700"><strong>Time Duration:</strong> {dish.timeDuration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Italian;
