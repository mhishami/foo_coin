pragma solidity ^0.4.15;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

/**
 * The FooCoin contract does this and that...
 */
contract FooCoin is MintableToken {

  string public name = 'FOO Coin';
  string public symbol = 'FOO';
  uint256 public decimals = 18;

  function FooCoin () {
  }
  
}

