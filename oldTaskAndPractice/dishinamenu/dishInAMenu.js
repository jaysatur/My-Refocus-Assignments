restaurant = {
    "restaurant_name": "Jay's Eatery",
    "dishes" : [
    {
        'dishID'        :   '01',
        'dishName'      :   'Pakbet',
        'dishPrice'     :   500,
        'ingredients'   :   ['Pork','Eggplant','Garlic','Tomato','Onion','Shrimp Paste','Okra']
    },
    {
        'dishID'        :   '02',
        'dishName'      :   'Sinigang',
        'dishPrice'     :   450,
        'ingredients'   :   ['Pork','Tamarin','Knorr','Tomato','Water Spinach','Taro','Onion']
    },
    {
        'dishID'        :   '03',
        'dishName'      :   'Tinola',
        'dishPrice'     :   350,
        'ingredients'   :   ['Chicken','Papaya','Chayote','Chili Pepper','Water','Garlic','Ginger']
    },
],
"displayRestaurantName" : function(){
    console.log(this.restaurant_name);
},
"displayMenu":function(){
    restaurant.displayRestaurantName();
    console.log(`\n`)
    for(dish of this.dishes)
    {
        console.log(`${dish.dishName} , ₱${dish.dishPrice}`);
        console.log(`Contains ${dish.ingredients} \n`)
    }
}
}
restaurant.displayMenu();