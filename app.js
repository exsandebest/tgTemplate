'use strict';
if (!process.env.USING_SERVER) {
    require('dotenv').config({
        path: "config/.env"
    });
}
const TelegramBot = require('node-telegram-bot-api');
const sql = require("./modules/database");

const bot = new TelegramBot(process.env.BOT_TOKEN, {
   polling: true
});

const botName = process.env.BOT_NAME;

bot.onText(new RegExp(`^\\/start(@${botName})?$`), (msg) => {
    bot.sendMessage(msg.chat.id, `Привет, Я ${botName}`);
})

bot.onText(new RegExp(`^\\/ping(@${botName})?$`), (msg) => {
   bot.sendMessage(msg.chat.id, "Я тут");
})
