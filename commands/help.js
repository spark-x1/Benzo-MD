const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╭━━━━━━━━━━━━━━━━━━━━╮
│   🚀 *${settings.botName || 'BenzoBot-MD'}*   │
│   ═══════════════   │
│   📟 Version: *${settings.version || '3.0.0'}*  │
│   👨‍💻 Developer: *${settings.botOwner || 'Amon'}* │
╰━━━━━━━━━━━━━━━━━━━━╯

╭───✨ *GENERAL* ───╮
│ • .help / .menu   │
│ • .ping           │
│ • .alive          │
│ • .tts <text>     │
│ • .owner          │
│ • .joke / .quote  │
│ • .fact / .weather│
│ • .news / .attp   │
│ • .lyrics <song>  │
│ • .8ball <question>│
│ • .groupinfo      │
│ • .staff / .admins│
│ • .vv / .trt      │
│ • .ss / .jid      │
│ • .url            │
╰───────────────────╯

╭───🛡️ *ADMIN* ───╮
│ • .ban @user      │
│ • .promote/demote │
│ • .mute/unmute    │
│ • .delete / .kick │
│ • .warnings/warn  │
│ • .antilink       │
│ • .antibadword    │
│ • .clear / .tag   │
│ • .tagall         │
│ • .tagnotadmin    │
│ • .hidetag        │
│ • .chatbot        │
│ • .resetlink      │
│ • .antitag        │
│ • .welcome/goodbye│
│ • .setgdesc/name  │
│ • .setgpp         │
╰───────────────────╯

╭───👑 *OWNER* ───╮
│ • .mode <public>  │
│ • .clearsession   │
│ • .antidelete     │
│ • .cleartmp       │
│ • .update         │
│ • .settings       │
│ • .setpp          │
│ • .autoreact      │
│ • .autostatus     │
│ • .autotyping     │
│ • .autoread       │
│ • .anticall       │
│ • .pmblocker      │
│ • .setmention     │
│ • .mention        │
╰───────────────────╯

╭───🎨 *MEDIA* ───╮
│ • .blur          │
│ • .simage        │
│ • .sticker       │
│ • .removebg      │
│ • .remini        │
│ • .crop          │
│ • .tgsticker     │
│ • .meme          │
│ • .take          │
│ • .emojimix      │
│ • .igs / .igsc   │
╰──────────────────╯

╭───🌺 *PIES* ───╮
│ • .pies <country>│
│ • .china         │
│ • .indonesia     │
│ • .japan         │
│ • .korea         │
│ • .hijab         │
╰──────────────────╯

╭───🎮 *GAMES* ───╮
│ • .tictactoe     │
│ • .hangman       │
│ • .guess         │
│ • .trivia        │
│ • .answer        │
│ • .truth / .dare │
╰──────────────────╯

╭───🤖 *AI* ───╮
│ • .gpt <query>   │
│ • .gemini <query>│
│ • .imagine       │
│ • .flux          │
│ • .sora          │
╰──────────────────╯

╭───🎭 *FUN* ───╮
│ • .compliment    │
│ • .insult        │
│ • .flirt         │
│ • .shayari       │
│ • .goodnight     │
│ • .roseday       │
│ • .character     │
│ • .wasted        │
│ • .ship / .simp  │
│ • .stupid        │
╰──────────────────╯

╭───🔤 *TEXTMAKER* ───╮
│ • .metallic      │
│ • .ice / .snow   │
│ • .impressive    │
│ • .matrix        │
│ • .light / .neon │
│ • .devil / .purple│
│ • .thunder       │
│ • .leaves / .1917│
│ • .arena / .hacker│
│ • .sand / .glitch│
│ • .blackpink     │
│ • .fire          │
╰───────────────────╯

╭───📥 *DOWNLOADER* ───╮
│ • .play / .song   │
│ • .spotify        │
│ • .instagram      │
│ • .facebook       │
│ • .tiktok         │
│ • .video          │
│ • .ytmp4          │
╰────────────────────╯

╭───🎯 *MISC* ───╮
│ • .heart / .horny│
│ • .circle / .lgbt│
│ • .lolice        │
│ • .its-so-stupid │
│ • .namecard      │
│ • .oogway        │
│ • .tweet         │
│ • .ytcomment     │
│ • .comrade       │
│ • .gay / .glass  │
│ • .jail / .passed│
│ • .triggered     │
╰──────────────────╯

╭───🌸 *ANIME* ───╮
│ • .neko / .waifu │
│ • .loli / .nom   │
│ • .poke / .cry   │
│ • .kiss / .pat   │
│ • .hug / .wink   │
│ • .facepalm      │
╰──────────────────╯

╭───💻 *GITHUB* ───╮
│ • .git / .github │
│ • .sc / .script  │
│ • .repo          │
╰──────────────────╯

━━━━━━━━━━━━━━━━━━━━
📢 *Join our channel for updates!*
🌟 *Thank you for using ${settings.botName || 'BenzoBot-MD'}!*`;

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
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363422423159626@newsletter',
                        newsletterName: 'BenzoBot MD by Amon',
                        serverMessageId: -1
                    } 
                }
            });
        }

        // Send audio
        if (fs.existsSync(audioPath)) {
            const stats = fs.statSync(audioPath);
            const fileSizeInMB = stats.size / (1024 * 1024);
            
            if (fileSizeInMB > 16) {
                console.warn('Audio file too large:', fileSizeInMB.toFixed(2), 'MB');
                await sock.sendMessage(chatId, {
                    text: '🎵 *Audio menu guide*'
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
