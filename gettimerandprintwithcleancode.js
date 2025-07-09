function gettimeandprint(n) {

  if(n <= 0 || typeof n != 'number') {
    console.log("Please Enter a positive number");
    return;
  }
  
    console.log(`Will wait for ${n} seconds before printing`);

      settimer(n);

      setTimeout(() => {
        console.log("I love Kirthi ❤️");
      }, (n + 1) * 1000);
    }

    function settimer(n) {
      for (let i = n; i >= 1; i--) {
        const delay = (n - i + 1) * 1000;
        setTimeout(() => {
          console.log(i);
        }, delay);
      }
    }
    

gettimeandprint("antheis");

