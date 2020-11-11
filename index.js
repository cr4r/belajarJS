var rl = require('readline-sync').question;
var {exec} = require('child_process');
var b='y'

while (b=='y'){
a = rl(`Pilih salah satu
1. Console
2. Komen
3. Type Data
4. Aritmatika
5. Penggabungan String
6. Length
7. Methode
8. Spesial Karakter
9. Keluar
Jawab(1-9) => `);

if(a=='1'){
    console.log('Console adalah panel yang menampilkan pesan penting, seperti kesalahan, untuk pengembang. Banyak pekerjaan yang dilakukan komputer dengan kode kita tidak terlihat oleh kita secara default.')
    c = rl("Tekan Enter Untuk Melanjutkan");
    console.log('Contohnya ini adalah hasil dari kode \n\"Console.log(5)\" hasilnya ada di bawah')
    console.log(5)//kode
    d = 'y'
    while(d == 'y'){
        c = rl("Mau lanjut atau keluar? (y/k)\nJawab: ");
        if(c=='y'){
            console.clear();
            d='t'
        }
        else if(c=='k'){
            d ='t'
            b = 't'
        }
    }
}else if(a=='2'){
console.log(`Contoh Jenis Komentar
//Pemrograman seringkali sangat kolaboratif.
//Selain itu, kode kita sendiri dapat dengan cepat menjadi sulit untuk dipahami saat kita kembali ke sana - terkadang hanya satu jam kemudian!
//Karena alasan ini, sering kali berguna untuk meninggalkan catatan di kode kami untuk pengembang lain atau diri kami sendiri.`)
rl("Enter untuk melanjutkan");
console.log(`/*Saat kita menulis JavaScript, kita dapat menulis komentar dalam kode kita yang akan diabaikan oleh komputer saat program kita berjalan.
Komentar ini ada hanya untuk pembaca manusia.*/`)
console.log(`Kode : console.log('Hai dunia'/*anda bisa menggunakan komen disini juga*/)`)
console.log('Hai dunia'/*anda bisa menggunakan komen disini juga*/)
d = 'y'
while(d == 'y'){
    c = rl("Mau lanjut atau keluar? (y/k)\nJawab: ");
    if(c=='y'){
        console.clear();
        d='t'
    }
    else if(c=='k'){
        d ='t'
        b = 't'
    }
}
console.log('Hai dunia'/*anda bisa menggunakan komen disini juga*/)//kode
}else if(a=='3'){
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
d = 'y'
while(d == 'y'){
    c = rl("Mau lanjut atau keluar? (y/k)\nJawab: ");
    if(c=='y'){
        console.clear();
        d='t'
    }
    else if(c=='k'){
        d ='t'
        b = 't'
    }
}
}else if(a=='4'){
console.log(`Operator Aritmatika
Aritmatika dasar sering kali berguna saat pemrograman.

Operator adalah karakter yang melakukan tugas dalam kode kita.
JavaScript memiliki beberapa operator aritmatika bawaan, yang memungkinkan kita melakukan kalkulasi matematis pada angka.`)
rl("Enter untuk melanjutkan");
console.log(`
Ini termasuk operator berikut dan simbolnya yang sesuai:
Tambahkan: +
Kurangi: -
Kalikan: *
Bagi: /
Sisa:%
Empat yang pertama berfungsi seperti yang Anda duga:
console.log(3 + 4); // Hasil 7
console.log(5 - 1); // Hasil 4
console.log(4 * 2); // Hasil 8
console.log(9 / 3); // Hasil 3
console.log(11 % 3) // Hasil 2\n`)
rl("Enter untuk melanjutkan");

console.log('Kode: console.log(19+3.5)')
console.log(19+3.5) //kode
rl("Enter untuk melanjutkan");
console.log('\nKode: console.log(2020-1969)')
console.log(2020-1969)//kode
rl("Enter untuk melanjutkan");
console.log('\nKode: console.log(65/240)')
console.log(65/240)//kode
rl("Enter untuk melanjutkan");
console.log('\nKode: console.log(0.2708*100)')
console.log(0.2708*100)//kode

d = 'y'
while(d == 'y'){
    c = rl("Mau lanjut atau keluar? (y/k)\nJawab: ");
    if(c=='y'){
        console.clear();
        d='t'
    }
    else if(c=='k'){
        d ='t'
        b = 't'
    }
}
}else if(a=='5'){
console.log(`Penggabungan String
Operator bukan hanya untuk angka! Saat operator + digunakan pada dua string`)
console.log(`Contoh: 
console.log('hi' + 'ya');
console.log('siapa' + 'aku')
console.log('I love to ' + 'js.')\n`)
rl("Enter untuk melanjutkan");
console.log(`kode: console.log('hallo'+' beb')`)
console.log('hallo'+' beb')//kode
rl("Enter untuk melanjutkan");
console.log(`\nkode: console.log('hallo'+' beb'+' Aku sedang'+' belajar JS')`)
console.log('hallo'+' beb'+' Aku sedang'+' belajar JS')//kode

    d = 'y'
    while(d == 'y'){
        c = rl("Mau lanjut atau keluar? (y/k)\nJawab: ");
        if(c=='y'){
            console.clear();
            d='t'
        }
        else if(c=='k'){
            d ='t'
            b = 't'
        }
        console.clear();
    }
}else if(a=='6'){
console.log(`Properti length digunakan untuk menghitung sebuah string/variabel yang dituju.
Misalkan
var a='abcd'
a.length
Maka hasilnya 4`)
rl("Enter untuk melanjutkan");

console.log(`\nKode: '1234567'.length`)
console.log('1234567'.length) //kode
rl("Enter untuk melanjutkan");

console.log(`\nKode:
a = 'Properti length digunakan untuk menghitung sebuah string/variabel'
console.log(a.length)`)
a = 'Properti length digunakan untuk menghitung sebuah string/variabel' //kode
console.log(a.length) //kode

    d = 'y'
    while(d == 'y'){
        c = rl("Mau lanjut atau keluar? (y/k)\nJawab: ");
        if(c=='y'){
            console.clear();
            d='t'
        }
        else if(c=='k'){
            d ='t'
            b = 't'
        }
    }
console.clear();
}else if(a=='7'){
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
    
    d = 'y'
    while(d == 'y'){
        c = rl("Mau lanjut atau keluar? (y/k)\nJawab: ");
        if(c=='y'){
            console.clear();
            d='t'
        }
        else if(c=='k'){
            d ='t'
            b = 't'
        }
    }
console.clear();
}else if(a=='8'){
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

    d = 'y'
    while(d == 'y'){
        c = rl("Mau lanjut atau keluar? (y/k)\nJawab: ");
        if(c=='y'){
            console.clear();
            d='t'
        }
        else if(c=='k'){
            d ='t'
            b = 't'
        }
    }
console.clear();
}else if(a=='9'){
    console.clear();
    b = 't'
}
}
