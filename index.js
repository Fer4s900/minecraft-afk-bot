const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: 'RtMZ.aternos.me', // ضع رابط سيرفرك هنا
        port: 47943,                  // تأكد من رقم البورت
        username: 'Hiutero',         // اسم البوت
        version: '1.21.130'             // نسخة السيرفر
    })

    bot.on('spawn', () => {
        console.log('Bot joined the server!')
        // حركات عشوائية كل دقيقة لمنع الطرد
        setInterval(() => {
            bot.setControlState('jump', true)
            setTimeout(() => bot.setControlState('jump', false), 1000)
        }, 60000)
    })

    bot.on('end', () => {
        console.log('Disconnected! Retrying in 5 seconds...')
        setTimeout(createBot, 5000)
    })

    bot.on('error', (err) => console.log('Error:', err))
}

// تشغيل خادم بسيط لكي يقبله موقع Render
const http = require('http')
http.createServer((req, res) => {
    res.write('Bot is running!')
    res.end()
}).listen(8080)

createBot()
