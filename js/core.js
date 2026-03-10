// Game Configuration & Data
const CONFIG = {
  animals: [
    { name: "Singa", img: "assets/lion.png" },
    { name: "Gajah", img: "assets/elephant.png" },
    { name: "Panda", img: "assets/panda.png" },
    { name: "Kucing", img: "assets/cat.png" },
    { name: "Anjing", img: "assets/dog.svg", emoji: "🐶" },
    { name: "Monyet", img: "assets/monkey.svg", emoji: "🐒" },
    { name: "Jerapah", img: "assets/giraffe.svg", emoji: "🦒" },
    { name: "Zebra", img: "assets/zebra.svg", emoji: "🦓" },
    { name: "Kelinci", img: "assets/rabbit.svg", emoji: "🐰" },
    { name: "Harimau", img: "assets/tiger.png", emoji: "🐯" },
    { name: "Ayam", img: "assets/chicken.svg", emoji: "🐔" },
    { name: "Sapi", img: "assets/cow.svg", emoji: "🐮" },
    { name: "Bebek", img: "assets/duck.png", emoji: "🦆" },
    { name: "Kuda", img: "assets/horse.png", emoji: "🐴" },
    { name: "Babi", emoji: "🐷" },
    { name: "Tikus", emoji: "🐭" },
    { name: "Beruang", emoji: "🐻" },
    { name: "Beruang Koala", emoji: "🐨" },
    { name: "Katak", emoji: "🐸" },
    { name: "Ular", emoji: "🐍" },
    { name: "Kura-kura", emoji: "🐢" },
    { name: "Ikan", emoji: "🐟" },
    { name: "Gurita", emoji: "🐙" },
    { name: "Kepiting", emoji: "🦀" },
    { name: "Paus", emoji: "🐳" },
    { name: "Lumba-lumba", emoji: "🐬" },
    { name: "Burung", emoji: "🐦" },
    { name: "Penguin", emoji: "🐧" },
    { name: "Burung Hantu", emoji: "🦉" },
    { name: "Flamingo", emoji: "🦩" },
    { name: "Merak", emoji: "🦚" },
    { name: "Lebah", emoji: "🐝" },
    { name: "Kupu-kupu", emoji: "🦋" },
    { name: "Kumbang", emoji: "🐞" },
    { name: "Semut", emoji: "🐜" },
    { name: "Laba-laba", emoji: "🕷️" },
    { name: "Kalajengking", emoji: "🦂" },
    { name: "Unta", emoji: "🐪" },
    { name: "Kangguru", emoji: "🦘" },
    { name: "Badak", emoji: "🦏" },
    { name: "Kuda Nil", emoji: "🦛" },
    { name: "Domba", emoji: "🐑" },
    { name: "Kambing", emoji: "🐐" },
    { name: "Rusa", emoji: "🦌" },
    { name: "Serigala", emoji: "🐺" },
    { name: "Rubah", emoji: "🦊" },
    { name: "Rakun", emoji: "🦝" },
    { name: "Tupai", emoji: "🐿️" },
    { name: "Landak", emoji: "🦔" },
    { name: "Gorila", emoji: "🦍" },
    { name: "Siput", emoji: "🐌" },
    { name: "Ulat", emoji: "🐛" },
    { name: "Jangkrik", emoji: "🦗" },
    { name: "Lalat", emoji: "🪰" },
    { name: "Nyamuk", emoji: "🦟" },
    { name: "Cacing", emoji: "🪱" },
    { name: "Naga", emoji: "🐉" },
    { name: "T-Rex", emoji: "🦖" },
    { name: "Sauropoda", emoji: "🦕" },
    { name: "Singa Laut", emoji: "🦭" },
    { name: "Beruang Kutub", emoji: "🐻‍❄️" },
    { name: "Hiu", emoji: "🦈" },
    { name: "Ikan Buntal", emoji: "🐡" },
    { name: "Udang", emoji: "🦐" },
    { name: "Cumi-cumi", emoji: "🦑" },
    { name: "Angsa", emoji: "🦢" },
    { name: "Burung Kakaktua", emoji: "🦜" },
    { name: "Elang", emoji: "🦅" },
    { name: "Burung Merpati", emoji: "🕊️" },
    { name: "Kalkun", emoji: "🦃" },
    { name: "Ayam Jago", emoji: "🐓" },
    { name: "Anak Ayam", emoji: "🐣" },
    { name: "Burung Gagak", emoji: "🐦‍⬛" },
    { name: "Kelelawar", emoji: "🦇" },
    { name: "Berang-berang", emoji: "🦦" },
    { name: "Kungkang", emoji: "🦥" },
    { name: "Tikus Kastor", emoji: "🦫" },
    { name: "Sigung", emoji: "🦨" },
    { name: "Musang", emoji: "🦡" },
    { name: "Mamut", emoji: "🦣" },
    { name: "Bison", emoji: "🦬" },
    { name: "Unta Dua Punuk", emoji: "🐫" },
    { name: "Llama", emoji: "🦙" },
    { name: "Keledai", emoji: "🫏" },
    { name: "Kerbau", emoji: "🐃" },
    { name: "Banteng", emoji: "🐂" },
    { name: "Domba Jantan", emoji: "🐏" },
    { name: "Kambing Gunung", emoji: "🐐" },
    { name: "Rusa Kutub", emoji: "🦌" },
    { name: "Macan Tutul", emoji: "🐆" },
    { name: "Kucing Hitam", emoji: "🐈‍⬛" },
    { name: "Anak Harimau", emoji: "🐯" },
    { name: "Anak Singa", emoji: "🦁" },
    { name: "Orangutan", emoji: "🦧" },
    { name: "Simpanse", emoji: "🐵" },
    { name: "Marmut", emoji: "🐹" },
    { name: "Ikan Pari", emoji: "🐟" },
    { name: "Lobster", emoji: "🦞" },
    { name: "Kumbang Hijau", emoji: "🪲" },
    { name: "Belalang", emoji: "🦗" },
  ],
  alphabet: ALPHABET_DATABASE,
  colors: [
    { name: "Merah", hex: "#FF0000" },
    { name: "Biru", hex: "#0000FF" },
    { name: "Kuning", hex: "#FFFF00" },
    { name: "Hijau", hex: "#008000" },
    { name: "Oranye", hex: "#FFA500" },
    { name: "Ungu", hex: "#800080" },
    { name: "Merah Muda", hex: "#FFC0CB" },
    { name: "Cokelat", hex: "#A52A2A" },
    { name: "Hitam", hex: "#000000" },
    { name: "Putih", hex: "#FFFFFF" },
    { name: "Abu-abu", hex: "#808080" },
    { name: "Emas", hex: "#FFD700" },
    { name: "Perak", hex: "#C0C0C0" },
    { name: "Nila", hex: "#4B0082" },
    { name: "Tosca", hex: "#40E0D0" },
    { name: "Marun", hex: "#800000" },
    { name: "Zaitun", hex: "#808000" },
    { name: "Peach", hex: "#FFDAB9" },
    { name: "Kuning Langsat", hex: "#F0E68C" },
    { name: "Biru Muda", hex: "#ADD8E6" },
  ],
  puzzles: [
    { name: "Singa", file: "lion.png" },
    { name: "Gajah", file: "gajah.png" },
    { name: "Panda", file: "panda.png" },
    { name: "Kucing", file: "cat.png" },
    { name: "Apel", file: "apple.png" },
    { name: "Bola", file: "ball.png" },
    { name: "Monyet", file: "monkey.png" },
    { name: "Katak", file: "katak.png" },
    { name: "Dinosaurus", file: "dinosaur.png" },
    { name: "Roket", file: "rocket.png" },
    { name: "Stroberi", file: "strawberry.png" },
    { name: "Gurita", file: "octopus.png" },
    { name: "Pesawat", file: "plane.png" },
    { name: "Mobil", file: "car.png" },
    { name: "Bunga", file: "flower.png" },
    { name: "Pelik", file: "bird.png" },
    { name: "Ikan", file: "fish.png" },
    { name: "Kura-kura", file: "turtle.png" },
    { name: "Es Krim", file: "icecream.png" },
    { name: "Donat", file: "donut.png" },
    { name: "Pelangi", file: "rainbow.png" },
    { name: "Matahari", file: "sun.png" },
    { name: "Bulan", file: "moon.png" },
    { name: "Rumah", file: "house.png" },
    { name: "Pohon", file: "tree.png" },
    { name: "Balon", file: "balloon.png" },
    { name: "Sepeda", file: "bike.png" },
    { name: "Robot", file: "robot.png" },
    { name: "Astronot", file: "astronaut.png" },
    { name: "Lebah", file: "bee.png" },
    { name: "Kepiting", file: "crab.png" },
    { name: "Paus", file: "whale.png" },
    { name: "Lumba-lumba", file: "dolphin.png" },
    { name: "Ulat", file: "caterpillar.png" },
    { name: "Kumbang", file: "ladybug.png" },
    { name: "Katak", emoji: "🐸" },
    { name: "Ular", emoji: "🐍" },
    { name: "Kera", emoji: "🐵" },
    { name: "Ayam", file: "chicken.svg" },
    { name: "Sapi", file: "cow.svg" },
    { name: "Domba", emoji: "🐑" },
    { name: "Babi", emoji: "🐷" },
    { name: "Tikus", emoji: "🐭" },
    { name: "Beruang", emoji: "🐻" },
    { name: "Rubah", emoji: "🦊" },
    { name: "Serigala", emoji: "🐺" },
    { name: "Kuda", emoji: "🐴" },
  ],
  habits: [
    { task: "Gosok Gigi", correct: true, emoji: "🪥" },
    { task: "Cuci Tangan", correct: true, emoji: "🧼" },
    { task: "Buang Sampah", correct: true, emoji: "🗑️" },
    { task: "Makan Sayur", correct: true, emoji: "🥦" },
    { task: "Makan Buah", correct: true, emoji: "🍎" },
    { task: "Minum Air Putih", correct: true, emoji: "💧" },
    { task: "Tidur Tepat Waktu", correct: true, emoji: "😴" },
    { task: "Bangun Pagi", correct: true, emoji: "☀️" },
    { task: "Merapikan Tempat Tidur", correct: true, emoji: "🛏️" },
    { task: "Membaca Buku", correct: true, emoji: "📚" },
    { task: "Belajar Giat", correct: true, emoji: "📖" },
    { task: "Membantu Orang Tua", correct: true, emoji: "🤝" },
    { task: "Berdoa", correct: true, emoji: "🙏" },
    { task: "Berbagi Mainan", correct: true, emoji: "🧸" },
    { task: "Pamit Sebelum Pergi", correct: true, emoji: "👋" },
    { task: "Terima Kasih", correct: true, emoji: "💖" },
    { task: "Minta Tolong", correct: true, emoji: "🆘" },
    { task: "Minta Maaf", correct: true, emoji: "🙇" },
    { task: "Menabung", correct: true, emoji: "💰" },
    { task: "Olahraga", correct: true, emoji: "🏃" },
    { task: "Menaruh Sepatu di Rak", correct: true, emoji: "👟" },
    { task: "Hemat Listrik", correct: true, emoji: "💡" },
    { task: "Mandi Dua Kali Sehari", correct: true, emoji: "🛁" },
    { task: "Potong Kuku", correct: true, emoji: "💅" },
    { task: "Sisiran Rambut", correct: true, emoji: "🪮" },
    { task: "Sayang Binatang", correct: true, emoji: "🐱" },
    { task: "Menanam Pohon", correct: true, emoji: "🌱" },
    { task: "Menyiram Bunga", correct: true, emoji: "🌻" },
    { task: "Hemat Air", correct: true, emoji: "🚰" },
    { task: "Tertib di Jalan", correct: true, emoji: "🚦" },
    { task: "Menyeberang di Zebra Cross", correct: true, emoji: "🦓" },
    { task: "Mengetuk Pintu", correct: true, emoji: "🚪" },
    { task: "Mendengarkan Guru", correct: true, emoji: "👩‍🏫" },
    { task: "Menghormati Orang Tua", correct: true, emoji: "👴" },
    { task: "Berteman Baik", correct: true, emoji: "👫" },
    { task: "Menjaga Kebersihan", correct: true, emoji: "🧹" },
    { task: "Menyiapkan Buku Sekolah", correct: true, emoji: "🎒" },
    { task: "Sarapan Pagi", correct: true, emoji: "🍳" },
    { task: "Mengembalikan Barang", correct: true, emoji: "📦" },
    { task: "Sabar Mengantre", correct: true, emoji: "🚶" },
    { task: "Bicara Sopan", correct: true, emoji: "🗣️" },
    { task: "Menutup Mulut saat Bersin", correct: true, emoji: "🤧" },
    { task: "Cuci Kaki sebelum Tidur", correct: true, emoji: "🦶" },
    { task: "Makan Sambil Duduk", correct: true, emoji: "🪑" },
    { task: "Menghabiskan Makanan", correct: true, emoji: "🍽️" },
    { task: "Membantu Teman", correct: true, emoji: "🤕" },
    { task: "Jujur", correct: true, emoji: "😇" },
    { task: "Disiplin", correct: true, emoji: "⏰" },
    { task: "Sabar saat Marah", correct: true, emoji: "🧘" },
    { task: "Murah Senyum", correct: true, emoji: "😊" },
    { task: "Buang Sampah Sembarangan", correct: false, emoji: "🚮❌" },
    { task: "Malas Mandi", correct: false, emoji: "🛁❌" },
    { task: "Jarang Gosok Gigi", correct: false, emoji: "🦷🚬" },
    { task: "Tidur Terlalu Malam", correct: false, emoji: "🌕💤" },
    { task: "Main Gadget Terlama", correct: false, emoji: "📱🎮" },
    { task: "Nonton TV Terlalu Dekat", correct: false, emoji: "📺👀" },
    { task: "Makan Berantakan", correct: false, emoji: "🍜💥" },
    { task: "Bicara Kasar", correct: false, emoji: "🤬❌" },
    { task: "Marah-marah", correct: false, emoji: "😡💥" },
    { task: "Berbohong", correct: false, emoji: "🤥❌" },
    { task: "Mengambil Milik Orang", correct: false, emoji: "🕵️‍♂️❌" },
    { task: "Menyakiti Teman", correct: false, emoji: "🤝❌" },
    { task: "Mengupil Sembarangan", correct: false, emoji: "👃☝️" },
    { task: "Menggigit Kuku", correct: false, emoji: "💅👄" },
    { task: "Mencoret Tembok", correct: false, emoji: "🖍️🧱" },
    { task: "Tidak Mau Berbagi", correct: false, emoji: "🧸🚫" },
    { task: "Malas Belajar", correct: false, emoji: "📖💤" },
    { task: "Malas Bantu Orang Tua", correct: false, emoji: "🤝💤" },
    { task: "Terlambat Sekolah", correct: false, emoji: "⏰🏃" },
    { task: "Menyontek", correct: false, emoji: "📝🕵️" },
    { task: "Melempar Mainan", correct: false, emoji: "🧸🚀" },
    { task: "Berteriak-teriak", correct: false, emoji: "🔊📢" },
    { task: "Gak Mau Makan Sayur", correct: false, emoji: "🥦🚫" },
    { task: "Permen Terlalu Banyak", correct: false, emoji: "🍬🍭" },
    { task: "Soda Berlebihan", correct: false, emoji: "🥤🚫" },
    { task: "Meledek Teman", correct: false, emoji: "🤪👎" },
    { task: "Menangis Demi Sesuatu", correct: false, emoji: "😭💰" },
    { task: "Malas Rapikan Mainan", correct: false, emoji: "🧸🏚️" },
    { task: "Tidur saat Belajar", correct: false, emoji: "📖😪" },
    { task: "Malas Olahraga", correct: false, emoji: "🏃💤" },
    { task: "Memotong Pembicaraan", correct: false, emoji: "🗣️🛑" },
    { task: "Lupa Cuci Tangan", correct: false, emoji: "🧼❓" },
    { task: "Makan Sambil Berdiri", correct: false, emoji: "🚶🍕" },
    { task: "Berkelahi", correct: false, emoji: "🥊❌" },
    { task: "Malas Bangun Pagi", correct: false, emoji: "☀️💤" },
    { task: "Tidak Pamit", correct: false, emoji: "👋❓" },
    { task: "Hamburkan Air", correct: false, emoji: "🚰💦" },
    { task: "Lampu Nyala Siang Hari", correct: false, emoji: "💡☀️" },
    { task: "Malas Sisiran", correct: false, emoji: "🪮🕸️" },
    { task: "Membanting Pintu", correct: false, emoji: "🚪💥" },
    { task: "Gak Mau Mengantre", correct: false, emoji: "🚶💨" },
    { task: "Sepatu Sembarangan", correct: false, emoji: "👟🏚️" },
    { task: "Makan Sambil Tiduran", correct: false, emoji: "🛌🍔" },
    { task: "Malas Ibadah", correct: false, emoji: "🙏💤" },
    { task: "Sering Mengeluh", correct: false, emoji: "😫🗯️" },
    { task: "Gak Mau Minta Maaf", correct: false, emoji: "🙇🚫" },
    { task: "Sombong", correct: false, emoji: "😎👎" },
    { task: "Boros Uang", correct: false, emoji: "💸❌" },
    { task: "Menakuti Binatang", correct: false, emoji: "🐶😱" },
    { task: "Jatuhkan Barang Sengaja", correct: false, emoji: "📦💥" },
  ],
  mathEmojis: [
    "🍎",
    "",
    "🍌",
    "⭐",
    "🎈",
    "🚗",
    "🐶",
    "🐱",
    "🐭",
    "🐹",
    "🐰",
    "🦊",
    "🐻",
    "🐼",
    "🐨",
    "🐯",
    "🦁",
    "🐮",
    "🐷",
    "🐸",
    "🐵",
    "",
    "🐧",
    "🐦",
    "🐥",
    "🦆",
    "🦅",
    "🦉",
    "🦇",
    "🐺",
    "🐗",
    "",
    "🦄",
    "🐝",
    "🐛",
    "🦋",
    "🐌",
    "🐞",
    "🐜",
    "🕷️",
    "🐢",
    "",
    "🦎",
    "🦖",
    "🦕",
    "🐙",
    "🦑",
    "🦐",
    "🦞",
    "🦀",
    "🐡",
    "🐠",
    "🐟",
    "🐬",
    "🐳",
    "🐋",
    "🦈",
    "🐊",
    "🐅",
    "🐆",
    "🦓",
    "🦍",
    "🦧",
    "🐘",
    "🦛",
    "🦏",
    "🐪",
    "🐫",
    "🦒",
    "🦘",
    "🐃",
    "🐂",
    "🐄",
    "🐎",
    "🐖",
    "🐏",
    "🐑",
    "🐐",
    "🦌",
    "🐕",
    "🐩",
    "🐈",
    "🐓",
    "🦃",
    "🕊️",
    "🐇",
    "🐁",
    "🐀",
    "🐿️",
    "🦔",
    "🐲",
    "🌵",
    "🎄",
    "🌲",
    "🌳",
    "🌴",
    "🌱",
    "🌿",
    "☘️",
    "🍀",
  ],
  oddOneOut: [
    { items: ["🍎", "🍌", "🍇", "🚗"], correct: 3, name: "Bukan Buah" },
    { items: ["🐶", "🐱", "🦁", "🥦"], correct: 3, name: "Bukan Hewan" },
    { items: ["🚢", "✈️", "🚁", "🍕"], correct: 3, name: "Bukan Transportasi" },
    { items: ["⚽", "🏀", "🎾", "🧤"], correct: 3, name: "Bukan Bola" },
    { items: ["🪑", "🛋️", "🛌", "🦒"], correct: 3, name: "Bukan Perabotan" },
    { items: ["👔", "👗", "👚", "🍔"], correct: 3, name: "Bukan Pakaian" },
    { items: ["🎷", "🎸", "🎻", "🌽"], correct: 3, name: "Bukan Alat Musik" },
    { items: ["🔨", "🪚", "🔧", "🦋"], correct: 3, name: "Bukan Alat" },
    { items: ["🔭", "🧪", "🔬", "🥨"], correct: 3, name: "Bukan Alat Sains" },
    { items: ["📚", "✏️", "🎨", "🚲"], correct: 3, name: "Bukan Alat Tulis" },
    { items: ["🦷", "👁️", "👂", "🌵"], correct: 3, name: "Bukan Bagian Tubuh" },
    { items: ["🌙", "⭐", "☀️", "🌂"], correct: 3, name: "Bukan Benda Langit" },
    {
      items: ["🍰", "🍩", "🍦", "🦗"],
      correct: 3,
      name: "Bukan Makanan Manis",
    },
    { items: ["🍄", "🥬", "🥕", "🚀"], correct: 3, name: "Bukan Sayuran" },
    { items: ["🌊", "🏔️", "🌋", "💻"], correct: 3, name: "Bukan Alam" },
    { items: ["🏠", "🏥", "🏫", "🐙"], correct: 3, name: "Bukan Bangunan" },
    { items: ["🥛", "☕", "🧃", "🔋"], correct: 3, name: "Bukan Minuman" },
    {
      items: ["⌚", "⏰", "⏳", "🍗"],
      correct: 3,
      name: "Bukan Penunjuk Waktu",
    },
    { items: ["💍", "💎", "👑", "🛹"], correct: 3, name: "Bukan Perhiasan" },
    { items: ["🎃", "🎅", "🎆", "🔦"], correct: 3, name: "Bukan Perayaan" },
    { items: ["🧦", "🧤", "🧣", "🥥"], correct: 3, name: "Bukan Musim Dingin" },
    { items: ["🏊", "🚴", "🏃", "🛌"], correct: 3, name: "Bukan Olahraga" },
    {
      items: ["🦓", "🦒", "🐘", "📺"],
      correct: 3,
      name: "Bukan Hewan Kebun Binatang",
    },
    { items: ["🦋", "🐝", "🐞", "🧸"], correct: 3, name: "Bukan Serangga" },
    { items: ["🐠", "🐳", "🐙", "🌋"], correct: 3, name: "Bukan Hewan Laut" },
    { items: ["⛺", "🔥", "🎒", "🧼"], correct: 3, name: "Bukan Camping" },
    { items: ["👮", "👩‍⚕️", "👩‍🚒", "🦉"], correct: 3, name: "Bukan Pekerjaan" },
    { items: ["🎈", "🎉", "🎁", "🥄"], correct: 3, name: "Bukan Ulang Tahun" },
    { items: ["🚜", "🏗️", "🚛", "🪁"], correct: 3, name: "Bukan Alat Berat" },
    { items: ["🎻", "🎺", "🎹", "🪠"], correct: 3, name: "Bukan Orkes" },
    {
      items: ["🥛", "🧀", "🥚", "🏹"],
      correct: 3,
      name: "Bukan Produk Susu/Protein",
    },
    { items: ["🦁", "🐯", "🐆", "🐹"], correct: 3, name: "Bukan Kucing Besar" },
    { items: ["🌲", "🌴", "🌵", "⛵"], correct: 3, name: "Bukan Tumbuhan" },
    { items: ["⚡", "❄️", "🔥", "🧱"], correct: 3, name: "Bukan Elemen" },
    {
      items: ["📻", "📸", "📼", "🍄"],
      correct: 3,
      name: "Bukan Teknologi Jadul",
    },
    { items: ["📪", "📦", "✉️", "🦢"], correct: 3, name: "Bukan Kantor Pos" },
    {
      items: ["🎪", "🎡", "🎢", "🧬"],
      correct: 3,
      name: "Bukan Taman Hiburan",
    },
    { items: ["🪈", "🎹", "🥁", "🍟"], correct: 3, name: "Bukan Alat Musik" },
    {
      items: ["🍔", "🍟", "🍕", "🥦"],
      correct: 3,
      name: "Bukan Makanan Cepat Saji",
    },
    {
      items: ["🍓", "🍒", "🍇", "🥕"],
      correct: 3,
      name: "Bukan Buah Berry/Kecil",
    },
    { items: ["🏖️", "🕶️", "🍦", "⛷️"], correct: 3, name: "Bukan Musim Panas" },
    {
      items: ["🚇", "🚌", "🚋", "🛶"],
      correct: 3,
      name: "Bukan Transportasi Darat",
    },
    { items: ["🏹", "🛡️", "⚔️", "🧵"], correct: 3, name: "Bukan Senjata" },
    {
      items: ["🪥", "🧼", "🧴", "🎮"],
      correct: 3,
      name: "Bukan Alat Kebersihan",
    },
    { items: ["🧸", "🪀", "🧩", "🔭"], correct: 3, name: "Bukan Mainan" },
    { items: ["🚦", "🛑", "🚧", "🍰"], correct: 3, name: "Bukan Rambu Jalan" },
    { items: ["🐘", "🦒", "🦓", "🐹"], correct: 3, name: "Bukan Hewan Besar" },
    { items: ["🐜", "🪱", "🐌", "🦖"], correct: 3, name: "Bukan Hewan Kecil" },
    { items: ["🦆", "🦢", "🦜", "🐊"], correct: 3, name: "Bukan Burung" },
    { items: ["🥥", "🍍", "🥭", "🍎"], correct: 3, name: "Bukan Buah Tropis" },
  ],
  counting: [
    { emoji: "🍏", count: 1 },
    { emoji: "🍎", count: 2 },
    { emoji: "🍐", count: 3 },
    { emoji: "🍊", count: 4 },
    { emoji: "🍋", count: 5 },
    { emoji: "🍌", count: 6 },
    { emoji: "🍉", count: 7 },
    { emoji: "🍇", count: 8 },
    { emoji: "🍓", count: 9 },
    { emoji: "🫐", count: 10 },
    { emoji: "🍒", count: 4 },
    { emoji: "🍑", count: 6 },
    { emoji: "🥭", count: 3 },
    { emoji: "🍍", count: 5 },
    { emoji: "🥥", count: 2 },
    { emoji: "🥝", count: 7 },
    { emoji: "🍅", count: 8 },
    { emoji: "🍆", count: 2 },
    { emoji: "🥑", count: 4 },
    { emoji: "🥦", count: 9 },
    { emoji: "🌽", count: 5 },
    { emoji: "🥕", count: 7 },
    { emoji: "🫑", count: 3 },
    { emoji: "🥒", count: 6 },
    { emoji: "🥬", count: 8 },
    { emoji: "🍄", count: 1 },
    { emoji: "🥜", count: 9 },
    { emoji: "🍔", count: 3 },
    { emoji: "🍟", count: 5 },
    { emoji: "🍕", count: 2 },
    { emoji: "🌭", count: 4 },
    { emoji: "🥪", count: 6 },
    { emoji: "🌮", count: 7 },
    { emoji: "🌯", count: 5 },
    { emoji: "🥗", count: 3 },
    { emoji: "🍿", count: 8 },
    { emoji: "🍳", count: 4 },
    { emoji: "🧇", count: 6 },
    { emoji: "🥞", count: 2 },
    { emoji: "🥓", count: 5 },
    { emoji: "🍗", count: 7 },
    { emoji: "🥩", count: 3 },
    { emoji: "🧂", count: 1 },
    { emoji: "🥨", count: 9 },
    { emoji: "🥯", count: 4 },
    { emoji: "🥖", count: 6 },
    { emoji: "🍞", count: 2 },
    { emoji: "🍩", count: 10 },
    { emoji: "🍪", count: 8 },
    { emoji: "🍰", count: 5 },
  ],
  patterns: [
    { seq: ["🍎", "🍌", "🍎", "🍌"], ans: "🍎" },
    { seq: ["🐶", "🐱", "🐶", "🐱"], ans: "🐶" },
    { seq: ["🚗", "🚲", "🚗", "🚲"], ans: "🚗" },
    { seq: ["⭐", "🌙", "⭐", "🌙"], ans: "⭐" },
    { seq: ["🔴", "🔵", "🔴", "🔵"], ans: "🔴" },
    { seq: ["🟩", "🟨", "🟩", "🟨"], ans: "🟩" },
    { seq: ["🐟", "🦀", "🐟", "🦀"], ans: "🐟" },
    { seq: ["🌞", "☁️", "🌞", "☁️"], ans: "🌞" },
    { seq: ["🐘", "🐭", "🐘", "🐭"], ans: "🐘" },
    { seq: ["⚽", "🏀", "⚽", "🏀"], ans: "⚽" },
    { seq: ["🥛", "🍪", "🥛", "🍪"], ans: "🥛" },
    { seq: ["🧢", "👟", "🧢", "👟"], ans: "🧢" },
    { seq: ["🔔", "🕯️", "🔔", "🕯️"], ans: "🔔" },
    { seq: ["🐝", "🌻", "🐝", "🌻"], ans: "🐝" },
    { seq: ["✈️", "🚀", "✈️", "🚀"], ans: "✈️" },
    { seq: ["🍎", "🍎", "🍌", "🍎", "🍎"], ans: "🍌" },
    { seq: ["🐶", "🐶", "🐱", "🐶", "🐶"], ans: "🐱" },
    { seq: ["⭐", "⭐", "🌙", "⭐", "⭐"], ans: "🌙" },
    { seq: ["🔴", "🔴", "🔵", "🔴", "🔴"], ans: "🔵" },
    { seq: ["🚗", "🚗", "🚲", "🚗", "🚗"], ans: "🚲" },
    { seq: ["⚽", "⚽", "🏀", "⚽", "⚽"], ans: "🏀" },
    { seq: ["🥦", "🥦", "🥕", "🥦", "🥦"], ans: "🥕" },
    { seq: ["🚁", "🚁", "🚂", "🚁", "🚁"], ans: "🚂" },
    { seq: ["🍔", "🍔", "🍟", "🍔", "🍔"], ans: "🍟" },
    { seq: ["🍦", "🍦", "🍩", "🍦", "🍦"], ans: "🍩" },
    { seq: ["🍎", "🍌", "🍇", "🍎", "🍌"], ans: "🍇" },
    { seq: ["🔴", "🔵", "🟢", "🔴", "🔵"], ans: "🟢" },
    { seq: ["🐶", "🐱", "🐨", "🐶", "🐱"], ans: "🐨" },
    { seq: ["🚗", "🚲", "🚁", "🚗", "🚲"], ans: "🚁" },
    { seq: ["⚽", "🏀", "🎾", "⚽", "🏀"], ans: "🎾" },
    { seq: ["⭐", "🌙", "☁️", "⭐", "🌙"], ans: "☁️" },
    { seq: ["🍎", "🍌", "🍎", "🍇", "🍎", "🍌", "🍎"], ans: "🍇" },
    { seq: ["🔴", "🔵", "🔴", "🟢", "🔴", "🔵", "🔴"], ans: "🟢" },
    { seq: ["🐘", "🐘", "🐭", "🐭", "🐘", "🐘"], ans: "🐭" },
    { seq: ["🚗", "🚗", "🚲", "🚲", "🚗", "🚗"], ans: "🚲" },
    { seq: ["⚽", "⚽", "🏀", "🏀", "⚽", "⚽"], ans: "🏀" },
    { seq: ["🍎", "🍎", "🍌", "🍌", "🍎", "🍎"], ans: "🍌" },
    { seq: ["⭐", "⭐", "🌙", "🌙", "⭐", "⭐"], ans: "🌙" },
    { seq: ["🔴", "🔴", "🔵", "🔵", "🔴", "🔴"], ans: "🔵" },
    { seq: ["🧢", "🧢", "👟", "👟", "🧢", "🧢"], ans: "👟" },
    { seq: ["🍕", "🍕", "🍔", "🍔", "🍕", "🍕"], ans: "🍔" },
    { seq: ["🍩", "🍩", "🧁", "🧁", "🍩", "🍩"], ans: "🧁" },
    { seq: ["🐝", "🐝", "🦋", "🦋", "🐝", "🐝"], ans: "🦋" },
    { seq: ["🐟", "🐟", "🦈", "🦈", "🐟", "🐟"], ans: "🦈" },
    { seq: ["🌞", "🌞", "🌚", "🌚", "🌞", "🌞"], ans: "🌚" },
    { seq: ["🍎", "🍎", "🍎", "🍌", "🍎", "🍎", "🍎"], ans: "🍌" },
    { seq: ["🔴", "🔴", "🔴", "🔵", "🔴", "🔴", "🔴"], ans: "🔵" },
    { seq: ["⭐", "⭐", "⭐", "🌙", "⭐", "⭐", "⭐"], ans: "🌙" },
    { seq: ["🚗", "🚗", "🚗", "🚲", "🚗", "🚗", "🚗"], ans: "🚲" },
    { seq: ["⚽", "⚽", "⚽", "🏀", "⚽", "⚽", "⚽"], ans: "🏀" },
  ],
  shadows: [
    { char: "🐘", name: "Gajah" },
    { char: "🦒", name: "Jerapah" },
    { char: "🦁", name: "Singa" },
    { char: "🐷", name: "Babi" },
    { char: "🐒", name: "Monyet" },
    { char: "🐸", name: "Katak" },
    { char: "🐱", name: "Kucing" },
    { char: "🐶", name: "Anjing" },
    { char: "🐰", name: "Kelinci" },
    { char: "🐻", name: "Beruang" },
    { char: "🍎", name: "Apel" },
    { char: "🍌", name: "Pisang" },
    { char: "🍇", name: "Anggur" },
    { char: "🍓", name: "Stoberi" },
    { char: "🍍", name: "Nanas" },
    { char: "🚗", name: "Mobil" },
    { char: "🚲", name: "Sepeda" },
    { char: "🚁", name: "Helikopter" },
    { char: "🚀", name: "Roket" },
    { char: "✈️", name: "Pesawat" },
    { char: "⚽", name: "Bola Sepak" },
    { char: "🏀", name: "Bola Basket" },
    { char: "🎾", name: "Bola Tenis" },
    { char: "🎸", name: "Gitar" },
    { char: "🎹", name: "Piano" },
    { char: "🏠", name: "Rumah" },
    { char: "🌲", name: "Pohon" },
    { char: "🌙", name: "Bulan" },
    { char: "☀️", name: "Matahari" },
    { char: "⭐", name: "Bintang" },
    { char: "🍦", name: "Es Krim" },
    { char: "🍕", name: "Pizza" },
    { char: "🍔", name: "Burger" },
    { char: "🍩", name: "Donut" },
    { char: "🍰", name: "Kue" },
    { char: "🦋", name: "Kupu-kupu" },
    { char: "🐝", name: "Lebah" },
    { char: "🐟", name: "Ikan" },
    { char: "🐙", name: "Gurita" },
    { char: "🦀", name: "Kepiting" },
    { char: "🚢", name: "Kapal" },
    { char: "🚆", name: "Kereta" },
    { char: "🚜", name: "Traktor" },
    { char: "🚲", name: "Sepeda" },
    { char: "🛵", name: "Motor" },
    { char: "🧢", name: "Topi" },
    { char: "👟", name: "Sepatu" },
    { char: "🎒", name: "Tas" },
    { char: "🌂", name: "Payung" },
    { char: "💍", name: "Cincin" },
  ],
  emotions: [
    { emoji: "😊", name: "Senang" },
    { emoji: "😢", name: "Sedih" },
    { emoji: "😡", name: "Marah" },
    { emoji: "😲", name: "Terkejut" },
    { emoji: "😴", name: "Ngantuk" },
    { emoji: "🥳", name: "Gembira" },
    { emoji: "🤢", name: "Mual" },
    { emoji: "🥵", name: "Kepanasan" },
    { emoji: "🥶", name: "Kedinginan" },
    { emoji: "🤩", name: "Kagum" },
    { emoji: "🥰", name: "Sayang" },
    { emoji: "🥺", name: "Memohon" },
    { emoji: "😱", name: "Takut" },
    { emoji: "🤔", name: "Berpikir" },
    { emoji: "🤯", name: "Pusing" },
    { emoji: "😂", name: "Tertawa" },
    { emoji: "😎", name: "Keren" },
    { emoji: "🙄", name: "Bosan" },
    { emoji: "😤", name: "Kesal" },
    { emoji: "😖", name: "Sakit" },
    { emoji: "🤫", name: "Diam" },
    { emoji: "😜", name: "Bercanda" },
    { emoji: "🤤", name: "Lapar" },
    { emoji: "😵‍💫", name: "Bingung" },
    { emoji: "🧐", name: "Meneliti" },
    { emoji: "🤥", name: "Berbohong" },
    { emoji: "😬", name: "Malu" },
    { emoji: "🤡", name: "Lucu" },
    { emoji: "🤐", name: "Rahasia" },
    { emoji: "😇", name: "Baik" },
    { emoji: "🤠", name: "Petualang" },
    { emoji: "🧐", name: "Serius" },
    { emoji: "🫠", name: "Malu Sekali" },
    { emoji: "🫠", name: "Lemas" },
    { emoji: "🤭", name: "Tersenyum" },
    { emoji: "🥹", name: "Terharu" },
    { emoji: "🫠", name: "Meleleh" },
    { emoji: "🤨", name: "Curiga" },
    { emoji: "😑", name: "Datar" },
    { emoji: "🫨", name: "Kaget" },
    { emoji: "🥱", name: "Lelah" },
    { emoji: "🥴", name: "Pusing" },
    { emoji: "🥹", name: "Senang" },
    { emoji: "🫡", name: "Hormat" },
    { emoji: "🫥", name: "Kosong" },
    { emoji: "🫤", name: "Ragu" },
    { emoji: "🫠", name: "Malu" },
    { emoji: "😵", name: "Pingsan" },
    { emoji: "🥸", name: "Menyamar" },
    { emoji: "🤤", name: "Ngiler" },
  ],
  scale: [
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🐘", s: 10 },
        { e: "🐭", s: 1 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih KECIL?",
      items: [
        { e: "🐜", s: 1 },
        { e: "🐦", s: 3 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "✈️", s: 10 },
        { e: "🚗", s: 5 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih TINGGI?",
      items: [
        { e: "🦒", s: 10 },
        { e: "🐈", s: 2 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih LEBAR?",
      items: [
        { e: "🚢", s: 10 },
        { e: "🛶", s: 2 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🍈", s: 5 },
        { e: "🍒", s: 1 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🏢", s: 10 },
        { e: "🏠", s: 4 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih KECIL?",
      items: [
        { e: "🦟", s: 1 },
        { e: "🦋", s: 3 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih PANJANG?",
      items: [
        { e: "🐍", s: 8 },
        { e: "🐛", s: 2 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🌕", s: 10 },
        { e: "⭐", s: 3 },
      ],
      ans: 0,
    },
    // Repeat patterns for 50 items
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🦖", s: 10 },
        { e: "🦎", s: 2 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih KECIL?",
      items: [
        { e: "🥚", s: 2 },
        { e: "🐣", s: 3 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🐋", s: 10 },
        { e: "🐟", s: 1 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih TINGGI?",
      items: [
        { e: "🏔️", s: 10 },
        { e: "⛺", s: 2 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🍎", s: 3 },
        { e: "🍇", s: 1 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih KECIL?",
      items: [
        { e: "🧁", s: 2 },
        { e: "🎂", s: 8 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🌳", s: 10 },
        { e: "🌱", s: 1 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih KECIL?",
      items: [
        { e: "🔑", s: 1 },
        { e: "🚪", s: 10 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih LEBAR?",
      items: [
        { e: "🌉", s: 10 },
        { e: "🛣️", s: 5 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🚛", s: 8 },
        { e: "🚲", s: 1 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih TINGGI?",
      items: [
        { e: "🗼", s: 10 },
        { e: "🗿", s: 5 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih KECIL?",
      items: [
        { e: "🧷", s: 1 },
        { e: "🧣", s: 5 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🌞", s: 10 },
        { e: "🕯️", s: 1 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih TINGGI?",
      items: [
        { e: "🪟", s: 5 },
        { e: "🖼️", s: 2 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "💻", s: 5 },
        { e: "📱", s: 2 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih KECIL?",
      items: [
        { e: "🥄", s: 1 },
        { e: "🥣", s: 4 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🎹", s: 8 },
        { e: "🪈", s: 2 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih KECIL?",
      items: [
        { e: "🧵", s: 1 },
        { e: "🧶", s: 3 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "📺", s: 6 },
        { e: "📻", s: 3 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih KECIL?",
      items: [
        { e: "💊", s: 1 },
        { e: "🩺", s: 3 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🦁", s: 8 },
        { e: "🐹", s: 1 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih KECIL?",
      items: [
        { e: "🫖", s: 2 },
        { e: "☕", s: 1 },
      ],
      ans: 1,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🍉", s: 8 },
        { e: "🍊", s: 3 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih KECIL?",
      items: [
        { e: "🐞", s: 1 },
        { e: "🐢", s: 5 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🏰", s: 10 },
        { e: "🏚️", s: 4 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih KECIL?",
      items: [
        { e: "🧂", s: 1 },
        { e: "🍗", s: 4 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🌊", s: 10 },
        { e: "💧", s: 1 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih KECIL?",
      items: [
        { e: "🪶", s: 1 },
        { e: "🦅", s: 8 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🌍", s: 10 },
        { e: "⚽", s: 1 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih KECIL?",
      items: [
        { e: "🎾", s: 1 },
        { e: "🏀", s: 5 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🚂", s: 10 },
        { e: "🚕", s: 3 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih KECIL?",
      items: [
        { e: "🪡", s: 1 },
        { e: "👕", s: 5 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🍩", s: 3 },
        { e: "🍪", s: 1 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih KECIL?",
      items: [
        { e: "🍂", s: 1 },
        { e: "🪵", s: 8 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🚁", s: 8 },
        { e: "🪁", s: 2 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih TINGGI?",
      items: [
        { e: "🗼", s: 10 },
        { e: "🗽", s: 8 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih KECIL?",
      items: [
        { e: "🦐", s: 1 },
        { e: "🐬", s: 8 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🎃", s: 6 },
        { e: "🍬", s: 1 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih KECIL?",
      items: [
        { e: "🧊", s: 2 },
        { e: "🏔️", s: 10 },
      ],
      ans: 0,
    },
    {
      q: "Mana yang lebih BESAR?",
      items: [
        { e: "🎪", s: 10 },
        { e: "⛺", s: 4 },
      ],
      ans: 0,
    },
  ],
  opposites: [
    { a: "Besar 🐘", b: "Kecil 🐭" },
    { a: "Panas ☀️", b: "Dingin ❄️" },
    { a: "Siang 🌞", b: "Malam 🌙" },
    { a: "Senang 😊", b: "Sedih 😢" },
    { a: "Tinggi 🦒", b: "Rendah 🐢" },
    { a: "Cepat 🏎️", b: "Lambat 🐌" },
    { a: "Bersih ✨", b: "Kotor 💩" },
    { a: "Terbuka 📖", b: "Tertutup 📕" },
    { a: "Naik ⬆️", b: "Turun ⬇️" },
    { a: "Banyak 🍎🍎🍎", b: "Sedikit 🍎" },
    { a: "Terang 💡", b: "Gelap 🌑" },
    { a: "Berat ⚓", b: "Ringan 🪶" },
    { a: "Keras 🧱", b: "Lembut 🧸" },
    { a: "Basah 🌊", b: "Kering 🏜️" },
    { a: "Lapar 🤤", b: "Kenyang 🤰" },
    { a: "Lucu 🤡", b: "Seram 👹" },
    { a: "Baru 🆕", b: "Lama 🕰️" },
    { a: "Atas ☁️", b: "Bawah 🕳️" },
    { a: "Luar 🚪", b: "Dalam 🏠" },
    { a: "Manis 🍭", b: "Pahit ☕" },
    { a: "Halus 🧼", b: "Kasar 🪵" },
    { a: "Kosong 🫙", b: "Penuh 🏺" },
    { a: "Kaya 💰", b: "Miskin 🧺" },
    { a: "Kuat 💪", b: "Lemah 🥀" },
    { a: "Hati-hati 🛡️", b: "Bahaya ⚠️" },
    { a: "Pintar 🧠", b: "Bodoh 🥴" },
    { a: "Rajin 🐝", b: "Malas 🦥" },
    { a: "Tebal 📚", b: "Tipis 📄" },
    { a: "Lurus 📏", b: "Bengkok ➰" },
    { a: "Panjang 🐍", b: "Pendek 🐛" },
    { a: "Wangi 🌸", b: "Bau 🧦" },
    { a: "Tajam 🔪", b: "Tumpul 🔨" },
    { a: "Berani 🦁", b: "Takut 🐭" },
    { a: "Luas 🌊", b: "Sempit 📦" },
    { a: "Sama 🟰", b: "Beda ✖️" },
    { a: "Dulu ⏮️", b: "Nanti ⏭️" },
    { a: "Sering 🔄", b: "Jarang ⏸️" },
    { a: "Mudah ✅", b: "Sulit 🧩" },
    { a: "Dekat 📍", b: "Jauh 🔭" },
    { a: "Kiri ⬅️", b: "Kanan ➡️" },
    { a: "Ingat 🧠", b: "Lupa ❓" },
    { a: "Menang 🏆", b: "Kalah 🥉" },
    { a: "Tidur 😴", b: "Bangun ⏰" },
    { a: "Makan 🍕", b: "Minum 🥤" },
    { a: "Hidup 🌳", b: "Mati 🍂" },
    { a: "Depan 👤", b: "Belakang 👣" },
    { a: "Tambah ➕", b: "Kurang ➖" },
    { a: "Awal 🏁", b: "Akhir 🏁" },
    { a: "Satu ☝️", b: "Banyak 🖐️" },
    { a: "Pagi 🌅", b: "Sore 🌇" },
  ],
  jobs: [
    { p: "Dokter 👩‍⚕️", t: "Stetoskop 🩺" },
    { p: "Koki 👨‍🍳", t: "Spatula 🍳" },
    { p: "Guru 👩‍🏫", t: "Buku 📚" },
    { p: "Pemadam 👨‍🚒", t: "Selang Air 🚒" },
    { p: "Polisi 👮", t: "Mobil Patroli 🚓" },
    { p: "Petani 👨‍🌾", t: "Cangkul 🚜" },
    { p: "Astronot 👨‍🚀", t: "Roket 🚀" },
    { p: "Pelukis 👨‍🎨", t: "Kuas 🎨" },
    { p: "Penyanyi 🎤", t: "Mikrofon 🎙️" },
    { p: "Fotografer 📸", t: "Kamera 📷" },
    { p: "Nelayan 🎣", t: "Pancing ⛴️" },
    { p: "Penerbang 👨‍✈️", t: "Pesawat ✈️" },
    { p: "Sains 👨‍🔬", t: "Mikroskop 🔬" },
    { p: "Montir 👨‍🔧", t: "Kunci Pas 🔧" },
    { p: "Tukang Kayu 🪚", t: "Gergaji 🔨" },
    { p: "Tukang Pos 📮", t: "Surat ✉️" },
    { p: "Pustakawan 📚", t: "Rak Buku 📖" },
    { p: "Penari 💃", t: "Sepatu Tari 🩰" },
    { p: "Pemain Bola ⚽", t: "Sepatu Bola 👟" },
    { p: "Musisi 🎻", t: "Piano 🎹" },
    { p: "Arsitek 📏", t: "Penggaris 🏠" },
    { p: "Dokter Gigi 🦷", t: "Sikat Gigi 🪥" },
    { p: "Penulis ✍️", t: "Pulpen 📝" },
    { p: "Nahkoda 🚢", t: "Kemudi ⛴️" },
    { p: "Masinis 🚂", t: "Kereta Api 🚞" },
    { p: "Penjahit 🧵", t: "Jarum 👗" },
    { p: "Tukang Cukur ✂️", t: "Gunting 💈" },
    { p: "Pramugari 👩‍✈️", t: "Koper 🧳" },
    { p: "Kondektur 🚍", t: "Tiket 🎫" },
    { p: "Kasir 💰", t: "Uang 💵" },
    { p: "Tukang Kebun 🌲", t: "Gunting Rumput ✂️" },
    { p: "Sopir 🚌", t: "Setir 🚐" },
    { p: "Aktor 🎭", t: "Masker 🎬" },
    { p: "Blogger 💻", t: "Keyboard ⌨️" },
    { p: "DJ 🎧", t: "Speaker 🔊" },
    { p: "Arkeolog 🏺", t: "Kuas Debu 🦴" },
    { p: "Wasit 🏁", t: "Peluit 📣" },
    { p: "Kurir 📦", t: "Motor 🛵" },
    { p: "Pelayan 🍽️", t: "Nampan 🍼" },
    { p: "Model 👠", t: "Panggung 👗" },
    { p: "Ilmuwan 🧪", t: "Tabung Reaksi 🔬" },
    { p: "Jaksa ⚖️", t: "Palu Sidang 🔨" },
    { p: "Peternak 🐮", t: "Ember Susu 🥛" },
    { p: "Montir 🔩", t: "Tang 🛠️" },
    { p: "Juru Parkir 🚩", t: "Peluit 🌬️" },
    { p: "Karyawan 💼", t: "Laptop 💻" },
    { p: "Editor 🎞️", t: "Mouse 🖱️" },
    { p: "Gamer 🕹️", t: "Joystick 🎮" },
    { p: "Florist 💐", t: "Vas Bunga 🏺" },
    { p: "Kiper 🧤", t: "Sarung Tangan ⚽" },
  ],
  habitats: [
    { h: "Air 🌊", a: "Ikan 🐟" },
    { h: "Hutan 🌳", a: "Monyet 🐒" },
    { h: "Sawah 🌾", a: "Bebek 🦆" },
    { h: "Padang Rumput 🌿", a: "Singa 🦁" },
    { h: "Gurun 🏜️", a: "Unta 🐪" },
    { h: "Kutub ❄️", a: "Penguin 🐧" },
    { h: "Sarang 🪹", a: "Burung 🐦" },
    { h: "Gua 🦇", a: "Kelelawar 🏠" },
    { h: "Ternak 🏠", a: "Sapi 🐮" },
    { h: "Laut 🌊", a: "Gurita 🐙" },
    { h: "Pohon 🌲", a: "Tupai 🐿️" },
    { h: "Pasir 🐚", a: "Kepiting 🦀" },
    { h: "Lumpur 💩", a: "Babi 🐷" },
    { h: "Halaman 🏡", a: "Kucing 🐱" },
    { h: "Kolam ⛲", a: "Katak 🐸" },
    { h: "Bunga 🌸", a: "Lebah 🐝" },
    { h: "Tanah 🧱", a: "Cacing 🪱" },
    { h: "Ranting 🌿", a: "Ulat 🐛" },
    { h: "Dinding 🧱", a: "Cicak 🦎" },
    { h: "Bambu 🎋", a: "Panda 🐼" },
    { h: "Savana 🦒", a: "Jerapah 🦒" },
    { h: "Sungai 🐊", a: "Buaya 🐊" },
    { h: "Es 🧊", a: "Beruang Kutub 🐻‍❄️" },
    { h: "Dahan 🐒", a: "Orangutan 🦧" },
    { h: "Semak 🐰", a: "Kelinci 🐇" },
    { h: "Padang Pasir 🏜️", a: "Ular 🐍" },
    { h: "Karang 🐠", a: "Ikan Nemo 🐟" },
    { h: "Palung 🐳", a: "Paus 🐳" },
    { h: "Bukit 🐏", a: "Domba 🐑" },
    { h: "Gunung 🐐", a: "Kambing 🐐" },
    { h: "Langit ☁️", a: "Elang 🦅" },
    { h: "Dapur 🍽️", a: "Semut 🐜" },
    { h: "Lemari 👗", a: "Rayap 🦟" },
    { h: "Kandang 🪵", a: "Ayam 🐔" },
    { h: "Pematang 🐌", a: "Siput 🐌" },
    { h: "Lubang 🐭", a: "Tikus 🐹" },
    { h: "Jaring 🕸️", a: "Laba-laba 🕷️" },
    { h: "Rawa 🐊", a: "Kuda Nil 🦛" },
    { h: "Padang 🦓", a: "Zebra 🦓" },
    { h: "Hutan 🦍", a: "Gorila 🦍" },
    { h: "Pesisir 🦭", a: "Singa Laut 🦭" },
    { h: "Danau 🦢", a: "Angsa 🦢" },
    { h: "Taman 🦋", a: "Kupu-kupu 🦋" },
    { h: "Kebun 🐞", a: "Kumbang 🐞" },
    { h: "Sarang 🐜", a: "Semut 🐜" },
    { h: "Pohon 🦉", a: "Burung Hantu 🦉" },
    { h: "Gua 🐻", a: "Beruang 🐻" },
    { h: "Rumput 🦗", a: "Belalang 🦗" },
    { h: "Pantai 🐚", a: "Kelomang 🦀" },
    { h: "Sungai 🦦", a: "Berang-berang 🦦" },
  ],
  mixing: [
    { c1: "🔴 Merah", c2: "🟡 Kuning", r: "🟠 Oranye" },
    { c1: "🔴 Merah", c2: "🔵 Biru", r: "🟣 Ungu" },
    { c1: "🔵 Biru", c2: "🟡 Kuning", r: "🟢 Hijau" },
    { c1: "⚪ Putih", c2: "🔴 Merah", r: "💓 Merah Muda" },
    { c1: "⚫ Hitam", c2: "⚪ Putih", r: "🩶 Abu-abu" },
    { c1: "🔴 Merah", c2: "🟢 Hijau", r: "🟫 Cokelat" },
    { c1: "🔵 Biru", c2: "⚪ Putih", r: "🩵 Biru Muda" },
    { c1: "🟡 Kuning", c2: "⚪ Putih", r: "📒 Kuning Muda" },
    { c1: "🟢 Hijau", c2: "⚪ Putih", r: "🍐 Hijau Muda" },
    { c1: "🟣 Ungu", c2: "⚪ Putih", r: "🌸 Lavender" },
    { c1: "🔴 Merah", c2: "⚫ Hitam", r: "🟫 Marun" },
    { c1: "🔵 Biru", c2: "⚫ Hitam", r: "🌑 Biru Tua" },
    { c1: "🟢 Hijau", c2: "⚫ Hitam", r: "🌲 Hijau Tua" },
    { c1: "🟡 Kuning", c2: "🔴 Merah", r: "🌈 Jingga" },
    { c1: "🟡 Kuning", c2: "🟢 Hijau", r: "🍋 Limau" },
    { c1: "🔵 Biru", c2: "🟣 Ungu", r: "🎆 Nila" },
    { c1: "⚪ Putih", c2: "🟡 Kuning", r: "🧀 Krem" },
    { c1: "🔴 Merah", c2: "🟣 Ungu", r: "🍷 Magenta" },
    { c1: "🔵 Biru", c2: "🟢 Hijau", r: "🌊 Toska" },
    { c1: "⚫ Hitam", c2: "🔴 Merah", r: "🥀 Merah Gelap" },
    { c1: "🔵 Biru", c2: "💖 Pink", r: "🌺 Ungu Muda" },
    // Logical variations for 50 items
    { c1: "Merah 🍎", c2: "Kuning 🍌", r: "Oranye 🍊" },
    { c1: "Biru 🐬", c2: "Kuning 🐣", r: "Hijau 🐊" },
    { c1: "Merah 🍓", c2: "Biru 🐳", r: "Ungu 🍇" },
    { c1: "Putih ☁️", c2: "Merah 🍎", r: "Pink 🌸" },
    { c1: "Hitam 🌑", c2: "Putih ☁️", r: "Abu 🌪️" },
    { c1: "Hijau 🌲", c2: "Putih ☁️", r: "Hijau Muda 🌱" },
    { c1: "Biru 🌊", c2: "Putih ☁️", r: "Biru Muda 🧊" },
    { c1: "Kuning ☀️", c2: "Putih ☁️", r: "Krim 🥛" },
    { c1: "Merah 🌶️", c2: "Hijau 🥦", r: "Cokelat 🍫" },
    { c1: "Ungu 🍆", c2: "Putih ☁️", r: "Lilac 🪻" },
    { c1: "Orange 🍊", c2: "Putih ☁️", r: "Peach 🍑" },
    { c1: "Cokelat 🍩", c2: "Putih ☁️", r: "Tan 🥐" },
    { c1: "Merah 🍎", c2: "Hitam 🌑", r: "Burgundy 🍷" },
    { c1: "Biru 🌊", c2: "Hitam 🌑", r: "Navy 🚢" },
    { c1: "Hijau 🌲", c2: "Hitam 🌑", r: "Army 🪖" },
    { c1: "Kuning 🍌", c2: "Hitam 🌑", r: "Olive 🫒" },
    { c1: "Pink 🌸", c2: "Putih ☁️", r: "Rose 🌷" },
    { c1: "Emas 🏆", c2: "Putih ☁️", r: "Champagne 🥂" },
    { c1: "Biru 🌊", c2: "Hijau 🌲", r: "Cyan 💎" },
    { c1: "Kuning 🍌", c2: "Pink 🌸", r: "Coral 🐚" },
    { c1: "Merah 🍎", c2: "Orange 🍊", r: "Vermilion 🌅" },
    { c1: "Biru 🌊", c2: "Ungu 🍇", r: "Indigo 🌌" },
    { c1: "Hijau 🌲", c2: "Kuning 🍌", r: "Chartreuse 🍏" },
    { c1: "Putih ☁️", c2: "Abu 🌪️", r: "Perak 🥈" },
    { c1: "Hitam 🌑", c2: "Abu 🌪️", r: "Arang ⬛" },
    { c1: "Merah 🍎", c2: "Krem 🥛", r: "Salmon 🍣" },
    { c1: "Biru 🌊", c2: "Krem 🥛", r: "Sky Blue 🌤️" },
    { c1: "Ungu 🍇", c2: "Merah 🍎", r: "Plum 🫐" },
    { c1: "Hijau 🌲", r: "Hijau 🥬" },
    { c1: "Putih ☁️", c2: "Putih ☁️", r: "Putih ✨" },
  ],
  gameInfo: {
    animal: {
      title: "Tebak Hewan",
      rules: "Lihat gambar hewan dan pilih namanya yang benar!",
      points: 10,
    },
    alphabet: {
      title: "Belajar Huruf",
      rules: "Lihat hurufnya dan pilih benda yang berawalan huruf tersebut!",
      points: 15,
    },
    math: {
      title: "Matematika",
      rules: "Hitung jumlah benda dan selesaikan penjumlahannya!",
      points: 20,
    },
    puzzle: {
      title: "Puzzle Seru",
      rules: "Susun potongan gambar hingga menjadi gambar yang utuh!",
      points: 50,
    },
    memory: {
      title: "Kartu Memori",
      rules: "Cari pasangan gambar yang sama di balik kartu!",
      points: 30,
    },
    color: {
      title: "Tebak Warna",
      rules: "Lihat tumpahan warna dan pilih nama warnanya!",
      points: 10,
    },
    habit: {
      title: "Kebiasaan Baik",
      rules: "Tentukan apakah kegiatan tersebut baik atau buruk!",
      points: 10,
    },
    odd: {
      title: "Cari yang Berbeda",
      rules: "Cari satu benda yang jenisnya berbeda dari yang lain!",
      points: 20,
    },
    counting: {
      title: "Menghitung Benda",
      rules: "Hitung ada berapa banyak benda yang ada di kotak!",
      points: 15,
    },
    pattern: {
      title: "Lengkapi Pola",
      rules: "Perhatikan urutannya dan tebak gambar selanjutnya!",
      points: 25,
    },
    shadow: {
      title: "Teka-teki Bayangan",
      rules: "Tebak benda apa yang memiliki bayangan tersebut!",
      points: 20,
    },
    emotion: {
      title: "Mengenal Emosi",
      rules: "Lihat wajahnya dan tebak apa yang sedang dia rasakan!",
      points: 20,
    },
    scale: {
      title: "Besar & Kecil",
      rules: "Bandingkan dua benda dan pilih yang ukurannya sesuai pertanyaan!",
      points: 15,
    },
    opposite: {
      title: "Lawan Kata",
      rules: "Cari kata yang artinya berlawanan (kebalikannya)!",
      points: 25,
    },
    job: {
      title: "Pekerjaan",
      rules: "Pilih alat yang benar-benar digunakan oleh pekerjaan tersebut!",
      points: 20,
    },
    habitat: {
      title: "Rumah Hewan",
      rules: "Bantu hewan ini menemukan tempat tinggal aslinya!",
      points: 20,
    },
    mixing: {
      title: "Campur Warna",
      rules: "Tebak warna apa yang muncul jika dua warna ini dicampur!",
      points: 30,
    },
  },
};

let currentState = {
  userName: "",
  gameType: null,
  score: 0,
  level: 1,
  extra: {}, // For game-specific state (e.g., cards, sequence)
};

function handleLogin() {
  const input = document.getElementById("user-name-input");
  const name = input.value.trim();

  if (name.length < 2) {
    alert("Sebutkan namamu dulu ya sayang! 😊");
    return;
  }

  currentState.userName = name;

  // Switch screens
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("home").style.display = "block";

  // Update welcome message
  document.getElementById("welcome-title").innerText = `Halo, ${name}! 👋`;
  document.getElementById("welcome-msg").innerText =
    "Mau main game apa hari ini?";

  speak(
    `Halo ${name}! Selamat datang di Dunia Anak. Ayo kita bermain sambil belajar bersama-sama!`,
  );
}

// Handle Enter key on name input
document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("user-name-input");
  if (nameInput) {
    nameInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") handleLogin();
    });
  }
});

// Main Navigation
function startGame(type) {
  currentState.gameType = type;
  currentState.score = 0;
  currentState.currentStep = 0;

  document.getElementById("home").style.display = "none";
  document.getElementById("game-view").classList.add("active");

  initGame();
}

function goHome() {
  document.getElementById("home").style.display = "block";
  document.getElementById("game-view").classList.remove("active");
  document.getElementById("game-container").innerHTML = "";
}

function initGame() {
  const info = CONFIG.gameInfo[currentState.gameType];
  const container = document.getElementById("game-container");

  // Show instructions first
  container.innerHTML = `
    <div class="game-intro fade-in">
        <h2 style="color: var(--primary); margin-bottom: 15px;">${info.title}</h2>
        <p style="font-size: 1.2rem; margin-bottom: 25px;">${info.rules}</p>
        <div style="background: #f0f7ff; padding: 15px; border-radius: 15px; margin-bottom: 25px;">
            <span style="font-weight: 800; color: var(--secondary);">Hadiah: +${info.points} Skor per level 🌟</span>
        </div>
        <button class="btn-choice" style="background: var(--success); color: white;" onclick="runGameLogic()">Mulai Main! 🚀</button>
    </div>
  `;

  // Speak instructions
  speak(
    `Halo ${currentState.userName}, selamat datang di game ${info.title}. ${info.rules}`,
  );
}

function runGameLogic() {
  const container = document.getElementById("game-container");
  container.innerHTML = `<div class="score-badge">Skor: ${currentState.score}</div>`;

  switch (currentState.gameType) {
    case "animal":
      renderAnimalGame();
      break;
    case "alphabet":
      renderAlphabetGame();
      break;
    case "math":
      renderMathGame();
      break;
    case "memory":
      renderMemoryGame();
      break;
    case "puzzle":
      renderPuzzleGame();
      break;
    case "color":
      renderColorGame();
      break;
    case "habit":
      renderHabitGame();
      break;
    case "odd":
      renderOddGame();
      break;
    case "counting":
      renderCountingGame();
      break;
    case "pattern":
      renderPatternGame();
      break;
    case "shadow":
      renderShadowGame();
      break;
    case "emotion":
      renderEmotionGame();
      break;
    case "scale":
      renderScaleGame();
      break;
    case "opposite":
      renderOppositeGame();
      break;
    case "job":
      renderJobGame();
      break;
    case "habitat":
      renderHabitatGame();
      break;
    case "mixing":
      renderMixingGame();
      break;
  }
}

// Utilities
function speak(text) {
  if ("speechSynthesis" in window) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = "id-ID"; // Set to Indonesian
    msg.rate = 1.0;
    msg.pitch = 1.2; // Slightly higher pitch for kids' friendly tone
    window.speechSynthesis.speak(msg);
  }
}

function addVoiceBtn(text) {
  return `<button class="voice-btn" onclick="speak('${text.replace(/'/g, "\\'")}')" title="Dengarkan Suara">🔊 Baca Soal</button>`;
}

function updateContainer(html) {
  const container = document.getElementById("game-container");
  const scoreBadge = `<div class="score-badge">Skor: ${currentState.score}</div>`;
  container.innerHTML = scoreBadge + html;
}

function updateScore() {
  document.querySelector(".score-badge").innerText =
    `Skor: ${currentState.score}`;
}

function showSuccess(callback) {
  const container = document.getElementById("game-container");
  container.innerHTML = `
        <div class="fade-in" style="text-align:center">
            <h1 style="font-size: 5rem">🌟</h1>
            <h2>HEBAT!</h2>
            <p>Kamu pintar sekali!</p>
        </div>
    `;
  setTimeout(callback, 1500);
}
