const numbers = [2, 4, 6, 8];

function sumFor(numb) {
  let total = 0;
  for (const num of numb) {
    total += num;
  }
  return total;
}

console.log(sumFor(numbers));

function sumWhile(numb) {
  let total = 0;
  let i = 0;
  while (i < numb.length) {
    total += numb[i];
    i++;
  }
  return total;
}

console.log(sumWhile(numbers));

function sumRecursion(numb) {
  if (numb.length === 0) {
    return 0;
  }
  return numb[0] + sumRecursion(numb.slice(1, numb.length));
}

console.log(sumRecursion(numbers));

function sumTheSimpleWay(numb) {
  return _.reduce(numb, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(numbers));
