import fs from "fs"

const create = async () => {
  const content = "I am fresh and young";
  fs.writeFile('./files/fresh.txt', content, {flag: 'ax'}, err => {
    if (err) throw 'FS operation failed'
  });
};

await create();
