var obj1 = {
  valueOfThis: function(){
    return this;
  }
}
var obj2 = {
  valueOfThis: ()=>{
    return this;
  }
}

obj1.valueOfThis(); // Will return the object obj1
obj2.valueOfThis(); // Will return window/global object

// The biggest difference between the traditional function expression and the arrow function is the handling of this keyword. By general definition, 
//this keyword always refers to the object that is calling the function. As you can see in the code above,
//obj1.valueOfThis() returns obj1 since this keyword refers to the object calling the function.

// In the arrow functions, there is no binding of this keyword. This keyword inside an arrow function does not refer to the object calling it. 
//It rather inherits its value from the parent scope which is the window object in this case. Therefore, in the code above, obj2.valueOfThis() returns the window object
