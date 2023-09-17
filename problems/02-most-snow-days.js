/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `citiesWithMostSnowDays` Which cities have the most snow days?

Write a function, `citiesWithMostSnowDays` that returns an array of objects,
that includes data on the cities that have the highest number of snow days
across all months.

For example, if the maximum number of snow days across all months is 10, and two
cities have 10 snow days each, the returned array would look like:

[
    { "city": "City Name 1, Country Name", "totalSnowDays": 10 },
    { "city": "City Name 2, Country Name", "totalSnowDays": 10 },
]

Note: You can solve this in multiple ways. Try using a few advanced array
methods!
*/


function citiesWithMostSnowDays(climateData) {
    // Your code here
    let allSnowDays = climateData.map(data => {
        let {city, country, monthlyAvg} = data;
        let snowData = {};
        let snowTotal = 0;
        monthlyAvg.forEach(snowAmount => snowTotal += snowAmount['snowDays']);
        snowData['city'] = city + ', ' + country;
        snowData['totalSnowDays'] = snowTotal;
        return snowData;
    })
    let mostSnowDays = [allSnowDays[0]];
    for(let i = 1; i < allSnowDays.length; i++) {
        let currSnowDay = allSnowDays[i]['totalSnowDays'];
        let maxSnowDay = mostSnowDays[mostSnowDays.length - 1]['totalSnowDays'];
        if (currSnowDay > maxSnowDay) {
            for (let j = 0; j <= mostSnowDays.length; j++) {
                mostSnowDays.shift();
            }
            mostSnowDays.push(allSnowDays[i]);
        } else if (currSnowDay === maxSnowDay) {
            mostSnowDays.push(allSnowDays[i]);
        }
    }
    return mostSnowDays;
}

 console.log(citiesWithMostSnowDays(climateData));


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ citiesWithMostSnowDays ];
