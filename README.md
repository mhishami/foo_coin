# FooCoin

This is a HOWTO on OpenZeppelin Smart Contracts on how to deploy a token, 
and also the Crowdsale initiation.

# How To Run
1. Clone this repo
2. do:
  - `npm install`
  - `truffle compile`
  - Run test rpc on another screen, unlock account 0: `testrpc -u0`
  - `truffle migrate`

# Test Run
1. Setup the account, and addresses
```
truffle console
> account1 = web3.eth.accounts[1]
> FooCoinCrowdsale.deployed().then( res => { crowdsale = res })
> crowdsale.token().then(addr => { tokenAddr = addr })
> tokenAddr
'0x6c3bab6bc821e1eb0d67c9cd844c61a331c7625d'
> crowdsale.contract.address
'0xb4e12534fc429d6e440f050e1f4b61b8ab662896'
```
2. Take the instance of the token address
```
> fooCoinInstance = FooCoin.at(tokenAddr)
```
3. Buy some coins
```
> FooCoinCrowdsale.deployed().then(inst => inst.sendTransaction({ from: account1, value: web3.toWei(5, "ether")}))
--
{ tx: '0x20066cd790433a5e003359c4b849ab3138f9635707ba129c34cb912aebefa992',
  receipt: 
   { transactionHash: '0x20066cd790433a5e003359c4b849ab3138f9635707ba129c34cb912aebefa992',
     transactionIndex: 0,
     blockHash: '0x93a82af67f4a0da87364d75f799a56ddc47bba9c9711008ae22b97a8a8787b8b',
     blockNumber: 5,
     gasUsed: 99576,
     cumulativeGasUsed: 99576,
     contractAddress: null,
     logs: [ [Object], [Object], [Object] ] },
  logs: 
   [ { logIndex: 2,
       transactionIndex: 0,
       transactionHash: '0x20066cd790433a5e003359c4b849ab3138f9635707ba129c34cb912aebefa992',
       blockHash: '0x93a82af67f4a0da87364d75f799a56ddc47bba9c9711008ae22b97a8a8787b8b',
       blockNumber: 5,
       address: '0xb4e12534fc429d6e440f050e1f4b61b8ab662896',
       type: 'mined',
       event: 'TokenPurchase',
       args: [Object] } ] }
>
```
4. Check Your Balance
```
> fooCoinInstance.balanceOf(account1).then(balance => { fooBalance = balance.toString(10)})
undefined
> fooBalance
'5000000000000000000000'
> web3.fromWei(fooBalance, 'ether')
'5000'
> 
```

