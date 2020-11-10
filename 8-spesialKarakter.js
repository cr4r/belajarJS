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
\\uXXXX menampilkan unicode dari utf-16, X = dari 0000 - FFFF

`)
console.log(`Kode: console.log('Halo\\tSayang)`)
console.log('Hallo\tSayang')
console.log(`\nKode: console.log('Hallo \\'Beb\\')`)
console.log('Hallo \'Beb\'')
console.log(`\nKode: console.log('Hallo \\"Beb\\")`)
console.log('Hallo \"Beb\"')
console.log(`\nKode: console.log('Hallo \\nBeb')`)
console.log('Hallo \nBeb')
console.log(`\nKode: console.log('Hallo \\v beb')`)
console.log('Hallo \v beb')
console.log(`\nKode: console.log('hallo t\\b beb')`)
console.log('hallo t\b beb')
console.log(`\nKode: console.log('Hallo \\fbeb')`)
console.log('Hallo \fbeb')
console.log(`\nKode: console.log('Hallo \\uFFFF Beb')`)
console.log('Hallo \uFFFF Beb')