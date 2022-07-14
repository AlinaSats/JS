
//Задание 1 
    let a = 2 + 2;

    switch (a) {
      case 3:
        console.log( 'Маловато' )
        
      case 4:
        console.log( 'В точку!' )
        
      case 5:
        console.log( 'Перебор' )
      
      default:
        console.log( "Нет таких значений" )
    }

  //Задание 2 (переписать через IF)
    // switch (browser) {
    //   case 'Edge':
    //     alert( "You've got the Edge!" );
    //     break;
    
    //   case 'Chrome':
    //   case 'Firefox':
    //   case 'Safari':
    //   case 'Opera':
    //     alert( 'Okay we support these browsers too' );
    //     break;
    
    //   default:
    //     alert( 'We hope that this page looks ok!' );
    // }
let browser = '1'

if (browser == 'Edge') {
  console.log('you have got the Edge!')
} else if(browser == 'Chrome' || 'Firefox' || 'Safari' || 'Opera') {
  console.log('Okay we support these browsers too')
} else console.log('We hope that this page looks ok!') 

//Задание 3 (переписать "if" на "switch")
      // const number = +prompt('Введите число между 0 и 3', '');
      // if (number === 0) {
      //   alert('Вы ввели число 0');
      // }
      // if (number === 1) {
      //   alert('Вы ввели число 1');
      // }
      // if (number === 2 || number === 3) {
      //   alert('Вы ввели число 2, а может и 3');
      // }

      const number = +prompt('Введите число между 0 и 3', '') 

      switch(number) {
        case 0:
          alert('Вы ввели число 0');
          break;
        case 1:
            alert('Вы ввели число 1');
            break;
        case 2:
        case 3:
              alert('Вы ввели число 2/а может и 3');
              break; 
        }


  