var ltcAmount = 2.147581823;
var xmrAmount = 0.4808501431;
var reqAmount = 156.2207086;
var xrbAmount = 4.789;
var funAmount = 409.7856821;
var rpxAmount = 62.23085157;
var dogeAmount = 2534.725742;

$( document ).ready(function() {
    $.post('https://min-api.cryptocompare.com/data/pricemulti?fsyms=LTC,XMR,REQ,XRB,FUN,RPX,DOGE&tsyms=USD,GBP', function(cryptoPrices) {


      //Calculate portfolio pie chart
      var ltcWorth = cryptoPrices.LTC.USD * ltcAmount;
      var xmrWorth = cryptoPrices.XMR.USD * xmrAmount;
      var reqWorth = cryptoPrices.REQ.USD * reqAmount;
      var xrbWorth =cryptoPrices.XRB.USD * xrbAmount;
      var funWorth = cryptoPrices.FUN.USD * funAmount;
      var rpxWorth = cryptoPrices.RPX.USD * rpxAmount;
      var dogeWorth = cryptoPrices.DOGE.USD * dogeAmount;


      var portfolioWorth = ltcWorth + xmrWorth + reqWorth + xrbWorth + funWorth + rpxWorth + dogeWorth;
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
      var xmrPercentage = (xmrWorth / portfolioWorth) * 100;
      var xmrPercentageRounded = xmrPercentage.toFixed(2);

      var reqPercentage = (reqWorth / portfolioWorth) * 100;
      var reqPercentageRounded = reqPercentage.toFixed(2);

      var ltcPercentage = (ltcWorth / portfolioWorth) * 100;
      var ltcPercentageRounded = ltcPercentage.toFixed(2);

      var xrbPercentage = (xrbWorth / portfolioWorth) * 100;
      var xrbPercentageRounded = xrbPercentage.toFixed(2);

      var funPercentage = (funWorth / portfolioWorth) * 100;
      var funPercentageRounded = funPercentage.toFixed(2);

      var rpxPercentage = (rpxWorth / portfolioWorth) * 100;
      var rpxPercentageRounded = rpxPercentage.toFixed(2);

      var dogePercentage = (dogeWorth / portfolioWorth) * 100;
      var dogePercentageRounded = dogePercentage.toFixed(2);

      var ctx = document.getElementById("pieChart").getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ["LTC: " + ltcPercentageRounded +'%' ,"XMR: " + xmrPercentageRounded + '%', "REQ: " + reqPercentageRounded +'%', "XRB: " + xrbPercentageRounded + "%", "FUN: " + funPercentageRounded + "%" , "RPX: " + rpxPercentageRounded + "%" , "DOGE: " + dogePercentageRounded + "%"],
          datasets: [{
            backgroundColor: [
              "#E0E0E0",
              "#4c4c4c",
              "#61b6e8",
              "#2d839a",
              "#e60058",
              "#8A2E31",
              "#D6B34D",
            ],
            data: [ltcWorth, xmrWorth, reqWorth, xrbWorth, funWorth , rpxWorth , dogeWorth]
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
