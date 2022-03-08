const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];

function getInfoPenjualan(dataPenjualan) {
  // hitung untung dan modal
  let untung = dataPenjualan.map(data => (data.hargaJual - data.hargaBeli) * data.totalTerjual).reduce((prev, curr) => prev + curr, 0);
  let modal = dataPenjualan.map(data => (data.sisaStok + data.totalTerjual) * data.hargaBeli).reduce((prev, curr) => prev + curr, 0);
  // memasukkan hasil untung dan modal dalam array number untuk mengubah formatnya
  let number = [ untung.toString().split('').reverse().join(''), modal.toString().split('').reverse().join('') ];
  let totalKeuntungan = 'Rp.' + number[0].match(/\d{1,3}/g).join('.').split('').reverse().join('');
  let totalModal = 'Rp.' + number[1].match(/\d{1,3}/g).join('.').split('').reverse().join('');
  // hitung persen keuntungan dan formatnya
  let persenUntung = untung / modal * 100;
  let persentaseKeuntungan = persenUntung.toFixed(2) + '%';
  // mencari produk buku terlaris dan penulis buku terlaris
  let novelTerjual = dataPenjualan.map(data => data.totalTerjual);
  let penjualanTerbanyak = Math.max(...novelTerjual);
  let produkBukuTerlaris = dataPenjualan.filter((data) => data.totalTerjual == penjualanTerbanyak).map(data => data.namaProduk).toString();
  let penulisTerlaris = dataPenjualan.filter((data) => data.totalTerjual == penjualanTerbanyak).map(data => data.penulis).toString();
  // memindahkan semua hasil perhitungan ke dalam object baru
  let penjualanNovel = { totalKeuntungan, totalModal, persentaseKeuntungan, produkBukuTerlaris, penulisTerlaris }
  return penjualanNovel;
}

console.log(getInfoPenjualan(dataPenjualanNovel));