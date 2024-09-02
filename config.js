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
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "916296940383";
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
global.save_status_from = process.env.SAVE_STATUS_FROM || "916296940383";
global.read_status_from = process.env.READ_STATUS_FROM || "916296940383";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUc5U2VMVTZ5Um9DdlEvN1JoTUtaVW9qTWtOYVpaYmpZZ2FDV0lMbGFIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGoyU1dxcERRQU1rc08yZFlKZ1ptd0luRGoxdDhlYUxYd1o5enhKWDFqaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTkxFZ3BlREhHcUduKzIyMStZenlCVWdoSUVXV1Uxa244Z3VDSFhxUVhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4SVYxaGhTSXZ2STNZTHVhUU9UQ3JNS2pNaWV2c2J3VkhzVk1aTlM1b2tRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZOZk5JOExvR25pTlBlWVRSb1ExTmJwZmloK3YwOHZvNFdGS3dWYkY1MVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxQYW9JV3N3NzlQOWh1UXJBR24xYmF3VUYxQ0I5VERJVXo2U0MyY2NJMWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0xPOVhWRy8rV2R6K01XanVPM3AzTStNOGI5MExEYm51U21zd0JGaVFYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWN4T1ltRDBGK1RHc1FlYksvZDlyelN3MTZldlQ1MGtJMFpobE1OSGYzND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtHYWt1TDlZb0tBVTNBNldvM0Z5bGJrWnNleUc0SEoxcENkVjN4ekJBYnd1WFZLcU03MGpHMnZlT1FZNk8xTHdCMEFBNjBOaWFYaGh2L0U4STRiQUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzMsImFkdlNlY3JldEtleSI6IkNLcFRmTDNpWEtIMlJSelVqNTdoUHFtaXY5Tlg4ZGxBQjMwWGlRZmVzSDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlVWTGRfWjdDUWZtQmhGWURiUklubHciLCJwaG9uZUlkIjoiZGUzNzg2N2ItMzlmMC00YzMwLWEyYzUtNjc5NjUxZTMzODMwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjUwOFg4NG9WL0VUVmxFWDFyZVlQNStlTjNVND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyK1FoWFE3WU9id2VHTFNpQXkyUFF1WXNNemM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRVY0WDg3UTEiLCJtZSI6eyJpZCI6IjkxNjI5Njk0MDM4MzoyMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZG88J2Sj/CdkbLwnZKP8J2RtvCdkpjJtOGthOC/kCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0NXK0x3SEVNTEwwcllHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMHJoWHBWU3FkZlN4Y2xHSXV2T3ZCNzBWREY3MjVLZnByeGFlNUVVV0lsdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL2lvTUlLeUJDRHlLclJSdEFFUm92T2pBS3VVVmxXaDJrQTNDUnoxVWhHaDd4L2hrKzhJRXVXVVlrVGV0WW9zU2JkOUxJM2Vlamd5N05iVXdYRlNCQlE9PSIsImRldmljZVNpZ25hdHVyZSI6Im5pNG9RUkN4RmRzdm5KaENvMHpjN2RrbXFkYzhXRGlYRUNydmpCMEhyOXA1RHB6WWZxNDFrQ3ovbktkQktNbEFVSkZIUGQ1eE9Ib1dVWXlBK1VGY0NRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE2Mjk2OTQwMzgzOjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRLNFY2VlVxblgwc1hKUmlMcnpyd2U5RlF4ZTl1U242YThXbnVSRkZpSmMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjUyMTIxMTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTTdXIn0="
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
