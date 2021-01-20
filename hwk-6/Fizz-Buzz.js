//Since there are only 25 primes less than 100 an constant array of them is
//sufficient for this activity

const PRIMES_LT_100 = [2,3,5,7,11,13,17,19,23,29,31,37,
                        41,43,47,53,59,61,67,71,73,79,83,89,97];

for (let i = 1; i <= 100; i++) {
  if (PRIMES_LT_100.indexOf(i) !== -1) {
    console.log("prime")
  }
  if (i%15 === 0) {
    console.log("Fizzbuzz");
  } else if (i%3 === 0) {
    console.log("Fizz");
  } else if ( i%5 === 0){
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
