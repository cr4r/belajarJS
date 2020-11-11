var rl = require('readline-sync').question;

console.log(`Spesial karakter biasa digunakan untuk membuat tab, baris baru dll
Contoh:
\\t  digunakan untuk membuat tab atau beberapa spasi
\\' digunakan untuk menampilkan tanda kutip
\\" digunakan untuk menampilkan double tanda kutip
\\n digunakan untuk membuat baris baru
\\r digunkan untuk mengganti hasil print dengan yang baru
\\v Membuat baris baru dan vertikal (coba aja)
\\b Untuk menghapus satu huruf sebelumnya (backspace)
\\f fungsinya sama seperti \\v
\\uXXXX menampilkan unicode dari utf-16, X = dari 0000 - FFFF`)
rl("Enter untuk melanjutkan");

console.log(`Kode: console.log('Halo\\tSayang)`)
console.log('Hallo\tSayang')
rl("Enter untuk melanjutkan");

console.log(`\nKode: console.log('Hallo \\'Beb\\')`)
console.log('Hallo \'Beb\'')
rl("Enter untuk melanjutkan");

console.log(`\nKode: console.log('Hallo \\"Beb\\")`)
console.log('Hallo \"Beb\"')
rl("Enter untuk melanjutkan");

console.log(`\nKode: console.log('Hallo \\nBeb')`)
console.log('Hallo \nBeb')
rl("Enter untuk melanjutkan");

console.log(`\nKode: console.log('Hallo \\v beb')`)
console.log('Hallo \v beb')
rl("Enter untuk melanjutkan");

console.log(`\nKode: console.log('hallo t\\b beb')`)
console.log('hallo t\b beb')
rl("Enter untuk melanjutkan");

console.log(`\nKode: console.log('Hallo \\fbeb')`)
console.log('Hallo \fbeb')
rl("Enter untuk melanjutkan");

console.log(`\nKode: console.log('Hallo \\uFFFF Beb')`)
console.log('Hallo \uFFFF Beb')
