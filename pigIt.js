function pigIt(str) {
  //Code here
  let ans = "";
  const wordd = str.split(" ");
  wordd.forEach((element) => {
    if (element == '!' || element == '.' || element == '\"' || element == '\'' || element == '?') {
      ans += element;
    } else {
      element += element[0];
      const newEle = element.slice(1); 
      ans += newEle + "ay ";
    }
  });
  return ans.trim();
}
console.log(pigIt("Hello world !"));
