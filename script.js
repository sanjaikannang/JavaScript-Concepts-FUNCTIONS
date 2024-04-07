// Function declaration :

function add (a,b){
    console.log(a + b);
}
add(5,8);

//---------------------------------------------------------------------

// function expression :

const add = (a,b) => {
    console.log(a+b);
}
add(3,5);

// ---------------------------------------------------------------------

// Named Function 

function add (a,b){
    console.log(a+b);
}
add(5,6);

//---------------------------------------------------------------------

// Anonymous Function

const add = function (a,b){
    console.log(a+b);
}
add(3,5)

//---------------------------------------------------------------------

// Arrow Functions (ES6+)

const add = (a,b) => {
    console.log(a+b);
}
add(2,7)

//---------------------------------------------------------------------

// IIFE Function

(function (a,b){
   console.log(a+b);
})(3,2)

//---------------------------------------------------------------------

// Higher Order Function

function greet (name,callback){
    console.log("Hello I am" + name + "!!");
    callback()
}

function gokul (){
    console.log("I'm gokul");
}

greet("sanjai",gokul)

//---------------------------------------------------------------------

// Constructor Function

function rectangle (width, height){
    this.width = width;
    this.height = height;
    this.area = function(){
     return this.width * this.height;
    }
}

const result = new rectangle(100,50)
console.log(result);

//---------------------------------------------------------------------
// Generator function

function* idGenerator() {
    let index = 0;
    while (true) {
      yield index;
      index++;
    }
  }
  
  const gen = idGenerator();
  
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2

//---------------------------------------------------------------------
