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
        if (!supportedDex.includes(dex)) {
            return { error: response.INVALID_DEX }
        }
        this.dex = dex;
    }

    async getSupportedTokens() {
        if (this[this.dex] === undefined) {
            const dexInstance = await getDexInstance(this.dex);
            this[this.dex] = dexInstance;
        }
        const response = await this[this.dex].getSupportedTokens();
        return response;
    }

    async getExchangeRates({ toContractAddress, toContractDecimal, fromContractAddress, fromContractDecimal, fromQuantity }) {
        try {
            if (this[this.dex] === undefined) {
                const dexInstance = await getDexInstance(this.dex);
                this[this.dex] = dexInstance;
            }
            const response = await this[this.dex].getExchangeRate({ toContractAddress, toContractDecimal, fromContractAddress, fromContractDecimal, fromQuantity });

            return response;
        }
        catch (e) {
            return { error: e };
        }
    }

    async getEstimatedGas({ toContractAddress, toContractDecimal, fromContractAddress, fromContractDecimal, fromQuantity }) {

        try{   
           if(this[this.dex] === undefined){
               const dexInstance = await getDexInstance(this.dex);
               this[this.dex] = dexInstance;
           }
           const response  = await this[this.dex].getEstimatedGas({ toContractAddress, toContractDecimal, fromContractAddress, fromContractDecimal, fromQuantity});
           return response;
           }
        catch(e){
            return { error: e };
        }
       }
       async getRawTransaction({ walletAddress, toContractAddress, toContractDecimal, fromContractAddress, fromContractDecimal, fromQuantity }) {
        try{   
            if(this[this.dex] === undefined){
                const dexInstance = await getDexInstance(this.dex);
                this[this.dex] = dexInstance;
            }
       const response = await this[this.dex].getRawTransaction({ walletAddress, toContractAddress, toContractDecimal, fromContractAddress, fromContractDecimal, fromQuantity });

        return response;
        }
        catch(e){
            return { error: e };
        }
    }
}

async function getDex() {

    return supportedDex;

}
module.exports = { getDex, Swaps };