function smallest(arr) {
  if (arr.length < 0) {
    return "Array should be atlast one number";
  }
  let a = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (a > arr[i]) {
      a = arr[i];
    }
  }
  return a;
}

let arr = [1, 2, 3, 5, 8, -5];
let store = smallest(arr);
console.log(store);
