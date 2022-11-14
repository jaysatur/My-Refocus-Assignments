function isAgeQualified(age)
{
    if(age <18)
    {
        console.log(`teenager allowance 100`);
    }
    else if (age >= 18 && age <=59 )
    {
        console.log(`Gurangers! You should work!`)
    }
    else  
    {
        console.log(`You are too old. Congratulation your are qualified!`)
    }
}

console.log(isAgeQualified(12));