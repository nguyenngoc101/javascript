// Using closure to approximate private variables
// A common use of closures is to encapsulate some information as a "private level" of sorts
// in other words, to limit the scope of such variables.
function Ninja() {
  this.variable = 9;
  var feints = 0;
  this.getFeints = function(){
    return feints;
  };

  this.feint = function() {
    feints++;
  };
}

var ninja = new Ninja();
ninja.feint();

if (ninja.getFeints() == 1) {
  console.log("We're able to access the internal feint count.");
}

if (ninja.feints == undefined)
  console.log("the private data is inaccessible to us.")

// Callbacks and timers
