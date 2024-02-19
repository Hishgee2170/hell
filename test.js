let number = -12345678900;
function reverse() {
  let i = 1;
  let arr = [];
  let j = 0;
  let teg = 0;
  let strNumber = "";
  let mn = 0;
  let comm = 0;
  let com = 10;
  if (number == 0) return (strNumber = number);
  if (number > 0) {
    while (10 < number) {
      arr[j] = number % 10;
      number = number - arr[j];
      number = number / 10;
      i++;
      j++;
    }
    arr.push(number);
    for (let q = mn; q < i; q++) {
      if (arr[q] == comm) {
        teg++;
      } else {
        mn = teg;
        comm = com;
        strNumber = strNumber + arr[q];
      }
    }
  } else {
    number = number * -1;
    while (10 < number) {
      arr[j] = number % 10;
      number = number - arr[j];
      number = number / 10;
      i++;
      j++;
    }
    arr.push(number);

    for (let q = mn; q < i; q++) {
      if (arr[q] == comm) {
        teg++;
      } else {
        mn = teg;
        comm = com;
        strNumber = strNumber + arr[q];
      }
    }

    strNumber = strNumber * -1;
  }
  return strNumber;
}
console.log(reverse(number));
