
var num = 971

function reverseNumber(num){
  let reverseNum=0
  let n=num;
    while(n>0){
    let rem = n%10
    reverseNum=reverseNum*10+rem
    n=Math.floor(n/10)
    }
    return reverseNum;
}

console.log(reverseNumber(num))
