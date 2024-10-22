var x =23

a()
b()

function a (){
    var x = 10
    console.log(x)
}

function b(){
    var x = 100
    console.log(x)
}

/*Execution context will be created for execution and 
, a call stack will be generated 
 and for a() a smaller context will created and
  it will be put under call stack and the moment it will be executed ,
  it will be removed and b() will be put in call stack for execution.
*/