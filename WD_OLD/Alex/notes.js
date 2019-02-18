/* IF STATEMENTS */

// operators < > <= >= != == && ||

if(/*condition is true*/){
    //do something
}

if(/*condition is true*/){
    //do something
}
else{
    //do this
}

if(/*condition is true*/){
    //do something
}
else if(/*other condition*/){
    //do this
}
else{
    // if not conditions are true, do this
}

// Falsy values

if (false){}
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("")
if (``)

//DOUBLE EQUALS VS TRIPLE EQUALS

if("2" == 2) // turns number 2 into string and compares values. This yields TRUE

if("2" === 2) // explicitly checks data types and yields FALSE

//TEMPLATE STRINGS

const name = "Alex"

let str = `I am ${name} and I like turtles` // "I am Alex and  I like turtles"


