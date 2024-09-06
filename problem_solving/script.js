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
//   const maxNumber = arr[0];
//   for (num of arr) {
//     if (num > maxNumber) {
//       maxNum = num;
//       return maxNum;
//     }
//   }

// Method - 2 💚
//return Math.max(...arr);

// Method - 3 💚
// return Math.max.apply(null, arr);

// Method - 4 💚
const max = arr.reduce((num, curr)=>{
    const maxNum  = num > curr ? num : curr;
    return maxNum;
})
return max;
}

console.log(maxNum([20, 3, 55, 10, 11, 33, 1]));
