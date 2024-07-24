let word1 = "resources on Generative AI for Beginners";
let newset = new Set(word1.split(""));

function canCreateWord(word) {
  let localSet = new Set(word.split(""));

  for (let value of localSet) {
    if (!newset.has(value)) {
      return false;
    }
  }
  return true;
}

console.log(canCreateWord("is")); // OUTPUT :: true
console.log(canCreateWord("isz")); // OUTPUT :: false
