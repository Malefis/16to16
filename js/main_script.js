function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML > y.innerHTML) {
        //if so, mark as a switch and break the loop:
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
$( document ).ready(function() {
    $.post('https://min-api.cryptocompare.com/data/pricemulti?fsyms=LTC,XMR,REQ,XRB,FUN,RPX,DOGE,XRP,BTC,ETH,NEO&tsyms=USD,GBP', function(cryptoPrices) {
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
        ltc: 0.9148698565,
        neo: 1
      };
      var anon = {
        ltc: 2.147581823,
        xmr: 1.202125358
      };

      var start = 1000;
      var adamProfitLoss = (adam.ltc * cryptoPrices.LTC.USD)+ (adam.xmr * cryptoPrices.XMR.USD)+(adam.req*cryptoPrices.REQ.USD)+(adam.xrb*cryptoPrices.XRB.USD)+(adam.fun*cryptoPrices.FUN.USD)+(adam.rpx*cryptoPrices.RPX.USD)+(adam.doge*cryptoPrices.DOGE.USD) - 1000;
      var montyProfitLoss =(monty.ltc * cryptoPrices.LTC.USD) + (monty.neo * cryptoPrices.NEO.USD) + (monty.xrp * cryptoPrices.XRP.USD) + (monty.btc * cryptoPrices.BTC.USD)+ (monty.eth * cryptoPrices.ETH.USD) + (monty.doge * cryptoPrices.DOGE.USD) - 1000 ;
      var jonathanProfitLoss = (jonathan.ltc * cryptoPrices.LTC.USD) + (jonathan.neo * cryptoPrices.NEO.USD) +(jonathan.btc * cryptoPrices.BTC.USD)+ (jonathan.eth * cryptoPrices.ETH.USD)- 1000 ;
      var anonProfitLoss = (anon.ltc * cryptoPrices.LTC.USD)+(anon.xmr * cryptoPrices.XMR.USD) - 1000;
      var profitOrLosses = {
        adam: adamProfitLoss,
        monty: montyProfitLoss,
        jonathan: jonathanProfitLoss,
        anon: anonProfitLoss
      }
      if (profitOrLosses.adam <0) {
        $('.adamTable').html(profitOrLosses.adam.toFixed(2) , 'USD' );
        $('.adamTable').css('color', 'red');
      } else {
        $('.adamTable').css('color', 'green');
      }
      if (profitOrLosses.monty <0) {
        $('.montyTable').html(profitOrLosses.monty.toFixed(2) , 'USD' );
        $('.montyTable').css('color', 'red');
      } else {
        $('.montyTable').css('color', 'green');
      }
      if (profitOrLosses.jonathan <0) {
        $('.jonathanTable').html(profitOrLosses.jonathan.toFixed(2) , 'USD' );
        $('.jonathanTable').css('color', 'red');
      } else {
        $('.jonathanTable').css('color', 'green');
      }
      if (profitOrLosses.anon <0) {
        $('.anonTable').html(profitOrLosses.anon.toFixed(2) , 'USD' );
        $('.anonTable').css('color', 'red');
      } else {
        $('.anonTable').css('color', 'green');
      }
      sortTable();
      // console.log("Adam:",profitOrLosses.adam,"Monty:",profitOrLosses.monty,"Jonathan:", profitOrLosses.jonathan , "Anonymous" , profitOrLosses.anon);
  });
});
