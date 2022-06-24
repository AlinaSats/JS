
// const age_2 = 18;
// const age_3 = 60;

// const checkAge = function(age) {
  
//   if (age < age_2) {
//      console.log("You don’t have access cause your age is " + age +". " + "It’s less then")
//   } 
//    else if(age >= age_2, age < age_3) {
//      console.log("Welcime!")
//    } 
//   else if(age > age_3) {
//      console.log("Keep calm and look Culture channel")
//    } 
//   else {
//     console.log("Technical work")
//    }
//   }
//   checkAge(17)
//   checkAge(18)
//   checkAge(61)
  


// const age_2 = 18;
// const age_3 = 60;

// const checkAge = function(age) {
// if(typeof age == 'number') {
  
//      if (age < age_2) {
//      console.log("You don’t have access cause your age is " + age +". " + "It’s less then")
//       } 
//      else if(age >= age_2, age < age_3) {
//      console.log("Welcime!")
//       } 
//       else if(age > age_3) {
//      console.log("Keep calm and look Culture channel")
//        } 
//        else {
//       console.log("Technical work")
//        }
       
//   } else {console.log('error')
// }
// }
//   checkAge(17)
//   checkAge(18)
//   checkAge(61)
//   checkAge('qwert')

  const age_2 = 18;
  const age_3 = 60;
  
  const checkAge = function(age) {    
    if(age && !isNaN(age)) {
           if (age < age_2) {
        alert("You don’t have access cause your age is " + age +". " + "It’s less then");
        } else if(age >= age_2 && age < age_3) {
          alert("Welcime!");
        } else if(age > age_3) {
          alert("Keep calm and look Culture channel");
         } else {
          alert("Technical work");
         }
             } else alert('error')
  
  }
  // checkAge(18)
  // checkAge(61)
  // checkAge('61')
  // checkAge('fff')
  // checkAge('0')
  // checkAge('')

  let a = prompt('enter your age')
  checkAge(a)