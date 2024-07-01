import React from 'react'
const mexican = [
    {
        "dishName": "Tacos al Pastor",
        "typeOfCuisine": "Mexican",
        "image":"https://i.pinimg.com/564x/bb/33/20/bb3320c05d301ba40235f75e8603212f.jpg",
        "cookingIngredients": ["Pork", "Pineapple", "Onion", "Corn Tortillas", "Cilantro"],
        "simpleRecipe": "Marinate pork with spices. Grill with pineapple. Serve on tortillas with onions and cilantro.",
        "timeDuration": "30 minutes"
      },
      {
        "dishName": "Guacamole",
        "typeOfCuisine": "Mexican",
        "image":"https://i.pinimg.com/736x/e1/ee/4c/e1ee4c96861cce095a06a881e0a2eda1.jpg",
        "cookingIngredients": ["Avocados", "Lime", "Onion", "Tomatoes", "Cilantro"],
        "simpleRecipe": "Mash avocados. Mix with lime juice, chopped onion, tomatoes, and cilantro. Serve with chips.",
        "timeDuration": "10 minutes"
      },
      {
        "dishName": "Quesadillas",
        "typeOfCuisine": "Mexican",
        "image":"https://i.pinimg.com/564x/76/f0/24/76f0246e27cdd71e7e84afa25921466e.jpg",
        "cookingIngredients": ["Flour Tortillas", "Cheese", "Chicken", "Bell Peppers", "Onions"],
        "simpleRecipe": "Place cheese and fillings on tortilla. Top with another tortilla. Cook on griddle until cheese melts.",
        "timeDuration": "15 minutes"
      },
      {
        "dishName": "Enchiladas",
        "typeOfCuisine": "Mexican",
        "image":"https://i.pinimg.com/564x/b7/73/e1/b773e18ce3910c2a22b9c2f3e033466e.jpg",
        "cookingIngredients": ["Corn Tortillas", "Chicken", "Enchilada Sauce", "Cheese", "Onions"],
        "simpleRecipe": "Fill tortillas with chicken and roll. Place in baking dish. Top with sauce and cheese. Bake until bubbly.",
        "timeDuration": "40 minutes"
      },
      {
        "dishName": "Churros",
        "typeOfCuisine": "Mexican",
        "image":"https://i.pinimg.com/564x/c0/06/84/c0068484fb762e434d45851b714331a3.jpg",
        "cookingIngredients": ["Flour", "Water", "Sugar", "Cinnamon", "Oil"],
        "simpleRecipe": "Mix flour and water. Pipe dough into hot oil. Fry until golden. Roll in cinnamon sugar.",
        "timeDuration": "30 minutes"
      }
]
function Mexican() {
  return (
    <div className="bg-blue-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Mexican Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {mexican.map((dish, index) => (
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

export default Mexican