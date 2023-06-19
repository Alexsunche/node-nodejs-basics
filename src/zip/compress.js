import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
  const readableStream = fs.createReadStream('src/zip/files/fileToCompress.txt');
  const writableStream = fs.createWriteStream('src/zip/files/archive.gz');
  const gzipStream = zlib.createGzip();

  readableStream.pipe(gzipStream).pipe(writableStream);
};

await compress();