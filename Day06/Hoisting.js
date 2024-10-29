/*
var a;
*/
function getName(){
    console.log("Namsate Hoisting");
}
getName();
console.log(a);
var a =2 //memory will be allocated to var during execution phase


//The var a will be moved at top at the time of execution but the value will not be assigned


//one execution phase is created when javascript is being run  