import fs from "fs"

const rename = async () => {
    const wrongNamePath = 'src/fs/files/wrongFilename.txt'
    const properNamePath = 'src/fs/files/properFilename.md'

    if (fs.existsSync(properNamePath) || !fs.existsSync(wrongNamePath)) {
        throw new Error(`FS operation failed`);
    }

    try {
        fs.renameSync(wrongNamePath, properNamePath);
    } catch {
        throw new Error("FS operation failed.");
    }
};

await rename();