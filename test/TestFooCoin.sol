pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/FooCoin.sol";

contract TestFooCoin {

  // function testInitialBalanceUsingDeployedContract() {
  //   FooCoin meta = FooCoin(DeployedAddresses.FooCoin());
  //   uint expected = 10000 ether;
  //   Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 FooCoin initially");
  // }

  function testInitialBalanceWithNewFooCoin() {
    FooCoin meta = new FooCoin();
    uint expected = 0;
    Assert.equal(meta.balanceOf(tx.origin), expected, "Owner should have 0 FooCoin initially");
  }

}
