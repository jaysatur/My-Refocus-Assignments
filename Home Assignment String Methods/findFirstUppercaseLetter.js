let firstUpperLetter = [];
function string(value){
    const upperLetter = value.split(" ");
    upperLetter.forEach((Element)=>{
        if(Element == Element.charAt(0).toUpperCase() + Element.slice(1)){
            firstUpperLetter.push(Element.charAt(0));
        }
    })
    if (firstUpperLetter.length == 0){
        console.log(`No Uppercase`);
    }else{
        console.log(firstUpperLetter[0])
    }
}
string("no more rainy days here, sun is about to show up");
string("there is a storm coming to the East of the Philippines");
