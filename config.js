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
global.sudo = process.env.SUDO || "919064560840";
global.owner = process.env.OWNER_NUMBER || "919064560840";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUtZcGhrODZiWnk0M2FaTGxPZU1ad3F5VHlHVHgxMjV0MktTZ2VHUDJFVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHJpODYwK3NyT0Q4aEtaUWZnb1RvMUdCMDBCYmVnMFhFSGhGbW1mTlBIMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQUM0d3JqUHNXRThIUzU4ZDk1QXllVEtDU0ltL1pOeWhFZFE3bW1HU0g0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Q295ZUJva2VQUExNT0MxYloyU252OXRBQXJoNnRTa0V3SThBdE1DWXg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFNc3VNNE5DWWJ4b1ZLYjQ1N1FuMGxSdlAvNW9OL0JlTVg3ZW13cjdPbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZVYmdBQXNEVHdaT0JiWGVmN1llQ0NhbnNRVy9SQ3FqZEJOcUlpSC9kRUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0d5ZXlSakhFcDRjYzNyelQxVVVXM2dKMGhKTXdSY0UxaHpDTXFSQk9VYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEQrQkRHSlNEeldwajRJSURFdVZzY2ZRUjJzUWNBNTlRYmtsN214TUJtUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRxVFFuM3AvUWRuK1lScnVkdms2TGs4NTdPcDMxay9tNEZhZnZveEpqT1gxTHRRb1R0VnNjWEdMTGt3YnBid3JOYTdLOEJ1TjZOVTR0aGxQTDFqR2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiJKampIcWt2Z3hVc2RDM0o3WW1wcWJzOTI4aEQvb3IyOERzMWdCVTM2VjYwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMSVlvUzB2MFJqSzZBYVFVTURCbENnIiwicGhvbmVJZCI6IjI0MmVkN2FlLWJjYTgtNDM2ZS1hNDQwLWJjYmVlMTM3NzllNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSkN2UEVZUkhXK1pJUERSeDFadnd2L1lHb0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnJjZTl5UUdBWmZCbzFvdDRKSm4rTXh0RkZvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRWUDRDRU01IiwibWUiOnsiaWQiOiI5MTkwNjQ1NjA4NDA6ODhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8JCMgNOEzpTguKPKnOKGpuKGpuKGpuKGpuKGpiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlBEaWxVUTBPdVN0Z1lZRnlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiazkwKytYT0hHVER6V1YrQTUvRUlSZWdRRnFkejgvdWVHVllqNFc5Njl6ND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYmtoYlhmZDZkYVNQS1hCSnBRK3p4d3VSdVJ4TXBUbVN3RkoxMHNPYTJJcmRzcjFmWU9LQXBRYm1KOVFZYmkvNkx0M0Q3MHg1RUJHVkxuUlVEMXJsQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IkV3SDdPTS9KWVZpTVBwWmk3TFpTSHNVbVFtNlZrekRhTjdIdmZacnBrSHBYeTVFaXAvTjc4dlI3YUVDTlJiVVRJTTljUnd1Zm83SEdBZjBSbW9EaGdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE5MDY0NTYwODQwOjg4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpQZFB2bHpoeGt3ODFsZmdPZnhDRVhvRUJhbmMvUDduaGxXSStGdmV2YysifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQxNjc2NDQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR1YxIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`file generated by a k a sh™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A K A S H",
  botname: process.env.BOT_NAME || "A K A S H",
  ownername: process.env.OWNER_NAME || "A K A S H",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
