function accum(s) {
	const upperCase = s.toUpperCase();
    const resultArr = [];

    for (var i = 0; i < upperCase.length; i++) {
        const repeatedChar = upperCase[i].toLowerCase().repeat(i + 1);
        console.log(repeatedChar);
        const theChar = repeatedChar.charAt(0).toUpperCase() + repeatedChar.slice(1);
        console.log(theChar);

        resultArr.push(theChar)
       
    }
    const finalOne = resultArr.join("-")
    return finalOne;
}

accum("Hello");