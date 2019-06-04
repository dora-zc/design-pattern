/* class Product {
  constructor(name) {
    this.name = name;
  }
  init() {
    console.log(`${this.name} init...`);
  }
}

class Creator {
  create(name) {
    return new Product(name);
  }
}

// test
let creator = new Creator();
let p = creator.create('p1');
p.init(); */

class Product {
  constructor(name) {
    this.name = name
  }
  init() {
    console.log(`${this.name} init...`)
  }
}

class Creator {
  create(name) {
    return new Product(name)
  }
}

let c = new Creator();
c.create('xbl').init();
