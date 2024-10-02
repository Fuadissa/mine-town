import { Telegraf } from "telegraf";

const TOKEN = "7835111150:AAGbmzokEdXIo7_T62E6PqdDfDlCmWvZOAk";
const bot = new Telegraf(TOKEN);

const web_link = "https://minetown.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome! Click 'Launch' to open the app.", {
    reply_markup: {
      inline_keyboard: [[{ text: "Launch", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();