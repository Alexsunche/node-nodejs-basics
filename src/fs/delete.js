import fs from "fs"

const remove = async () => {
    const fileToRemovePath = 'src/fs/files/fileToRemove.txt'

    if (!fs.existsSync(fileToRemovePath)) throw new Error(`FS operation failed`);

    try {
        fs.unlinkSync(fileToRemovePath)    
    } catch {
        throw new Error(`FS operation failed`)
    }
};

await remove();