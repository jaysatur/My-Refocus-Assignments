const player = {
    "name" : "Jermaine",
    "items" : ["apple","Orange","Pineapple","Axe"],
    "isFilipino" : true,
    "sayGreeting": function(){
        console.log(`Hello! my name is ${this.name}`)
    }
}

player.sayGreeting(); 