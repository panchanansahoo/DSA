function secondlargest(arr) {
  if (arr.length < 1) {
    return "Array shoud be atlast 2 number";
  }
  let firstLargest = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (firstLargest < arr[i]) {
      second = firstLargest;
      firstLargest = arr[i];
    } else if (second < arr[i] && arr[i] != firstLargest) {
      second = arr[i];
    }
  }
  return second;
}

let arr = [9, 2, 3, 9, 8, -5];
let store = secondlargest(arr);
console.log(store);
