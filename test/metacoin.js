var FooCoin = artifacts.require("./FooCoin.sol");

contract('FooCoin', function(accounts) {
  
  it("should put 0 FooCoin in the first account", function() {
    return FooCoin.deployed().then(function(instance) {
      return instance.balanceOf.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 0, "0 wasn't in the first account");
    });
  });

  it('should be able to mint 100,000 FooCoin to himself', function(accounts) {
    var value = 10000;
    var self = accounts[0];
    return FooCoin.deployed().then(instance => {
      instance.mint(self, value);
      return instance;
    }).then(instance => {
      // get balance
      return instance.balanceOf(self);
    }).then(balance => {
      assert.equal(balance.valueOf(), value, 'Should be 100,000 FooCoin value');
    });
  });

  it("should send coin correctly", function() {
    var meta;

    // Get initial balances of first and second account.
    var account_one = accounts[0];
    var account_two = accounts[1];

    var account_one_starting_balance;
    var account_two_starting_balance;
    var account_one_ending_balance;
    var account_two_ending_balance;

    var amount = 10;

    return FooCoin.deployed().then(function(instance) {
      meta = instance;
      return meta.getBalance.call(account_one);
    }).then(function(balance) {
      account_one_starting_balance = balance.toNumber();
      return meta.getBalance.call(account_two);
    }).then(function(balance) {
      account_two_starting_balance = balance.toNumber();
      return meta.sendCoin(account_two, amount, {from: account_one});
    }).then(function() {
      return meta.getBalance.call(account_one);
    }).then(function(balance) {
      account_one_ending_balance = balance.toNumber();
      return meta.getBalance.call(account_two);
    }).then(function(balance) {
      account_two_ending_balance = balance.toNumber();

      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
    });
  });
});
