async function checkStock(fruit, quantity) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (fruit === 'apple' && quantity <= 10) {
        resolve(true);  // Apple in stock if <=10
      } else {
        resolve(false);  // Out of stock or unsupported fruit
      }
    }, 2000);
  });
}

function calculatePrice(quantity, priceCallback) {
  return priceCallback(quantity);
}

function normalPrice(quantity) {
  return quantity * 50;
}

function discountedPrice(quantity) {
  return quantity * 50 * 0.9;
}

// Example async flow
async function main() {
  console.log("Checking stock...");
  const inStock = await checkStock("apple", 5);

  if (inStock) {
    console.log("In stock! Calculating price...");
    const price = calculatePrice(5, discountedPrice);  // or normalPrice
    console.log("Final price: ₹" + price);
  } else {
    console.log("Sorry, not enough stock!");
  }
}

main();
