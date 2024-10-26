function dayOfTheWeek(day, N) {
    //write code here
    const obj ={
      Monday:1,
      Tuesday:2,
      Wednesday:3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
      Sunday:7
      
    }
    let dayNum = obj[day];
    let x
    //dayNum = (dayNum+N)%7;
    if(N>=7&&dayNum+N>=7){
      x  = N%7
    }
    else
     x = N 
    dayNum +=x;
    if(dayNum>7)
    dayNum = dayNum%7
    for(let days in obj){
      if(obj[days]===dayNum)
      console.log(days)
   
    }
    
    
  }
  