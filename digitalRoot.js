function digitalRoot(n) {
  n = n + "";

  while (n.length > 1) {
    let myArr = n.split("");

    let reduced = myArr.reduce((total, num) => {
      return Number(total) + Number(num);
    }, 0);

    n = reduced + "";
  }
  return Number(n);
}

digitalRoot(575);
