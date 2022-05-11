/**
 * Settingan yang bisa Anda ubah
 * urlDatabase = url yang merujuk pada database mongodb, jika Anda ingin database cloud bisa daftar gratis di https://account.mongodb.com/account/login
 * sessionSecret = Kunci rahasia untuk session aplikasi Anda, Anda bisa merubah nilai ini
 * authApp = Jangan ubah nilai ini atau aplikasi Anda akan error
 * pathChrome = Ini perlu Anda isi jika Anda ingin mendukung pengiriman video, cari executable chrome
 * port = Port yang ingin Anda gunakan untuk aplikasi ini
 */
module.exports = {
	urlDatabase: 'mongodb://localhost/wa_api',
	sessionSecret: 'whatsapp-api-new',
	authApp: 'a1f1fce0dc4b49e7911db37c575c43908530857836ecc33d7315375e313a116a8e92f0c359dfa5dc8bdfac774d92cda1e7e4fb32c615a1ebb106331346f6842618c42e79c978cd2be0b2d74d4e630ec2b664800f12bba74d45dbfcf3469073beaed989baa740a6718a2ea7d67b49c4311b3cc66e66',
	pathChrome: '',
	port: 3000,
	headless: true
}
