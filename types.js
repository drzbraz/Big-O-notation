function first() {
  return console.log(2 + 2)
}

function second(n) {
  while (n > 0) {
    n = Math.floor(n / 2)
    console.log(n)
  }
}

function third(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

function forth(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    console.log(firstArray[i])
    for (let j = 0; j < secondArray.length; j++) {
      console.log(secondArray[j])
    }
  }
}

function binarySearch(value, list) {
  let first = 0
  let last = list.length - 1
  let position = -1
  let found = false
  let middle

  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2)
    console.log(middle)
    if (list[middle] === value) {
      found = true
      position = middle
    } else if (list[middle] > value) {
      last = middle - 1
    } else {
      first = middle + 1
    }
  }
}

// O(1)
first()

// O(log n)
second(50)

// O(n)
third([1, 2, 3, 4, 5])

// O(n²)
forth([1, 2, 3, 4, 5], [10, 9, 8, 7, 6])

// O(log n)
binarySearch(2, [1, 2, 3, 4, 5])
