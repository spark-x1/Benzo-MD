const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╔═══━━━─── •『 ⚙️ ${settings.botName || 'ＢｅｎｚｏＢｏｔ-ＭＤ'} 』•───━━━═══╗
         ᴀɪ-ᴘᴏᴡᴇʀᴇᴅ ᴄʏʙᴇʀ ʙᴏᴛ sʏsᴛᴇᴍ ⚡
   👑 ᴏᴡɴᴇʀ: ${settings.botOwner || 'Ａｍｏｎ'}
   💻 ᴠᴇʀꜱɪᴏɴ: ${settings.version || '3.0.0'}
╚═══━━━───────────────━━━═══╝

⩥ Ａｖａｉｌａｂｌｅ Ｃｏｍｍａｎｄｓ ⩤

╔═⟬ 🌐 ＧＥＮＥＲＡＬ ＣＯＭＭＡＮＤＳ ⟭═╗
║ ➤ .help / .menu
║ ➤ .ping / .alive / .tts <text>
║ ➤ .owner / .joke / .quote / .fact
║ ➤ .weather <city> / .news / .attp <text>
║ ➤ .lyrics <song_title> / .8ball <question>
║ ➤ .groupinfo / .staff / .admins
║ ➤ .vv / .trt <text> <lang>
║ ➤ .ss <link> / .jid / .url
╚══════════════════════════════╝

╔═⟬ 👮‍♂️ ＡＤＭＩＮ ＣＯＭＭＡＮＤＳ ⟭═╗
║ ➤ .ban / .promote / .demote / .mute
║ ➤ .unmute / .delete / .kick / .warn
║ ➤ .warnings / .antilink / .antibadword
║ ➤ .clear / .tag / .tagall / .hidetag
║ ➤ .tagnotadmin / .chatbot / .resetlink
║ ➤ .antitag / .welcome / .goodbye
║ ➤ .setgdesc / .setgname / .setgpp
╚══════════════════════════════╝

╔═⟬ 🔒 ＯＷＮＥＲ ＣＯＭＭＡＮＤＳ ⟭═╗
║ ➤ .mode / .clearsession / .antidelete
║ ➤ .cleartmp / .update / .settings / .setpp
║ ➤ .autoreact / .autostatus / .autotyping
║ ➤ .autoread / .anticall / .pmblocker
║ ➤ .pmblocker setmsg <text> / .setmention
║ ➤ .mention <on/off>
╚══════════════════════════════╝

╔═⟬ 🎨 ＩＭＡＧＥ ＆ ＳＴＩＣＫＥＲ ⟭═╗
║ ➤ .blur / .simage / .sticker / .removebg
║ ➤ .remini / .crop / .tgsticker / .meme
║ ➤ .take / .emojimix / .igs / .igsc
╚══════════════════════════════╝  

╔═⟬ 🖼️ ＰＩＥＳ ＣＯＭＭＡＮＤＳ ⟭═╗
║ ➤ .pies <country>
║ ➤ .china / .indonesia / .japan / .korea / .hijab
╚══════════════════════════════╝

╔═⟬ 🎮 ＧＡＭＥ ＣＯＭＭＡＮＤＳ ⟭═╗
║ ➤ .tictactoe / .hangman / .guess
║ ➤ .trivia / .answer / .truth / .dare
╚══════════════════════════════╝

╔═⟬ 🤖 ＡＩ ＣＯＭＭＡＮＤＳ ⟭═╗
║ ➤ .gpt / .gemini / .imagine / .flux / .sora
╚══════════════════════════════╝

╔═⟬ 🎯 ＦＵＮ ＣＯＭＭＡＮＤＳ ⟭═╗
║ ➤ .compliment / .insult / .flirt / .shayari
║ ➤ .goodnight / .roseday / .character / .wasted
║ ➤ .ship / .simp / .stupid
╚══════════════════════════════╝

╔═⟬ 🔤 ＴＥＸＴＭＡＫＥＲ ⟭═╗
║ ➤ .metallic / .ice / .snow / .impressive
║ ➤ .matrix / .light / .neon / .devil
║ ➤ .purple / .thunder / .leaves / .1917
║ ➤ .arena / .hacker / .sand / .blackpink
║ ➤ .glitch / .fire
╚══════════════════════════════╝

╔═⟬ 📥 ＤＯＷＮＬＯＡＤＥＲ ⟭═╗
║ ➤ .play / .song / .spotify / .instagram
║ ➤ .facebook / .tiktok / .video / .ytmp4
╚══════════════════════════════╝

╔═⟬ 🧩 ＭＩＳＣ ⟭═╗
║ ➤ .heart / .horny / .circle / .lgbt / .lolice
║ ➤ .its-so-stupid / .namecard / .oogway / .tweet
║ ➤ .ytcomment / .comrade / .gay / .glass
║ ➤ .jail / .passed / .triggered
╚══════════════════════════════╝

╔═⟬ 🖼️ ＡＮＩＭＥ ⟭═╗
║ ➤ .neko / .waifu / .loli / .nom / .poke
║ ➤ .cry / .kiss / .pat / .hug / .wink / .facepalm
╚══════════════════════════════╝

╔═⟬ 💻 ＧＩＴＨＵＢ ⟭═╗
║ ➤ .git / .github / .sc / .script / .repo
╚══════════════════════════════╝

📡 𝙅𝙤𝙞𝙣 𝙤𝙪𝙧 𝙘𝙝𝙖𝙣𝙣𝙚𝙡 𝙛𝙤𝙧 𝙪𝙥𝙙𝙖𝙩𝙚𝙨
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
                        newsletterName: 'ＢｅｎｚｏＢｏｔ ᴍᴅ',
                        serverMessageId: -1
                    }
                }
            }, { quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363422423159626@newsletter',
                        newsletterName: 'ＢｅｎｚｏＢｏｔ ᴍᴅ ʙʏ Ａｍｏｎ',
                        serverMessageId: -1
                    } 
                }
            });
        }

        if (fs.existsSync(audioPath)) {
            const stats = fs.statSync(audioPath);
            const fileSizeInMB = stats.size / (1024 * 1024);
            
            if (fileSizeInMB > 16) {
                console.warn('Audio file too large:', fileSizeInMB.toFixed(2), 'MB');
                await sock.sendMessage(chatId, {
                    text: '🎵 *Audio Guide* (File too large for WhatsApp)'
                });
            } else {
                try {
                    await sock.sendMessage(chatId, {
                        audio: fs.readFileSync(audioPath),  
                        mimetype: 'audio/mpeg',  
                        ptt: false
                    });
                } catch (audioError) {
                    console.error('Error sending audio:', audioError);
                    await sock.sendMessage(chatId, {
                        document: fs.readFileSync(audioPath),
                        mimetype: 'audio/mpeg',
                        fileName: 'menu_guide.mp3'
                    });
                }
            }
        } else {
            console.error('Audio file not found at:', audioPath);
        }

    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
