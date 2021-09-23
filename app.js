// const http = require('http')

// const server = http.createServer((req,res)=>{
//     if (req.url ==='/' ) {
//         res.end('Hello and welcome to homepage')
//     }
//     if (req.url === '/about') {
//         res.end('This is the about page..here is some short history')
//     }
//     res.end(`
//     <h1>Ooops!!</h1>
//      <p> we can find this page</p>
//      <a href = "/"> back to home page </a>
//   `)

// })
// server.listen(5000)

const _ =require('lodash')
const items = [1, [2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)