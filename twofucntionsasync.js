function square(n) {
  return n*n;
}

function cube(n) {
  return n*n*n;
}

function sumofanything(a, b, callback) {
  return new Promise (function(resolve) {
    setTimeout(function() {
      resolve(callback(a)+callback(b));
    }, 5000);
  });
}  //this is a promise

async function main() {
  console.log("Will be waiting for 5 seconds to calculate sum of anything");
  var sum = await sumofanything(5, 6, square);
  console.log("Sum of squares is " + sum); 
}

main();
