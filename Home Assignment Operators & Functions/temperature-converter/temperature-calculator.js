// 1. Declare the function
// 2. Use the formula C = ( F - 32) / 1.8 to perform the conversion .Store the results into a new variable named tempCelsius.
//3. return the calculated value. (Use return keyword)

function convertToCelsius(tempFahrenheit)
{
    let tempCelsius = (tempFahrenheit - 32 ) / 1.8;
    return tempCelsius;
}

console.log(convertToCelsius(84)) // 84 F = 28.88 C
console.log(convertToCelsius(95)) // 95 F = 35 C