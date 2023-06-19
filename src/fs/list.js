import fs from "fs"

const list = async () => {
    const filesPath = 'src/fs/files'

    if (!fs.existsSync(filesPath)) {
      throw new Error(`The 'files' folder does not exist.`);
    }

    const fileNames = fs.readdirSync(filesPath)
    console.log(fileNames)
};

await list();