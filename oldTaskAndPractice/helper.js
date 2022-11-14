const Persons = {
    firstname: 'Dante',
    lastname: 'Satur'
}

const person = Persons.map(
    function(person){
        return person.firstname
    }
)

console.log(person.firstname)