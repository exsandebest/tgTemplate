'use strict';
const app = require("express")();
const TelegramBot = require('node-telegram-bot-api');
const mysql = require("mysql2");
if (!process.env.USING_SERVER) {
    require('dotenv').config({
        path: "config/.env"
    });
}
const sql = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
})

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

app.listen(process.env.PORT, process.env.IP , () => {
   console.log(`Started on ${process.env.IP}:${process.env.PORT}`);
});
