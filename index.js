// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


function checkVector(vector, value) {
  // console.log(vector, value)
  return vector.every(el => el === value)
}

console.log(checkVector([1,2,3,4], 2))
console.log(checkVector([1,2,2,1], 2))
console.log(checkVector([1,2,1,1], 1))
console.log(checkVector([1,1,1,1], 1))
console.log(checkVector([1,2,1,1], 1))
console.log(checkVector([1,1,1], 2))
console.log(checkVector([2,2,2,2], 2))
