const arr = [
    "Web Developer",
    "Refocus",
    "Web Developer",
    "Web Developer",
    "Refocus",
    "Awesome",
];

let webdev = 0;
let ref = 0;
let awe = 0;
arr.forEach((Element)=>{
    if(Element == "Web Developer" )
    {
        webdev += 1;
    }else if(Element == "Refocus")
    {
        ref += 1;
    }else{
        awe += 1;
    }
})
console.log(`Web Developer: ${webdev}, Refocus: ${ref}, Awesome: ${awe}`)