// How would you be able to create your own .bind() method using call or apply.

// Hint:

// Function.prototype.bind = function(){
// }

// result by Aria in Opera:
Function.prototype.bind = function(context, ...args) {
    const originalFunction = this; // reference to the original function
  
    return function(...innerArgs) {
      return originalFunction.apply(context, [...args, ...innerArgs]);
    };
  };

  // result by Andrei:
  Function.prototype.bind = function(whoIsCallingMe){
    const self = this;
    return function(){
      return self.apply(whoIsCallingMe, arguments);
    };
  }