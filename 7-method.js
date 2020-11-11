var rl = require('readline-sync').question;

console.log(`Ingatlah metode ini hanya untuk type data String
.toUpperCase() digunakan untuk perbesar semua huruf string
.toLowerCase() digunakan untuk perkecil semua huruf string
.startsWith() digunakan untuk mengecek apakah huruf yang dituju benar diawal string
.trim() Menghapus spasi dan sesudah string.
.charAt(int) Mengambil text berdasarkan angka 0-..`)
rl("Enter untuk melanjutkan");

console.log(`Contoh:\nKode: console.log('abcdefgh'.toUpperCase())`)
console.log('abcdefgh'.toUpperCase()) //kode
rl("Enter untuk melanjutkan");

console.log(`Kode: console.log('abcdefgh'.toLowerCase())`)
console.log('abcdefgh'.toLowerCase()) //kode
rl("Enter untuk melanjutkan");

console.log(`\nKode: console.log('abcdefgh'.startsWith('a'))`)
console.log('abcdefgh'.startsWith('a')) //kode
rl("Enter untuk melanjutkan");

console.log(`\nKode: console.log('   abcdefg    '.trim())`)
console.log('   abcdefg    '.trim()) //kode
rl("Enter untuk melanjutkan");

console.log(`\nKode: console.log('abcdefg'.charAt(0))`)
console.log('abcdefg'.charAt(0)) //kode
