const fruits = ['orange', 'banana', 'apple'];
console.log(fruits);

const userName = new Array('Rahim', 'Karim', 'Jisan');
console.log(userName);

console.log(new Array(2));
console.log(new Array(3,4,2));

const fruit = ['🍅','🍓','🍌','🍍','🍉','🥕','🌽'];
const len = fruit.length;
console.log(len);

console.log(len-1);
console.log(fruit[len-3]);
console.log(fruit[len-6]);

for(let i=0; i < fruit.length; i++){
    console.log(`Element at the Index ${i} is ${fruit[i]}`);
}

console.log(fruit.push('🥦'));
console.log(fruit);

console.log(fruit.unshift('🍆'));
console.log(fruit);


console.log(fruit.pop());
console.log(fruit);

console.log(fruit.shift());
console.log(fruit);

const newFruit = fruit.slice()
console.log(newFruit);
console.log(newFruit === fruit);

console.log(Array.isArray(fruit));