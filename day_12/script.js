// while loop
let count = 0;
while(count <= 5){
    console.log(`Hello Print ${count + 1}`);
    count++;
}

let num = 1;
while (num <= 7) {
    console.log(num);
    num++;
}

// for loop
for(let i = 1; i <= 10; i++){
    console.log(i);
}

//continue
for(let i = 0; i < 15; i++){
    if(i === 8){
        continue;
    }
    console.log(i);
}

// break
for(let i = 0; i < 10; i++){
    if(i === 6){
        break;
    }
    console.log(i);
}