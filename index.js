// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


function checkVector(vector, value) {
  // console.log('checkVector', vector, value)
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
  // console.log('checkLine', vector, value, minLen)
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

// console.log('[1,2,3,4]', checkLine([1,2,3,4], 2, 3))
// console.log('[1,2,2,1]', checkLine([1,2,2,1], 2, 3))
// console.log('[1,2,1,1]', checkLine([1,2,1,1], 1, 3))
// console.log('[2,1,1,1]', checkLine([2,1,1,1], 1, 3))
// console.log('[1,2,2,2]', checkLine([1,2,2,2], 2, 3))
// console.log('[1,2,2,2,1]', checkLine([1,2,2,2,1], 2, 3))

function checkHorizontal(matrix, value, minLen) {
  // console.log('checkHorizontal', matrix, value, minLen)
  if (matrix.length === 1) {
    return checkLine(matrix.slice(0, 1)[0], value, minLen);
  } else {
    if (checkLine(matrix.slice(0, 1)[0], value, minLen)) {
      return true;
    } else {
      return checkHorizontal(matrix.slice(1), value, minLen);
    }
  }
}

// console.log(`[
//   [0,0,1,0,0],
//   [1,1,0,1,0],
//   [0,1,1,1,0],
// ]` ,checkHorizontal([
//   [0,0,1,0,0],
//   [1,1,0,1,0],
//   [0,1,1,1,0],
// ], 1, 3));
// console.log(`[
//   [0,0,1,0,0],
//   [1,1,0,1,0],
//   [0,1,0,1,0],
// ]` ,checkHorizontal([
//   [0,0,1,0,0],
//   [1,1,0,1,0],
//   [0,1,0,1,0],
// ], 1, 3));
// console.log(`[
//   [0,0,1,0,0],
//   [1,1,0,1,0],
//   [0,1,1,1,0],
// ]` ,checkHorizontal([
//   [0,0,1,0,0],
//   [1,1,0,1,0],
//   [0,1,1,1,0],
// ], 0, 3));
// console.log(`[
//   [0,0,1,0,0],
//   [1,1,0,1,0],
//   [1,1,2,2,2],
//   [0,1,1,1,0],
// ]` ,checkHorizontal([
//   [0,0,1,0,0],
//   [1,1,0,1,0],
//   [1,1,2,2,2],
//   [0,1,1,1,0],
// ], 2, 3));

function transpose(matrix) {
  const mat = matrix.map(row => row.slice());
  // console.log('transpose', mat)
  const rowLen = mat.length;
  const matLen = mat.slice(0, 1)[0].length;
  return Array(matLen).fill(null).map(
    (_, i) => Array(rowLen).fill(null).map(
      (_, j) => mat[j][i]
    )
  );
}

// console.log(`[
//   [0,0,1,0,0],
//   [1,1,0,1,0],
//   [0,1,1,1,0],
// ]` ,transpose([
//   [0,0,1,0,0],
//   [1,1,0,1,0],
//   [0,1,1,1,0],
// ]));
// console.log(`[
//   [0,0,1,0,0],
//   [1,1,0,1,0],
//   [1,1,2,2,2],
//   [0,1,1,1,0],
// ]` ,transpose([
//   [0,0,1,0,0],
//   [1,1,0,1,0],
//   [1,1,2,2,2],
//   [0,1,1,1,0],
// ]));

function checkVertical(matrix, value, minLen) {
  console.log('checkVertical', matrix, value, minLen)
  const t_matrix = transpose(matrix);
  return checkHorizontal(t_matrix, value, minLen);
}

console.log(`[
  [0,0,1,0,0],
  [1,1,0,1,0],
  [1,1,2,2,2],
  [0,1,1,1,0],
]` ,checkVertical([
  [0,0,1,0,0],
  [1,1,0,1,0],
  [1,1,2,2,2],
  [0,1,1,1,0],
], 1, 3));
console.log(`[
  [0,0,1,0,0],
  [1,1,0,1,0],
  [1,0,2,2,2],
  [0,1,1,1,0],
]` ,checkVertical([
  [0,0,1,0,0],
  [1,1,0,1,0],
  [1,0,2,2,2],
  [0,1,1,1,0],
], 1, 3));
console.log(`[
  [0,0,1,0,2],
  [1,1,0,1,2],
  [1,1,2,2,2],
  [0,1,1,1,0],
]` ,checkVertical([
  [0,0,1,0,2],
  [1,1,0,1,2],
  [1,1,2,2,2],
  [0,1,1,1,0],
], 2, 3));
console.log(`[
  [0,0,1,0,0],
  [1,1,0,1,2],
  [1,1,2,2,2],
  [0,1,1,1,2],
]` ,checkVertical([
  [0,0,1,0,0],
  [1,1,0,1,2],
  [1,1,2,2,2],
  [0,1,1,1,2],
], 2, 3));
console.log(`[
  [0,0,1,0,0],
  [1,1,0,1,2],
  [1,1,2,2,2],
  [0,1,1,1,2],
]` ,checkVertical([
  [0,0,1,0,0],
  [1,1,0,1,2],
  [1,1,2,2,2],
  [0,1,1,1,2],
], 2, 4));
console.log(`[
  [0,0,1,0,2],
  [1,1,0,1,2],
  [1,1,2,2,2],
  [0,1,1,1,2],
]` ,checkVertical([
  [0,0,1,0,2],
  [1,1,0,1,2],
  [1,1,2,2,2],
  [0,1,1,1,2],
], 2, 3));