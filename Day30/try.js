// function printNatural(n1,n2){
//     // for(let i=n1;i<=n2;i++)
//     //     console.log(i)
// let i =n1
//     while(i<=n2){
//         console.log(i)
//         i++
//     }
// }

// printNatural(10,20)

//factors of a number

// let n=12
// let count=0
// function findFactors(n){
//     for(let i=1;i<=n;i++){
//         if(n%i==0)
//             count++
//     }

// }

// findFactors(12)
// console.log(count)

// let n=12
// let count=0
// function CheckPrime(n){
//     for(let i=2;i<n;i++){
//         if(n%i==0)
//             count++
//     }

// }

// CheckPrime(12)
// if(count>0)
//     console.log('Not prime')
// else
// console.log(' prime')

// let n1=12
// let n2 = 25

// function CheckPrime(n){
//     for(let i=n1;i<n2;i++){
//         if(n%i==0)
//             count++
//     }

// }

// CheckPrime(12)
// if(count>0)
//     console.log('Not prime')
// else
// console.log(' prime')

// function Divison(n){

//     if(n===0)
//         return -1
//     else if(n>0){
//          let val = 32/n
//          return val.toFixed(2)
//     }
//     else
//       return n
// }

// console.log(Divison(12))

// function check(num){
//     if(num%35===0){
//         console.log("Masai School");
//     }
//     else if(n%5===0)
//         console.log("School")
//     else if (n%7===0)
//         console.log("Masai")
//     else
//          console.log("Hurray!")
// }

// check(35)

// function unitsPrice(num){

//     let price = 0
//     let rem =0
//     if(num>=151){
//         rem = num
//         price+= 50*3
//         rem  = num-50

//         if(rem<=100)
//           price+=rem*5
//         else{
//             price+=100*5
//             rem=rem-100
//             price+=rem*10

//         }
//     }

//      else if(num>=51 && num<=150){

//         rem = num
//         price+=50*3
//         rem = num-50

//         price+=rem*5
//      }
//      else if(num>0&&num<=50)
//        price+=num*3

//         return price+80
//     }

// console.log(unitsPrice(50))

// console.log(unitsPrice(152))

// console.log(unitsPrice(170))

// let obj = {
//     name :'rahul',
//     age: 23,
//     place:'Bihar'
// }

// for(let keys in obj){
//     console.log(keys, obj[keys])
// }

// let ipl = {
//     rcb :'kohli',
//     csk: 'MSD',
//     mi:'rohit',
//     lsg: 'pant',
//     srh: 'cummins'
// }
// let count=0
// for(let keys in ipl){
//    count++
// }
// console.log(count)

// let obj = {
//   name: "Rahul",
//   age: 22,
//   grade: "A",
//   isGraduate: true,
//   school : 'TBRS'
// };

// for (let key in obj) {
//   if (typeof obj[key]==="string") {
//     console.log(key, obj[key]);
//   }
// }

// let obj = {
//    bread:2,
//    milk:1.5,
//    cheese:5
//   };
  
//   for (let key in obj) {
    
//       obj[key] = obj[key]-(obj[key]*10)/100
//       console.log(key,obj[key])
//     }
  
// function Occurance(obj){
//     let a=0,b=0,c=0;
//     for(let i = 0; i < obj.length; i++){
//       //
//         console.log(obj[i])
//         if(obj[i]==='a')
//             a++
//         else  if(obj[i]==='b')
//             b++
//         else  if(obj[i]==='c')
//             c++

//     }
    
//     console.log(`a = ${a} :: b = ${b} :: c = ${c}`)

// }

// console.log(Occurance('abbccc'))


// function frequecy(str){

//     let name ={}
//     for(let i=0;i<str.length;i++){
//         let char = str[i]
//        //  console.log(char)
//          if(name[char] === undefined){
//           name[char]=1
//          // console.log(name[char])
//          }else{
//          name[char]++
//          }
           
           
//     }


//  console.log(name)

// for(let keys in name){
//     console.log(`${keys} is printed ${name[keys]} times.`)
// }



// }


// console.log(frequecy('aaaabbbcccdddfff'))


// function frequency(str){

//     let name ={}
//     for(let i=0;i<str.length;i++){
//         let char = str[i]
//          if(name[char] === undefined){
//           name[char]=1
//          }else{
//          name[char]++
//          }
           
           
//     }

// // Removed unused loop
// let count=0
// for(let keys in name){
//     if(name[keys]===1){
//         console.log(`${keys} is repeating only ${name[keys]} times.`)
//         count++
//         break;

//     } 
// }
// if(count==0)
//     console.log('null')
// }
// frequency('swwiiss')



// let rock ={
//     name:'tyrion',
//     age:17,
//     getDetails:function(){
//         return `${rock.name}  and  ${this.age}`
//     },
//     address:{
//         getPlace:function(){
//            console.log(rock.name)
//         }
//     }
// }


// console.log(rock.getDetails())
// console.log(rock.address.getPlace())


// let rectangle = {
//     length:10,
//     breadth:20,
//     perimeter:function(){
//         return `The perimeter of rectangle is ${2*(this.length+this.breadth)}`
//     }
// }


// console.log(rectangle.perimeter())

// let bankAccount = {
//     accountHolderName:'Maximus',
//     balance:20000,
//     deposit:function(value){
//        this.balance = this.balance+value
//        return  `Balance :: ${this.balance}`
//     },
//     withdraw:function(value){
//         if(value>this.balance)
//             return `You are Broke`
//         else{
//             this.balance = this.balance-value
//             return `Updated balance :: ${this.balance}`
//         }
//     }
// }


// console.log(bankAccount.deposit(1000))
// console.log(bankAccount.withdraw(10000))
// console.log(bankAccount.withdraw(10000000))

// let bag=''
// function starPattern(n){
//     for(let i =1;i<=n;i++){
//         if(i===n){
//             bag+="*"
//             console.log(bag)
//         }
//         else{
//             console.log("*")
//             bag+="*_"
//         }
    
//     }
// }

// starPattern(5)


// function starPattaer1(n){
    
//     let bag=''
//     for(let i=0;i<n;i++){
//         bag+="* "
//     }
//     console.log(bag)
//     bag=''
//     for(let i=0;i<n-2;i++){
//        bag=''
//        bag+="*"
//         for(let i=0;i<(n-2)*2+1;i++)
//             bag+="&"

//        bag+="*"
       
//        console.log(bag)
//     }
    
//     bag=''
//     for(let i=0;i<n;i++){
//         bag+="* "
//     }
//     console.log(bag)



// }

// starPattaer1(2)


function numberPattern(n){
    let temp=''
    for(let i=1;i<=n;i++){
        temp = temp+i
        console.log(temp)
    }
    let tt = ''
    for(let i=0;i>temp.length;i--){
        
       // console.log(temp[i])
        tt= tt+ temp[i]
    }
    console.log(tt)
}

numberPattern(5)