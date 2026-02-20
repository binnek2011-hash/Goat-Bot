const login = require("fca-unofficial");
const fs = require("fs");

login({
  appState: JSON.parse(fs.readFileSync("fbstate.json", "utf8"))
}, (err, api) => {

  if (err) {
    console.log("Login error:", err);
    return;
  }

  console.log("GOAT BOT đã online ✅");

  api.listenMqtt((err, event) => {
    if (err) return console.log(err);

    if (!event.body) return;

    const msg = event.body.toLowerCase();

    if (msg === "ping") {
      api.sendMessage("pong 🏓", event.threadID);
    }

    if (msg === "hi") {
      api.sendMessage("Chào bạn 👋", event.threadID);
    }

    if (msg === "bot") {
      api.sendMessage("Bot đang hoạt động ✅", event.threadID);
    }

  });

});