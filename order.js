function order(words) {
  const splitedWords = words.split(" ");
  var numArr = [];
  let ans = "";

  splitedWords.forEach((word) => {
    let wordd = word.split("");

    wordd.forEach((alpha) => {
      if (!isNaN(alpha)) {
        numArr.push(alpha);
      }
    });
  });
  numArr.sort();

  numArr.forEach((numm) => {
    const str = splitedWords.find((wordd) => wordd.includes(numm));

    ans += str + " ";
  });
  return ans.trim();
}

order("is2 Thi1s T4est 3a");
