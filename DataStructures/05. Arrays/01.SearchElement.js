function array(arr, a) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === a) {
      return i;
    }
  }
  return -1;
}
let arr = [1, 2, 3, 4, 5];
let find = array(arr, 5);
console.log(find);
