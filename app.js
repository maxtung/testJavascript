console.log("Hello World.");

// number
var number = 1 + 3;
console.log(number);

// string
var abc;
abc =  "abc";
console.log(abc);

var name = "Navicat";
console.log(name);

// undefined 变量
var a1;
console.log(a1);

// global 变量
b = 2;
console.log(b);

// 变量提升无效?
console.log(c1);
var c1 = 3;

// if 语句
if (b === 3) {
    console.log("b = 2");
} else {
    console.log("b <> 2");
}

// switch 语句
var name = "abcdedf";
switch (name) {
    case "Navicat":
        console.log("name = Navicate");
        break;
    case "abc":
        console.log("name = abc");
        break;
    default:
        console.log("name = default");
}

// 三元 语句
var name = "abc";
var d = (name==="abc")? 1 : 2;
console.log(d);

// while 循环
var counter = 1;
while (counter <= 10) {
    console.log(counter);
    counter++;
}

// for 循环
for (var i=1; i<=10; i++) {
    console.log("i=" + i);
}

// do 循环
var i = 1;
do {
    console.log("Hi");
    if (i == 2) break;
    i++;
} while (i<=3)

// typeof 语句
var e1 = 1;
var e2 = "string";
var e3 = true;
var e4 = undefined;
var e5 = null;

var e6 = function() {
    console.log("typeof(e6)");
}
console.log(typeof(e1));
console.log(typeof(e2));
console.log(typeof(e3));
console.log(typeof(e6));

// 各种进制数值
var f1 = 0O10;
var f2 = 0X10;
var f3 = 0B1110;
console.log(f1);
console.log(f2);
console.log(f3);

var g = 3 - "x";
console.log(g);

// NaN
console.log(NaN == NaN);
console.log(isNaN(NaN));

console.log(parseInt("123.12"));
console.log(parseFloat("123.12"));

// Array
var p =  new Array();
p[0] = 1;
p[1] = "Mike";
console.log(typeof(p));
console.log(p);

// object
var o = new Object();
o.id = 10;
o.Name = "Jack";

console.log(typeof(o));
console.log(o);

var q1 = {
id:10,
name:"Jones"
}

q1.start = function(name) {
    console.log("start a " + name);
}

console.log(typeof(q1));
console.log(q1);
q1.start("car");

// catch exception
try {
    adddlert("Welcome guest!");
} catch(err) {
    console.log("error: " + err);
}

// Date
var date = new Date().getFullYear();
console.log(date);

// Math
console.log(Math.round(4.7));
console.log(Math.random());

console.error("this is a error information.")；