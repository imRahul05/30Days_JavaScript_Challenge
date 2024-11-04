const input = [1, 2, 3, 4, 5];


const output = input.map((x)=> x*x);
console.log(output)



const input2 = [1, -4, 12, 0, -3, 29, -150];
let sum=0;
const output2 = input2.filter((x)=> {
    if(x>0){
     sum+=x;
    }
});
console.log(output2)