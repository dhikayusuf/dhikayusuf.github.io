//WEEKLY PROJECT - QUIZ PILIHAN GANDA

// PSEUDOCODE AREA
/*
1. TAMPILKAN notifikasi mulainya quiz
2. SIMPAN sekumpulan array pertanyaan
3. TAMPILKAN "Benar!" apabila pemain menjawab yang benar dan TAMPILKAN "Salah!"  apabila pemain salah menjawab soal
4. HITUNG jumlah nilai total yang didapat
5. TAMPILKAN hasil kelulusan dan menyelamati pemain

*/

//CODE HERE
alert("Selamat datang di Quiz ini. Agar lulus, anda harus menjawab semua pertanyaan dengan benar!")

var pertanyaan = [
  {
    prompt: "Siapakah presiden pertama di Amerika Serikat?\n(a) John Kennedy\n(b) Bill Clinton\n(c) George Washington\n(d) Donald Trump",
    jawaban: "c"
  },
  {
    prompt: "Ibukota dari negara Jepang adalah:\n(a) Osaka\n(b) Tokyo\n(c) Kyoto\n(d) Hiroshima",
    jawaban: "b"
  },
  {
    prompt: "Siapakah direktur dari film Pengabdi Setan (2017)?\n(a) Joko Anwar\n(b) Riri Riza\n(c) Mira Lesmana\n(d) Michael Bay",
    jawaban: "a"
  },
  {
    prompt: "Di antara jawaban ini, manakah yang bukan merupakan karakter dari kartun/anime 'Captain Tsubasa'?\n(a) Tsubasa\n(b) Wakabayashi\n(c) Michael Essien\n(d) Misaki",
    jawaban: "c"
  },
  {
    prompt: "Superhero manakah yang bukan merupakan dari franchise Marvel?\n(a) Thor\n(b) Panji Manusia Millenium\n(c) Black Widow\n(d) Hulk",
    jawaban: "b"
  },
  {
    prompt: "Perangkat Apple menggunakan operating system:\n(a) iOS\n(b) Android\n(c) Symbian OS\n(d) Windows",
    jawaban: "a"
  },
  {
    prompt: "Makanan khas yang berasal dari negara India adalah:\n(a) Samosa\n(b) Foie Gras\n(c) Burritos\n(d) Tom Yam",
    jawaban: "a"
  },
  {
    prompt: "Berapa soal yang anda harus jawab dengan benar agar bisa lulus quiz ini?\n(a) Satu saja\n(b) Semua salah tetep lulus\n(c) minimal 50% benar\n(d) Semuanya",
    jawaban: "d"
  },
  ]
  
var nilai = 0;

for(var i=0; i < pertanyaan.length; i++){
  var response = window.prompt(pertanyaan[i].prompt)
  if(response == pertanyaan[i].jawaban){
   nilai++;
   alert("Benar!");
  }else{
    alert("Salah!");
  }
}
alert("Anda berhasil menjawab " + nilai + "/" + pertanyaan.length)
if(nilai >=8){
  alert("Selamat, anda lulus!")
}else{
  alert("Anda tidak lulus. Silahkan mencoba lagi!")
}