const score=400
const bal=new Number(300)
const num= new Number(512.649562)
console.log(bal)
console.log(score)
console.log(score.toString()) // convert number into string
console.log(String(bal)) // convert number into string
/* now all the properties of string we can use */ 
console.log(num.toFixed(5)) // as you can see it just takes only 2 digits after the point it takes only 2 decimal values
console.log(bal.toFixed(3)) // as you can see it just takes only 3 digits after the point it takes only 2 decimal values
console.log(score.toFixed(1)) // as you can see it just takes only 1 digits after the point it takes only 2 decimal values
console.log(num.toPrecision(5))//output : 512.65
console.log(num.toPrecision(4))//output : 512.6
console.log(num.toPrecision(3))//output : 513
/* precision round off the number  */
const hun= 100000 // the value is 1 lakh or 100k
console.log(hun.toLocaleString()) // based on indian standards like lakhs and crore
console.log(hun.toLocaleString('en-US')) // based on US standards loke million and billion 