// const age_2 = 18;
//   const age_3 = 60;
  const div = document.getElementById('d')
  const age_2 = 18;
  const age_3 = 60;
  function check(...age) { 
     const result = {};
    args.forEach(el=> {
      if(el && !isNaN(el)) {
        if (el < age_2) {
          result[el] = "You don’t have access cause your age is "
     div.innerHTML += el +"You don’t have access cause your age is " + el +". " + "It’s less then"+ '<br/>'; 
     } else if(el >= age_2 && el < age_3) {
      result[el] = "Welcime!";
      div.innerHTML += el + + "Welcime!" + '<br/>';
     } else if(el > age_3) {
      result[el] ="Keep calm and look Culture channel"
      div.innerHTML +=el +"Keep calm and look Culture channel"+ '<br/>';
      } else {
        result[el] ="Technical work"
        div.innerHTML += el + "Technical work"+ '<br/>';
      }
          } else {
          result[el] = 'error';
          div.innerHTML += result[el] = el+ 'error'+ '<br/>' }
    })
    return JSON.stringify(result);
  
  }
  // checkAge(18)
  // checkAge(61)
  // checkAge('61')
  // checkAge('fff')
  // checkAge('0')
  // checkAge('')

  
  alert(check(18,17,55,9,99,'','fff'))