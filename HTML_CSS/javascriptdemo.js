/**
 * 
 */
 
 for (var i=0; i<10; i++){
    console.log("Hello world! number secuence...", i);
}


var numbers = [1,2,3]
for (i in numbers){
    var a = numbers[i];
    console.log("Number secuence;", i);

}


var varlength = "Hello world!"
var lenght = varlength.length
console.log(lenght)


var txt1 = "Hello "
var txt2 = "world"
var concat = txt1 + txt2
console.log(concat);

var txt3 = "Hello "
var concat2 = txt3.concat("World!!!!!!");
console.log(concat2)

var txt4 = "Hi there Messi, this is the number for you..."
var num = 10
var sum = txt4 + num
console.log(sum)


var txt5 = "Hello"
var pos = txt5.indexOf('o')
console.log(pos)

var txt6 = "Substring java function"
var str = txt6.substring(3,20)
console.log(str)

var v=['1','2','3','4','5']
var len = v.length
v2 = v.concat(6,7,8)
console.log(len)
console.log(v2)