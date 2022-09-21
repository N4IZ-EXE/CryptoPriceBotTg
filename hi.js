const {Telegraf} = require('telegraf')
const Extra = require('telegraf/extra');

    const Markup = require('telegraf/markup')

const bot = new Telegraf('5442636721:AAEYFYcYOKGReXHOWvieaecDvosUo0oJQ1s');


bot.hears('/start', ctx =>{
var things = ['https://telegra.ph/file/6ca2ec259c2ec4adcf8eb.jpg', 'https://telegra.ph/file/5bfa27295e4293f37b8d1.jpg'];
var thing = things[Math.floor(Math.random()*things.length)];
var emoj = ['🐏', '🐻'];
var emojs = things[Math.floor(Math.random()*things.length)];
ctx.replyWithPhoto({ url: things }, 
   { 
     caption: 'what is this?', 
     parse_mode: 'Markdown',inlineKeyboard([ 
       Markup.button.callback('ok', 'plain'), 
       Markup.button.callback('🐕', 'italic') 
     ]) 
bot.hears(thing, ctx =>{
ctx.reply('passed')
})
})
bot.launch();
