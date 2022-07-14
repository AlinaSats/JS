// let fs = require('fs')
// let jsonusers = JSON.parse( fs.readFileSync("task2.json"))


// function uniqueFuncel() {
// let unique =[]
//     users.forEach(element => {
//     if (!unique.includes(JSON.stringify(element))) unique.push(JSON.stringify(element))
//     });
//     return unique.map(element => JSON.parse(element))
// }
// console.log(uniqueFuncel())

// let unique = Array.from (new Set (jsonusers.map((item)=> JSON.stringify(item)))).map((item)=>JSON.parse(item))
// console.log(unique)

const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]

const deleteEnterprise = function(idEnt) {
    const index = enterprises.findIndex(el=> el.id === idEnt) 
    enterprises.splice(index,1)
    } 
  deleteEnterprise(9)
  console.log(enterprises)



