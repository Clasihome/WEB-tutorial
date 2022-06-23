const sum = (a, b) => {

  const total = a + b;
  return [a * 2, b * 2];
}

const [totalA, totalB] = sum(2, 3);
console.log(totalA, totalB);