let employeeArr = ['first', 'last', 'title', 1]
let arrOfArrays = [ [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6] ]
let newArray = []
let record = {
   firstName: 'Thor',
   familyName: 'Odinsson',
   title: 'Electrical Engineer',
   payPerHour: 45,
   timeInEvents: [
     { type: 'TimeIn', hour: 800, date: '2018-01-01' },
     { type: 'TimeIn', hour: 800, date: '2018-01-02' },
     { type: 'TimeIn', hour: 800, date: '2018-01-03' }
   ],
   timeOutEvents: [
     { type: 'TimeOut', hour: 1100, date: '2018-01-01' },
     { type: 'TimeOut', hour: 1100, date: '2018-01-02' },
     { type: 'TimeOut', hour: 1100, date: '2018-01-03' }
   ]
}


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
   newArray = array.map(item => createEmployeeRecord(item))
   return newArray
}

// Add an object with keys to the timeInEvents array on the record object
function createTimeInEvent(record, dateStamp){
   let type = 'TimeIn'
   let hour = Number(dateStamp.slice(11, 15))
   let date = dateStamp.slice(0, 10)
   record.timeInEvents.push({
      type, hour, date
   })
   return record
}

// Add an object with keys to the timeOutEvents array on the record object
function createTimeOutEvent(record, dateStamp){
   let type = 'TimeOut'
   let hour = Number(dateStamp.slice(11, 15))
   let date = dateStamp.slice(0, 10)
   record.timeOutEvents.push({
      type, hour, date
   })
   return record
}

// Returns hours worked, an integer
function hoursWorkedOnDate(record, givenDate){
   let recordInfo = record.timeInEvents
   for(let i = 0; i < recordInfo.length; i++){
      if (givenDate === recordInfo[i].date) {
         let numOfHours = (record.timeOutEvents[i].hour - recordInfo[i].hour) / 100
         return numOfHours
      } 
   }
} 

// Returns pay owed using hoursWorkedOnDate
function wagesEarnedOnDate(record, givenDate){
   let payRate = record.payPerHour
   let hoursToPay
   hoursToPay = hoursWorkedOnDate(record, givenDate)
   let payOwed = payRate * hoursToPay
   return payOwed
}

// Returns value of all dates worked by the employee, amount returned as a number
// Hint: Need to find the available dates somehow
function allWagesFor(record){
   let recordDate = record.timeInEvents
   let dayWages = 0
   for (let i = 0; i < recordDate.length; i++){
      let singleDate = recordDate[i].date
      dayWages += wagesEarnedOnDate(record, singleDate)
   }
   return dayWages
}

// Returns sum of pay owed to all employess for all dates, as a number
function calculatePayroll(records){
   let singleEmployee = records.forEach(item => wagesEarnedOnDate(item))
   console.log (singleEmployee)
}

createEmployeeRecord(employeeArr)
createEmployeeRecords(arrOfArrays)
// createTimeInEvent(record, '2022-01-01 1400')
hoursWorkedOnDate(record, '2018-01-01')
wagesEarnedOnDate(record, '2018-01-01')
allWagesFor(record)