function toCamelCase(str){
    let answer = "";
    for(let i = 0; i < str.length; i++) {
        const prev = str[i - 1];
        const curr = str[i];

        if (curr != "-" && curr != "_"){
            if(prev == "-" || prev == "_"){
                answer += curr.toUpperCase();
            } else {
                answer += curr
            }
        }

     }
     console.log(answer)
   return answer;
}

toCamelCase("the_stealth_warriorrd-ff");
