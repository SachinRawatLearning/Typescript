interface farmstand {
  name: string;
  price: string;
  quantity: number;
}

const printProductSummary = (product: farmstand): void => {
  console.log(`${product.name} - $${product.price}`);
};

//If we enter tsc command, it will compile all the ts files in this directory.
