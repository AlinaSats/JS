// Zadanie 1
// Замените код Function Expression стрелочной функцией:
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { console.log("Вы согласились."); },
//   function() { console.log("Вы отменили выполнение."); }
// )

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   () => console.log("Вы согласились."); 
//   () => console.log("Вы отменили выполнение."); 
// )

// 2.Перепишите функцию, используя оператор '?' или '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// function checkAge(age){
//   return (age > 18) ? true : confir('Родители разрешили?')

// }

// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }

// 3. Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
 
// function min(a,b) {
//   if (a<b) {
//     return(a)
//   } else {
//     return b}
// }

// console.log(min(2, 5))
// console.log(min(3, -1))

// function min(a,b) {
//   return (a<b) ? a : b }

//   console.log(min(2, 5))
// console.log(min(3, -1))

// 4. Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

function pow(x,n) {
  if (n>=1){
  return x=x**n }
  else {return("vvedite nat chislo")}
}
console.log(pow(3, -1))
console.log(pow(3, 6))