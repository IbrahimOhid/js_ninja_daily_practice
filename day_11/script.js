// if else
const age = 18;
if(age >= 18){
    console.log('You Can Vote');
}
else{
    console.log('You Can not Vote');
}

// switch
const name = 'o';

switch(name){
    case 'rahim':
    console.log('another name')
    break;
    case 'ohid':
        console.log('my name')
        break;
    default:
        console.log('no name')
}

const user = 'mahir';

switch(user){
    case 'ibrahim':
    console.log(true);
    break;
    case 'mahir':
        console.log(false);
        break;
        default:
            console.log('no')
}

// ternary_operator
const num = 10;
const result = num === 20 ? 'Right' : 'Wrong';
console.log(result)