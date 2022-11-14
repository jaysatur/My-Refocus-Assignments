
function startAnAquarium(numFishes)
{
    //initialize the value of numFishes
    console.log(`There are ${numFishes} in this aquarium`);

    function addfish()
    {
        //updates the number of numFishes by incrementing it by 1
        numFishes = numFishes + 1;
        console.log(`One fish added! We now have ${numFishes} in the Aquarium!`);
    }
    return addfish;
}

//test the startAnAquarium

const aquarium_example = startAnAquarium(25);

aquarium_example();
aquarium_example();
aquarium_example();