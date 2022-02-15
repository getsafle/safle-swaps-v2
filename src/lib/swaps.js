const Web3 = require('web3');
const response = require('../constants/responses');
const { supportedDex } = require('../dex');

class Swaps {

    constructor({ dex, rpcURL }) {
        this.dex = dex;
        this.rpcURL = rpcURL;
        this.web3 = new Web3(new Web3.providers.HttpProvider(rpcURL));
    }

    async setDex(dex) {
        if(!supportedDex.includes(dex))
        {
            return { error: response.INVALID_DEX }
        }
        this.dex = dex;
    }    
}

async function  getDex(){

    return supportedDex;

}
module.exports = { getDex, Swaps };