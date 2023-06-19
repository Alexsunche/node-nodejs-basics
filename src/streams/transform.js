import { Transform } from 'stream'
const transform = async () => {
    const TransformStream = new Transform({
        transform(chunk, encoding, cb) {
          const reversedData = chunk.toString().split('').reverse().join('');
          this.push(reversedData);
          cb();
        }
    });
    
    process.stdin.pipe(TransformStream).pipe(process.stdout);
};

await transform();