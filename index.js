
const linebot = require('linebot');
const express = require('express');

let bot = linebot({
    channelId: process.env.ChannelId || channelId,
    channelSecret: process.env.ChannelSecret || channelSecret,
    channelAccessToken: process.env.ChannelAccessToken || channelAccessToken
});

// example 回傳一樣的訊息
bot.on(bot.on('message', async function(event) {
    let msg = event.message.text.trim();
    await event.reply(msg);
}));
const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 9006, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});