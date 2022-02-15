const Dex = require('../dex');

async function getDexInstance(dex) {
  
    const dexInstance = new Dex[dex]();
    
    return dexInstance;
  }

module.exports = { getDexInstance };