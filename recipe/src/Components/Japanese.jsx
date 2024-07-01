import React from 'react'
const japanese = [
    {
    "dishName": "Sushi",
    "typeOfCuisine": "Japanese",
    "image":"https://i.pinimg.com/564x/b5/99/f3/b599f39f6ce185c624e63a0225f06d49.jpg",
    "cookingIngredients": ["Sushi Rice", "Nori", "Fish", "Vegetables", "Soy Sauce"],
    "simpleRecipe": "Cook sushi rice. Place on nori. Add fillings and roll. Slice and serve with soy sauce.",
    "timeDuration": "1 hour"
  },
  {
    "dishName": "Ramen",
    "typeOfCuisine": "Japanese",
    "image":"https://i.pinimg.com/564x/c4/7f/be/c47fbed04796b663e68a7f5b23b4cda5.jpg",
    "cookingIngredients": ["Ramen Noodles", "Broth", "Pork", "Egg", "Green Onions"],
    "simpleRecipe": "Cook noodles. Heat broth. Add noodles, toppings, and soft-boiled egg to bowl. Serve hot.",
    "timeDuration": "30 minutes"
  },
    {
    "dishName": "Tempura",
    "typeOfCuisine": "Japanese",
    "image":"https://i.pinimg.com/564x/05/8c/74/058c7489ca72bd7cd072b15a52c60350.jpg",
    "cookingIngredients": ["Shrimp", "Vegetables", "Flour", "Egg", "Oil"],
    "simpleRecipe": "Mix batter. Dip shrimp and vegetables in batter. Fry until golden and crispy. Serve with dipping sauce.",
    "timeDuration": "30 minutes"
  },
  {
    "dishName": "Teriyaki Chicken",
    "typeOfCuisine": "Japanese",
    "image"  : "https://i.pinimg.com/564x/3b/f0/76/3bf07682cb3c0b27b1db0865d173dd5c.jpg",
    "cookingIngredients": ["Chicken", "Soy Sauce", "Mirin", "Sugar", "Ginger"],
    "simpleRecipe": "Marinate chicken in soy sauce, mirin, sugar, and ginger. Grill or pan-fry until cooked through. Serve with rice.",
    "timeDuration": "25 minutes"
  },
  {
    "dishName": "Miso Soup",
    "typeOfCuisine": "Japanese",
    "image":"https://i.pinimg.com/564x/c6/7c/6d/c67c6d3c1c980a0d8abb4e4a3b7fd8ac.jpg",
    "cookingIngredients": ["Miso Paste", "Tofu", "Seaweed", "Green Onions", "Dashi"],
    "simpleRecipe": "Heat dashi broth. Add miso paste and stir until dissolved. Add tofu and seaweed. Garnish with green onions.",
    "timeDuration": "15 minutes"
  },
  {
    "dishName": "Yakitori",
    "typeOfCuisine": "Japanese",
    "image": "https://i.pinimg.com/564x/54/1b/96/541b96b9f3c8d424caf877d07f721138.jpg",
    "cookingIngredients": ["Chicken", "Soy Sauce", "Mirin", "Sugar", "Skewers"],
    "simpleRecipe": "Skewer chicken pieces. Grill while brushing with a mixture of soy sauce, mirin, and sugar. Serve hot.",
    "timeDuration": "20 minutes"
  },
  {
    "dishName": "Okonomiyaki",
    "typeOfCuisine": "Japanese",
    "image":"https://i.pinimg.com/564x/15/d8/ad/15d8adf8a8cb4fbf1c7808ef4fc4357f.jpg",
    "cookingIngredients": ["Cabbage", "Flour", "Eggs", "Pork Belly", "Okonomiyaki Sauce"],
    "simpleRecipe": "Mix cabbage, flour, and eggs to make batter. Pour batter onto griddle. Top with pork belly and cook until done. Drizzle with okonomiyaki sauce.",
    "timeDuration": "30 minutes"
  }
]

function Japanese() {
  return (
    <div className="bg-blue-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Japanese Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {japanese.map((dish, index) => (
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
  )
}

export default Japanese