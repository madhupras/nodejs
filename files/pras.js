import { readFile } from 'node:fs';

readFile('./files/madhhu.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
}); 