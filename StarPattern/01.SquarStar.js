function SquarStar(num) {
  for (let i = 0; i < num; i++) {
    let val = "";
    for (let j = 0; j < num; j++) {
      val = val + "*"
    }
    console.log(val);
  }
}

SquarStar(4);
