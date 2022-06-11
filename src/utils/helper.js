const Dex = require('../dex');

async function getDexInstance(dex, chain) {
  
    const dexInstance = new Dex[dex](chain);
    
    return dexInstance;
  }

module.exports = { getDexInstance };