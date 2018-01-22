var adam = {
  ltc: 2.147581823,
  xmr: 0.4804501431,
  req: 156.2207086,
  xrb: 4.789,
  fun: 409.7856821,
  rpx: 62.23085157,
  doge: 2534.725743
};
var monty = {
  ltc: 1.718360684,
  neo: 1,
  xrp: 29.761904,
  btc: 0.00724107718,
  eth: 0.19345353246,
  doge: 1219.710027
};
var shay = {};
var jonathan = {
  btc: 0.02172323155,
  eth: 0.232144239,
  ltc: 0.9148698565
};
var anon = {
  ltc: 2.147581823,
  xmr: 1.202125358
};

$( document ).ready(function() {
    $.post('https://min-api.cryptocompare.com/data/pricemulti?fsyms=LTC,XMR,REQ,XRB,FUN,RPX,DOGE,XRP,BTC,ETH&tsyms=USD,GBP', function(cryptoPrices) {
      var profitOrLosses = [40, 100, 1, 5, 25, 10];
      console.log(profitOrLosses.sort(function(a, b){return b-a}));
  });
});
