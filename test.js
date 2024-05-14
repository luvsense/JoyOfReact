function checkParentheses(input) {
  const stack = [];
  const uniqueChars = new Set();

  const openingBracket = [];
  const closingBracket = [];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === "(") {
      openingBracket.push(char);
      stack.push(char);
      uniqueChars.clear();
    } else if (char === ")") {
      closingBracket.push(char);
      // check stack
      if(stack.length === 0 || uniqueChars.size !== ){}
    }
  }
  console.log(openingBracket, closingBracket);
  if (stack.length === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

checkParentheses("(a(b)c(d)e)f");
