////// TAKE AN EXISTING ARRAY AND FOR EVERY ZERO IN THE ARRAY //////
////// MAKE THE NEXT ELEMENT ZERO THEN SHIFT EVERYTHING ELSE TO THE RIGHT////
////// DO NOT RETURN A NEW ARRAY, DO THIS ACTION "IN PLACE" //////
////// ALSO THE LENGTH OF THE ARRAY TOTAL SHOULDNT CHANGE //////

const array = [1, 0, 3, 4, 0, 5, 9, 7, 8]; // expected output: [1, 0, 0, 3, 4, 0, 0, 5, 9];
const array2 = [0, 3, 4, 5, 6, 0, 7, 8, 0, 9]; // expected output: [0, 0, 3, 4, 5, 6, 0, 0, 7];

function doubleZero(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === 0) {
      array.splice(i, 0, 0);
      array.pop();
  }
}
  return array;
};

