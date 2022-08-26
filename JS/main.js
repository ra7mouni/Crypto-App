$(function() {
    getMarketData();
    setInterval(getMarketData, 10000);
  });
  
  function getMarketData() {
    getCryptoCompare();
  }
  
  function getCryptoCompare() {
    $.when(
      $.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,DOGE,XRP,SHIB&tsyms=USD")
    ).done(function (data) {
      $("#btcLogo").html('<img src="https://cryptocompare.com' + data.RAW.BTC.USD.IMAGEURL + '">');
      $("#btcSymbol").text((data.RAW.BTC.USD.FROMSYMBOL).toLocaleString());
      $("#btcPrice").text((data.RAW.BTC.USD.PRICE).toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#btcChange").text((data.RAW.BTC.USD.CHANGEPCT24HOUR).toFixed(2) + "%");
      $("#btcVol").text((data.RAW.BTC.USD.VOLUME24HOUR).toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#btcCap").text((data.RAW.BTC.USD.MKTCAP).toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#btcTime").text( (new Date(data.RAW.BTC.USD.LASTUPDATE * 1000) ).toLocaleString());
  
      $("#ethLogo").html('<img src="https://cryptocompare.com' + data.RAW.ETH.USD.IMAGEURL + '">');
      $("#ethSymbol").text((data.RAW.ETH.USD.FROMSYMBOL).toLocaleString());
      $("#ethPrice").text((data.RAW.ETH.USD.PRICE).toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#ethChange").text((data.RAW.ETH.USD.CHANGEPCT24HOUR).toFixed(2) + "%");
      $("#ethVol").text((data.RAW.ETH.USD.VOLUME24HOUR).toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#ethCap").text((data.RAW.ETH.USD.MKTCAP).toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#ethTime").text( (new Date(data.RAW.ETH.USD.LASTUPDATE * 1000) ).toLocaleString());
      
      $("#dogeLogo").html('<img src="https://cryptocompare.com' + data.RAW.DOGE.USD.IMAGEURL + '">'); 
      $("#dogeSymbol").text((data.RAW.DOGE.USD.FROMSYMBOL).toLocaleString());
      $("#dogePrice").text((data.RAW.DOGE.USD.PRICE).toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#dogeChange").text((data.RAW.DOGE.USD.CHANGEPCT24HOUR).toFixed(2) + "%");
      $("#dogeVol").text((data.RAW.DOGE.USD.VOLUME24HOUR).toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#dogeCap").text((data.RAW.DOGE.USD.MKTCAP).toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#dogeTime").text( (new Date(data.RAW.DOGE.USD.LASTUPDATE * 1000) ).toLocaleString());
      
      $("#xrpLogo").html('<img src="https://cryptocompare.com' + data.RAW.XRP.USD.IMAGEURL + '">');    
      $("#xrpSymbol").text((data.RAW.XRP.USD.FROMSYMBOL).toLocaleString());
      $("#xrpPrice").text((data.RAW.XRP.USD.PRICE).toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#xrpChange").text((data.RAW.XRP.USD.CHANGEPCT24HOUR).toFixed(2) + "%");
      $("#xrpVol").text((data.RAW.XRP.USD.VOLUME24HOUR).toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#xrpCap").text((data.RAW.XRP.USD.MKTCAP).toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#xrpTime").text( (new Date(data.RAW.XRP.USD.LASTUPDATE * 1000) ).toLocaleString());
      
      $("#shibLogo").html('<img src="https://cryptocompare.com' + data.RAW.SHIB.USD.IMAGEURL + '">');
      $("#shibSymbol").text((data.RAW.SHIB.USD.FROMSYMBOL).toLocaleString());
      $("#shibPrice").text("$" + (data.RAW.SHIB.USD.PRICE).toFixed(6));
      $("#shibChange").text((data.RAW.SHIB.USD.CHANGEPCT24HOUR).toFixed(2) + "%");
      $("#shibVol").text((data.RAW.SHIB.USD.VOLUME24HOUR).toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#shibCap").text((data.RAW.SHIB.USD.MKTCAP).toLocaleString("en-US", {style: "currency", currency: "USD"}));
      $("#shibTime").text( (new Date(data.RAW.SHIB.USD.LASTUPDATE * 1000) ).toLocaleString());
    });
  }
  
  
  
  $("#btcChange, #ethChange, #dogeChange, #xrpChange, #shibChange").bind("DOMSubtreeModified", function(){
    if($(this).is(":contains('-')")) {
      $(this).removeClass("positive").addClass("negative");
    } else {
      $(this).removeClass("negative").addClass("positive");
    }
  });

  
  const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));


var obj=new Object()
var test=false
var myinfo={}

function signupinfo(){
    var name = document.getElementById("nametext").value 
    var email = document.getElementById("emailtext").value
    var password = document.getElementById("passwordtext").value 
    
    obj.name=name
    obj.email=email
    obj.password=password
    
    
}
function sendinfo(){
  
localStorage.setItem('obj',JSON.stringify(obj))
}
function signin(){
  var getname= localStorage.getItem('obj')
  myinfo =JSON.parse(getname)
    var getemail = document.getElementById("siemail").value
    var getpass = document.getElementById("sipass").value
    if (getemail===myinfo.email && getpass===myinfo.password){
      alert("Welcome! You're signed-in.")
    }else {
        alert("Your password/email is incorrect!!")
    }
}

function getinfo(){
  
signin()
}
