function highAndLow(numbers){
   const numArr = numbers.split(" ");
   var highest = numArr[0];
   var lowest = numArr[0];
   numArr.forEach(num => {
    const numm = parseInt(num);
    if (numm > highest) {
        highest = numm
    } else if (numm < lowest) {
        lowest = numm;
    }
   });
   return (`${highest} ${lowest}`);
  }

  highAndLow("0 1 2 3 4 5")