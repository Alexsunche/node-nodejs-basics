import fs from "fs"

const read = async () => {
    const fileToReadPath = 'src/fs/files/fileToRead.txt'

    if(!fs.existsSync(fileToReadPath)) throw new Error(`FS operation failed`);

    const fileToReadContent = fs.readFileSync(fileToReadPath, { encoding: 'utf-8' })
    console.log(fileToReadContent)
};

await read();