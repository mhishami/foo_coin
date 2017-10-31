pragma solidity ^0.4.15;

import './FooCoin.sol';
import 'zeppelin-solidity/contracts/crowdsale/Crowdsale.sol';

/**
 * The FooCoinCrowdsale contract does this and that...
 */
contract FooCoinCrowdsale is Crowdsale {

  address wallet;

  function FooCoinCrowdsale (uint256 _startTime, uint256 _endTime,
                             uint256 _rate, address _wallet) 
    Crowdsale(_startTime, _endTime, _rate, _wallet) {
    wallet = _wallet;
  }

  function createTokenContract() internal returns (MintableToken)  {
    return new FooCoin(wallet);
  }
}
