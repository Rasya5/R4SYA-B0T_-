let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *R4SYA•||•B0T_-* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Rasya
Script: @Rasya.

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @ff.shark_id 
➥ YouTube:
https://youtube.com/channel/UCbyItesi6g08DUdwGriKcxg 
 Tiktok: @ff.shark_id


*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Indosat: 085881047943
║>Request? Wa.me/6288902048355
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

