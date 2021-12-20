const appConfig = require('./conf/config.json');

const { Telegraf } = require('telegraf');

const constant = require('./constant');

const bot = new Telegraf(appConfig.bottokens.temngaobot);

bot.command('start', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, "Hello Shynnnnnn! Nice to meet you!", {

  })
});

bot.hears('Hi', (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, "Hello mai phen.");
});

bot.hears('hi', (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, "Viết hoa lên bạn eiii!");
});

// bot.hears('animals', ctx => {
//   console.log(ctx.from)
//   let animalMessage = `great, here are pictures of animals you would love`;
//   ctx.deleteMessage();
//   bot.telegram.sendMessage(ctx.chat.id, animalMessage, {
//       reply_markup: {
//           inline_keyboard: [
//               [{
//                       text: "dog",
//                       callback_data: 'dog'
//                   },
//                   {
//                       text: "cat",
//                       callback_data: 'cat'
//                   }
//               ],

//           ]
//       }
//   })
// });

//method that returns image of a dog

// bot.action('dog', ctx => {
//   bot.telegram.sendPhoto(ctx.chat.id, {
//       source: "res/dog.jpeg"
//   })

// });

// //method that returns image of a cat 

// bot.action('cat', ctx => {
//   bot.telegram.sendPhoto(ctx.chat.id, {
//       source: "res/cat.jpeg"
//   })
// });

bot.launch();