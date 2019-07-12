const chalk = require('chalk');
const sinProcesar = require('./resultados/cocaina-4')

var rt = 0;
var quote = 0;
var nativoLargoReply = 0;
var nativoLargoMain = 0;
var nativoCortoReply = 0;
var nativoCortoMain = 0;

for(i = 0; i < sinProcesar.length; i++){
  //rt
  if(sinProcesar[i].retweeted_status){
    rt = ++rt;/*
    if(sinProcesar[i].retweeted_status.extended_tweet){
      console.log(chalk.red(`${sinProcesar[i].retweeted_status.extended_tweet.full_text}`));
    }
    else {
      console.log(chalk.red(`${sinProcesar[i].retweeted_status.text}`))
    }
    */
  }

  //quote
  else if(sinProcesar[i].quoted_status) {
    quote = ++quote;
    /*
    if (sinProcesar[i].extended_tweet){
      console.log(chalk.yellow(`${sinProcesar[i].extended_tweet.full_text}`));
    }
    else{
      console.log(chalk.yellow(`${sinProcesar[i].text}`));
    }
    */
  }

  //nativoLargoMain
  else if(sinProcesar[i].truncated && !sinProcesar[i].in_reply_to_status_id){
    nativoLargoMain = ++nativoLargoMain;
    //console.log(chalk.green(`${sinProcesar[i].extended_tweet.full_text}`));
  }

  //nativoLargoReply
  else if(sinProcesar[i].truncated && sinProcesar[i].in_reply_to_status_id){
    nativoLargoReply = ++nativoLargoReply;
    //console.log(chalk.bgGreen(`${sinProcesar[i].extended_tweet.full_text}`));
  }

  //nativoCortoMain
  else if(!sinProcesar[i].truncated && !sinProcesar[i].in_reply_to_status_id){
    nativoCortoMain = ++nativoCortoMain;
    //console.log(chalk.blue(`${sinProcesar[i].text}`));
  }

  //nativoCortoReply
  else if(!sinProcesar[i].truncated && sinProcesar[i].in_reply_to_status_id){
    nativoCortoReply = ++nativoCortoReply;
    console.log(chalk.bgBlue(`${sinProcesar[i].text}`));
  }
}
//console.log(sinProcesar[93]);

console.log(`Cantidad rt: ${rt}`);
console.log(`Cantidad quote: ${quote}`);
console.log(`Cantidad nativoLargoMain: ${nativoLargoMain}`);
console.log(`Cantidad nativoLargoReply: ${nativoLargoReply}`);
console.log(`Cantidad nativoCortoMain: ${nativoCortoMain}`);
console.log(`Cantidad nativoCortoReply: ${nativoCortoReply}`);
console.log(rt + quote + nativoLargoMain + nativoLargoReply + nativoCortoMain + nativoCortoReply);
