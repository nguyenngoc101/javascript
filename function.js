function Ninja() {
  console.log("aaaaaaaaaaaaaaaaaaaaaa");
  var feints = 0;
  this.getFeints = function() {
    return feints;
  };

  this.feint = function() {
    feints++;
  };
}

var ninja = Ninja();

function test() {
  return 5;
}

var my_function = test()
console.log(my_function);
/*
var ninjas = {
  values: ["Dean Edwards", "Sam Stephenson", "Alex Russell"]
};

addMethod(ninjas, "find", function(){
  return ninjas.values;
});

addMethod(ninjas, "find", function(name){
  var ret = [];
  for (var i = 0; i < ninjas.values.length; i++)
    if (ninjas.values[i].indexOf(name) == 0)
      ret.push(ninjas.values[i]);
return ret;
});

addMethod(ninjas, "find", function(first, last){
  console.log("this.value: "+ninjas.values);
  var ret = [];
  for (var i = 0; i < ninjas.values.length; i++)
    if (ninjas.values[i] == (first + " " + last))
      ret.push(ninjas.values[i]);
return ret;
});

function addMethod(obj, name, fn) {
  var old = obj[name];
  obj[name] = function() {
  console.log("fn.length: "+fn.length);
  console.log("arguments: "+arguments.length);
    if (fn.length == arguments.length)
      return fn.apply(arguments);
    else if (typeof old == "function")
      return old.apply(this, arguments);
  };
}

console.log(ninjas.find(1,2));
*/
/*
obj1 = {"name": "obj1"}
obj2 = {"name": "obj2"}

function myFunction(arg) {
  console.log("arg: "+arg);
  console.log("argments: "+arguments);
  console.log(this);
}


myFunction.apply(obj1, [1, 2, 3, 4]);
myFunction.apply(obj2, [1, 2, 3, 4]);
myFunction.call(obj1, 1, 2, 3);
myFunction.call(obj2, 1, 2, 3);
*/
/*
function addMethod(object, name, fn) {
  var old = object[name];
  object[name] = function() {
    if (fn.length == arguments.length)
      return fn.apply(this.arguments)
    else if (typeof old == 'function')
      return old.apply(this, arguments);
        )
  };
}
*/
/*
function makeNinja(name) {}
function makeSamurai(name, rank){}
if (makeNinja.length == 1) {
  console.log("Only expecting a single argument");
}

if (makeSamurai.length == 2) {
  console.log("Two arguments expected");
}

function multiMax(multi) {
  return multi * Math.max.apply(Math,
      Array.prototype.slice.call(arguments, 1));
}

if (multiMax(3,1,2,3) == 9) {
  console.log("First arg, by largest.");
}
function merge(root) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      root[key] = arguments[i][key];
    }
  }
  return root;
}

var merged = merge(
    { name: "Batou" },
    { city: "Niihame" });
merge();
console.log(merged);

var biggest = Math.max(1,2);
console.log(biggest);
var biggest = Math.max(1,2,3);
console.log(biggest);
var biggest = Math.max(1,2,3,4,5,6,7,8,9,2058);
console.log(biggest);
var biggest = Math.max([1, 2, 0]);
console.log(biggest);

function smallest(array) {
  return Math.min.apply(Math, array);
}

function largest(array) {
  return Math.max.apply(Math, array);
}

console.log(smallest([1,2,0]));
console.log(largest([1,2,0]));
var elems = {
  length: 0,
  add: function(elem) {
    Array.prototype.push.call(this, elem);
  },

  gather: function(elem) {
    this.add(document.getElementById(id));
  }
};

elems.gather("first");
if ((elems.length == 1) && (elems[0].nodeType)) {
  console.log("Verify that we have an element in our stash");
}

elems.gather("second");
if ((elems.length == 2) && (elems[1].nodeType)) {
  console.log("Verify the other insertion");
}
//Self-memoizing function
function isPrime(value) {
  if ((isPrime.answers == null)) isPrime.answers = {};
  if (isPrime.answers[value] != null) {
    return isPrime.answers[value];
  }
  var prime = value != 1;
  for (var i = 2; i < value; i++) {
    if (value % i == 0) {
      prime = false;
      break;
    }
  }
  return isPrime.answers[value] = prime;

}
console.log(isPrime(3));
console.log(isPrime(2));
console.log(isPrime(4));
//Storing function
var store = {
  nextId: 1,
  cache: {},
  add: function(fn) {
    if (!fn.id) {
      fn.id = store.nextId++;
      return !!(store.cache[fn.id] = fn);
    }
  }
};

function ninja(){};
console.log(store.add(ninja));
console.log(store.add(ninja));
if (store.add(ninja)) {
  console.log("Function was sately added.");
}

if (!store.add(ninja)){
  console.log("But it was only added once.");
}
*/
/*
var obj = {}
var fn = function(){
  for (var pro in this) {
    console.log(pro);
  }
};

obj.prop = "Nguyen Van Ngoc";
fn.prop = "Nguyen Van A";
fn();
console.log(fn);

var ninja = function myNinja() {
  console.log("ninja==myNinja: "+(ninja == myNinja));
}
ninja();
function hehe() {
}
console.log(typeof myNinja);

var ninja = {
  chirp: function signal(n) {
    return n > 1 ? signal(n-1) + "-chirp" : "chirp";
  }
};

var samurai = {chirp: ninja.chirp, bark: "go go"};
ninja = {};
try {
  console.log(samurai.chirp(3) + "Is this going to work");
} catch(e) {
  console.log("Uh, this isn't good!, Where'd ninja.chirp go?");
}


function junggle() {
  var result = 0;
  for (var n = 0; n < arguments.length; n++){
    result += arguments[n];
  }
  this.result = result;
}

function forEach(list, callback) {
  for (var i = 0; i < list.length; i++) {
    callback.call(list[i], i);
  }
}

var weapons = ['shuriken', 'katana', 'nunchucks'];
forEach(weapons, function(index){
    console.log("this: "+this)
    console.log("index: "+index);
  }
);

function fibonaci(n){
  if (n < 2) return n;
  else return fibonaci(n-1) + fibonaci(n-2);
}

console.log(fibonaci(10));

*/
