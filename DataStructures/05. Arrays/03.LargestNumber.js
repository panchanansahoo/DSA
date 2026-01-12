function largest(arr) {
  if (arr.length < 0) {
    return "Array shoud be atlast one number";
  }
  let large = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (large < arr[i]) {
      large = arr[i];
    }
  }
  return large;
}

let arr = [-55, -1, -8, -99, -45];
let store = largest(arr);
console.log(store);
