const employee = {
    name : "Rahul",
    position: "Mangaer",
    salary : 50000,
    raiseSalary : function(){
      this.salary = (10/100)*this.salary + this.salary
    }
  }
  console.log("Employee Name:" ,employee.name)
  console.log("Employee Position:", employee.position)
  console.log("Employee Salary:" ,employee.salary)
  employee.raiseSalary()
  console.log("Employee RaisedSalary:",employee.salary)