let yearExample = 1996;

function calculatorAge(year)
{
    return 2022 - year;
}

function checkIfEligibleToVote(year)
{
    return (2022 - year) >= 18;
}

function varCalc(year,fn)
{
    let newValue;
    newValue = fn(year);
    console.log(`Using ${fn}`);
    console.log(`The newValue is ${newValue}`);
    return newValue;
}

let age = varCalc(yearExample, calculatorAge);

let isEligible = varCalc(yearExample,checkIfEligibleToVote);

console.log(age);
console.log(isEligible);

