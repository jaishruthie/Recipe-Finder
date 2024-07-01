import React from 'react'
const indian = [
    {
        "dishName": "Butter Chicken",
        "typeOfCuisine": "Indian",
        "image":"https://i.pinimg.com/564x/1a/48/ce/1a48ce7b44d0ad670373fbc4773f477c.jpg",
        "cookingIngredients": ["Chicken", "Butter", "Tomato Sauce", "Cream", "Spices"],
        "simpleRecipe": "Marinate chicken in spices. Cook with butter and tomato sauce. Stir in cream. Serve with rice.",
        "timeDuration": "45 minutes"
      },
      {
        "dishName": "Naan",
        "typeOfCuisine": "Indian",
        "image":"https://i.pinimg.com/564x/46/b1/56/46b1561308484898d1b6fd572173e682.jpg",
        "cookingIngredients": ["Flour", "Yeast", "Yogurt", "Milk", "Butter"],
        "simpleRecipe": "Mix dough ingredients. Let rise. Roll out and cook on hot griddle. Brush with butter.",
        "timeDuration": "1 hour"
      },
      {
        "dishName": "Samosas",
        "typeOfCuisine": "Indian",
        "image":"https://i.pinimg.com/736x/d1/70/5f/d1705f1a4539042a521cfe97520d8a11.jpg",
        "cookingIngredients": ["Potatoes", "Peas", "Spices", "Flour", "Oil"],
        "simpleRecipe": "Mix filling ingredients. Fill dough and shape into triangles. Deep fry until golden.",
        "timeDuration": "30 minutes"
      },
      {
        "dishName": "Biryani",
        "typeOfCuisine": "Indian",
        "image":"https://i.pinimg.com/564x/c5/d2/62/c5d262f3377da91a7229772026a2ec5c.jpg",
        "cookingIngredients": ["Rice", "Chicken", "Yogurt", "Spices", "Onions"],
        "simpleRecipe": "Marinate chicken in yogurt and spices. Layer with rice and fried onions. Cook until rice is done.",
        "timeDuration": "1 hour"
      },
      {
        "dishName": "Chole",
        "typeOfCuisine": "Indian",
        "image":"https://i.pinimg.com/564x/7b/8b/9d/7b8b9d1bfe18c813629c8a6ede18fbc8.jpg",
        "cookingIngredients": ["Chickpeas", "Tomatoes", "Onions", "Spices", "Ginger"],
        "simpleRecipe": "Cook chickpeas. Make a sauce with tomatoes, onions, and spices. Combine with chickpeas. Serve with rice or bread.",
        "timeDuration": "45 minutes"
      }
]
function Indian() {
  return (
    <div className="bg-blue-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Indian Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {indian.map((dish, index) => (
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

export default Indian