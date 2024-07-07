const a="interstellar"
const  b=new String("oppenhimer einstine hawkings")
const f ="    fvfsvdsvsv    "
console.log(a)
console.log(b)
console.log("__________________________________________1_________")
console.log(a.length)// shows us  the length of the string
console.log("__________________________________________2_________")
console.log(a.toUpperCase()) // it will make it into upper case letter
console.log("__________________________________________3_________") 
console.log(f.trim())  // it will remove the spces of string from both the sides
console.log("__________________________________________4_________")
console.log(a.replaceAll("r","@")) // it will remove all the r in the string
console.log("__________________________________________5_________")
console.log(a.replace("r","@"))  // As you can see it just removes only 1st r from the string
console.log("__________________________________________6_________")
console.log(a.indexOf("r")) // shows the index of the character which comes 1st
console.log("__________________________________________7_________") 
console.log(a.search("r")) // it also shows the index number of the character
console.log("__________________________________________8_________")
console.log(b.split()) // converts the string into array and the entire string will be a single element of the array
console.log("__________________________________________9_________")
console.log(b.split(" "))// split the string and converts into array where all the words are the elements of the array
console.log("__________________________________________10_________-")
console.log(a.split("")) // converts into a array where all the characters are the elements of the array
console.log("__________________________________________11_________")
console.log(a.split("").reverse().join("")) // it reverse the string
console.log(a.split("").sort().join("")) 
console.log(b.split(""))
d=b.split(" ")
console.log(d.join(""))