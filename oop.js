//I) Prototype

//object trong js
//console.log({}.constructor);

function Ninja() {
  this.swung = false;
  Ninja.prototype.swingSword = function() {
    return !this.swung;
  }
}


Ninja.prototype.swingSword = function() {
  return this.swung;
}
/* co the khai bao theo cach khac */
/* Ninja.prototype = { dance: function(){} } */

Ninja.prototype.swing = function() {
  return this.swung;
}
var ninja = new Ninja();
// co the khoi tao theo cach duoi day
// var ninja2 = new ninja.constructor();
// nhu vay cach goi Ninja.prototype <=> ninja.constructor.prototype vi Ninja <=> ninja.constructor

for (key in ninja) {
  if (ninja.hasOwnProperty(key)) {
    console.log("key inside: "+key);
  } else {
    console.log("key outside: "+key);
  }
}

console.log(ninja.constructor);
console.log(ninja.constructor.prototype)

for (key in ninja.constructor) {
  console.log("key inside: "+key);
}

//II) Inheritance and the prototype chain

function Person() {}
Person.prototype.dance = function(){}

function Ninja(){}
//Ninja.prototype = { dance: Person.prototype.dance };
Ninja.prototype = new Person(); //bat cu thay doi nao cua Ninja prototype, cung lam thay doi Person prototype vi chung tro den cung 1 object

var ninja = new Ninja();
if (ninja instanceof Ninja) {
  console.log("ninja object is an instance of Ninja");
}
if (ninja instanceof Person) {
  console.log("ninja object receives functionality from Person prototype");
}
if (ninja instanceof Object) {
  console.log(" ninja object receives functionality from Object prototype");
}

/*====================Inheritance Example==================*/

function People() {
  this.eat = function() {
    console.log("eating...............");
  }
};

function Student(){
  this.study = function() {
    console.log("studying..............");
  }
};

// ke thua ca cac thuoc tinh ben trong class People lan trong prototype People
Student.prototype = new People();
// ke thua chi prototype People
//Student.prototype = People.prototype;
Student.prototype.cry = function() {
  console.log("crying..................");
}
var people = new People();
var student = new Student();
console.log("==========People========");
for(var m in people) {
  console.log(m)
}
console.log("==========Student========");
for(var m in student) {
  console.log(m)
}

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(callback, context){
    for(var i=0; i < this.length; i++) {
      calback.call(context | null, this[i], i, this);
    }
  }
};

["a", "b", "c"].forEach(function(value, index, array){
  console.log("value: "+value +" "+ "index: "+index + " length:  " +(array.length - 1));
});

console.log("/*=== Create my own array ===*/");

function MyArray(){};
MyArray.prototype.length = 0;

var methods = ['push', 'pop', 'shift', 'unshift', 'slice', 'splice', 'join'];

/* ===khai bao tuong minh closure va emidiate function===*/
//function assign(name) {
//  MyArray.prototype[name] = function() {
//    return Array.prototype[name].apply(this, arguments);
//  }
//}

// Closure pitfalls: la loi thuong gap khi dung closure
//for(var i = 0; i < methods.length; i++) {
//    assign(methods[i]);
//}


/* ===khai bao ngan gon closure va imediate function===*/
for (var i=0; i < methods.length; i++) (function(name){
  MyArray.prototype[name] = function() {
    return Array.prototype[name].apply(this, arguments);
  }
})(methods[i]);
var mine = new MyArray();
mine.push(1,2,3);
console.log("mine.length: "+mine.length);
console.log("/*==========================*/");
// instantiation issues
function Test() {
  this.myFunction = function(){};
};
function check(){};
var test = new Test();
console.log(Object.getOwnPropertyNames(Function));
console.log(Object.getOwnPropertyNames(Function.prototype));
console.log(Object.getOwnPropertyNames(Test.prototype));
/*========================================================*/
