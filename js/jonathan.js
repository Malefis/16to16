var btcAmount = 0.02172323155;
var ethAmount = 0.232144239;
var ltcAmount = 0.9148698565;
var neoAmount = 1;

$( document ).ready(function() {
    $.post('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,NEO&tsyms=USD,GBP', function(cryptoPrices) {


      //Calculate portfolio pie chart
      var ltcWorth = cryptoPrices.LTC.USD * ltcAmount;
      var btcWorth = cryptoPrices.BTC.USD * btcAmount;
      var ethWorth = cryptoPrices.ETH.USD * ethAmount;
      var neoWorth =cryptoPrices.NEO.USD * neoAmount;


      var portfolioWorth = ltcWorth+ btcWorth + ethWorth +neoWorth;
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
      var btcPercentage = (btcWorth / portfolioWorth) * 100;
      var btcPercentageRounded = btcPercentage.toFixed(2);

      var ethPercentage = (ethWorth / portfolioWorth) * 100;
      var ethPercentageRounded = ethPercentage.toFixed(2);

      var ltcPercentage = (ltcWorth / portfolioWorth) * 100;
      var ltcPercentageRounded = ltcPercentage.toFixed(2);

      var neoPercentage = (neoWorth / portfolioWorth) * 100;
      var neoPercentageRounded = neoPercentage.toFixed(2);

      var ctx = document.getElementById("pieChart").getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ["BTC: " + btcPercentageRounded +'%' ,"ETH: " + ethPercentageRounded + '%', "LTC: " + ltcPercentageRounded +'%', "NEO: " + neoPercentageRounded + "%"],
          datasets: [{
            backgroundColor: [
              "#E0E0E0",
              "#4c4c4c",
              "#61b6e8",
              "#2d839a",
            ],
            data: [ltcWorth,btcWorth,ethWorth,neoWorth]
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
