let defaultarrvalue = ["astra", "book", "paper", "bus", "deep", "nehal"];
let inputArray = defaultarrvalue;

// Add the Data into Array
const addData = () => {
  const inputData = document.getElementById("input-array").value;
  inputArray.push(inputData);
  const outputTextArea = document.getElementById("output-array");
  outputTextArea.value = inputArray.join("\n");
};

// Covert to Upper-Case
const convertToUpperCase = () => {
  const inputArray = document.getElementById("input-array").value.split(",");
  const upperArray = inputArray.map((item) => item.toUpperCase());
  const outputTextArea = document.getElementById("output-array");
  outputTextArea.value = upperArray.join("\n");
};

// Covert to Lower-Case
const convertToLoweCase = () => {
  const inputArray = document.getElementById("input-array").value.split(",");
  const lowerArray = inputArray.map((item) => item.toLowerCase());
  const outputTextArea = document.getElementById("output-array");
  outputTextArea.value = lowerArray.join("\n");
};

// Sort into Ascending Order
const sortAscending = () => {
  inputArray.sort();
  const outputTextArea = document.getElementById("output-array");
  outputTextArea.value = inputArray.join("\n");
};

// Sort in Descending Order
const sortDescending = () => {
  inputArray.reverse();
  const outputTextArea = document.getElementById("output-array");
  outputTextArea.value = inputArray.join("\n");
};

// Return the items which have ‘B’ as the first alphabet.
const filterArray = () => {
  const filteredArray = inputArray.filter((item) => item.startsWith("B"));
  const outputTextArea = document.getElementById("output-array");
  outputTextArea.value = filteredArray.join("\n");
};

//Return the index of the entered value from the array
const findIndex = () => {
  const searchValue = document.getElementById("input-array").value;
  const index = inputArray.indexOf(searchValue);
  const outputTextArea = document.getElementById("output-array");
  outputTextArea.value =
    index !== -1
      ? `Index of '${searchValue}' is ${index}`
      : `'${searchValue}' not found in the array`;
};

// Create the dummy array and merge it with the main array with the help of spread and reducer.
const mergeArrays = () => {
  const dummyArray = [1, 2, 3, 4, 5];
  const mergedArray = [
    ...inputArray,
    ...dummyArray.reduce((acc, curr) => [...acc, curr.toString()], []),
  ];
  const outputTextArea = document.getElementById("output-array");
  outputTextArea.value = mergedArray.join("\n");
};
