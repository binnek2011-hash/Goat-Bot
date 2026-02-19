const login = require("fca-unofficial");

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

login({ email, password }, (err, api) => {
    if (err) return console.error(err);

    console.log("✅ Bot đã đăng nhập Messenger");

    api.listenMqtt((err, event) => {
        if (err) return console.error(err);

        if (event.type === "message" && event.body) {
            const msg = event.body.toLowerCase();

            if (msg === "ping") {
                api.sendMessage("pong 🏓", event.threadID);
            }

            if (msg === "hi") {
                api.sendMessage("Chào bạn 👋", event.threadID);
            }

            if (msg === "admin") {
                api.sendMessage("Admin là Đức Anh 😎", event.threadID);
            }
        }
    });
});
	const login = require("fca-unofficial");

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

login({ email, password }, (err, api) => {
  if (err) return console.error(err);

  console.log("Bot đã đăng nhập Messenger");

  api.listenMqtt((err, event) => {
    if (err) return console.error(err);

    if (event.type === "message" && event.body) {
      const msg = event.body.toLowerCase();

      if (msg === "ping") {
        api.sendMessage("pong", event.threadID);
      }

      if (msg === "hi") {
        api.sendMessage("Chào bạn", event.threadID);
      }

      if (msg === "admin") {
        api.sendMessage("Admin là Đức Anh", event.threadID);
      }
    }
  });
});
 */