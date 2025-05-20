function reverseString(str) {
  let reversed = "";
  // Loop backwards through the string
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function countCharacters(str) {
  let count = 0;
  // Count each character one by one
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}

function capitalizeWords(sentence) {
  let words = sentence.split(" "); // Split sentence into words
  let capitalized = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      // Capitalize first letter + add the rest
      let first = word[0].toUpperCase();
      let rest = word.slice(1);
      capitalized.push(first + rest);
    }
  }

  return capitalized.join(" ");
}

function findMax(arr) {
  let max = arr[0]; // Start with the first element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function findMin(arr) {
  let min = arr[0]; // Start with the first element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function filterEvenNumbers(arr) {
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function fibonacci(n) {
  let sequence = [];

  if (n >= 1) sequence.push(0);
  if (n >= 2) sequence.push(1);

  for (let i = 2; i < n; i++) {
    let next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }

  return sequence;
}
