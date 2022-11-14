// const Username = document.querySelector("#username")
// const Password = document.querySelector("#password")
// const Submit = document.querySelector('#submit')
// const Msg = document.querySelector('#msg')

// Submit.addEventListener("click",function(e){
//     if(Username.value.length === 0 || Password.value.length ===0)
//     {
//         Msg.innerHTML = "<h1>Please Complete Details</h1>"

//         setTimeout(() => Msg.remove(),3000)

//     }
//     else
//     {
//         console.log('true')
//     }
// })


// const name = 'dante'
// const age = 26

// const string = `Hi my name ${name} and im ${age}`

// console.log(string)

// const student = [
//     {name: 'Juan', gender:'Male'},
//     {name: 'Mary', gender:'Female'},
//     {name: 'Ben', gender:'Male'},
//     {name: 'Joan', gender:'Female'},
// ]

// const new_student = {name:'Phia',gender:'Female'}

// console.log(student.push(new_student))
// console.log(student)

// const new_student_with_course = {...new_student,course:'computer science'}

// const new_students = student.map((students)=>{
//     return {...students,course:'computer science'}
// })

// console.log(new_students)




// <!--->
// var pageCounter=1
// var animals = document.querySelector('#animals')
// var submit = document.querySelector('#submit')
// submit.addEventListener('click',function(e){
//     var ourRequest = new XMLHttpRequest()
//     ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json')
//     ourRequest.onload = function()
//     {
//         var ourData = JSON.parse(ourRequest.responseText)
//         renderHTML(ourData)
//     }
//     ourRequest.send()
//     pageCounter++
//     if (pageCounter > 3)
//     {
//         submit.classList.add("hide-me")
//     }
// })

// function renderHTML(data)
// {
//     var htmlString = ""

//     for (i = 0; i < data.length; i++)
//     {
//         htmlString += `<p> ${data[i].name} is a ${data[i].species} that likes `

//         for (ii = 0; ii < data[i].foods.likes.length;ii++)
//         {
//             if(ii ==0)
//             {
//                 htmlString += `${data[i].foods.likes[ii]}`
//             }
//             else
//             {
//                 htmlString += ` , ${data[i].foods.likes[ii]}`   
//             }
//         }
//         htmlString +=' and disklikes ' 

//         for (ii = 0; ii < data[i].foods.dislikes.length;ii++)
//         {
//             if(ii ==0)
//             {
//                 htmlString += `${data[i].foods.dislikes[ii]}`
//             }
//             else
//             {
//                 htmlString += ` and ${data[i].foods.dislikes[ii]}`   
//             }
//         }

//         htmlString += `. </p>`
//         // htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>"
//     }
//     animals.insertAdjacentHTML('beforeend',htmlString)
// }
