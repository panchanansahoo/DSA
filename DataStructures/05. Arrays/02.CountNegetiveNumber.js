function negative(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

let arr = [5, -3, -2, 1, 0, -5];
let collect = negative(arr);
console.log(collect);
