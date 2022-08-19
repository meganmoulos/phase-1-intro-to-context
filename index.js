// let employeeArr = ['first', 'last', 'title', 1]
// let arrOfArrays = [ [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6] ]
// let newArray = []

// The payroll system populates a record from an Array
function createEmployeeRecord(employeeArr){
   let firstName = employeeArr[0]
   let familyName = employeeArr[1]
   let title = employeeArr[2]
   let pay = employeeArr[3]
   let timeIn = []
   let timeOut = []
   
   const employeeObj = {
      firstName: firstName,
      familyName: familyName,
      title: title,
      payPerHour: pay, 
      timeInEvents: timeIn,
      timeOutEvents: timeOut
   }
   return employeeObj
}

// Converts each nested array into an employee record
function createEmployeeRecords(array){
   newArray = array.forEach(createEmployeeRecord)
}

// createEmployeeRecord(employeeArr)
// createEmployeeRecords(arrOfArrays)


