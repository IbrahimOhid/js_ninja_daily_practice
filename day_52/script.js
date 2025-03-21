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
  .catch((err) => {
    console.log(err);
  });

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
  .catch((err) => {
    console.log(err);
  });

function c() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve(2)
      reject(new Error(404));
    }, 2000);
  });
}
c()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });


  // promise hell 💛🧡
function d() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 2000);
  });
}

function e() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 2000);
  });
}

function f() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 2000);
  });
}

d()
  .then((num5) => {
    console.log(num5);
    e()
      .then((num6) => {
        console.log(num6);
        console.log(num5 + num6);
        f()
          .then((num7) => {
            console.log(num7);
            console.log(num5 + num6 + num7);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });


  const x = Promise.resolve(5);
  x.then((data)=>{
    console.log(data)
  })
  .catch((err)=>{
    console.log(err);
  })


  const y = Promise.reject(4);
  y.then((data)=>{
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  })

 function twenty(){
    // return Promise.resolve(3);
    return Promise.reject(404);
  }

  twenty()
  .then((data)=>{
    console.log(data)
  })
  .catch((err)=>{
    console.log(err);
  });

  // promise all 💛💛💛
  const p = Promise.reject(1);
  const q = Promise.reject(2);
  const r = Promise.resolve(3);

  Promise.all([p,q,r])
  .then((data)=>{
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  })

  // promise race 💛💛💛
  Promise.race([p,q,r])
  .then((data)=>{
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  })