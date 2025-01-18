const findTheOldest = function(people) {
    const sortedArray = people.sort((a, b) => {
        const deathA = a.yearOfDeath || new Date().getFullYear();
        const deathB = b.yearOfDeath || new Date().getFullYear();
        const ageA = deathA - a.yearOfBirth;
        const ageB = deathB - b.yearOfBirth;
        if (ageA > ageB) {
            return -1;
        } else if (ageA < ageB) {
            return 1;
        } else {
            return 0;
        }
    });
    return sortedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
