function curriedAdd() {
  let numbers = [];

  function addNumber(num) {
    if (num === undefined) {
      return numbers.reduce((acc, curr) => acc + curr, 0);
    } else {
      numbers.push(num);
      return addNumber;
    }
  }

  return addNumber;
}

module.exports = { curriedAdd };
