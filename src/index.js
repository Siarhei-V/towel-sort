
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  const sortArr = [];
  matrix.forEach((element, index) => {
    if ((index + 1) % 2 === 0 ) {
      element.reverse();
    }
    element.forEach(item => {
      sortArr.push(item);
    });
  });
  return sortArr;
}
