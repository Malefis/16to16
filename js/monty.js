var ltcAmount = 1.718360684;
var neoAmount = 1;
var xrpAmount = 29.761904;
var btcAmount = 0.00724107718;
var ethAmount = 0.19345353246;
var dogeAmount = 2534.725742;

$( document ).ready(function() {
    $.post('https://min-api.cryptocompare.com/data/pricemulti?fsyms=LTC,NEO,XRP,BTC,ETH,DOGE&tsyms=USD,GBP', function(cryptoPrices) {


      //Calculate portfolio pie chart
      var ltcWorth = cryptoPrices.LTC.USD * ltcAmount;
      var neoWorth = cryptoPrices.NEO.USD * neoAmount;
      var xrpWorth = cryptoPrices.XRP.USD * xrpAmount;
      var btcWorth =cryptoPrices.BTC.USD * btcAmount;
      var ethWorth = cryptoPrices.ETH.USD * ethAmount;
      var dogeWorth = cryptoPrices.DOGE.USD * dogeAmount;


      var portfolioWorth = ltcWorth + neoWorth + btcWorth + ethWorth + xrpWorth + dogeWorth;
      console.log(portfolioWorth.toFixed(2) , 'USD');
      $('.balance').html("$" + portfolioWorth.toFixed(2) , 'USD <br>' );
      var profitloss = portfolioWorth - 1000
      if (profitloss > 1000) {
        $('.profitloss').css('color', 'green');
        $('.profitloss').html(" Profit : $" + profitloss.toFixed(2) , 'USD' );
      }else{
        $('.profitloss').html(" Loss: $" + profitloss.toFixed(2) , 'USD' );
        $('.profitloss').css('color', 'red');
      }
      var neoPercentage = (neoWorth / portfolioWorth) * 100;
      var neoPercentageRounded = neoPercentage.toFixed(2);

      var xrpPercentage = (xrpWorth / portfolioWorth) * 100;
      var xrpPercentageRounded = xrpPercentage.toFixed(2);

      var ltcPercentage = (ltcWorth / portfolioWorth) * 100;
      var ltcPercentageRounded = ltcPercentage.toFixed(2);

      var btcPercentage = (btcWorth / portfolioWorth) * 100;
      var btcPercentageRounded = btcPercentage.toFixed(2);

      var ethPercentage = (ethWorth / portfolioWorth) * 100;
      var ethPercentageRounded = ethPercentage.toFixed(2);

      var dogePercentage = (dogeWorth / portfolioWorth) * 100;
      var dogePercentageRounded = dogePercentage.toFixed(2);

      var ctx = document.getElementById("pieChart").getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ["LTC: " + ltcPercentageRounded +'%' ,"NEO: " + neoPercentageRounded + '%', "XRP: " + xrpPercentageRounded +'%', "BTC: " + btcPercentageRounded + "%", "ETH: " + ethPercentageRounded + "%" ,"DOGE: " + dogePercentageRounded + "%"],
          datasets: [{
            backgroundColor: [
              "#E0E0E0",
              "#7ACD01",
              "#0487BF",
              "#F7931A",
              "#2F3030",
              "#D6B34D",
            ],
            data: [ltcWorth,neoWorth,xrpWorth,btcWorth,ethWorth,dogeWorth]
          }]
        }
      });
    //Add things to right side div element:
    // $('.neo').html("<br>The current NEO exchange rates are: <br>  $ USD = " + cryptoPrices.NEO.USD + " <br>	£ GBP = " + cryptoPrices.NEO.GBP );
    // $('.omg').html("<br>The current Omise Go exchange rates are: <br>  $ USD = " + cryptoPrices.OMG.USD + " <br>	£ GBP = " + cryptoPrices.OMG.GBP );
    // $('.ltc').html("<br>The current Litecoin exchange rates are: <br>  $ USD = " + cryptoPrices.LTC.USD + " <br>	£ GBP = " + cryptoPrices.LTC.GBP );
    // $('.bat').html("<br>The current Basic Attention Token exchange rates are: <br>  $ USD = " + cryptoPrices.BAT.USD + " <br>	£ GBP = " + cryptoPrices.BAT.GBP );
    // $('.knc').html("<br>The current Kyber Network exchange rates are: <br>  $ USD = " + cryptoPrices.KNC.USD + " <br>	£ GBP = " + cryptoPrices.KNC.GBP );

  });
});
