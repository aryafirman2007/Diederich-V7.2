let handler = async (m) => {

let anu =`╔═━───╍━╍╍┄ *ɢʀᴏᴜᴘ*
╠➺   .ᴄᴇᴋɪᴅ
╠➺   .ᴇɴᴀʙʟᴇᴀʙʟᴇ <ᴏᴘᴛɪᴏɴ>
╠➺   .ᴅɪꜱᴀʙʟᴇᴀʙʟᴇ <ᴏᴘᴛɪᴏɴ>
╠➺   .ᴇɴᴀʙʟᴇ
╠➺   .ᴅɪꜱᴀʙʟᴇ
╠➺   .ᴄᴇᴋᴇxᴘɪʀᴇᴅ
╠➺   .ᴀᴅᴅ @ᴜꜱᴇʀ
╠➺   .+ @ᴜꜱᴇʀ
╠➺   .ᴅᴇᴍᴏᴛᴇ @ᴛᴀɢ
╠➺   .ᴇᴠᴇɴᴛɢᴄ *[qᴜᴇꜱᴛɪᴏɴ]*
╠➺   .ɪɴꜰᴏɢʀᴜᴘ
╠➺   .ᴋɪᴄᴋ @ᴜꜱᴇʀ
╠➺   .ʟɪɴᴋɢʀᴏᴜᴘ
╠➺   .ᴍᴇᴍᴛᴏᴛᴀɢ
╠➺   .ᴘᴇɴɢᴜᴍᴜᴍᴀɴ [ᴛᴇᴋꜱ]
╠➺   .ᴀɴɴᴏᴜɴᴄᴇ [ᴛᴇᴋꜱ]
╠➺   .ʜɪᴅᴇᴛᴀɢ [ᴛᴇᴋꜱ]
╠➺   .ʜ [ᴛᴇᴋꜱ]
╠➺   .ᴘᴏʟʟ <ʜᴀʟᴏ|ᴀᴘᴀ|ᴋᴀʙᴀʀ>
╠➺   .ᴘʀᴏᴍᴏᴛᴇ @ᴛᴀɢ
╠➺   .ʀᴇᴠᴏᴋᴇ
╠➺   .ꜱᴇᴛᴘᴘɢᴄ
╠➺   .ꜱᴇᴛᴘᴘɢᴄᴘᴀɴᴊᴀɴɢ
╠➺   .ɢʀᴏᴜᴘ *ᴏᴘᴇɴ / ᴄʟᴏꜱᴇ*
╠➺   .ɢᴄꜱɪᴅᴇʀ
╠➺   .ᴛᴀɢᴀʟʟ
╠➺   .ᴛᴀɢᴍᴇ
╠➺   .ɢʀᴏᴜᴘᴛɪᴍᴇ <ᴏᴘᴇɴ/ᴄʟᴏꜱᴇ> <ɴᴜᴍʙᴇʀ>
╠➺   .ᴛᴏᴛᴀɢ
╠➺   .ᴏᴅᴇᴍᴏᴛᴇ @ᴛᴀɢ
╠➺   .ᴛᴀɢᴀᴅᴍɪɴ
╠➺   .ʟɪꜱᴛᴀᴅᴍɪɴ
╚═─━╍╍━╍╾
`
await conn.sendMessage(m.chat, {
  text: `${anu}`,
      contextInfo: {
      externalAdReply: {
        title: 'MENU LIST DIEDERICH',
        body: 'D I E D E R I C H  M U L T I D E V I C E',
        thumbnailUrl: 'https://telegra.ph/file/3bd17c3569caf5b88baa2.jpg',
        sourceUrl: 'https://chat.whatsapp.com/LPBLUJReYnIHkkjv8aiPKQ',
        mediaType: 1,
        renderLargerThumbnail: true, 
        showAdAttribution: true
      }}
  })}
handler.help = ['menugroup']
handler.tags = ['info']
handler.command = /^(menugroup)$/i

export default handler