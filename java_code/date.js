let mydate=new Date()
console.log(typeof(mydate))
console.log(mydate.toString())//output:Tue Jul 09 2024 11:43:38 GMT+0000(CoordinatedUniversalTime)
console.log(mydate.toDateString())// output : Tue Jul 09 2024
console.log(mydate.toISOString()) // output : 2024-07-09T11:47:55.183Z
console.log(mydate.toJSON()) // output : 2024-07-09T11:47:55.183Z
console.log(mydate.toLocaleString())//output: 7/9/2024, 11:51:00 AM
console.log(mydate.toLocaleDateString())// output: 7/9/2024
// Note : In javascripts months start from 0
// if i write in the below format
let ndate= new Date("12-30-2024") // the mm-dd-yy 
console.log(ndate.toLocaleString()) // now the month is start from that means 1 mean januaryk
let time=Date.now()
console.log(time) 
console.log(ndate.getTime())
console.log(mydate.getDate())
console.log(mydate.getDay()) // starts from 0
console.log(mydate.getMonth()) // starts from 0