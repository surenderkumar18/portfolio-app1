const hobbies = ["Sports", "Cooking", "Reading", "Swiming"];

const editHobbies = hobbies.map((item) => ({ text: item }));
// ({text : item}) in this line, we have  qurly bracket inside bracket({}), which mean
// we are returing Object (these are not function block)

console.log(editHobbies);

// OUTPUT > (4) [{…}, {…}, {…}, {…}]
