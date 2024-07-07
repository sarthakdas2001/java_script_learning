const score=400
const bal=new Number(300)
const num= new Number(512.649562)
console.log(Math.abs(-65)) // return absolute values
console.log(Math.round(8.6)) // round of values returns
console.log(7.2) // round of values returns 
console.log(Math.ceil(8.6)) // always return 9
console.log(Math.ceil(8.2)) // always return 9
console.log(Math.floor(8.6)) // always return 8
console.log(Math.floor(8.2)) // always return 8
console.log(Math.max(545,879,358,321))
console.log(Math.min(545,898,354,321))
console.log(Math.random()) //always returns a number lower than 1 but not less than 0
console.log(Math.floor(Math.random() * 10)) // Returns a random integer from 0 to 9
console.log(Math.floor(Math.random() * 100)) // Returns a random integer from 0 to 99
// to get a random number from range of number use the below formula
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)