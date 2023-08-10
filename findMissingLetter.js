function findMissingLetter(array) {
  for (const i in array) {
    let curr = array[i];
    let next = array[+i + 1];

    let currentCharCode = curr.charCodeAt(0);
    let nextCharCode = next.charCodeAt(0);
    const answer = nextCharCode - currentCharCode;
    if (answer > 1) {
      return String.fromCharCode(currentCharCode + 1);
    }
  }

  return " ";
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
