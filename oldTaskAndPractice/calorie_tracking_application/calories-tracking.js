// Running for 30 minutes burns 500 calories
// sam decides to run for 60 minutes (1 hour) every day in a week

//Store in a variables named caloriesPerHour the number of calories burned per hour

let caloriesPerHour = 1000; // running for 60 minutes burn 1000 calories

// count the number of times sam will run a week ans tore in a variable named numTimesSamRuns

let numTimesSamRuns = 7;

//store in a variable named runHourPerDay the number of hours sam has decided to run

let runHourPerDay = 1;

//compute the total number of hours of running in a week using numTimesSamRuns and runHoursPerDay
// and store the result in a variable named totalHourRunning

let totalHourRunning = numTimesSamRuns * runHourPerDay;

// Compute the total calories burned using caloriesPerHour and totalHourRunning
let totalCaloriesBurned = caloriesPerHour * totalHourRunning;

console.log(`Great work, Sam! after ${runHourPerDay} hour's of running everyday in a week, you lose a total of ${totalCaloriesBurned} calories.`);
//template literal