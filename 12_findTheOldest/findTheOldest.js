const findTheOldest = function(people) {
    let oldest_age = 0;
    let oldest_person;
    const current_year = new Date().getFullYear()
    
    for (let person of people){

        if ('yearOfDeath' in person){
            person.age = person.yearOfDeath - person.yearOfBirth;
        }else{
            person.age = current_year - person.yearOfBirth;
        };

        if (person.age > oldest_age){
            oldest_age = person.age;
            oldest_person = person;
        };
    };

    return oldest_person;

};

// Do not edit below this line
module.exports = findTheOldest;
