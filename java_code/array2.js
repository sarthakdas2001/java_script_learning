const marvel=['ironman','cpatain','hulk','strange','spiderman','doom','deadpool','wolverin']
const dcu=['superman','batman','wonderwoman','flash','blackadam','shazam','bluebetle']
//if we do like that
marvel.push(dcu)
console.log(marvel)
const all=marvel.concat(dcu) // it adds two arrays : marvel and dcu 
console.log(dcu)
const allnew=[...marvel,...dcu] //this method is wildely used as it can add more than 2 array into one single array 
console.log(allnew)
// suppose we have array like the below format
newarray=[3,35,67,32,13,[54,98,61],39,76,65,[90,50,18,20,[98,71,69]]]
newarray1=newarray.flat(1)
newarray2=newarray.flat(2)
newarray3=newarray.flat(Infinity)
console.log(newarray1)
console.log(newarray2)
console.log(newarray3)
console.log(Array.isArray(newarray1))
console.log(Array.from('sarthakdas'))
console.log(Array.from({name:"TonyStark"}))// interesting it will through an empty array