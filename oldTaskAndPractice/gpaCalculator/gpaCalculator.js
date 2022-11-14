var student = [ // List of Students and Grades
    ["Tony Stark", 80],
    ["Bruce Banner", 77],
    ["Thor Odison", 88],
    ["Steven Rogers", 95],
    ["Mark Spector", 68],
];

var avgMarks = 0; // Set to 0 just to have a safe initial value before adding

for ( var i = 0; i < student.length; i++){
    avgMarks += student[i][1]; // addint the grades
    var avg = avgMarks / student.length; // Average of the students grades
}

console.log('Average grade:' + avgMarks / student.length); // string concatenation
console.log(`Average grade: ${avgMarks / student.length}`); // Template literals

if (avg < 60)
{
    console.log(`Grade : F`)
}else if(avg < 70)
{
    console.log(`Grade : D`)
}else if(avg < 80)
{
    console.log(`Grade : C`)
}else if(avg < 90)
{
    console.log(`Grade : B`)
}else if(avg < 100)
{
    console.log(`Grade : A`)
}