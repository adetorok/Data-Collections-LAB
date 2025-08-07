console.log("Part 1: Refactoring Old Code");
// // date from Part 3: Feeling Loopy // //
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// // Storing 2D arrry, row and cell values // //
let table = []; 
let row = [];   
let cell = "";

// // if statement and pushing and reseting // //
for (let i = 0; i < csv.length; i++) {
  const char = csv[i];

  if (char === ",") {
    row.push(cell); 
    cell = "";      
  } else if (char === "\n") {
    row.push(cell);  
    table.push(row); 
    row = [];        
    cell = "";       
  } else {
    cell += char;
  }
}

// // Handle last cell // //
if (cell.length > 0) {
  row.push(cell);
  table.push(row);
}

// // Print result // //
for (let row of table) {
  console.log(row);
}

console.log("Part 2: Expanding Functionality");

// // Use unique variable name to avoid re-declaration issues // //
const csv_part2 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// // Unique names for storage // // 
let table_part2 = [];
let row_part2 = [];
let cell_part2 = "";

// // Build 2D array from CSV string character-by-character // //
for (let i = 0; i < csv_part2.length; i++) {
  const char = csv_part2[i];

  if (char === ",") {
    row_part2.push(cell_part2);
    cell_part2 = "";
  } else if (char === "\n") {
    row_part2.push(cell_part2);
    table_part2.push(row_part2);
    row_part2 = [];
    cell_part2 = "";
  } else {
    cell_part2 += char;
  }
}

// // Push any remaining data after loop // //
if (cell_part2.length > 0) {
  row_part2.push(cell_part2);
  table_part2.push(row_part2);
}

// // Log each row individually for readability // //
for (let row of table_part2) {
  console.log(row);
}

console.log("Part 3: Transforming Data");

// // Extract the header row and convert to lowercase keys // //
const headers_part3 = table_part2[0].map(header => header.toLowerCase());

// // Prepare a new array to hold the transformed objects // //
let objectArray_part3 = [];

// // Loop through each row (starting after the headers) // //
for (let i = 1; i < table_part2.length; i++) {
  let row = table_part2[i];
  let obj = {};

  for (let j = 0; j < headers_part3.length; j++) {
    obj[headers_part3[j]] = row[j];
  }

  objectArray_part3.push(obj);
}

// // Log each object clearly // //
for (let person of objectArray_part3) {
  console.log(person);
}

console.log("Part 4: Sorting and Manipulating Data");

// // Make a copy of the object array to modify // //
let data_part4 = [...objectArray_part3];

// // Remove the last object from the array // //
data_part4.pop();

// // Insert new object at index 1 // //
data_part4.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25"
});

// // Add new object to the end of the array // //
data_part4.push({
  id: "7",
  name: "Bilbo",
  occupation: "None",
  age: "111"
});

// // Calculate average age using a loop // //
let totalAge_part4 = 0;

for (let person of data_part4) {
  totalAge_part4 += parseInt(person.age);
}

let averageAge_part4 = totalAge_part4 / data_part4.length;

// // Log the updated data array // //
for (let person of data_part4) {
  console.log(person);
}

// // Log the average age // //
console.log("The total average age is", averageAge_part4);

console.log("Part 5: Converting Objects Back to CSV");

// // Create CSV header row using original keys // //
const csvHeader_part5 = ["ID", "Name", "Occupation", "Age"];
let csvString_part5 = csvHeader_part5.join(",") + "\n";

// // Loop through each object and build a CSV row // //
for (let person of data_part4) {
  let row = [
    person.id,
    person.name,
    person.occupation,
    person.age
  ];
  csvString_part5 += row.join(",") + "\n";
}

// // Log the final CSV string // //
console.log(csvString_part5);
