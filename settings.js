const fs = require('fs')
const chalk = require('chalk')

// Free Apikey
global.APIs = {
	riy: 'https://api-xriy04.herokuapp.com',
}

// Other
global.owner = ['15064043432']
global.premium = ['15064043432']
global.youtube = 'https://youtube.com/channel/UC_KcMlX5LI9EZIVOgLOx9TQ'
global.ownername = 'Developert Amel'
global.botname ='Amelia Assist'
global.donasi = {
    saweria: 'https://saweria.co/riy20',
    nomor: '0895366943070'
}
global.packname = 'Amelia Jangan Spam Kalau Tidak Mau Terkena Benned'
global.author = 'Amelia Contac For Whatever'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...'
}
global.thumb = fs.readFileSync('./image/hinata.jpg')
global.vn = './sound/menu.mp3'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
