# **Safle Swaps SDK**

Safle swaps v2 SDK.

## **Installation and Usage**

> Installation

Install the package by running the command,

`npm install @getsafle/safle-swaps-v2`

Import the package into your project using,

`const Swap = require('@getsafle/safle-swaps-v2');`

Initialise the swap class,

`const swap = new Swap({ dex, rpcURL,chain });`

- `dex`  - The name of DEX using which you want to swap tokens.
- `rpcURL`  - The rpc url to connect to a blockchain node.
- `chain`  - The chain name of the blockchain. Supported for now - `ethereum` 
> Auxiliary  Methods


Get supported DEX’s: Returns the list of all the supported DEX’s.

`const supportedDex = await Swap.getDex();`

> Class Methods

1. Change DEX: This method updates the DEX through which the swap will be executed
    
    `await swap.setDex(dex);`
    
    - `dex` - The name of DEX using which you want to swap tokens.

2. Get Supported Tokens: This method returns list of tokens supported on the dex
    
    `const supportedToken = await swap.getSupportedTokens();`
    
3. Get Exchange Rates: This method returns exchange rates for a token pair
    
    `await swap.getExchangeRates({ toContractAddress, toContractDecimal, fromContractAddress, fromContractDecimal, fromQuantity, slippageTolerance });`
    
    - `toContractAddress` - contract address of the destination token
    - `toContractDecimal` - decimal of destination token
    - `fromContractAddress` - contract address of source token
    - `fromContractDecimal` - decimal of source token
    - `fromQuantity` - source quantity in wei
    - `slippageTolerance` - Slippage tolerance percentage in integer
    
4. Get Estimated Gas: This method returns estimated gas for the swap transaction
    
    `await swap.getEstimatedGas({ toContractAddress, toContractDecimal, fromContractAddress, fromContractDecimal, fromQuantity, slippageTolerance })`
    
    - `toContractAddress` - contract address of the destination token
    - `toContractDecimal` - decimal of destination token
    - `fromContractAddress` - contract address of source token
    - `fromContractDecimal` - decimal of source token
    - `fromQuantity` - source quantity in wei
    - `slippageTolerance` - Slippage tolerance percentage in integer

5. Get Raw Transaction: This method returns the raw transaction
    
    `await swap.getRawTransaction({ walletAddress, toContractAddress, toContractDecimal, fromContractAddress, fromContractDecimal, fromQuantity, toQuantity, slippageTolerance })`
    
    - `toContractAddress` - contract address of the destination token
    - `toContractDecimal` - decimal of destination token
    - `fromContractAddress` - contract address of source token
    - `fromContractDecimal` - decimal of source token
    - `fromQuantity` - source quantity in wei
    - `walletAddress` - public address of the wallet for the transaction
    - `slippageTolerance` - Slippage tolerance percentage in integer
    - `toQuantity` - Quantity of the tokens received post swapping. This value can be obtained from the `getExchangeRates` function.

6. Get Rates: This method returns exchange rates for a token pair accross all supported DEX's
    
    `await swap.getRates({ toContractAddress, toContractDecimal, fromContractAddress, fromContractDecimal, fromQuantity, slippageTolerance });`
    
    - `toContractAddress` - contract address of the destination token
    - `toContractDecimal` - decimal of destination token
    - `fromContractAddress` - contract address of source token
    - `fromContractDecimal` - decimal of source token
    - `fromQuantity` - source quantity in wei
    - `slippageTolerance` - Slippage tolerance percentage in integer

6. Get approval transaction: This method returns the approval transaction
    
    `await swap.getRatesapprovalRawTransaction({ walletAddress, fromContractAddress, fromQuantity });`
    
    - `walletAddress` - public address of the wallet for the transaction
    - `fromContractAddress` - contract address of source token
    - `fromQuantity` - source quantity in wei
