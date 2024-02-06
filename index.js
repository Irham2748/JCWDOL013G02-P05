function findDifference(arr1, arr2) {
  const difference = [];
  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      difference.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    let found = false;
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      difference.push(arr2[i]);
    }
  }
  return difference;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

console.log(findDifference(arr1, arr2));