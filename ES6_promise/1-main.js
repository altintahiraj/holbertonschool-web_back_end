import getFullResponseFromAPI from "./1-promise.js";

console.log(getFullResponseFromAPI(true));
getFullResponseFromAPI(false).catch(() => {});
