const { getStreamFromURL } = global.utils;
module.exports = {
  config: {
    name: "owner",
    version: 2.1,
    author: "Jani nh ke manger nati cng marche 🙂",
    longDescription: "Info about bot and owner",
    category: "Special",
    guide: {
      en: "{p}owner or just type owner"
    },
    usePrefix: false
  },
  onStart: async function (context) {
    await module.exports.sendOwnerInfo(context);
  },
  onChat: async function ({ event, message, usersData }) {
    const prefix = global.GoatBot.config.prefix;
    const body = (event.body || "").toLowerCase().trim();
    const triggers = ["owner", `${prefix}owner`];
    if (!triggers.includes(body)) return;
    await module.exports.sendOwnerInfo({ event, message, usersData });
  },
  sendOwnerInfo: async function ({ event, message, usersData }) {
    const videoURL = "https://files.catbox.moe/nt29t4.mp4";
    const attachment = await getStreamFromURL(videoURL);
    const id = event.senderID;
    const userData = await usersData.get(id);
    const name = userData.name;
    const mentions = [{ id, tag: name }];
    const info = `
╔═════════════════════ ✿
║ ✨ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 ✨
╠═════════════════════ ✿
║ 👑 𝗡𝗮𝗺𝗲 : RAFSAN AHMED 
║ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : RAFSAN
║ 🎂 𝗔𝗴𝗲 : 18+
║ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : IN RELATIONSHIP
║ 🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : 𝗦𝘁𝘂𝗱𝗲𝗻𝘁
║ 📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : Tumi jaina ki korba
║ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : MIRPUR, 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡
╠═════════════════════ ✿
║ 🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
╠═════════════════════ ✿
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :
║    facebook.com/rafsan.ahmed.69
║ 💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 :
║    https://m.me/rafsan.ahmed.69
║ 📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :
║    wa.me/01995099304
║ ✈️ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 :
║    01995099304
╚═════════════════════ ✿
    `.trim();
    message.reply({
      body: info,
      attachment,
      mentions
    });
  }
};
