// Coding Exercise - String Reversal

// Given a string, return a new string with the reversed order of characters.

// Examples:

// reverse('apple') === 'elppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'
// You should put your implementation into the reverse function that was defined for you below.  You don't need to call reverse yourself.  Example of what your completed code should look like:

// function reverse (str) {
// }

const reverse = str => {
  return str.split('').reverse().join('')
}

console.log(reverse('apple'))
console.log(reverse('hello'))
console.log(reverse('Greetings!'))
