const login = require("fca-unofficial");

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

login({ email, password }, (err, api) => {
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
        if (err) {
            console.log(err);
            return;
        }

        if (event.type !== "message") return;

        const msg = event.body ? event.body.toLowerCase() : "";
        const threadID = event.threadID;

        // ping pong
        if (msg === "ping") {
            api.sendMessage("pong 🏓", threadID);
        }

        // hi
        if (msg === "hi") {
            api.sendMessage("Chào bạn 👋", threadID);
        }

        // test bot
        if (msg === "bot") {
            api.sendMessage("Bot đang hoạt động 🤖", threadID);
        }
    });

});