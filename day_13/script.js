for(let i = 0; i < 4; i++){
    for(let j = 1; j <= 5; j++){
        console.log(j);
    }
    console.log(i);
}

//for looping string
const name = 'Ibrahim';
for(let i = 0; i < name.length; i++){
    console.log(name[i]);
}

// for looping array
const userInfo = ['ibrahim', 27, 'Web Designer'];
for(let i = 0; i < userInfo.length; i++){
    console.log(userInfo[i]);
}

// for looping object

// for in use = object
const userDetails = {
    name : 'ibrahim',
    age : 27,
    profession: 'Web Engineer',
    location: 'eidgaon'
}

for(let key in userDetails){
    console.log(userDetails[key]);
}

// for of use = array, string
const data = ['ohid', 'rahim', 'karim', 22, 33, 24];
for(let element of data){
    console.log(element);
}

const names = 'Mohammad';
for(let user of names){
    console.log(user);
}


function printName(){
    const userName = ['rahim', 'anis', 'samim']
    for(let name of userName){
        console.log(`${name}!`);
    }
}
printName();