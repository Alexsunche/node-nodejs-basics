const parseEnv = () => {
  const RSSPrefix = 'RSS_';
  const RSSEnvVars = Object.entries(process.env)
    .filter(([varName]) => varName.includes(RSSPrefix))
    .map(([varName, varValue]) => `${varName}=${varValue}`)
    .join('; ');

  console.log(RSSEnvVars);
};

parseEnv();