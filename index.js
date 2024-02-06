function comArrays(arr1, arr2) {
  const mergedArray = [];
  for (let i = 0; i < arr1.length; i++) {
    mergedArray.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    mergedArray.push(arr2[i]);
  }
  return mergedArray;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(comArrays(arr1, arr2));
