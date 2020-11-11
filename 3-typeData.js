var rl = require('readline-sync').question;

console.log(`Tipe data adalah klasifikasi yang kami berikan untuk berbagai jenis data yang kami gunakan dalam pemrograman.
Di JavaScript, ada tujuh tipe data dasar:
Integer: Angka apa pun, termasuk angka dengan desimal: 4, 8, 1516, 23.42.
1. String: Pengelompokan karakter apa pun pada keyboard Anda (huruf, angka, spasi, simbol, dll.) Yang diapit oleh tanda kutip tunggal: '...' atau tanda kutip ganda "..."
        Beberapa orang suka menganggap string sebagai kata mewah untuk teks.
2. Boolean: Tipe data ini hanya memiliki dua kemungkinan nilai - "true" atau "false" (tanpa tanda kutip).
        Sangat membantu untuk menganggap boolean sebagai tombol "on" dan "off" atau sebagai jawaban untuk pertanyaan "ya" atau "tidak".
3. Null: Tipe data ini mewakili nilai yang tidak ada secara sengaja, dan diwakili oleh keyword "null" (tanpa tanda kutip).
4. Undefined: Tipe data ini dilambangkan dengan keyword "undefined" (tanpa tanda kutip).
        Ini juga mewakili tidak adanya nilai meskipun memiliki penggunaan yang berbeda dari null.
5. Symbol: Fitur bahasa yang lebih baru, simbol adalah pengenal unik, berguna dalam pengkodean yang lebih kompleks.
6. Objek: Koleksi data terkait.`)

rl("Enter untuk melanjutkan");

console.log('Dibawah ini type data Integer')
console.log('Kode: console.log(2011)')
console.log(2011)//kode
rl("Enter untuk melanjutkan");

console.log('\nDibawah ini type data String')
console.log('Kode: console.log(\'Ini string\')')
console.log('Ini string')//kode
rl("Enter untuk melanjutkan");

console.log('\nDibawah ini type data undifined')
console.log('Kode: console.log(undefined)')
console.log(undefined)//kode
rl("Enter untuk melanjutkan");

console.log('\nDibawah ini type data null')
console.log('Kode: console.log(null)')
console.log(null)//kode
rl("Enter untuk melanjutkan");

console.log('\nDibawah ini type data Bolean')
console.log('Kode: console.log(1==1)')
console.log(1==1)//kode
rl("Enter untuk melanjutkan");

console.log('\n\n//Bonus')
console.log(`kode: console.log('\\"Hai kak\\"')`)
console.log(`\"Hai kak\"`)//kode
rl("Enter untuk melanjutkan");

console.log('\nkode: console.log(20.3040)')
console.log(20.3040);//kode
rl("Enter untuk melanjutkan");

a = 'Halo ini variabel a'
console.log(`\nkode: a = 'Halo ini variabel a'\nconsole.log(a)`)//kode
console.log(`${a}`)//kode

