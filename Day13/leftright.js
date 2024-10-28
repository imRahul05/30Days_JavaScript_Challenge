function leftRight(left,right){
    let str=""
 for(let i= left;i<=right;i=i*2){
    if(i<=right){
       str+=i + " "
    }
 }
 console.log(str)
}

leftRight(45,450);