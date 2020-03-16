// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


function checkVector(vector, value) {
  // console.log(vector, value)
  return vector.every(el => el === value)
}

// console.log(checkVector([1,2,3,4], 2))
// console.log(checkVector([1,2,2,1], 2))
// console.log(checkVector([1,2,1,1], 1))
// console.log(checkVector([1,1,1,1], 1))
// console.log(checkVector([1,2,1,1], 1))
// console.log(checkVector([1,1,1], 2))
// console.log(checkVector([2,2,2,2], 2))

function checkLine(vector, value, minLen) {
  // console.log(vector, value, minLen)
  if (vector.length >= minLen) {
    if (checkVector(vector.slice(0, minLen), value)) {
      return true;
    } else {
      return checkLine(vector.slice(1), value, minLen);
    }
  } else {
    return false;
  }
}

console.log('[1,2,3,4]', checkLine([1,2,3,4], 2, 3))
console.log('[1,2,2,1]', checkLine([1,2,2,1], 2, 3))
console.log('[1,2,1,1]', checkLine([1,2,1,1], 1, 3))
console.log('[2,1,1,1]', checkLine([2,1,1,1], 1, 3))
console.log('[1,2,2,2]', checkLine([1,2,2,2], 2, 3))
console.log('[1,2,2,2,1]', checkLine([1,2,2,2,1], 2, 3))
