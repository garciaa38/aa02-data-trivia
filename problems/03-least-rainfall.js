/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `leastRainfall` Which cities have the least rainfall in a given month?

Write a function, `leastRainfall` that takes in the climate data and a month,
and returns an array of cities that have the least rainfall in that month. It
should include all cities that recieve less than 10 mm rainfall in that month.

For example, if there are three cities have less than 10 mm, the returned array
should look like:

[ "city1, country1: x mm", "city2, country2: x mm", "city3, country3: x mm" ]
(Each city's data is a formatted string data type).

Note: You can solve this in multiple ways. Try using a few advanced array
methods!

Hint: How can you identify and access the correct data for a month such as
"March"?
*/


function leastRainfall(climateData, month) {
    // Your code here
    let months = ['January', 'February', 'March',
                'April', 'May', 'June',
                'July', 'August', 'September',
                'October', 'November', 'December']
    let testedMonth = 0;
    for (let i = 0; i < months.length; i++) {
        if (months[i] === month) {
            testedMonth = i;
        }
    }

    //console.log(testedMonth);

    let leastRain = [];

    climateData.forEach(rainData => {
        let {city, country, monthlyAvg} = rainData;
        for (let i = 0; i < monthlyAvg.length; i++) {
            if (i === testedMonth) {
                let {rainfall} = monthlyAvg[i];
                if (rainfall < 10) {
                    leastRain.push(city + ', ' + country + ': ' + Math.floor(rainfall) + ' mm');
                }
            }
        }
    })
    return leastRain;
}

 console.log(leastRainfall(climateData, "August"));



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ leastRainfall ];
