const oneInch = require('@getsafle/1inch-controller');
const uniswap = require('@getsafle/uniswap-controller');
const pancakeswap = require('@getsafle/pancakeswap-controller');
const quickswap = require('@getsafle/uniswap-controller');
const supportedDex = [ 'oneInch', 'uniswap' ];

module.exports = {supportedDex, uniswap, oneInch, pancakeswap, quickswap};