var student = [
    {
        firstname   :   "Andrew",
        lastname    :   "Garfield",
        Subjects:[
            {
                SubjectName: "Math",
                Grades:[
                    {
                    Term    :   "First Term",
                    Grade   :   5
                    },
                    {
                    Term    :   "Second Term",
                    Grade   :   3
                    },

                ] 
            },
            {
                SubjectName: "Science",
                Grades:[
                    {
                    Term    :   "First Term",
                    Grade   :   1.55
                    },
                    {
                    Term    :   "Second Term",
                    Grade   :   2.11
                    },

                ] 
            }
        ]
    },
    {
        firstname   :   "Benji",
        lastname    :   "Paras",
        Subjects:[
            {
                SubjectName: "Math",
                Grades:[
                    {
                    Term    :   "First Term",
                    Grade   :   4.13
                    },
                    {
                    Term    :   "Second Term",
                    Grade   :   2.11
                    },

                ] 
            },
            {
                SubjectName: "Science",
                Grades:[
                    {
                    Term    :   "First Term",
                    Grade   :   5
                    },
                    {
                    Term    :   "Second Term",
                    Grade   :   3
                    },

                ] 
            }
        ]
    },
    {
        firstname   :   "Tony",
        lastname    :   "Stark",
        Subjects:[
            {
                SubjectName: "Math",
                Grades:[
                    {
                    Term    :   "First Term",
                    Grade   :   3
                    },
                    {
                    Term    :   "Second Term",
                    Grade   :   5
                    },

                ] 
            },
            {
                SubjectName: "Science",
                Grades:[
                    {
                    Term    :   "First Term",
                    Grade   :   5
                    },
                    {
                    Term    :   "Second Term",
                    Grade   :   3
                    },

                ] 
            }
        ]
    },
];

var passedStudent = [];

student.forEach((Element)=>{
    // console.log(Element.firstname);
    let gradesPerSubject = Element.Subjects.map((subject)=>{
        const totalGrades = subject.Grades.reduce((prev,term)=>prev.Grade + term.Grade);

        return totalGrades;
    })
    const overAllGrade = gradesPerSubject.reduce((prev,current)=>prev + current);
    const averageGrade = overAllGrade / (Element.Subjects.length * 2); 
    // console.log(averageGrade);
    if( averageGrade >= 3.5 ){
        passedStudent.push({...Element,averageGrade: averageGrade.toFixed(2)})
    }
    // console.log(passedStudent);
});

const rankedStudents = passedStudent.sort((a,b)=>a.averageGrade - b.averageGrade);
console.log(rankedStudents.reverse());