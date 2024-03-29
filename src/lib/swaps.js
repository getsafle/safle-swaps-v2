const Web3 = require("web3");
const response = require("../constants/responses");
const { supportedDex } = require("../dex");
const { getDexInstance } = require("../utils/helper");
const tokenList = require("@getsafle/safle-token-lists");

class Swaps {
  constructor({ dex, rpcURL, chain }) {
    this.dex = dex;
    this.rpcURL = rpcURL;
    this.chain = chain;
    this.web3 = new Web3(new Web3.providers.HttpProvider(rpcURL));
  }

  async setDex(dex) {
    if (!supportedDex.includes(dex)) {
      return { error: response.INVALID_DEX };
    }
    this.dex = dex;
  }

  async getSupportedTokens() {
    const tokens = await tokenList.getSupportedTokens(this.chain, this.dex);
    return tokens;
  }

  async getExchangeRates({
    toContractAddress,
    toContractDecimal,
    fromContractAddress,
    fromContractDecimal,
    fromQuantity,
    slippageTolerance,
  }) {
    try {
      if (this[this.dex] === undefined) {
        const dexInstance = await getDexInstance(this.dex, this.chain);
        this[this.dex] = dexInstance;
      }
      const response = await this[this.dex].getExchangeRate({
        toContractAddress,
        toContractDecimal,
        fromContractAddress,
        fromContractDecimal,
        fromQuantity,
        slippageTolerance,
      });
      
        return response;

    } catch (e) {
      return { error: e };
    }
  }

  async getEstimatedGas({
    toContractAddress,
    toContractDecimal,
    fromContractAddress,
    fromContractDecimal,
    fromQuantity,
    slippageTolerance,
  }) {
    try {
      if (this[this.dex] === undefined) {
        const dexInstance = await getDexInstance(this.dex, this.chain);
        this[this.dex] = dexInstance;
      }
      const response = await this[this.dex].getEstimatedGas({
        toContractAddress,
        toContractDecimal,
        fromContractAddress,
        fromContractDecimal,
        fromQuantity,
        slippageTolerance,
      });
        return response;

    } catch (e) {
      return { error: e };
    }
  }

  async getRawTransaction({
    walletAddress,
    toContractAddress,
    toContractDecimal,
    fromContractAddress,
    fromContractDecimal,
    fromQuantity,
    slippageTolerance,
    toQuantity,
  }) {
    try {
      if (this[this.dex] === undefined) {
        const dexInstance = await getDexInstance(this.dex, this.chain);
        this[this.dex] = dexInstance;
      }
      const response = await this[this.dex].getRawTransaction({
        walletAddress,
        toContractAddress,
        toContractDecimal,
        fromContractAddress,
        fromContractDecimal,
        fromQuantity,
        slippageTolerance,
        toQuantity,
      });

        return response;

    } catch (e) {
      return { error: e };
    }
  }

  async approvalRawTransaction({
    walletAddress,
    fromContractAddress,
    fromQuantity,
  }) {
    try {
      if (this[this.dex] === undefined) {
        const dexInstance = await getDexInstance(this.dex, this.chain);
        this[this.dex] = dexInstance;
      }
      const response = await this[this.dex].approvalRawTransaction({
        walletAddress,
        fromContractAddress,
        fromQuantity,
      });

        return response;

    } catch (e) {
      return { error: e };
    }
  }

  async getRates({
    toContractAddress,
    toContractDecimal,
    fromContractAddress,
    fromContractDecimal,
    fromQuantity,
    slippageTolerance,
  }) {
    try {
      let response = [];
      let rate;
      const dexList = await getDex();

      for (let dexInstance of dexList) {
        this[this.dex] = await getDexInstance(dexInstance, this.chain);

        rate = await this[this.dex].getExchangeRate({
          toContractAddress,
          toContractDecimal,
          fromContractAddress,
          fromContractDecimal,
          fromQuantity,
          slippageTolerance,
        });

        response.push({ dexInstance, rate });
      }
        return response;
    } catch (e) {
      return { error: e };
    }
  }
}

async function getDex() {
  return supportedDex;
}
module.exports = { getDex, Swaps };
