const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(people) {
   
    let clone = people;

    //Adds age of deceased to object array
    for (let i = 0; i < people.length; i++) {
        if (people[i]['yearOfDeath'] != undefined) {
            people[i].age = (people[i]['yearOfDeath'] - people[i]['yearOfBirth']);
        } else if (people[i]['yearOfDeath'] == undefined) {
            people[i].age = utc() - people[i]['yearOfBirth'];
        }
        
    }

    //sorts objects based on age (youngest to oldest)
    for (let i = 0; i < people.length - 1; i++) {
        let tempAge = clone[i]['age'];
        let temp = clone[i];
        if (tempAge > clone[i + 1]['age']) {
            clone[i] = clone[i + 1];
            clone[i + 1] = temp;
        } 
    }


    //Finds current year
    function utc() {
        const dateObj = new Date(Date.now());
        const utcString = dateObj.toUTCString();
        const newDate = new Date(utcString);
        let currentYear = newDate.getUTCFullYear();
        return currentYear;
    }


    return clone[clone.length - 1];
};

    console.log(findTheOldest(people));
    //console.log()
// Do not edit below this line
module.exports = findTheOldest;
