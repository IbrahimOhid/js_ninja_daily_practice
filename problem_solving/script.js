// avrMark  💛

// num < 33 return fail
// all arr num sum
// sum num divided by arr.length
// avgNum divided by 100
// avgNum result multiply 100

function avrMark(arr){
    let total = 0;
    for(num of arr){
        if(num > 33){
            return 'Fail !';
        }
        total += num;
    }
    const avrNumber = total / arr.length
    const percentage = avrNumber / 100;
    const result = percentage * 100;
    return Math.round(result)
     
}
console.log(avrMark([80, 40, 90, 70, 50, 33]));