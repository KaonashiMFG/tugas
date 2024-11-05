const inn = [0, 1];

for (let i = 0; i < 14; i++) {
  let innFib = inn[i] + inn[i + 1];
  inn.push(innFib);
}

console.log(inn);

console.log(inn[inn.length - 1]);

/* -------------------------------------------------------------------------- */
/*                                  Chat GPT                                  */
/* -------------------------------------------------------------------------- */

function fibonacciLoop(n) {
  let fibSequence = [0, 1];

  for (let i = 2; i < n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }

  return fibSequence.slice(0, n);
}

console.log(fibonacciLoop(10)); // Outputs first 10 Fibonacci numbers
