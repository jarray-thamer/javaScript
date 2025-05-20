// MinMax Function
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max];
}

// Sum of Cubes Function
function sumOfCubes(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] ** 3;
  }
  return sum;
}

// Filter Array Function
function filterArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      result.push(arr[i]);
    }
  }
  return result;
}

// Is Symmetrical Function
function isSymmetrical(num) {
  let original = num;
  let reversed = 0;

  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return original === reversed;
}

// Is Special Array Function
function isSpecialArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] % 2 !== 0) return false; // even index must have even number
    if (i % 2 !== 0 && arr[i] % 2 === 0) return false; // odd index must have odd number
  }
  return true;
}

// Count True Function
function countTrue(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) count++;
  }
  return count;
}

// Object to Array Function
function objectToArray(obj) {
  let result = [];
  for (let key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}

// Array of Multiples Function
function arrayOfMultiples(num, length) {
  let result = [];
  for (let i = 1; i <= length; i++) {
    result.push(num * i);
  }
  return result;
}

// Find the Missing Number Function
function marathonDistance(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    // If number is negative, convert to positive manually
    if (num < 0) {
      num = -num;
    }
    total += num;
  }
  return total === 25;
}

// Square Digits Function
function squareDigits(num) {
  let result = "";
  while (num > 0) {
    let digit = num % 10;
    result = digit * digit + result;
    num = (num - digit) / 10; // integer division without Math.floor
  }
  return Number(result);
}
