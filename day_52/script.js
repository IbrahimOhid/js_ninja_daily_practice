// synchronous  💛
function one() {
  return 1;
}

function two() {
  return 2;
}

function three() {
  return 3;
}

console.log(two());
console.log(one());
console.log(three());

// asynchronous programming 💛
function four() {
  setTimeout(() => {
    console.log("Four");
    return 4;
  }, 2000);
}

function five() {
  setTimeout(() => {
    console.log("Five");
    return 5;
  }, 1000);
}

function six() {
  setTimeout(() => {
    console.log("Six");
    return 6;
  }, 3000);
}

console.log(four());
console.log(five());
console.log(six());

// asynchronous program method 💛💛💛

// callback
// promise
// async wait

// callback function 💚
function seven(fn) {
  setTimeout(() => {
    console.log("seven");
    fn(7);
  }, 2000);
}

seven((num) => {
  console.log(num);
});

function eight(fn) {
  setTimeout(() => {
    console.log("Eight");
    fn(8);
  }, 2000);
}

eight((num) => {
  console.log(num);
});

function nine(fn) {
  setTimeout(() => {
    console.log("Nine");
    fn(9);
  }, 2000);
}

nine((num) => {
  console.log(num);
});

// callback hell 💚💚💚
function ten(fn) {
  setTimeout(() => {
    fn(10);
  }, 2000);
}

function eleven(fn) {
  setTimeout(() => {
    fn(11);
  }, 2000);
}

function twelve(fn) {
  setTimeout(() => {
    fn(12);
  }, 2000);
}

ten((num1) => {
  console.log(num1);
  eleven((num2) => {
    console.log(num1 + num2);
    console.log(num2);
    twelve((num3) => {
      console.log(num1 + num2 + num3);
      console.log(num3);
    });
  });
});

// promise function 💚
function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 2000);
  });
}

a()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(505));
    }, 2000);
  });
}

b()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
