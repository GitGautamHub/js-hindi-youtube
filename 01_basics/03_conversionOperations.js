let score="33abc"

let valueInNumber = Number(score);
console.log(typeof score);
console.log(typeof valueInNumber);
console.log(valueInNumber)

//"33" => 33
//"33abc" => NaN i.e Not A Number
//"true" => 1; false => 0

let isLoggedIn= 0

let booleanIsLoggedIn= Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

// 1=> true ; 0=> false
//"" => false 
//"gautam" => true

let someNumber= 33

let stringNumber= String(someNumber)
console.log(stringNumber)

//33=>"33"

// ***************** Operations ***********************

let value=3
let negValue= -value
console.log(negValue)
console.log(2+2)
console.log(2*2)
console.log(2/2)
console.log(2-2)
console.log(2^2)

let str1= "hello "
let str2 ="gautam"

console.log(str1+str2)


console.log(1+"2")
console.log("1"+2)
console.log("1"+2+2)
console.log(1+2+"2")

console.log(true) //true
console.log(true +2) // 3
console.log(+true) //1

let num1, num2,num3

num1=num2=num3=2+2

console.table([num1,num2,num3])