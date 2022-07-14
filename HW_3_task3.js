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
 const empleesCount = function(number){
  lastNumber = number.toString().split('').pop()
  if (lastNumber && number) {
    if (lastNumber == 1) return `${number} сoтрудников`
    else if (lastNumber >1 && lastNumber <5) return `${number} сoтрудникa`
    else return `${number} сoтрудников`
  } else return "нет сотрудников"
 }



const getStructure = function(company){
  company.forEach(comp => {
    let depts =[]
    let count = 0
    depts.push(comp.name)
if(comp.departments) {
  comp.departments.forEach(dept =>{
        count+= dept.employees_count 
        depts.push(`- ${dept.name} ${empleesCount(dept.employees_count)} `)
  })
  depts[0] += `(${empleesCount(count)})`
}  
console.log(depts.join(`\n`))
  });
}
getStructure(enterprises)







// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или 
//   название отдела и возвращать название предприятия, к которому относится).
  
//   Пример:
//   getEnterpriseName(4) // Предприятие 1
//   getEnterpriseName("Отдел маркетинга") // Предприятие 2

// const getEnterpriseNameDepartment = function(val){
//   let enterprise
//   enterprises.forEach(ent => {
//     let department
//     if(ent.departments) {
//       department = ent.departments.find(dept => {return dept.id === val || dept.name === val})
          
//         } 
//         if(department) enterprise = ent
//   })
//   return enterprise ? enterprise : `Нет организации с id == ${val} или именем == ${val}`
//     }
// console.log (getEnterpriseNameDepartment(5))

// 3. Написать функцию, которая будет добавлять предприятие. В качестве 
// аргумента принимает название предприятия

// const GetNewId = function(company) {
//   let maxID = 0
//   company.forEach(comp => {
//     if (maxID<comp.id) maxID = comp.id
//     if (comp.departments){
//       comp.departments.forEach(dept=>{
//         if (maxID<dept.id) maxID = dept.id
//       })
//     }
//   }) 
//   return maxID+1
// }
//   // console.log(GetNewId(enterprises))

// const addEnterprise = function(name) {
//   enterprises.push({
//     id: GetNewId(enterprises),
//     name: name,
//     departments: []
//   })
// }
//  addEnterprise("IT")


// // //  4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве
// // //  аргумента принимает id предприятия, в которое будет добавлен отдел и 
// // // название отдела.

// const getEnterprise = function(val) {
//   let enterprise = enterprises.find(el => el.id === val || el.name === val)
//   return enterprise ? enterprise : false
// }

// const addDepartment = function(entId, name, count = 0) {
//   const enterprise = getEnterprise(entId)
 
//   if (enterprise) enterprise.departments.push({
//     id: GetNewId(enterprises),
//     name: name,
//     employees_count: count
//   })

// }
// addDepartment(11, 'QAC', 30)

//  console.log(enterprises[1])

//  5. Написать функцию для редактирования названия предприятия. Принимает в 
// качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

// const editEnterprise = function(id, newName){
//   const enterprise = getEnterprise(id)
//   if (enterprise) enterprise.name = newName

// }
// editEnterprise(11,'SQL department')

// console.log(enterprises[3])

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве 
// аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

// const getDepartment = function(val){
//   let department
//   enterprises.forEach(el=>{
//     const dept = el.departments.find((elem)=>{
//       return elem.id == val || elem.name == val
//     })
//     if (dept) department = dept
//   }); return department ? department : false
// }

// const editDepartment = function(idDep, newName) {
//   const department = getDepartment(idDep)
//   if (department) department.name = newName
//   else throw new Error("No such department")
// }
// editDepartment(12, "Analitika")
// console.log(enterprises[3])

// const editDepartment = function(idDep, newName) {
//   let department 
//   enterprises.forEach(el=>{
//     if (el.departments.forEach(elem=>{
//       if(elem.id=idDep) el.name = newName
//     } )
//     ) return department ? department : false
//   })
// }
// editDepartment(12, "Analitik")
// console.log(enterprises[3])

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает 
// id предприятия.

// Пример:
// deleteEnterprise(1)

// const deleteEnterprise = function(idEnt) {
//   const index = enterprises.findIndex(el=> el.id === idEnt) 
//   enterprises.splice(index,1)
  // } 
// deleteEnterprise(9)
// console.log(enterprises)


// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

// const deleteDepartment = function(val) {
//   enterprises.forEach(e => {
//     let index = e.departments.findIndex(d=> d.id === val && d.employees_count===0)
//     if (index !== -1){
//       e.departments.splice(index,1)
//     }
//   })
// } 
// deleteDepartment(10)
// console.log(enterprises)

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)

// const moveEmployees = function(idof, idNew){
//   const of = getDepartment(idof)
//   let idN = getDepartment(idNew)
//   if(of && idN && getEnterpriseNameDepartment(idof) === getEnterpriseNameDepartment(idNew)) {
//     idN.employees_count += of.employees_count
//     of.employees_count=0
//   } else throw new Error('Somthibg error')
// }
// moveEmployees(2,3)
// console.log(enterprises[0])


