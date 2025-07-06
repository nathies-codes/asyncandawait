function cube (n) {
  return n * n * n;
}

async function main () {
  console.log("Will be waiting for 5 sections");

  for (let i=5; i>=1; i--) {
     await new Promise(r => setTimeout(r, 1000));
      console.log(i);
     
  }

  let answer = cube(7);

  console.log("The cube is " + answer);
}

main();