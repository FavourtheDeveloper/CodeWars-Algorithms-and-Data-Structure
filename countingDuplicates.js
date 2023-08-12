function duplicateCount(text){
    const textObj = {
        
    }
    let textArr = text.toLowerCase().split("")
    textArr.forEach(element => {
      
      if (element in textObj) {
        textObj[element] += 1;
      } else {
        textObj[element] = 1;
      }
    });
    // console.log(textArr);
    console.log(Object.entries(textObj))
   const eachArr = Object.entries(textObj).filter(each => {
        return each[1] > 1;
    })
    return eachArr.length
}
  console.log(duplicateCount("Hello"));