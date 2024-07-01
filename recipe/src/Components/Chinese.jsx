import React from 'react'
const chinese = [
    {
        "dishName": "Kung Pao Chicken",
        "typeOfCuisine": "Chinese",
        "image" : 'https://i.pinimg.com/564x/84/44/59/84445918f1330ab0ed6491a11afa5d10.jpg',
        "cookingIngredients": ["Chicken", "Peanuts", "Bell Peppers", "Soy Sauce", "Sichuan Peppercorns"],
        "simpleRecipe": "Marinate chicken in soy sauce. Stir-fry chicken, peanuts, and bell peppers. Add Sichuan peppercorns. Serve with rice.",
        "timeDuration": "30 minutes"
      },
      {
        "dishName": "Spring Rolls",
        "typeOfCuisine": "Chinese",
        "image" : "https://i.pinimg.com/564x/63/1b/31/631b31068f2e5ed3b9e2782c4d77c278.jpg",
        "cookingIngredients": ["Spring Roll Wrappers", "Cabbage", "Carrots", "Bean Sprouts", "Soy Sauce"],
        "simpleRecipe": "Stir-fry vegetables. Fill wrappers with vegetables. Roll and seal. Deep fry until golden. Serve with dipping sauce.",
        "timeDuration": "30 minutes"
      },
      {
        "dishName": "Sweet and Sour Pork",
        "typeOfCuisine": "Chinese",
        "image" : "https://i.pinimg.com/564x/7d/2f/0f/7d2f0f4ee533a8348fe9ba545bdf5285.jpg",
        "cookingIngredients": ["Pork", "Pineapple", "Bell Peppers", "Vinegar", "Sugar"],
        "simpleRecipe": "Coat pork in batter and fry. Stir-fry bell peppers and pineapple. Add vinegar and sugar. Combine with pork.",
        "timeDuration": "30 minutes"
      },
      {
        "dishName": "Fried Rice",
        "typeOfCuisine": "Chinese",
        "image": "https://i.pinimg.com/564x/23/dd/89/23dd892733a352ee05e6c7a14b9d9a0c.jpg",
        "cookingIngredients": ["Rice", "Eggs", "Peas", "Carrots", "Soy Sauce"],
        "simpleRecipe": "Scramble eggs. Stir-fry peas and carrots. Add rice and soy sauce. Combine with eggs. Stir-fry until heated through.",
        "timeDuration": "20 minutes"
      },
      {
        "dishName": "Dumplings",
        "typeOfCuisine": "Chinese",
        "image":"https://i.pinimg.com/564x/1f/57/0f/1f570fac19d91244a1f7a9fea732170b.jpg",
        "cookingIngredients": ["Dumpling Wrappers", "Ground Pork", "Cabbage", "Ginger", "Soy Sauce"],
        "simpleRecipe": "Mix pork, cabbage, and ginger. Fill wrappers with mixture. Seal and steam or boil until cooked.",
        "timeDuration": "30 minutes"
      }
]
function Chinese() {
  return (
    <div className="bg-blue-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Chinese Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {chinese.map((dish, index) => (
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

export default Chinese