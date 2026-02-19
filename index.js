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
        if (err) return console.log(err);

        if (event.type !== "message") return;

        const msg = event.body?.toLowerCase();
        const threadID = event.threadID;
        const senderID = event.senderID;

        // ping pong
        if (msg === "ping") {
            api.sendMessage("pong 🏓", threadID);
        }

        // hi
        if (msg === "hi") {
            api.sendMessage("Chào bạn 👋", threadID);
        }

        // info
        if (msg === "info") {
            api.sendMessage(
                "GOAT BOT đang chạy trên Render 🚀",
                threadID
            );
        }

        // help
        if (msg === "help") {
            api.sendMessage(
                "Lệnh:\n- ping\n- hi\n- info\n- help",
                threadID
            );
        }

    });
});