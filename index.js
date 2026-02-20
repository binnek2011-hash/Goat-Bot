const login = require("fca-unofficial");
const fs = require("fs");

login({ appState: JSON.parse(fs.readFileSync("fbstate.json", "utf8")) }, (err, api) => {
  if (err) {
    console.log("Login error:", err);
    return;
  }

  console.log("GOAT BOT đã online ✅");

  api.setOptions({
    listenEvents: true,
    selfListen: false
  });

  api.listenMqtt((err, event) => {
    if (err) return console.log(err);

    if (event.type !== "message") return;

    const msg = event.body ? event.body.toLowerCase() : "";
    const threadID = event.threadID;

    if (msg === "ping") {
      api.sendMessage("pong 🏓", threadID);
    }

    if (msg === "hi") {
      api.sendMessage("Chào bạn 👋", threadID);
    }

    if (msg === "bot") {
      api.sendMessage("Bot đang hoạt động ✅", threadID);
    }
  });
});