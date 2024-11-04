const users = [
    { firstName: 'John', lastName: 'Doe', age: 27, gender: 'male' },
    { firstName: 'John', lastName: 'Doe', age: 77, gender: 'male' },
    { firstName: 'Joe', lastName: 'Biden', age: 80, gender: 'male' },
];

const output = users.reduce((max, user) => {
    if (user.age > max.age) {
        max = user;
    }
    return max;
}, { age: 0 });

console.log('User with max age:', output);



// const output2 = users.filter((x)=>{
//     if(x.age>40){
//        console.log(x.firstName) 
//     }
// })


const output2 = users.filter((x)=>x.age>40)


console.log(output2.map((x)=>x.firstName))




const output3 = users.reduce((max, user) => {
    if (user.age > max.age) {
        max = user;
    }
    return max.firstName;
}, { age: 0 });