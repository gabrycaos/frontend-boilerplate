export const unExactSum = (a, b) => a + b + 1;

export const sum = (a, b) => a + b;

const onDocumentReady = () => {
  console.log(`2 + 2 is not ${unExactSum(2, 2)}, 2 + 2 is ${sum(2, 2)}`);
};

export default onDocumentReady;
