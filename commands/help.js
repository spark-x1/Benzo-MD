const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
┌──────────────────────────────────────────────┐
│ ██████╗ ███████╗███╗   ██╗██████╗ ██████╗   │
│ ██╔══██╗██╔════╝████╗  ██║██╔══██╗██╔══██╗  │
│ ██████╔╝█████╗  ██╔██╗ ██║██║  ██║██████╔╝  │
│ ██╔══██╗██╔══╝  ██║╚██╗██║██║  ██║██╔══██╗  │
│ ██████╔╝███████╗██║ ╚████║██████╔╝██████╔╝  │
│ ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚═════╝ ╚═════╝   │
├──────────────────────────────────────────────┤
│  🤖 ${settings.botName || 'BenzoBot-MD'}  │
│  📀 v${settings.version || '3.0.0'} │ ${settings.botOwner || 'Amon'}  │
└──────────────────────────────────────────────┘

╔══════════════════════════════════════════════╗
║                  🚀 CORE SYSTEMS             ║
╠══════════════════════════════════════════════╣
║ • .help/.menu    • .ping        • .alive     ║
║ • .tts <text>    • .owner       • .joke      ║
║ • .quote         • .fact        • .weather   ║
║ • .news          • .attp <text> • .lyrics    ║
║ • .8ball         • .groupinfo   • .staff     ║
║ • .vv            • .trt         • .ss        ║
║ • .jid           • .url                      ║
╚══════════════════════════════════════════════╝

╔══════════════════════════════════════════════╗
║                 🔐 ADMIN PANEL               ║
╠══════════════════════════════════════════════╣
║ • .ban @user     • .promote     • .demote    ║
║ • .mute <min>    • .unmute      • .delete    ║
║ • .kick @user    • .warnings    • .warn      ║
║ • .antilink      • .antibadword • .clear     ║
║ • .tag <msg>     • .tagall      • .tagnotadmin║
║ • .hidetag       • .chatbot     • .resetlink ║
║ • .antitag       • .welcome     • .goodbye   ║
║ • .setgdesc      • .setgname    • .setgpp    ║
╚══════════════════════════════════════════════╝

╔══════════════════════════════════════════════╗
║                 👑 ROOT ACCESS               ║
╠══════════════════════════════════════════════╣
║ • .mode <p/pv>   • .clearsession • .antidelete║
║ • .cleartmp      • .update       • .settings  ║
║ • .setpp         • .autoreact    • .autostatus║
║ • .autotyping    • .autoread     • .anticall  ║
║ • .pmblocker     • .setmention   • .mention   ║
╚══════════════════════════════════════════════╝

╔══════════════════════════════════════════════╗
║                 🎨 MEDIA PROCESSOR           ║
╠══════════════════════════════════════════════╣
║ • .blur         • .simage       • .sticker   ║
║ • .removebg     • .remini       • .crop      ║
║ • .tgsticker    • .meme         • .take      ║
║ • .emojimix     • .igs          • .igsc      ║
╚══════════════════════════════════════════════╝

╔══════════════════════════════════════════════╗
║                 🤖 AI MODULES                ║
╠══════════════════════════════════════════════╣
║ • .gpt <query>  • .gemini <query> • .imagine ║
║ • .flux <prompt>• .sora <prompt>             ║
╚══════════════════════════════════════════════╝

╔══════════════════════════════════════════════╗
║                 🎮 ENTERTAINMENT             ║
╠══════════════════════════════════════════════╣
║ 🎯 GAMES         🎭 FUN           🌸 ANIME   ║
║ • tictactoe     • compliment    • neko       ║
║ • hangman       • insult        • waifu      ║
║ • guess         • flirt         • loli       ║
║ • trivia        • shayari       • nom        ║
║ • answer        • goodnight     • poke       ║
║ • truth/dare    • character     • kiss       ║
║                • wasted         • hug        ║
║                • ship/simp      • facepalm   ║
╚══════════════════════════════════════════════╝

╔══════════════════════════════════════════════╗
║                 📥 DOWNLOADER                ║
╠══════════════════════════════════════════════╣
║ • .play <song>  • .song <song>  • .spotify   ║
║ • .instagram    • .facebook     • .tiktok    ║
║ • .video        • .ytmp4 <url>               ║
╚══════════════════════════════════════════════╝

╔══════════════════════════════════════════════╗
║                 🛠️ UTILITIES                 ║
╠══════════════════════════════════════════════╣
║ 🔤 TEXTMAKER     🎯 MISC         💻 GITHUB   ║
║ • metallic      • heart         • git        ║
║ • ice/snow      • horny         • github     ║
║ • impressive    • circle        • sc         ║
║ • matrix        • lgbt          • script     ║
║ • light/neon    • lolice        • repo       ║
║ • devil/purple  • namecard                   ║
║ • thunder       • oogway                     ║
║ • leaves/1917   • tweet                      ║
║ • arena/hacker  • ytcomment                  ║
║ • sand/glitch   • comrade                    ║
║ • blackpink     • gay/glass                  ║
║ • fire          • jail/passed                ║
║                 • triggered                  ║
╚══════════════════════════════════════════════╝

╔══════════════════════════════════════════════╗
║                 🌍 PIES GALLERY              ║
╠══════════════════════════════════════════════╣
║ • .pies <country> • .china • .indonesia      ║
║ • .japan • .korea • .hijab                   ║
╚══════════════════════════════════════════════╝

┌──────────────────────────────────────────────┐
│ 🚀 SYSTEM STATUS: ONLINE                    │
│ 📊 COMMANDS: 150+                          │
│ 🔄 LAST UPDATE: READY                      │
│ 🌐 CHANNEL: /BenzoBotMD                    │
└──────────────────────────────────────────────┘

💫 *Powered by ${settings.botName || 'BenzoBot-MD'} Technology*`;

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
                        newsletterName: 'BenzoBot MD - Tech Interface',
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
                        newsletterName: 'BenzoBot MD Terminal',
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
                    text: '🔊 *System Audio Interface*'
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
                        fileName: 'system_interface.mp3'
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
