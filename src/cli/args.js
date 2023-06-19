const parseArgs = () => {
  const args = process.argv.splice(2);
  const parsedArgsNamesPairs = {};
  
  args.forEach((item, index) => {
    if(index % 2 == 0 && item.startsWith('--'))  {
        parsedArgsNamesPairs[item] = args[index + 1] 
    }
  })  
  
  Object.entries(parsedArgsNamesPairs).forEach(([key, value]) => console.log(`${key.slice(2)} is ${value}`))
};

parseArgs();