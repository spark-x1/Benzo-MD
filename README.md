<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>🤖 Benzo_Bot_MD // by Amon</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Rajdhani:wght@400;600&display=swap');
:root {
  --blue: #00f3ff;
  --purple: #b967ff;
  --pink: #ff2a6d;
  --green: #00ff88;
  --bg: #050515;
  --card: rgba(25,25,55,0.9);
}
body {
  margin: 0;
  padding: 0;
  background: radial-gradient(circle at 30% 30%, #0b0b1f, #050515);
  color: white;
  font-family: 'Rajdhani', sans-serif;
  text-align: center;
  overflow-x: hidden;
}
header {
  padding: 40px 10px 20px;
}
.logo {
  width: 180px;
  border-radius: 20px;
  box-shadow: 0 0 25px var(--blue);
}
h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5em;
  background: linear-gradient(45deg, var(--pink), var(--purple), var(--blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glow 3s infinite alternate;
}
@keyframes glow {
  from {text-shadow: 0 0 10px var(--pink);}
  to {text-shadow: 0 0 25px var(--blue);}
}
p {
  color: #a0a0c0;
  font-size: 1.1em;
}
.section {
  background: var(--card);
  margin: 30px auto;
  border-radius: 16px;
  padding: 25px;
  max-width: 700px;
  box-shadow: 0 0 25px rgba(0, 243, 255, 0.2);
  backdrop-filter: blur(10px);
}
a {
  color: var(--blue);
  text-decoration: none;
  font-weight: 600;
}
a:hover { color: var(--pink); }
.btn {
  display: inline-block;
  background: linear-gradient(90deg, var(--pink), var(--purple), var(--blue));
  padding: 12px 25px;
  border-radius: 25px;
  color: white;
  text-decoration: none;
  transition: .3s;
  margin-top: 10px;
}
.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px var(--blue);
}
footer {
  margin: 40px 0 20px;
  color: #888;
  font-size: 0.9em;
}
.icon-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 1.8em;
  margin-top: 10px;
}
.icon-links a {
  color: var(--blue);
  transition: 0.3s;
}
.icon-links a:hover { color: var(--pink); transform: scale(1.2); }
</style>
</head>
<body>

<header>
  <img src="https://o.uguu.se/KntRsfPu.jpg" class="logo" alt="Benzo Bot Logo">
  <h1>🤖 Benzo_Bot_MD</h1>
  <p>Created & Managed by <strong style="color:var(--blue)">Amon</strong></p>
</header>

<div class="section">
  <h2>💬 About</h2>
  <p>Benzo_Bot_MD is a modern multi-functional WhatsApp bot designed for automation, media downloading, 
  group tools, and AI-powered responses — fast, stylish, and built for everyone.</p>
</div>

<div class="section">
  <h2>⚙️ Session Setup</h2>
  <p>Generate your WhatsApp Session ID from:</p>
  <a href="https://spark-pair.onrender.com/pair" target="_blank" class="btn">Generate Session ID</a>
  <p>Then paste your Base64 session string into:  
  <code>session/creds.json</code></p>
</div>

<div class="section">
  <h2>🚀 Features</h2>
  <p>✅ YouTube, TikTok, Instagram, and Facebook Downloader<br>
     ✅ Anti-delete, Auto Bio, Auto React<br>
     ✅ Stylish Help Menu with Images<br>
     ✅ Fast & Lightweight Performance</p>
</div>

<div class="section">
  <h2>📡 Connect with Amon</h2>
  <div class="icon-links">
    <a href="https://github.com/spark-x1" target="_blank"><i class="fab fa-github"></i></a>
    <a href="https://wa.me/254759006509" target="_blank"><i class="fab fa-whatsapp"></i></a>
    <a href="https://whatsapp.com/channel/0029Vb6d5ScLdQehdD5ird3l" target="_blank"><i class="fa-brands fa-square-rss"></i></a>
  </div>
</div>

<footer>
  ⚡ Powered by <span style="color:var(--blue)">Amon</span> | #Benzo_Bot_MD
</footer>

</body>
</html>
