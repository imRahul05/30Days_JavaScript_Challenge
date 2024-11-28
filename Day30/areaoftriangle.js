

function areaTriangle(base,height){
      
    if(base===0&&height===0)
      return area=0
    else if(base<0||height<0)
      return `Invalid number, base and height must be positive numbers.`
    else {
        let area = (base*height)/2
        return area
    }
   
}


console.log(`The area of the triangle is: ${areaTriangle(10,5)}`)  
console.log(`The area of the triangle is: ${areaTriangle(0,15)}`)  
console.log(`The area of the triangle is: ${areaTriangle(8,0)}`)  
console.log(`The area of the triangle is: ${areaTriangle(0,0)}`) 
console.log(areaTriangle(0,-2)) 