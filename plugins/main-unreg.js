import { createHash } from 'crypto'
let handler = async function (m, { args, usedPrefix, command }) {
  if (!args[0]) throw `📮Serial Number kosong, Silahkan Cek Serial Number Di\n${usedPrefix}ceksn`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw `🚫Serial Number salah!, Silahkan Cek Serial Number Di\n${usedPrefix}ceksn`
  user.registered = false
  user.unreg = true
  m.reply('📛Kamu Berhasil keluar dari database\n\nDiederich')
}
handler.help = ['unreg']
handler.tags = ['xp']
handler.command = /^(unregg)$/i
handler.register = true

export default handler