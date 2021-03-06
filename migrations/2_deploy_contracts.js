// 
var FooCoinCrowdsale = artifacts.require('./FooCoinCrowdsale.sol')

module.exports = function(deployer, network, accounts) {
  const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 1
  const endTime = startTime + (24*60*60 * 20) // 20 days
  const rate = new web3.BigNumber(1000)
  const wallet = accounts[0]

  deployer.deploy(FooCoinCrowdsale, startTime, endTime, rate, wallet)
}
