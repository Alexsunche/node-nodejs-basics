import fs from "fs"

const create = async () => {
  const content = "I am fresh and young";
  fs.writeFile('src/fs/files/fresh.txt', content, {flag: 'ax'}, err => {
    if (err) throw new Error("FS operation failed.")
  });
};

await create();
