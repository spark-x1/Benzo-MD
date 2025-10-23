const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╭─❖ 〔 *${settings.botName || '🩶 𝙱𝙴𝙽𝚉𝙾𝙱𝙾𝚃 𝙼𝙳* 〕
│ 👤 ᴏᴡɴᴇʀ      : ${settings.botOwner || 'Amon'}
│ ⚙️ ᴠᴇʀsɪᴏɴ    : ${settings.version || '3.0.0'}
│ ⏰ ᴛɪᴍᴇ        : ${new Date().toLocaleTimeString()}
│ 📅 ᴅᴀᴛᴇ        : ${new Date().toLocaleDateString()}
│ 🛠️ ᴍᴏᴅᴇ       : [ public ]
│ 🚀 ᴘʀᴇғɪx     : [ . ]
╰─❖━━━━━━━━━━━━━━━╯

╭─✦〔 🌐 *GENERAL* 〕
│ ➤ .help / .menu
│ ➤ .ping
│ ➤ .alive
│ ➤ .tts <text>
│ ➤ .owner
│ ➤ .joke
│ ➤ .quote
│ ➤ .fact
│ ➤ .weather <city>
│ ➤ .news
│ ➤ .attp <text>
│ ➤ .lyrics <song_title>
│ ➤ .8ball <question>
│ ➤ .groupinfo
│ ➤ .admins
│ ➤ .vv
│ ➤ .trt <text> <lang>
│ ➤ .ss <link>
│ ➤ .jid
│ ➤ .url
╰─✦

╭─✦〔 👮‍♂️ *ADMIN* 〕
│ ➤ .ban @user
│ ➤ .promote @user
│ ➤ .demote @user
│ ➤ .mute / .unmute
│ ➤ .delete / .del
│ ➤ .kick @user
│ ➤ .warn / .warnings
│ ➤ .antilink / .antibadword
│ ➤ .clear
│ ➤ .tag / .tagall / .hidetag
│ ➤ .resetlink
│ ➤ .welcome / .goodbye
│ ➤ .setgdesc / .setgname / .setgpp
╰─✦

╭─✦〔 🔒 *OWNER* 〕
│ ➤ .mode <public/private>
│ ➤ .clearsession
│ ➤ .antidelete
│ ➤ .cleartmp
│ ➤ .update
│ ➤ .settings
│ ➤ .setpp
│ ➤ .autoreact / .autostatus / .autotyping
│ ➤ .autoread / .anticall
│ ➤ .pmblocker / .pmblocker setmsg
│ ➤ .mention / .setmention
╰─✦

╭─✦〔 🎨 *IMAGE / STICKER* 〕
│ ➤ .blur
│ ➤ .simage
│ ➤ .sticker
│ ➤ .removebg
│ ➤ .remini
│ ➤ .crop
│ ➤ .tgsticker
│ ➤ .meme
│ ➤ .take
│ ➤ .emojimix
│ ➤ .igs / .igsc
╰─✦

╭─✦〔 🎮 *GAMES* 〕
│ ➤ .tictactoe
│ ➤ .hangman
│ ➤ .guess
│ ➤ .trivia
│ ➤ .answer
│ ➤ .truth / .dare
╰─✦

╭─✦〔 🤖 *AI MENU* 〕
│ ➤ .gpt
│ ➤ .gemini
│ ➤ .imagine
│ ➤ .flux
│ ➤ .sora
╰─✦

╭─✦〔 🎯 *FUN* 〕
│ ➤ .compliment
│ ➤ .insult
│ ➤ .flirt
│ ➤ .shayari
│ ➤ .goodnight
│ ➤ .roseday
│ ➤ .character
│ ➤ .ship
│ ➤ .simp
│ ➤ .stupid
╰─✦

╭─✦〔 🔤 *TEXTMAKER* 〕
│ ➤ .metallic
│ ➤ .ice
│ ➤ .snow
│ ➤ .impressive
│ ➤ .matrix
│ ➤ .light
│ ➤ .neon
│ ➤ .devil
│ ➤ .purple
│ ➤ .thunder
│ ➤ .leaves
│ ➤ .1917
│ ➤ .arena
│ ➤ .hacker
│ ➤ .sand
│ ➤ .blackpink
│ ➤ .glitch
│ ➤ .fire
╰─✦

╭─✦〔 📥 *DOWNLOADERS* 〕
│ ➤ .play / .song / .video
│ ➤ .spotify
│ ➤ .instagram
│ ➤ .facebook
│ ➤ .tiktok
│ ➤ .ytmp4
╰─✦

╭─✦〔 🖼️ *ANIME MENU* 〕
│ ➤ .neko / .waifu / .loli
│ ➤ .nom / .poke / .cry / .kiss
│ ➤ .pat / .hug / .wink / .facepalm
╰─✦

╭─✦〔 💻 *GITHUB* 〕
│ ➤ .git / .github / .script / .repo
╰─✦

> ✦ *© Powered by ${settings.botName || 'BenzoBot MD'}* ✦
`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        const audioPath = path.join(__dirname, '../assets/menu.mp3');

        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363422423159626@newsletter',
                        newsletterName: 'BenzoBot MD',
                        serverMessageId: -1
                    }
                }
            }, { quoted: message });
        } else {
            await sock.sendMessage(chatId, { text: helpMessage });
        }

        if (fs.existsSync(audioPath)) {
            await sock.sendMessage(chatId, {
                audio: fs.readFileSync(audioPath),
                mimetype: 'audio/mpeg',
                ptt: false
            });
        }

    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
