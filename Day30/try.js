function Employee(firstName, lastName, position) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
  

  }
  
//   Employee.prototype.getDetails = function () {
//     return `${this.firstName} ${this.lastName} - ${this.position}`;
//   };


  
   Employee.prototype = Object.getDetails = function () {
     return `${this.firstName} ${this.lastName} - ${this.position}`;
   };



  // Creating employee instances
  const employee1 = new Employee("Alice", "Johnson", "Manager");
  const employee2 = new Employee("Bob", "Smith", "Engineer");
  
  console.log(employee1)
  console.log(employee2)