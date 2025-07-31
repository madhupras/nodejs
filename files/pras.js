const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'madhhu.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log("Hi")
//to catch the uncaught error 
process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err);
  // Perform any necessary cleanup or logging here
});
