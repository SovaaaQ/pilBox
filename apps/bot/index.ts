import { Bot } from "grammy"

const bot = new Bot("5000105537:AAEAMfS8UaJjwloRUgOqou5XKf2XVzlIuyQ", {
  client: {
    environment: "test",
  },
})

bot.command("start", (ctx) => {
  ctx.reply("Таблетница 💊", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Начать", web_app: { url: "http://192.168.0.175:5173/" } }],
      ],
    },
  })
})

bot.start()
