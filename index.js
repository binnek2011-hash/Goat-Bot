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
	// ———————————— LOAD TẤT CẢ TỆP LỆNH ———————————— //
	print("Tiến hành tải các tệp lệnh, vui lòng chờ", "LOAD COMMANDS");
	await require("./bot/loadAllScript.js")(globalGoat);
	// ———————— // ———————— // ———————— // ———————— //
	console.log(chalk.blue(`===========================================`));
	print(`Đã load thành công: ${globalGoat.commands.size} Script commands`, "LOADED");
	print(`Đã load thành công: ${globalGoat.events.size} Script events`, "LOADED");
	console.log(chalk.blue(`===========================================`));
	// —————————————————— LOGIN ————————————————— //
	require("./bot/login.js")(login, print, loading, config, client, globalGoat, configCommands, writeFileSync);
})();

/*
 *
 *Mã nguồn được viết bởi NTKhang, vui lòng không thay đổi tên tác giả ở bất kỳ tệp nào. Cảm ơn bạn đã sử dụng
 *The source code is written by NTKhang, please don't change the author's name everywhere. Thank you for using 
 *
 */