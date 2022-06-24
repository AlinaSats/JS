// const age_2 = 18;
//   const age_3 = 60;


const age_2 = 18;
const age_3 = 60;

  const div = document.getElementById('d')
 
  const checkAge=function(...age) { 
     const result = {};
    age.forEach(el=> {
      if(el && !isNaN(el)) {
        if (el < age_2) {
     div.innerHTML += "You don’t have access cause your age is " + el +". " + "It’s less then"+ '<br/>'; 
     } else if(el >= age_2 && el < age_3) {
      
      div.innerHTML +=  "Welcime!" + '<br/>';
     } else if(el > age_3) {
     
      div.innerHTML +="Keep calm and look Culture channel"+ '<br/>';
      } else {
       
        div.innerHTML +=  "Technical work"+ '<br/>';
      }
          } else div.innerHTML +=  'error'+ '<br/>' 
    })
    
  
  }
  // checkAge(18)
  // checkAge(61)
  // checkAge('61')
  // checkAge('fff')
  // checkAge('0')
  // checkAge('')

checkAge(18,17,55,9,99,'','fff')