const university = {
    name: "VTU",
    location:"karnataka",
    // department: ['Computer Science', 'Mathematics','physics']
    department:[
      {departmentName:"Computer Science",head: "Manish"},
      {departmentName:"Mathematics",head: "vinesh"},
      {departmentName:"Physics",head: "Sheela"}
      ]
  }
  
  console.log("Department:", university.department[0].departmentName,",",university.department[1].departmentName,",",university.department[2].departmentName)