//votre code ici

function printNumbers(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += i + (i < n ? " " : "");
  }
  console.log(result);
  return result;
}

export default printNumbers;

printNumbers(5);
printNumbers(10);
printNumbers(3);
