let fs = require('fs')
let jsonusers = JSON.parse( fs.readFileSync("task2.json"))

let unique = jsonusers.reduce((acc,user) => {
  if (acc.map[user.name])
  return acc
  acc.map[user.name] = true
  acc.unique.push(user)
  return acc
} , {
  map:{},
  unique: []
} )
.unique
console.log (unique)


