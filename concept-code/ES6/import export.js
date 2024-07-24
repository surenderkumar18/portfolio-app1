// import Export

// - util.js
export let apiKey = "somerandomkey"; // named exports
export let token = "somerandomtoken"; // named exports

// -- comp.js
import { apiKey, token } from "./util.j";

// 2. ---------as default ------

export default "somerandomkey";
import apiKey from "./util.j";

// 3. ------ import as Object

// - util.js
export let apiKey = "somerandomkey"; // named exports
export let token = "somerandomtoken"; // named exports

// -- comp.js
import * as utils from "./util.j";
console.log(utils.apiKey);

// 4. ------ create alias fro exports ------

// -- comp.js
import { apiKey, token as AppToken } from "./util.j";

console.log(AppToken);
