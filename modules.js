const names = require('./names')
const sayHi = require('./5-utils')
const cartItems = require('./alternative')
const addValues = require('./mind-granade')


//modules//
console.log(names)
sayHi('Eldad')
sayHi(names.peter)
sayHi(names.agnes) 
console.log(cartItems)
addValues(2,5)

//more modules//
       //os//
       const os = require('os')
 
       //info about current user//
        const user = os.userInfo()
        console.log(user)
      
        //method returns the system//
        console.log(`the system uptime is ${os.uptime()} seconds`)
      
        const currentOs = {
              name:os.type(),
              release:os.release(),
              totalMem:os.totalmem(),
              freeMem:os.freemem()
        }
        console.log(currentOs)
      