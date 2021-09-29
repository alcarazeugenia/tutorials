//Array destructuring
//The order defines which property we are taking out

[a, b] = ["Property1", "Property2"];
console.log(a) = "Property1";
console.log(b) = "Property2";

//Object destructuring
//The property name defines which one we are taking out

const someObject = {
    property1: "Property1",
    property2: "Property2"
};

const { property1 } = someObject;
console.log(property1); // "Property1"