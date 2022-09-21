const {Telegraf} = require('telegraf');

const bot = new Telegraf('1917413017:AAFwybimauUPjnS7pVQ77rBX-LLy9bb7Uig');

bot.command("p" , async ctx => {

    let input = ctx.message.text

    let startspilt = input.split(" ")[1];

   

    try{

        let res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&symbols=${startspilt}`);

          let message =`

     #️⃣ RANK     : ${res.data[0].market_cap_rank}

#️⃣ NAME     : ${res.data[0].name} 

💲 PRICE    : ${res.data[0].current_price} $

🚀 ATH      : ${res.data[0].ath} $

📅 ATH DATE : ${res.data[0].ath_date}

🟢 24L   = ${res.data[0].low_24h}$

🟢 24H  = ${res.data[0].high_24h}$

🔴 price change 24h  = ${res.data[0].price_change_percentage_24h}%

💁‍♂️ TOTAL SUPPLY     : ${res.data[0].total_supply}

⏳ TOTAL VOLUME : ${res.data[0].total_volume}

🎓 MARKET CAP : ${res.data[0].max_supply}

    

   ` ;

    ctx.replyWithPhoto({ url: image}, {caption : message })

    }catch(e){

            console.log(e);

        }

    

})

})

bot.launch();
