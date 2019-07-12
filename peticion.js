//const single = require('./twitSp')
const fs = require('fs')
const Twit = require('twit')
const config = require ('./config')

var T = new Twit(config)

const palabra = 'cocaina'

const peticion = {'query': `${palabra} place_country:CO`,'maxResults':'100', 'next':''}

T.get('tweets/search/30day/30DaysDev', peticion, function(err, data, response) {
  //console.log(data.statuses[0])
  if(err){
    console.log(err);
  }
  else if (data){
    //console.log(data.results[0]);
    console.log(data.next);
    //next = data.next//console.log(data.results[0].retweeted_status.extended_tweet.full_text);
    console.log(data.requestParameters);
    console.log(data.results.length);
    /*if (data.next){
      console.log(`la siguiente pagina esta acá: ${data.next}`);
    }*/
  }
  else if (response) {
    console.log("response");
  }
  else{
    console.log("ninguna");
  }
let datosParaGuardar = JSON.stringify(data.results, null, 2)

//fs.writeFileSync(`./resultados/${palabra}-4.json`, datosParaGuardar)
})
