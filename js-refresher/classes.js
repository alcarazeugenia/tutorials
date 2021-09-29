//Modern syntax
class Parent {
  parentProperty = "value";

  parentMethod = () => {
    //method logic
  };
}

class Child extends Parent {
  childProperty = "value";
  // no need of using super() anymore

  childMethod = () => {
    //method logic
  };
}

// Old syntax

class Parent {
  constructor() {
    // parent constructor
  }

  parentMethod() {
    //method logic
  }
}

class Child extends Parent {
  constructor() {
    super(); // with super you inherit parent constructor
    //child properties
  }

  childMethod() {
    //method logic
  }
}

const classChild = new Child();
//classChild now has Parent & Child properties and methods
