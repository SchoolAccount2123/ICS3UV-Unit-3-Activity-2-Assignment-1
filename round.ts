//function rounds a number and formats it to a fixed field size

function formatnumb(num: number, decimals: number, fieldsize: number): string {
  const rounded = num.toFixed(decimals);
  return rounded.padStart(fieldsize, " ");}


// The given numbers
const n1 = 8.5467;
const n2 = 9.6382;
const n3 = 18.5146;
const n4 = 125.496;

//formatting the numbers
const f1 = formatnumb(n1, 3, 10);
const f2 = formatnumb(n2, 5, 8);
const f3 = formatnumb(n3, 1, 6);
const f4 = formatnumb(n4, 1, 3)
// Display the results

console.log("The rounded and formatted values are:")
console.log(f1);
console.log(f2);
console.log(f3);
console.log(f4);
