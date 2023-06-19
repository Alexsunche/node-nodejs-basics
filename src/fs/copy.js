import fs from "fs"

const copy = async () => {
    const basePath = 'src/fs/'
    const currentFilesFolderName = basePath + 'files'
    const copyFilesFolderName = basePath + 'files_copy'

    if (!fs.existsSync(currentFilesFolderName) || fs.existsSync(copyFilesFolderName)) {
        throw new Error(`FS operation failed`);
    }

    try {
        fs.mkdirSync(copyFilesFolderName);
        fs.readdirSync(currentFilesFolderName)
          .forEach(file => {
            const oldPass = `${currentFilesFolderName}/${file}`
            const newPass = `${copyFilesFolderName}/${file}`

            fs.copyFileSync(oldPass, newPass);
          })
      } catch (err) {
        throw new Error("FS operation failed.");
      }
};

await copy();
