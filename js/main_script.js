var neoAmount = 1;
var omgAmount = 1.98;
var ltcAmount = 0.08709;
var batAmount = 13.62781009	+ 24.99;
var kncAmount = 1.36;
$( document ).ready(function() {
    $.post('https://min-api.cryptocompare.com/data/pricemulti?fsyms=NEO,OMG,LTC,BAT,KNC&tsyms=USD,GBP', function(cryptoPrices) {


      //Calculate portfolio pie chart
      var neoWorth = cryptoPrices.NEO.GBP * neoAmount;
      var omgWorth = cryptoPrices.OMG.GBP * omgAmount;
      var ltcWorth = cryptoPrices.LTC.GBP * ltcAmount;
      var batWorth =cryptoPrices.BAT.GBP * batAmount;
      var kncWorth = cryptoPrices.KNC.GBP * kncAmount;

      var portfolioWorth = neoWorth + omgWorth + ltcWorth + batWorth + kncWorth;
      console.log(portfolioWorth.toFixed(2) , 'GBP');
      $('.balance').html("<br>£" + portfolioWorth.toFixed(2) , 'GBP' );

      var neoPercentage = (neoWorth / portfolioWorth) * 100;
      var neoPercentageRounded = neoPercentage.toFixed(2);

      var omgPercentage = (omgWorth / portfolioWorth) * 100;
      var omgPercentageRounded = omgPercentage.toFixed(2);

      var ltcPercentage = (ltcWorth / portfolioWorth) * 100;
      var ltcPercentageRounded = ltcPercentage.toFixed(2);

      var batPercentage = (batWorth / portfolioWorth) * 100;
      var batPercentageRounded = batPercentage.toFixed(2);

      var kncPercentage = (kncWorth / portfolioWorth) * 100;
      var kncPercentageRounded = kncPercentage.toFixed(2);

      var ctx = document.getElementById("pieChart").getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ["NEO: " + neoPercentageRounded +'%' ,"OMG: " + omgPercentageRounded + '%', "LTC: " + ltcPercentageRounded +'%', "BAT " + batPercentageRounded + "%", "KNC " + kncPercentageRounded + "%"],
          datasets: [{
            backgroundColor: [
              "#74CB02",
              "#1A53F0",
              "#E0E0E0",
              "#9e1f63",
              "#5EB2A5",
            ],
            data: [neoWorth, omgWorth, ltcWorth, batWorth, kncWorth]
          }]
        }
      });
    //Add things to right side div element:
    $('.neo').html("<br>The current NEO exchange rates are: <br>  $ USD = " + cryptoPrices.NEO.USD + " <br>	£ GBP = " + cryptoPrices.NEO.GBP );
    $('.omg').html("<br>The current Omise Go exchange rates are: <br>  $ USD = " + cryptoPrices.OMG.USD + " <br>	£ GBP = " + cryptoPrices.OMG.GBP );
    $('.ltc').html("<br>The current Litecoin exchange rates are: <br>  $ USD = " + cryptoPrices.LTC.USD + " <br>	£ GBP = " + cryptoPrices.LTC.GBP );
    $('.bat').html("<br>The current Basic Attention Token exchange rates are: <br>  $ USD = " + cryptoPrices.BAT.USD + " <br>	£ GBP = " + cryptoPrices.BAT.GBP );
    $('.knc').html("<br>The current Kyber Network exchange rates are: <br>  $ USD = " + cryptoPrices.KNC.USD + " <br>	£ GBP = " + cryptoPrices.KNC.GBP );

  });
});
