// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

for (let st =1; st <= 10; st++) {
  result = 2**st
  console.log(result)
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const stepen = function(r) {
  for (let st =1; st <= r; st++) {
    result = 2**st
   console.log(result)
}}
stepen(12)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :),
// во второй :):) и так далее

for (i=1; i<=5; i++) {
  console.log(":)".repeat(i))
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows) switch case

function printSmile(stroka, b) {

  for (i=1; i<=b; i++) {
      console.log(stroka.repeat(i))
 
}}
printSmile('h', 8)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, 
// сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'

 function getWordStructure(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z']

    let vCount = 0
    let cCount = 0

    for (let char of word.toLowerCase() ) {
      if (vowels.includes(char))
        vCount+=1
        else if(consonants.includes(char))
        cCount+=1
        }
        console.log(`Слово '${word}' состоит из  ${vCount} гласных и ${cCount} согласных букв`)  
 }
    
getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'

function isPalindrom(word){
  
  return word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
  
}
console.log (isPalindrom('abba'))
console.log (isPalindrom('Abba'))


// 2 вариант
function isPalindrom(word){
word = word.toLowerCase()
  for(let i = 0; i<=word.length/2; i++){
    if(word[i] !== word[word.length-1-i]) {
      console.log('ne palindrom')
    } else console.log('palindrom')
        // return false
  }
    // return true
    
        }

  // console.log(isPalindrom('abba'))

  isPalindrom('abba')
  