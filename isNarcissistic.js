function narcissistic(value) {
    // Code me to return true or false
    
    let answer = 0;
    let theNumber = value.toString();
    
   let arr = theNumber.split('');
    console.log(arr);
    arr.map((digits) => {
        answer += Number(digits)   ** arr.length;
    })
    console.log(answer);
    if (answer == value) {
        return true;
    } else {
        return false;
    }
  }

  console.log(narcissistic(153))