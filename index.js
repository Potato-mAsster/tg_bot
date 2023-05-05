const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf('5998246863:AAGFuYerJVsdb9hgTUZ5foZ3uLGyAoc0Q0o');
const funny = [
    'https://youtu.be/-kpc3UZ-rwU',
    'https://youtu.be/dWnu0At1yPQ',
    'https://youtu.be/DLsa6s9xKJE',
    'https://youtu.be/zyfHMFJAyA0',
];
const sad = [
    'https://youtu.be/uOQEqnXV984',
];
let currentFunny = funny[0];
let currentSad = sad[0];

const keyboard = Markup.keyboard([
    ['смешной видосик'],
    ['грустный видосик'],
    ['поменять смешной видосик']
]).resize().oneTime();

bot.start((ctx) => {
    ctx.reply('Привет! Я бот котоый скинет вам интересные видосики =)  Вот мои команды:', keyboard)
});

bot.hears('смешной видосик', (ctx) => {
    ctx.reply(currentFunny);
})

bot.hears('грустный видосик', (ctx) => {
    ctx.reply(currentSad);
})

bot.hears('поменять смешной видосик', (ctx) => {
    const randomIndex = Math.floor(Math.random()* funny.length);
    currentFunny = funny[randomIndex];
    ctx.reply('нажмите на кнопку смешой видосик', keyboard);
});

bot.launch();