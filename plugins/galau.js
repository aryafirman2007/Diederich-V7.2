import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command }) => {
    let thumb = 'https://telegra.ph/file/3bd17c3569caf5b88baa2.jpg'
    let galau = fs.readFileSync('./vn/galau.mp3')    
await  conn.sendMessage(m.chat, {
text: `${pickRandom(global.galau)}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `ɢ ᴀ ʟ ᴀ ᴜ`,
body: '2024 © ᴅɪᴇᴅᴇʀɪᴄʜ',
thumbnailUrl: thumb, 
sourceUrl: "https://telegra.ph/file/3bd17c3569caf5b88baa2.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
await conn.sendFile(m.chat, galau, 'galau.mp3', null, m, true) 
}
handler.help = ['galau']
handler.tags = ['quotes']
handler.command = /^(galau)$/i

export default handler 

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

global.galau = [
    "ɢᴀᴋ sᴀʟᴀʜ ᴋᴀʟᴏ ᴀᴋᴜ ʟᴇʙɪʜ ʙᴇʀʜᴀʀᴀᴘ sᴀᴍᴀ ᴏʀᴀɴɢ ʏᴀɴɢ ʟᴇʙɪʜ ᴘᴀsᴛɪ ᴛᴀɴᴘᴀ ᴋʜɪᴀɴᴀᴛɪ ᴊᴀɴᴊɪ-ᴊᴀɴᴊɪ",
    "ᴋᴀʟᴀᴜ ᴀᴋᴜ ᴍᴇᴍᴀɴɢ ᴛɪᴅᴀᴋ sᴀʏᴀɴɢ sᴀᴍᴀ ᴋᴀᴍᴜ ɴɢᴀᴘᴀɪɴ ᴀᴋᴜ ᴍɪᴋɪʀɪɴ ᴋᴀᴍᴜ. ᴛᴀᴘɪ sᴇᴍᴜᴀɴʏᴀ ᴋᴀᴍᴜ ʏᴀɴɢ ɴɢɢᴀɴɢɢᴀᴘ ᴀᴋᴜ ɢᴀᴋ sᴀʏᴀɴɢ sᴀᴍᴀ ᴋᴀᴍᴜ",
    "ᴊᴀɴɢᴀɴ ɪʀɪ ᴅᴀɴ sᴇᴅɪʜ ᴊɪᴋᴀ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ᴍᴇᴍɪʟɪᴋɪ ᴋᴇᴍᴀᴍᴘᴜᴀɴ sᴇᴘᴇʀᴛɪ ʏᴀɴɢ ᴏʀᴀɴɢ ᴍɪʟɪᴋɪ. ʏᴀᴋɪɴʟᴀʜ ᴏʀᴀɴɢ ʟᴀɪɴ ᴊᴜɢᴀ ᴛɪᴅᴀᴋ ᴍᴇᴍɪʟɪᴋɪ ᴋᴇᴍᴀᴍᴘᴜᴀɴ sᴇᴘᴇʀᴛɪᴍᴜ",
    "ʜᴀɴʏᴀ ᴋᴀᴍᴜ ʏᴀɴɢ ʙɪsᴀ ᴍᴇᴍʙᴜᴀᴛ ʟᴀɴɢᴋᴀʜᴋᴜ ᴛᴇʀʜᴇɴᴛɪ, sᴀᴍʙɪʟ ʙᴇʀᴋᴀᴛᴀ ᴅᴀʟᴀᴍ ʜᴀᴛɪ ᴍᴀɴᴀ ʙɪsᴀ ᴀᴋᴜ ᴍᴇɴɪɴɢɢᴀʟᴋᴀɴᴍᴜ",
    "ᴛᴇᴛᴀᴘ ᴛᴇʀsᴇɴʏᴜᴍ ᴡᴀʟᴀʟᴜᴋᴜ ᴍᴀsɪʜ ᴅɪʙᴜᴀᴛ ᴍᴇɴᴜɴɢɢᴜ ᴅᴀɴ ʀɪɴᴅᴜ ᴏʟᴇʜᴍᴜ, ᴛᴀᴘɪ ɪᴛᴜ ᴅᴇᴍɪ ᴋᴀᴍᴜ",
    "ᴛᴀᴋ sᴇᴍᴜᴅᴀʜ ɪᴛᴜ ᴍᴇʟᴜᴘᴀᴋᴀɴᴍᴜ",
    "sᴇᴄᴜᴇᴋ-ᴄᴜᴇᴋɴʏᴀ ᴋᴀᴍᴜ ᴋᴇ ᴀᴋᴜ, ᴀᴋᴜ ᴛᴇᴛᴀᴘ sᴀʏᴀɴɢ sᴀᴍᴀ ᴋᴀᴍᴜ ᴋᴀʀᴇɴᴀ ᴋᴀᴍᴜ ᴛᴇʟᴀʜ ᴍᴇɴᴇʀɪᴍᴀ ᴀᴋᴜ ᴀᴘᴀ ᴀᴅᴀɴʏᴀ",
    "ᴀᴋᴜ sᴀɴɢᴀᴛ ʙᴀʜᴀɢɪᴀ ᴊɪᴋᴀ ᴋᴀᴍᴜ ʙᴀʜᴀɢɪᴀ ᴅɪᴅᴇᴋᴀᴛᴋᴜ, ʙᴜᴋᴀɴ ᴅɪᴅᴇᴋᴀᴛɴʏᴀ",
    "ᴊᴀᴅɪʟᴀʜ ᴅɪʀɪ sᴇɴᴅɪʀɪ, ᴊᴀɴɢᴀɴ ᴍᴇɴɢɪᴋᴜᴛɪ ᴏʀᴀɴɢ ʟᴀɪɴ, ᴛᴇᴛᴀᴘɪ ᴛɪᴅᴀᴋ sᴀɴɢɢᴜᴘ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀʟᴀɴɪɴʏᴀ",
    "ᴄᴏʙᴀʟᴀʜ ᴛᴇʀᴅɪᴀᴍ sᴇᴊᴇɴᴀᴋ ᴜɴᴛᴜᴋ ᴍᴇᴍɪᴋɪʀᴋᴀɴ ʙᴀɢᴀɪᴍᴀɴᴀ ᴄᴀʀᴀɴʏᴀ ᴀɢᴀʀ ᴋɪᴛᴀ ᴅᴀᴘᴀᴛ ᴍᴇɴʏᴇʟᴇsᴀɪᴋᴀɴ ᴍᴀsᴀʟᴀʜ ɪɴɪ ʙᴇʀsᴀᴍᴀ-sᴀᴍᴀ",
    "ʙɪsᴀᴋᴀʜ ᴋɪᴛᴀ ᴛɪᴅᴀᴋ ʙᴇʀᴍᴜsᴜʜᴀɴ sᴇᴛᴇʟᴀʜ ʙᴇʀᴘɪsᴀʜ, ᴀᴋᴜ ᴍᴀᴜ ᴋɪᴛᴀ sᴇᴘᴇʀᴛɪ ᴅᴜʟᴜ sᴇʙᴇʟᴜᴍ ᴋɪᴛᴀ ᴊᴀᴅɪᴀɴ ʏᴀɴɢ sᴇʀᴜ-sᴇʀᴜᴀɴ ʙᴀʀᴇɴɢ, ʙᴇʀᴄᴀɴᴅᴀ ᴅᴀɴ ʏᴀɴɢ ʟᴀɪɴɴʏᴀ",
    "ᴀᴋᴜ ɪɴɢɪɴ ᴋᴀᴍᴜ ʙɪsᴀ ʟᴀɴɢɢᴇɴɢ sᴀᴍᴀ ᴀᴋᴜ ᴅᴀɴ ʏᴀɴɢ ᴀᴋᴜ ʜᴀʀᴀᴘᴋᴀɴ ᴋᴀᴍᴜ ʙɪsᴀ ᴊᴀᴅɪ ᴊᴏᴅᴏʜᴋᴜ",
    "ᴄɪɴᴛᴀ ᴛᴀᴋ ʙɪsᴀ ᴅɪᴊᴇʟᴀsᴋᴀɴ ᴅᴇɴɢᴀɴ ᴋᴀᴛᴀ-ᴋᴀᴛᴀ sᴀᴊᴀ, ᴋᴀʀᴇɴᴀ ᴄɪɴᴛᴀ ʜᴀɴʏᴀ ᴍᴀᴍᴘᴜ ᴅɪʀᴀsᴀᴋᴀɴ ᴏʟᴇʜ ʜᴀᴛɪ",
    "ᴍᴀsᴀʟᴀʜ ᴛᴇʀʙᴇsᴀʀ ᴅᴀʟᴀᴍ ᴅɪʀɪ sᴇsᴇᴏʀᴀɴɢ ᴀᴅᴀʟᴀʜ ᴛᴀᴋ sᴀɴɢɢᴜᴘ ᴍᴇʟᴀᴡᴀɴ ʀᴀsᴀ ᴛᴀᴋᴜᴛɴʏᴀ",
    "sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ ʙᴜᴀᴛ ᴏʀᴀɴɢ ʏᴀɴɢ ᴀᴋᴜ sᴀʏᴀɴɢ ᴅᴀɴ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴇɴᴄɪᴋᴜ, sᴇᴍᴏɢᴀ ʜᴀʀɪ ɪɴɪ ʜᴀʀɪ ʏᴀɴɢ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪᴘᴀᴅᴀ ʜᴀʀɪ ᴋᴇᴍᴀʀɪɴ ʙᴜᴀᴛ ᴀᴋᴜ ᴅᴀɴ ᴋᴀᴍᴜ",
    "ᴊᴀɴɢᴀɴ ᴍᴇɴʏᴇʀᴀʜ ᴅᴇɴɢᴀɴ ᴋᴇᴀᴅᴀᴀɴᴍᴜ sᴇᴋᴀʀᴀɴɢ, ᴏᴘᴛɪᴍɪs ᴋᴀʀᴇɴᴀ ᴏᴘᴛɪᴍɪsʟᴀʜ ʏᴀɴɢ ʙɪᴋɪɴ ᴋɪᴛᴀ ᴋᴜᴀᴛ",
    "ᴋᴇᴘᴀᴅᴀ ᴘʀɪᴀ ʏᴀɴɢ sᴇʟᴀʟᴜ ᴀᴅᴀ ᴅɪ ᴅᴏᴀᴋᴜ ᴀᴋᴜ ᴍᴇɴᴄɪɴᴛᴀɪᴍᴜ ᴅᴇɴɢᴀɴ ᴛᴜʟᴜs ᴀᴘᴀ ᴀᴅᴀɴʏᴀ",
    "ᴛᴏʟᴏɴɢ ᴊᴀɴɢᴀɴ ᴘᴇʀɢɪ sᴀᴀᴛ ᴀᴋᴜ sᴜᴅᴀʜ sᴀɴɢᴀᴛ sᴀʏᴀɴɢ ᴘᴀᴅᴀᴍᴜ",
    "ᴄᴏʙᴀ ᴋᴀᴍᴜ ʏᴀɴɢ ʙᴇʀᴀᴅᴀ ᴅɪᴘᴏsɪsɪᴋᴜ, ʟᴀʟᴜ ᴋᴀᴍᴜ ᴅɪᴛɪɴɢɢᴀʟɪɴ ɢɪᴛᴜ ᴀᴊᴀ sᴀᴍᴀ ᴏʀᴀɴɢ ʏᴀɴɢ ʟᴏ sᴀʏᴀɴɢ ʙᴀɴɢᴇᴛ",
    "ᴀᴋᴜ ᴛᴀᴋᴜᴛ ᴋᴀᴍᴜ ᴋᴇɴᴀᴘᴀ-ɴᴀᴘᴀ, ᴀᴋᴜ ᴘᴀɴɪᴋ ᴊɪᴋᴀ ᴋᴀᴍᴜ sᴀᴋɪᴛ, ɪᴛᴜ ᴋᴀʀᴇɴᴀ ᴀᴋᴜ ᴄɪɴᴛᴀ ᴅᴀɴ sᴀʏᴀɴɢ ᴘᴀᴅᴀᴍᴜ",
    "sᴀᴋɪᴛ ɪᴛᴜ ᴋᴇᴛɪᴋᴀ ᴄɪɴᴛᴀ ʏᴀɴɢ ᴀᴋᴜ ʙᴇʀɪ ᴛɪᴅᴀᴋ ᴋᴀᴍᴜ ʜᴀʀɢᴀɪ",
    "ᴋᴀᴍᴜ ᴛɪʙᴀ-ᴛɪʙᴀ ʙᴇʀᴜʙᴀʜ ᴛᴀɴᴘᴀ sᴇʙᴀʙ ᴛᴀᴘɪ ᴊɪᴋᴀ ᴍᴇᴍᴀɴɢ ᴀᴅᴀ sᴇʙᴀʙɴʏᴀ ᴋᴀᴍᴜ ʙᴇʀᴜʙᴀʜ ᴛᴏʟᴏɴɢ ᴋᴀᴛᴀᴋᴀɴ ʙɪᴀʀ sᴀʏᴀ ᴘᴇʀʙᴀɪᴋɪ ᴋᴇsᴀʟᴀʜᴀɴ ɪᴛᴜ",
    "ᴋᴀʀᴇɴᴀᴍᴜ ᴀᴋᴜ ᴊᴀᴅɪ ᴛᴀᴜ ᴄɪɴᴛᴀ ʏᴀɴɢ sᴇsᴜɴɢɢᴜʜɴʏᴀ",
    "sᴇɴʏᴜᴍ ᴍᴀɴɪsᴍᴜ sᴀɴɢᴀᴛʟᴀʜ ɪɴᴅᴀʜ, ᴊᴀᴅɪ ᴊᴀɴɢᴀɴʟᴀʜ sᴀᴍᴘᴀɪ ᴋᴀᴍᴜ ʙᴇʀsᴇᴅɪʜ",
    "ʙᴇʀᴀᴡᴀʟ ᴅᴀʀɪ ᴋᴇɴᴀʟᴀɴ, ʙᴇʀᴄᴀɴᴅᴀ ʙᴀʀᴇɴɢ, ᴇᴊᴇᴋ-ᴇᴊᴇᴋᴀɴ ᴋᴇᴍᴜᴅɪᴀɴ ʙᴇʀᴜʙᴀʜ ᴍᴇɴᴊᴀᴅɪ sᴜᴋᴀ, ɴʏᴀᴍᴀɴ ᴅᴀɴ ᴀᴋʜɪʀɴʏᴀ sᴀʟɪɴɢ sᴀʏᴀɴɢ ᴅᴀɴ ᴍᴇɴᴄɪɴᴛᴀɪ",
    "ᴛᴇʀsᴇɴʏᴜᴍʟᴀʜ ᴘᴀᴅᴀ ᴏʀᴀɴɢ ʏᴀɴɢ ᴛᴇʟᴀʜ ᴍᴇɴʏᴀᴋɪᴛɪᴍᴜ ᴀɢᴀʀ sɪᴀ ᴛᴀᴜ ᴀʀᴛɪ ᴋᴇsᴀʙᴀʀᴀɴ ʏᴀɴɢ ʟᴜᴀʀ ʙɪᴀsᴀ",
    "ᴀᴋᴜ ᴀᴋᴀɴ ɪɴɢᴀᴛ ᴋᴇɴᴀɴɢᴀɴ ᴘᴀʜɪᴛ ɪᴛᴜ ᴅᴀɴ ᴀᴋᴜ ᴀᴋᴀɴ ᴊᴀᴅɪᴋᴀɴ ᴘᴇʟᴀᴊᴀʀᴀɴ ᴜɴᴛᴜᴋ ᴍᴀsᴀ ᴅᴇᴘᴀɴ ʏᴀɴɢ ᴍᴀɴɪs",
    "ᴋᴀʟᴀᴜ ᴍᴇᴍᴀɴɢ ᴛᴀᴋ sᴀɴɢɢᴜᴘ ᴍᴇɴᴇᴘᴀᴛɪ ᴊᴀɴᴊɪᴍᴜ ɪᴛᴜ sᴇᴛɪᴅᴀᴋɴʏᴀ ᴋᴀᴍᴜ ɪɴɢᴀᴛ ᴅᴀɴ ᴜsᴀʜᴀᴋᴀɴ ᴊᴀɢᴀɴ ᴍᴇᴍʙɪᴀʀᴋᴀɴ ᴊᴀɴᴊɪᴍᴜ ɪᴛᴜ sᴀᴍᴘᴀɪ ᴋᴀᴜ ʟᴜᴘᴀ",
    "ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪᴀᴍ ᴅᴀɴ ʙᴇʀғɪᴋɪʀ ᴋᴇɴᴀᴘᴀ ᴏʀᴀɴɢ ʏᴀɴɢ sᴇᴛɪᴀ ᴅᴀɴ ʙᴀɪᴋ ᴅɪᴛɪɴɢɢᴀʟɪɴ ʏᴀɴɢ ɴᴀᴋᴀʟ ᴅɪᴋᴇᴊᴀʀ-ᴋᴇᴊᴀʀ ɢɪʟɪʀᴀɴ ᴅɪᴛɪɴɢɢᴀʟɪɴ ʙɪʟᴀɴɢɴʏᴀ ʟᴀᴋɪ-ʟᴀᴋɪ ɪᴛᴜ sᴇᴍᴜᴀɴʏᴀ sᴀᴍᴀ",
    "ᴡᴀʟᴀᴜᴘᴜɴ ʜᴀɴʏᴀ sᴇsᴀᴀᴛ sᴀᴊᴀ ᴋᴀᴜ ᴍᴇᴍʙᴀʜᴀɢɪᴀᴋᴀɴᴋᴜ ᴛᴀᴘɪ ʀᴀsᴀ ʙᴀʜᴀɢɪᴀ ʏᴀɴɢ ᴅɪᴀ ᴛɪᴅᴀᴋ ᴄᴇᴘᴀᴛ ᴅɪʟᴜᴘᴀᴋᴀɴ",
    "ᴀᴋᴜ ᴛᴀᴋ ᴍᴇɴʏᴀɴɢᴋᴀ ᴋᴀᴍᴜ ᴘᴇʀɢɪ ᴅᴀɴ ᴍᴇʟᴜᴘᴀᴋᴀɴ ᴋᴜ ʙᴇɢɪᴛᴜ ᴄᴇᴘᴀᴛ",
    "ᴊᴏᴍʙʟᴏ ɢᴀᴋ ᴜsᴀʜ ᴅɪᴀᴍ ʀᴜᴍᴀʜ ᴍᴜᴍᴘᴜɴɢ ᴍᴀʟᴀᴍ ᴍɪɴɢɢᴜ ʏᴀ ᴋᴇʟᴜᴀʀ ᴊᴀʟᴀɴ ʟᴀʜ ᴋᴀɴ ᴊᴏᴍʙʟᴏ ʙᴇʙᴀs ʙɪsᴀ ᴅᴇᴋᴀᴛ sᴀᴍᴀ sɪᴀᴘᴀᴘᴜɴ ᴘᴀᴄᴀʀ ᴏʀᴀɴɢ ᴍᴀɴᴛᴀɴ sᴀʜᴀʙᴀᴛ ʙᴀʜᴋᴀɴ sᴇɴᴅɪʀɪ ᴀᴛᴀᴜ ʙᴀʀᴇɴɢ sᴇᴛᴀɴ ᴘᴜɴ ʙɪsᴀ",
    "ᴋᴀᴍᴜ ᴀᴅᴀʟᴀʜ ᴛᴇᴍᴀɴ ʏᴀɴɢ sᴇʟᴀʟᴜ ᴅɪ sᴀᴍᴘɪɴɢᴋᴜ ᴅᴀʟᴀᴍ ᴋᴇᴀᴅᴀᴀɴ sᴇɴᴀɴɢ ᴍᴀᴜᴘᴜɴ sᴜsᴀʜ ᴛᴇʀɪᴍᴀᴋᴀsɪʜ ᴋᴀᴍᴜ sᴇʟᴀʟᴜ ᴀᴅᴀ ᴅɪ sᴀᴍᴘɪɴɢᴋᴜ",
    "ᴀᴋᴜ ᴛᴀᴋ ᴛᴀʜᴜ sᴇʙᴇɴᴀʀɴʏᴀ ᴅɪ ᴅᴀʟᴀᴍ ʜᴀᴛɪᴍᴜ ɪᴛᴜ ᴀᴅᴀ ᴀᴋᴜ ᴀᴛᴀᴜ ᴅɪᴀ",
    "ᴛᴀᴋ ᴍᴜᴅᴀʜ ᴍᴇʟᴜᴘᴀᴋᴀɴᴍᴜ ᴋᴀʀᴇɴᴀ ᴀᴋᴜ sᴀɴɢᴀᴛ ᴍᴇɴᴄɪɴᴛᴀɪᴍᴜ ᴍᴇsᴋɪᴘᴜɴ ᴇɴɢᴋᴀᴜ ᴛᴇʟᴀʜ ᴍᴇɴʏᴀᴋɪᴛɪ ᴀᴋᴜ ʙᴇʀᴋᴀʟɪ-ᴋᴀʟɪ",
    "ʜɪᴅᴜᴘ ɪɴɪ ʜᴀɴʏᴀ sᴇʙᴇɴᴛᴀʀ ᴊᴀᴅɪ ʟᴇᴘᴀsᴋᴀɴ sᴀᴊᴀ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ᴍᴇɴʏᴀᴋɪᴛɪᴍᴜ sᴀʏᴀɴɢɪ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ᴘᴇᴅᴜʟɪ ᴘᴀᴅᴀᴍᴜ ᴅᴀɴ ᴘᴇʀᴊᴜᴀɴɢᴀɴ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ʙᴇʀᴀʀᴛɪ ʙᴀɢɪᴍᴜ",
    "ᴛᴏʟᴏɴɢ ᴊᴀɴɢᴀɴ ᴘᴇʀɢɪ ᴍᴇɴɪɴɢɢᴀʟᴋᴀɴᴋᴜ ᴀᴋᴜ ᴍᴀsɪʜ sᴀɴɢᴀᴛ ᴍᴇɴᴄɪɴᴛᴀɪ ᴅᴀɴ ᴍᴇɴʏᴀʏᴀɴɢɪᴍᴜ",
    "sᴀʏᴀ ᴍᴇɴᴄɪɴᴛᴀɪᴍᴜ ᴅᴀɴ ᴍᴇɴʏᴀʏᴀɴɢɪᴍᴜ ᴊᴀᴅɪ ᴛᴏʟᴏɴɢ ᴊᴀɴɢᴀɴ ᴇɴɢᴋᴀᴜ ᴘᴇʀɢɪ ᴅᴀɴ ᴍᴇɴɪɴɢɢᴀʟᴋᴀɴ ᴋᴜ sᴇɴᴅɪʀɪ",
    "sᴀʏᴀ sᴜᴅᴀʜ ᴄᴜᴋᴜᴘ ᴛᴀʜᴜ ʙᴀɢᴀɪᴍᴀɴᴀ sɪғᴀᴛᴍᴜ ɪᴛᴜ ᴋᴀᴍᴜ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ʜᴀʀᴀᴘᴀɴ ᴘᴀʟsᴜ ᴋᴇᴘᴀᴅᴀᴋᴜ",
    "ᴀᴋᴜ ʙᴇʀᴜsᴀʜᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴄɪɴᴛᴀ ᴅᴀʀɪᴍᴜ ᴛᴇᴛᴀᴘɪ ᴋᴀᴍᴜɴʏᴀ ɴɢɢᴀᴋ ᴘᴇᴋᴀ",
    "ᴀᴋᴜ ʙᴀɴɢᴋɪᴛ ᴅᴀʀɪ ᴊᴀᴛᴜʜ ᴋᴜ sᴇᴛᴇʟᴀʜ ᴋᴀᴜ ᴊᴀᴛᴜʜᴋᴀɴ ᴀᴋᴜ ᴅᴀɴ ᴀᴋᴜ ᴀᴋᴀɴ ᴍᴇᴍᴜʟᴀɪɴʏᴀ ʟᴀɢɪ ᴅᴀʀɪ ᴀᴡᴀʟ ᴛᴀɴᴘᴀᴍᴜ",
    "ᴍᴜɴɢᴋɪɴ sᴇᴋᴀʀᴀɴɢ ᴊᴏᴅᴏʜᴋᴜ ᴍᴀsɪʜ ᴊᴀᴜʜ ᴅᴀɴ ʙᴇʟᴜᴍ ʙɪsᴀ ᴀᴋᴜ ᴅᴀᴘᴀᴛ ᴛᴀᴘɪ ᴀᴋᴜ ʏᴀᴋɪɴ ᴊᴏᴅᴏʜ ɪᴛᴜ ᴛᴀᴋᴋᴀɴ ᴋᴇᴍᴀɴᴀ-ᴍᴀɴᴀ ᴅᴀɴ ᴀᴋᴀɴ ᴋᴜ ᴅᴀᴘᴀᴛᴋᴀɴ",
    "ᴅᴀᴛᴀɴɢ ᴀᴊᴀ ᴅᴜʟᴜ ʙᴀʀᴜ ᴍᴇɴɢʜɪɴᴀ ᴏʀᴀɴɢ ʟᴀɪɴ ᴋᴀʟᴀᴜ ᴍᴇᴍᴀɴɢ ᴅɪʀɪᴍᴜ ᴅᴀɴ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪ ʏᴀɴɢ ᴋᴀᴜ ʜɪɴᴀ",
    "ᴍᴇᴍʙᴇʟᴀᴋᴀɴɢɪɴʏᴀ ᴍᴜɴɢᴋɪɴ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪᴘᴀᴅᴀ ᴍᴇʟɪʜᴀᴛɴʏᴀ sᴇʟɪɴɢᴋᴜʜ ᴅɪᴅᴇᴘᴀɴ ᴍᴀᴛᴀ sᴇɴᴅɪʀɪ",
    "ʙɪsᴀᴋᴀʜ ʜᴀᴛɪᴍᴜ sᴇᴘᴇʀᴛɪ ᴀɴɢsᴀ ʏᴀɴɢ ʜᴀɴʏᴀ sᴇᴛɪᴀ ᴘᴀᴅᴀ sᴀᴛᴜ ᴏʀᴀɴɢ sᴀᴊᴀ",
    "ᴀᴋᴜ ʙᴇʀᴅɪʀɪ ᴅɪsɪɴɪ sᴇɴᴅɪʀɪ ᴍᴇɴᴜɴɢɢᴜ ᴋᴇʜᴀᴅɪʀᴀɴ ᴅɪʀɪᴍᴜ",
    "ᴀᴋᴜ ʜᴀɴʏᴀ ᴛᴇʀsᴇɴʏᴜᴍ ᴘᴀᴅᴀᴍᴜ sᴇᴛᴇʟᴀʜ ᴋᴀᴜ ᴍᴇɴʏᴀᴋɪᴛɪᴋᴜ ᴀɢᴀʀ ᴋᴀᴍᴜ ᴛᴀʜᴜ ᴀʀᴛɪ ᴋᴇsᴀʙᴀʀᴀɴ",
    "ᴍᴀᴀғ ᴀᴋᴜ ʟᴜᴘᴀ ᴛᴇʀɴʏᴀᴛᴀ ᴀᴋᴜ ʙᴜᴋᴀɴ sɪᴀᴘᴀ-sɪᴀᴘᴀ",
    "ᴜɴᴛᴜᴋ ᴍᴇᴍᴇɢᴀɴɢ ᴊᴀɴᴊɪᴍᴜ ɪᴛᴜ ʜᴀʀᴜs ᴀᴅᴀ ʙᴜᴋᴛɪɴʏᴀ ᴊᴀɴɢᴀɴ sᴀᴍᴘᴀɪ ʜᴀɴʏᴀ ᴊᴀɴᴊɪ ᴘᴀʟsᴜ",
    "ᴀᴋᴜ ᴛɪᴅᴀᴋ ʙɪsᴀ sᴇʟᴀᴍᴀɴʏᴀ ᴍᴇɴᴜɴɢɢᴜ ᴅᴀɴ ᴋɪɴɪ ᴀᴋᴜ ᴍᴇɴᴊᴀᴅɪ ʀᴀɢᴜ ᴀᴘᴀᴋᴀʜ ᴋᴀᴍᴜ ᴍᴀsɪʜ ᴍᴇɴᴄɪɴᴛᴀɪᴋᴜ",
    "ᴊᴀɴɢᴀɴ ʙᴜᴀᴛ ᴀᴋᴜ ᴛᴇʀʟᴀʟᴜ ʙᴇʀʜᴀʀᴀᴘ ᴊɪᴋᴀ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ᴍᴇɴɢɪɴɢɪɴᴋᴀɴᴋᴜ",
    "ʟᴇʙɪʜ ʙᴀɪᴋ sᴇɴᴅɪʀɪ ᴅᴀʀɪᴘᴀᴅᴀ ʙᴇʀᴅᴜᴀ ᴛᴀᴘɪ ᴛᴀɴᴘᴀ ᴋᴇᴘᴀsᴛɪᴀɴ",
    "ᴘᴇʀɢɪ ʙᴜᴋᴀɴ ʙᴇʀᴀʀᴛɪ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄɪɴᴛᴀɪ ᴛᴀᴘɪ ᴋᴇᴄᴇᴡᴀ ᴅᴀɴ ʟᴇʟᴀʜ ᴋᴀʀᴇɴᴀ ʜᴀʀᴜs ʙᴇʀᴊᴜᴀɴɢ sᴇɴᴅɪʀɪ",
    "ʙᴜᴋᴀɴɴʏᴀ ᴀᴋᴜ ᴛɪᴅᴀᴋ ɪɴɢɪɴ ᴍᴇɴᴊᴀᴅɪ ᴘᴀᴄᴀʀᴍᴜ ᴀᴋᴜ ʜᴀɴʏᴀ ɪɴɢɪɴ ᴅɪᴘᴇʀsᴀᴛᴜᴋᴀɴ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ ʏᴀɴɢ ʙᴇɴᴀʀ",
    "ᴀᴋᴀɴ ᴀᴅᴀ sᴀᴀᴛɴʏᴀ ᴋᴏᴋ ᴀᴋᴜ ᴀᴋᴀɴ ʙᴇɴᴀʀ-ʙᴇɴᴀʀ ʟᴜᴘᴀ ᴅᴀɴ ᴛɪᴅᴀᴋ ᴍᴇᴍɪᴋɪʀᴋᴀɴ ᴍᴜ ʟᴀɢɪ",
    "ᴋᴇɴᴀᴘᴀ ʜᴀʀᴜs ᴊᴀᴛᴜʜ ᴄɪɴᴛᴀ ᴋᴇᴘᴀᴅᴀ ᴏʀᴀɴɢ ʏᴀɴɢ ᴛᴀᴋ ʙɪsᴀ ᴅɪᴍɪʟɪᴋɪ",
    "ᴊᴜᴊᴜʀ ᴀᴋᴜ ᴊᴜɢᴀ ᴍᴇᴍɪʟɪᴋɪ ᴘᴇʀᴀsᴀᴀɴ ᴛᴇʀʜᴀᴅᴀᴘᴍᴜ ᴅᴀɴ ᴛɪᴅᴀᴋ ʙɪsᴀ ᴍᴇɴᴏʟᴀᴋᴍᴜ ᴛᴀᴘɪ ᴀᴋᴜ ᴊᴜɢᴀ ᴛᴀᴋᴜᴛ ᴜɴᴛᴜᴋ ᴍᴇɴᴄɪɴᴛᴀɪᴍᴜ",
    "ᴍᴀᴀғᴋᴀɴ ᴀᴋᴜ sᴀʏᴀɴɢ ᴛɪᴅᴀᴋ ʙɪsᴀ ᴍᴇɴᴊᴀᴅɪ sᴇᴘᴇʀᴛɪ ʏᴀɴɢ ᴋᴀᴍᴜ ᴍᴀᴜ",
    "ᴊᴀɴɢᴀɴ ᴍᴇᴍʙᴇʀɪ ᴘᴇʀʜᴀᴛɪᴀɴ ʟᴇʙɪʜ sᴇᴘᴇʀᴛɪ ɪᴛᴜ ᴄᴜᴋᴜᴘ ʙɪᴀsᴀ sᴀᴊᴀ ᴛᴀɴᴘᴀ ᴘᴇʀʟᴜ ᴍᴇɴɪᴍʙᴜʟᴋᴀɴ ʀᴀsᴀ",
    "ᴀᴋᴜ ʙᴜᴋᴀɴ ᴍᴇɴᴄᴀʀɪ ʏᴀɴɢ sᴇᴍᴘᴜʀɴᴀ ᴛᴀᴘɪ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋᴋᴜ",
    "sᴇɴᴅɪʀɪ ɪᴛᴜ ᴛᴇɴᴀɴɢ ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴘᴇʀᴛᴇɴɢᴋᴀʀᴀɴ ᴋᴇʙᴏʜᴏɴɢᴀɴ ᴅᴀɴ ʙᴀɴʏᴀᴋ ᴀᴛᴜʀᴀɴ",
    "ᴄᴇᴡᴇᴋ sᴛʀᴏɴɢ ɪᴛᴜ ᴀᴅᴀʟᴀʜ ʏᴀɴɢ sᴀʙᴀʀ ᴅᴀɴ ᴛᴇᴛᴀᴘ ᴛᴇʀsᴇɴʏᴜᴍ ᴍᴇsᴋɪᴘᴜɴ ᴅᴀʟᴀᴍ ᴋᴇᴀᴅᴀᴀɴ ᴛᴇʀʟᴜᴋᴀ",
    "ᴛᴇʀɪᴍᴀ ᴋᴀsɪʜ ᴋᴀʀᴇɴᴀ ᴋᴀᴍᴜ ᴀᴋᴜ ᴍᴇɴᴊᴀᴅɪ ʟᴜᴘᴀ ᴛᴇɴᴛᴀɴɢ ᴍᴀsᴀ ʟᴀʟᴜᴋᴜ",
    "ᴄᴇʀɪᴛᴀ ᴄɪɴᴛᴀ ɪɴᴅᴀʜ ᴛᴀɴᴘᴀ ᴍᴀsᴀʟᴀʜ ɪᴛᴜ ʜᴀɴʏᴀ ᴅɪ ᴅᴜɴɪᴀ ᴅᴏɴɢᴇɴɢ sᴀᴊᴀ",
    "ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴᴇᴍᴜᴋᴀɴ ᴀᴘᴀ-ᴀᴘᴀ ᴅɪ ᴍᴀsᴀ ʟᴀʟᴜ ʏᴀɴɢ ᴀᴅᴀ ʜᴀɴʏᴀʟᴀʜ ᴘᴇɴʏᴇsᴀʟᴀɴ ᴅᴀɴ sᴀᴋɪᴛ ʜᴀᴛɪ",
    "ᴍɪᴋɪʀɪɴ ᴏʀᴀɴɢ ʏᴀɴɢ ɢᴀᴋ ᴘᴇʀɴᴀʜ ᴍɪᴋɪʀɪɴ ᴋɪᴛᴀ ɪᴛᴜ ᴇᴍᴀɴɢ ʙɪᴋɪɴ ɢɪʟᴀ",
    "ᴅᴀʀɪ sᴇᴋɪᴀɴ ʟᴀᴍᴀ ᴍᴇɴᴜɴɢɢᴜ ᴀᴘᴀ ʏᴀɴɢ sᴜᴅᴀʜ ᴅɪᴅᴀᴘᴀᴛ",
    "ᴘᴇʀᴀsᴀᴀɴ ʙᴏᴅᴏ ɢᴜᴇ ᴀᴅᴀʟᴀʜ ʙɪsᴀ ᴊᴀᴛᴜʜ ᴄɪɴᴛᴀ sᴀᴍᴀ ᴏʀᴀɴɢ ʏᴀɴɢ sᴀᴍᴀ ᴍᴇsᴋɪ ᴜᴅᴀʜ ᴅɪsᴀᴋɪᴛɪ ʙᴇʀᴋᴀʟɪ-ᴋᴀʟɪ",
    "ʏᴀɴɢ sᴇɴᴅɪʀɪ ᴀᴅᴀʟᴀʜ ʏᴀɴɢ ʙᴇʀsᴀʙᴀʀ ᴍᴇɴᴜɴɢɢᴜ ᴘᴀsᴀɴɢᴀɴ sᴇᴊᴀᴛɪɴʏᴀ",
    "ᴀᴋᴜ ᴛᴇʀʟᴀʜɪʀ sᴇᴅᴇʀʜᴀɴᴀ ᴅᴀɴ ᴅɪᴛɪɴɢɢᴀʟ sᴜᴅᴀʜ ʙɪᴀsᴀ",
    "ᴀᴋᴜ sᴀʏᴀɴɢ ᴋᴀᴍᴜ ᴛᴀᴘɪ ᴀᴋᴜ ᴍᴀsɪʜ ᴛᴀᴋᴜᴛ ᴜɴᴛᴜᴋ ᴍᴇɴᴄɪɴᴛᴀɪᴍᴜ",
    "ʙɪsᴀ ʙᴇʀʙᴀɢɪ sᴜᴋᴀ ᴅᴀɴ ᴅᴜᴋᴀ ʙᴇʀsᴀᴍᴀᴍᴜ ɪᴛᴜ sᴜᴅᴀʜ ᴍᴇᴍʙᴜᴀᴛᴋᴜ ʙᴀʜᴀɢɪᴀ",
    "ᴀᴋᴜ ᴛɪᴅᴀᴋ ᴘᴇʀɴᴀʜ ʙᴇʀᴘɪᴋɪʀ ᴋᴀᴍᴜ ᴀᴋᴀɴ ᴍᴇɴᴊᴀᴅɪ ʏᴀɴɢ sᴇᴍᴇɴᴛᴀʀᴀ",
    "ᴊᴏᴅᴏʜ ɪᴛᴜ ʙᴜᴋᴀɴ sᴇʙᴇʀᴀᴘᴀ ᴅᴇᴋᴀᴛ ᴋᴀᴍᴜ ᴅᴇɴɢᴀɴɴʏᴀ ᴛᴀᴘɪ sᴇʙᴇʀᴀᴘᴀ ʏᴀᴋɪɴ ᴋᴀᴍᴜ ᴅᴇɴɢᴀɴ ᴀʟʟᴀʜ",
    "ᴊᴀɴɢᴀɴ ᴘᴀᴋsᴀ ᴀᴋᴜ ᴍᴇɴᴊᴀᴅɪ ᴄᴇᴡᴇᴋ sᴇᴘᴇʀᴛɪ sᴇʟᴇʀᴀᴍᴜ",
    "ʜᴀɴʏᴀ ʏᴀɴɢ sᴀʙᴀʀ ʏᴀɴɢ ᴍᴀᴍᴘᴜ ᴍᴇʟᴇᴡᴀᴛɪ sᴇᴍᴜᴀ ᴋᴇᴋᴇᴄᴇᴡᴀᴀɴ",
    "ʙᴀʟɪᴋᴀɴ sᴀᴍᴀ ᴋᴀᴍᴜ ɪᴛᴜ sᴀᴍᴀ sᴀᴊᴀ ʙᴜɴᴜʜ ᴅɪʀɪ ᴅᴀɴ ᴍᴇʟᴜᴋᴀɪ ᴘᴇʀᴀsᴀᴀɴ ᴋᴜ sᴇɴᴅɪʀɪ",
    "ᴛᴀᴋ ᴘᴇʀʟᴜ ᴍᴇᴍʙᴀʟᴀs ᴅᴇɴɢᴀɴ ᴍᴇɴʏᴀᴋɪᴛɪ ʙɪᴀʀ ᴋᴀʀᴍᴀ ʏᴀɴɢ ᴀᴋᴀɴ ᴜʀᴜs sᴇᴍᴜᴀ ɪᴛᴜ",
    "ᴀᴋᴜ ᴍᴀsɪʜ ɪɴɢᴀᴛ ᴋᴀᴍᴜ ᴛᴀᴘɪ ᴘᴇʀᴀsᴀᴀɴᴋᴜ sᴜᴅᴀʜ ᴛɪᴅᴀᴋ sᴀᴋɪᴛ sᴇᴘᴇʀᴛɪ ᴅᴜʟᴜ",
    "ᴘᴜɴʏᴀ ᴋᴀʟɪᴍᴀᴛ sᴇɴᴅɪʀɪ & ᴍᴀᴜ ᴅɪᴛᴀᴍʙᴀʜɪɴ? ᴄʜᴀᴛ *.ᴏᴡɴᴇʀ*"
]