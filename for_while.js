// Задание 1 
// При помощи цикла for выведите чётные числа от 2 до 10.

for (let i = 2; i<=10; i++){
  if (i%2==0){
  console.log(i)
   } }

  //  Задание 2 
  //  Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//   console.log( `number ${i}!` );
// }

let i = 0
while (i<3) {
  console.log( `number ${i}!` )
  i++
}

// Задание 3
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

let result
do {
  result = prompt('vvedite chiclo > 100')  //тело

} while (result<=100)
    
  