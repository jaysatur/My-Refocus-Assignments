const empy_arrr = [];
const shopping_list = ['bag','newspaper'];
console.log(shopping_list[1]);

//console.log(shopping_list[starting_index]);

for(let starting_index = 0; starting_index < 2; starting_index = starting_index + 1)
{
    console.log(shopping_list[starting_index]);
}

//for of code

for(item in shopping_list)
{
    console.log(shopping_list[item]);
}

//array has its own properties and methods

console.log(shopping_list.length);


// // add items using .push

shopping_list.push('umbressla');

console.log(shopping_list.length)
console.log(shopping_list)
