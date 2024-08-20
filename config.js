//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "917908178746";
global.owner = process.env.OWNER_NUMBER || "917908178746";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZ5SC9Xay9mQnV6V2g1M1BQYW9qdXJGaUxZQUNmOHh4Z0JvRFZFc3hXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEhNb2JPOFpsVUQ2N3RuRkw0SjV0alZaSDNtVXZnR0Rpd2tQUEFNQUxYbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQ0IycW8vOGVYc0ZQRnJnY3g4U0pQbXoyVUZaTWFZWXp0WWVBanl5blcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDbWFyOTF5dDJGcGdqMEVucXNJTDJtU0dNak1Nb1pvd0xqRTA0aTRXc0dnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRIemg4MlZVQTFZR1NPbms1dUU4K00zSkpNSE1JdEI4Vm9rKzREY0J3VmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlE3VUNiWWtYOVRhYTFVMXlPQVNlY2tvUklKTWIzTWZaN3RjMno3QkFtQVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0JWL1pidVRjYXd2c3FHWHFHdENFYXpuU1ZDSmY1K3djYVRTTVhSMURudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielR4RDhNM3JjbktHUmVTL1JXV2hGTEVBMjRBUXVzMFFFYWZFSFZvS21VYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImM2NG1zSVpVVEpPMWhMV3ptaTk3d2ZaNmQvRUU1d1I2WnBIZTZIaS9nZXFCSExpOEFmNmJDWmR2OHRLQVZjSWs3UmVtQ1hiVHNPWktOOFJ2QmlkSkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzksImFkdlNlY3JldEtleSI6Ii82ME14eHRESk5zenNSVGJ0R2FINVJiSnBUZDlZWmc1YVBJZFdFczBRRlE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE3OTA4MTc4NzQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQxNDFCNzREMjMwMUYyM0FFMDdFMTM2RTg0NjAwN0REIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQxNDU1Nzd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxNzkwODE3ODc0NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5NkYwRTYwREQ0Q0I3NkRBMzg2NzU1RTcxMjgzRjdEOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0MTQ1NTc4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyOVQ5UkpZVVN5dXJaWG9aTkdMYWlRIiwicGhvbmVJZCI6IjUyYTc4Y2JlLWQzZDktNDY0Mi05NjFjLTYxYWY1ZGEwOGM1ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRmM0bUhpNFp6MmtSUWk4REgrdjJCN2ZTc1U9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InoyQUNvWC9KSUdkaHZvNFAzM1IrYTJUOFJhTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xlMTUvUUdFSnUva2JZR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9aeVJHblhrb1puRDJKZ2U2Q01iK1BhMzJVbkh2UTUvamI4R2hQZUJ2U0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik82Z1lPU3VRU3MwSFVoTW5JdE53a2U3S3pXT1ZUMkd4K0V1L2hsaU51cW5KODlsdnArTDd3WjZrUkxSZGc5S2d4Mm50K3hVYk5wd1ptQ0NRL3FsWEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJZmhRdUdibVkvSElEY3dNZUdUbHlhYktLbHpicXdiWDNQV2FzVGVNaHpSUUM5bCtKaS9KRUE3ZkU5dDQwK3Bpem9sS0o4VGtXM2hjVzVUdzZmQVVDUT09In0sIm1lIjp7ImlkIjoiOTE3OTA4MTc4NzQ2OjZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMDIyMDc3ODk3ODkzMzU6NkBsaWQiLCJuYW1lIjoiTk8gT05FIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxNzkwODE3ODc0Njo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmYyY2tScDE1S0dadzlpWUh1Z2pHL2oydDlsSng3ME9mNDIvQm9UM2diMGkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDE0NTU3NSwibGFzdFByb3BIYXNoIjoiekxXZ2UiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFUUiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
