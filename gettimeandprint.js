function gettimeandprint(n) {
  console.log("Will count for " + n + " seconds before printing");

  for (let i = n; i >= 1; i--) {
    setTimeout(() => {
      console.log(i);
    }, (n - i + 1) * 1000);
  }

  setTimeout(() => {
    console.log("I love Kirthi ❤️");
  }, (n + 1) * 1000);
}

gettimeandprint(3);
