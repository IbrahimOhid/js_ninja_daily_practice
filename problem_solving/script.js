// avrMark  💛

// num < 33 return fail
// all arr num sum
// sum num divided by arr.length
// avgNum divided by 100
// avgNum result multiply 100

function avrMark(arr) {
  let total = 0;
  for (num of arr) {
    if (num > 33) {
      return "Fail !";
    }
    total += num;
  }
  const avrNumber = total / arr.length;
  const percentage = avrNumber / 100;
  const result = percentage * 100;
  return Math.round(result);
}
console.log(avrMark([80, 40, 90, 70, 50, 33]));

// maximum number find in array 💛

function maxNum(arr) {
  // Method - 1 💚
  let maxNumber = arr[0];
  for (num of arr) {
    if (num > maxNumber) {
      maxNumber = num;
      return maxNumber;
    }
  }

  // Method - 2 💚
  //return Math.max(...arr);

  // Method - 3 💚
  // return Math.max.apply(null, arr);

  // Method - 4 💚
  // const max = arr.reduce((num, curr)=>{
  //     const maxNum  = num > curr ? num : curr;
  //     return maxNum;
  // })
  // return max;
}

console.log(maxNum([20, 3, 55, 10, 11, 33, 1]));

// minimum number find in array

function minNum(arr) {
  // Method - 1 💚
  // let minNumber = arr[0];
  // for(let num of arr){
  //     if(num < minNumber){
  //         minNumber = num;
  //         return minNumber;
  //     }
  // }
  //Method - 2 💚
  //   return Math.min(...arr);
  //Method - 3 💚
  // return Math.min.apply(this, arr)
  //Method - 4 💚
    const min = arr.reduce((arg, curr)=>{
        const minNumber = arg < curr ? arg : curr;
        return minNumber;
    })
    return min;
}
console.log(minNum([22, 1, 33, 44, 100, 99]));
