// Each number from 1 to 100 needs to be checked, and the remainders of both n/3 and n/5 should be compared
//let countMultiple = 0
// using for loop, scan through number from 1 to 100.
        // check if the number is divisible by 3 using modulo (m%3 === 0)
        // check if number is divisible by 5 using modulo (n%5 === 0)
        // make sure both of the condition are satisfied using logical And && 
            // if both conditions are satisfied, increment countMultiples by 1
        // console.log the countMultiples

let start = 1;
let end  = 100;

function countMultiplesBetween(start,end)
{
    let countMultiple = 0;
    for(let i=start; i <= end; i++)
    {
        if( ((i % 3) === 0 ) && ((i % 5) === 0 ))
        {
            countMultiple = countMultiple + 1;
        }
    }
    console.log(`The number of values that are divisible by 3 and 5 is ${countMultiple}`)
}

console.log(countMultiplesBetween(1,100))