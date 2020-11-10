import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Investigate the data above. Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

const finals2014 = fifaData.filter(function(item){
    return item.Year===2014 && item.Stage==="Final"
});

console.log(finals2014)


//(a) Home Team name for 2014 world cup final

console.log(finals2014[0]['Home Team Name'])

//(b) Away Team name for 2014 world cup final

console.log(finals2014[0]['Away Team Name'])

//(c) Home Team goals for 2014 world cup final

console.log(finals2014[0]['Home Team Goals'])

//(d) Away Team goals for 2014 world cup final

console.log(finals2014[0]['Away Team Goals'])

//(e) Winner of 2014 world cup final */

console.log(finals2014[0]['Win conditions'])


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
     const finalsData = data.filter(item => item.Stage==="Final")
return finalsData
}

console.log(getFinals(fifaData))


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinalsCB) {
    const years = getFinalsCB.map(item => item.Year)
    return years
}
console.log(getYears(getFinals(fifaData)))




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinalsCB) {
    const winners = [];
    getFinalsCB.forEach(function(item) {
        if(item['Home Team Goals']>item['Away Team Goals']){
            winners.push(item['Home Team Name'])
        } else if(item['Away Team Goals']>item['Home Team Goals']) {
            winners.push(item['Away Team Name'])
        } else {
            winners.push(`it was decided on pens`)
        }
        
    });
    return winners
}

    console.log(getWinners(getFinals(fifaData)))





/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinnersCB, getYearsCB) {
    const years = getYearsCB;
    const winner = getWinnersCB
    const winnerWithYear = years.map(function(item){
        return `In ${item}, ${winner} won the world cup!`
    });
    return winnerWithYear
    
}
console.log(getWinnersByYear(getWinners(fifaData), getYears(fifaData)))

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
   const avHomeGoals = data.reduce(function(acca, item){
    return (acca + item['Home Team Goals'])
   },0)
   const avAwayGoals = data.reduce(function(acca, item){
    return (acca + item['Away Team Goals'])
   },0)
   return `Average Home Goals = ${avHomeGoals}, Average Away Goals = ${avAwayGoals}`
}
console.log(getAverageGoals(fifaData))






/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}