zooObject = {
    "zoo_name" : "Manila Zoo",
    "zoo_description" : "",
    "arr_animals" : [
        {'animal_emoji':'🦁','animal_name':'Lion'},
        {'animal_emoji':'🐠','animal_name':'Fish'},
        {'animal_emoji':'🐍','animal_name':'Snake'}    
    ],
    "displayZooName" : function(){
        console.log(this.zoo_name);
    },
    "displayZooDescription" : function() {
        console.log(this.zoo_description);
    },
    "enumerateAnimals" : function() {

        for(animal of this.arr_animals){
            console.log(`Please welcome ${animal.animal_name} ${animal.animal_emoji}`)
        }
    }
}
zooObject.enumerateAnimals();