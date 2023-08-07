function disemvowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    vowels.forEach(vowls => {
        str = str.replaceAll(vowls, "");
    })
    return str
  }