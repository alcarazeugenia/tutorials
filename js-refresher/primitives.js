const number = 2;

const auxiliary = number;

// The assignment of a primitive value will generate a copy of the value.

//However with objects and arrays (reference type), you just change the pointer. So every modification that you do in the "auxiliary" copy will actually modify the original object/array

const newObject = {
  property1: "Property 1",
};

const auxiliaryObject = newObject;

console.log(auxiliaryObject); // {property1: "Property 1"}

auxiliaryObject.property1 = "Change";

console.log(newObject); // {property1: "Change"}
