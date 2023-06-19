import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
    const filePathToReadHash = 'src/hash/files/fileToCalculateHashFor.txt'
    const fileData = fs.readFileSync(filePathToReadHash)
    const hashAsHex = crypto.createHash('sha256').update(fileData).digest('hex');
    console.log(hashAsHex);
};

await calculateHash();