let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat  [085881047943]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6288902048355
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
