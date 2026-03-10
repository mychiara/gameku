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
    { name: "Gajah Besar", file: "elephant.png" },
    { name: "Jerapah", file: "jerapah.png" },
    { name: "Buaya", file: "buaya.png" },
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
  trash: [
    { item: "Kulit Pisang 🍌", type: "Organik" },
    { item: "Botol Plastik 🧴", type: "Plastik" },
    { item: "Kertas Bekas 📄", type: "Kertas" },
    { item: "Sisa Apel 🍎", type: "Organik" },
    { item: "Kantong Plastik 🛍️", type: "Plastik" },
    { item: "Koran Lama 📰", type: "Kertas" },
    { item: "Daun Kering 🍂", type: "Organik" },
    { item: "Tutup Botol 🥤", type: "Plastik" },
    { item: "Kardus 📦", type: "Kertas" },
    { item: "Cangkang Telur 🥚", type: "Organik" },
    { item: "Sedotan 🥤", type: "Plastik" },
    { item: "Brosur 📜", type: "Kertas" },
    { item: "Potongan Sayur 🥬", type: "Organik" },
    { item: "Mainan Patah 🧸", type: "Plastik" },
    { item: "Amplop ✉️", type: "Kertas" },
    { item: "Tulang Ayam 🍗", type: "Organik" },
    { item: "Wadah Sabun 🧼", type: "Plastik" },
    { item: "Majalah 📚", type: "Kertas" },
    { item: "Kulit Jeruk 🍊", type: "Organik" },
    { item: "Gelas Plastik 🥛", type: "Plastik" },
    // Simplified for logic: types are Organik, Plastik, Kertas
    { item: "Ranting Pohon 🪵", type: "Organik" },
    { item: "Botol Shampo 🧴", type: "Plastik" },
    { item: "Buku Rusak 📖", type: "Kertas" },
    { item: "Sisa Nasi 🍚", type: "Organik" },
    { item: "Sikat Gigi Lama 🪥", type: "Plastik" },
    { item: "Map Kertas 📁", type: "Kertas" },
    { item: "Nangka Busuk 🍈", type: "Organik" },
    { item: "Kotak Bekal 🍱", type: "Plastik" },
    { item: "Kertas Kado 🎁", type: "Kertas" },
    { item: "Kulit Kacang 🥜", type: "Organik" },
    { item: "Hanger Plastik 🧥", type: "Plastik" },
    { item: "Kertas Lipat 📄", type: "Kertas" },
    { item: "Ampas Teh ☕", type: "Organik" },
    { item: "Sisir Plastik 🪮", type: "Plastik" },
    { item: "Kalender 📅", type: "Kertas" },
    { item: "Bunga Layu 🥀", type: "Organik" },
    { item: "Ember Pecah 🪣", type: "Plastik" },
    { item: "Struk Belanja 🧾", type: "Kertas" },
    { item: "Sisa Roti 🍞", type: "Organik" },
    { item: "Jas Hujan Plastik 🌧️", type: "Plastik" },
    { item: "Label Harga 🏷️", type: "Kertas" },
    { item: "Rumput Liar 🌿", type: "Organik" },
    { item: "Gayung Plastik 🚿", type: "Plastik" },
    { item: "Undangan 💌", type: "Kertas" },
    { item: "Kulit Mangga 🥭", type: "Organik" },
    { item: "Pot Plastik 🪴", type: "Plastik" },
    { item: "Kardus Susu 🥛", type: "Kertas" },
    { item: "Sisa Ikan 🐟", type: "Organik" },
    { item: "Botol Deterjen 🧴", type: "Plastik" },
    { item: "Buku Gambar 🎨", type: "Kertas" },
  ],
  shapeMatch: [
    { item: "Pizza 🍕", shape: "Segitiga" },
    { item: "Bola ⚽", shape: "Lingkaran" },
    { item: "Buku 📖", shape: "Kotak" },
    { item: "Donat 🍩", shape: "Lingkaran" },
    { item: "Penggaris Segitiga 📐", shape: "Segitiga" },
    { item: "Televisi 📺", shape: "Kotak" },
    { item: "Kancing 🔘", shape: "Lingkaran" },
    { item: "Atap Rumah 🏠", shape: "Segitiga" },
    { item: "Dadu 🎲", shape: "Kotak" },
    { item: "Roda 🎡", shape: "Lingkaran" },
    { item: "Bingkai Foto 🖼️", shape: "Kotak" },
    { item: "Layang-layang 🪁", shape: "Segitiga" },
    { item: "Jam Dinding ⏰", shape: "Lingkaran" },
    { item: "Meja 🍱", shape: "Kotak" },
    { item: "Potongan Semangka 🍉", shape: "Segitiga" },
    { item: "Matahari ☀️", shape: "Lingkaran" },
    { item: "Layar Laptop 💻", shape: "Kotak" },
    { item: "Tanda Jalan ⚠️", shape: "Segitiga" },
    { item: "Jendela 🪟", shape: "Kotak" },
    { item: "Piring 🍽️", shape: "Lingkaran" },
    // Fill up to 50
    { item: "Cermin 🪞", shape: "Lingkaran" },
    { item: "Kapas ☁️", shape: "Kotak" },
    { item: "Tenda ⛺", shape: "Segitiga" },
    { item: "Kepingan CD 💿", shape: "Lingkaran" },
    { item: "Kotak Kado 🎁", shape: "Kotak" },
    { item: "Hanger 🧥", shape: "Segitiga" },
    { item: "Coin 🪙", shape: "Lingkaran" },
    { item: "Blok Mainan 🧱", shape: "Kotak" },
    { item: "Bendera Segitiga 🚩", shape: "Segitiga" },
    { item: "Bulan Purnama 🌕", shape: "Lingkaran" },
    { item: "Handphone 📱", shape: "Kotak" },
    { item: "Sandwich 🥪", shape: "Segitiga" },
    { item: "Tombol 🔴", shape: "Lingkaran" },
    { item: "Bantal sofa 🛋️", shape: "Kotak" },
    { item: "Keripik Nacho 🌮", shape: "Segitiga" },
    { item: "Pizza utuh 🍕", shape: "Lingkaran" },
    { item: "Surat ✉️", shape: "Kotak" },
    { item: "Topi ulang tahun 🥳", shape: "Segitiga" },
    { item: "Ban Mobil 🛞", shape: "Lingkaran" },
    { item: "Brankas 🗄️", shape: "Kotak" },
    { item: "Potongan Keju 🧀", shape: "Segitiga" },
    { item: "Kelereng 🔮", shape: "Lingkaran" },
    { item: "Ubin 🧱", shape: "Kotak" },
    { item: "Layar Bioskop 🎬", shape: "Kotak" },
    { item: "Ring Basket 🏀", shape: "Lingkaran" },
    { item: "Kertas Lipat 📄", shape: "Kotak" },
    { item: "Sajadah 🕋", shape: "Kotak" },
    { item: "Segitiga Pengaman 🚗", shape: "Segitiga" },
    { item: "Tutup Pancing 🧢", shape: "Lingkaran" },
    { item: "Pagar ⛩️", shape: "Kotak" },
  ],
  clocks: [
    { time: "01:00", text: "Jam Satu" },
    { time: "02:00", text: "Jam Dua" },
    { time: "03:00", text: "Jam Tiga" },
    { time: "04:00", text: "Jam Empat" },
    { time: "05:00", text: "Jam Lima" },
    { time: "06:00", text: "Jam Enam" },
    { time: "07:00", text: "Jam Tujuh" },
    { time: "08:00", text: "Jam Delapan" },
    { time: "09:00", text: "Jam Sembilan" },
    { time: "10:00", text: "Jam Sepuluh" },
    { time: "11:00", text: "Jam Sebelas" },
    { time: "12:00", text: "Jam Dua Belas" },
    { time: "01:30", text: "Jam Setengah Dua" },
    { time: "02:30", text: "Jam Setengah Tiga" },
    { time: "03:30", text: "Jam Setengah Empat" },
    { time: "04:30", text: "Jam Setengah Lima" },
    { time: "05:30", text: "Jam Setengah Enam" },
    { time: "06:30", text: "Jam Setengah Tujuh" },
    { time: "07:30", text: "Jam Setengah Delapan" },
    { time: "08:30", text: "Jam Setengah Sembilan" },
    { time: "09:30", text: "Jam Setengah Sepuluh" },
    { time: "10:30", text: "Jam Setengah Sebelas" },
    { time: "11:30", text: "Jam Setengah Dua Belas" },
    { time: "12:30", text: "Jam Setengah Satu" },
    // Fill up with more points
    { time: "01:15", text: "Jam Satu Lewat Seperempat" },
    { time: "03:15", text: "Jam Tiga Lewat Seperempat" },
    { time: "06:15", text: "Jam Enam Lewat Seperempat" },
    { time: "09:15", text: "Jam Sembilan Lewat Seperempat" },
    { time: "01:45", text: "Jam Satu Lewat Empat Puluh Lima" },
    { time: "10:45", text: "Jam Sepuluh Lewat Empat Puluh Lima" },
    // Simplified 50 items
    { time: "13:00", text: "Jam Satu Siang" },
    { time: "14:00", text: "Jam Dua Siang" },
    { time: "15:00", text: "Jam Tiga Sore" },
    { time: "16:00", text: "Jam Empat Sore" },
    { time: "17:00", text: "Jam Lima Sore" },
    { time: "18:00", text: "Jam Enam Sore" },
    { time: "19:00", text: "Jam Tujuh Malam" },
    { time: "20:00", text: "Jam Delapan Malam" },
    { time: "21:00", text: "Jam Sembilan Malam" },
    { time: "22:00", text: "Jam Sepuluh Malam" },
    { time: "23:00", text: "Jam Sebelas Malam" },
    { time: "00:00", text: "Jam Dua Belas Malam" },
    { time: "01:05", text: "Jam Satu Lewat Lima" },
    { time: "02:10", text: "Jam Dua Lewat Sepuluh" },
    { time: "03:20", text: "Jam Tiga Lewat Dua Puluh" },
    { time: "04:25", text: "Jam Empat Lewat Dua Puluh Lima" },
    { time: "05:35", text: "Jam Lima Lewat Tiga Puluh Lima" },
    { time: "06:40", text: "Jam Enam Lewat Empat Puluh" },
    { time: "07:50", text: "Jam Tujuh Lewat Lima Puluh" },
    { time: "08:55", text: "Jam Delapan Lewat Lima Puluh Lima" },
  ],
  bodyParts: [
    {
      q: "Apa yang kita gunakan untuk MELIHAT?",
      items: ["Mata 👀", "Hidung 👃", "Telinga 👂"],
      ans: 0,
    },
    {
      q: "Apa yang kita gunakan untuk MENDENGAR?",
      items: ["Mulut 👄", "Hidung 👃", "Telinga 👂"],
      ans: 2,
    },
    {
      q: "Apa yang kita gunakan untuk BERNAFAS?",
      items: ["Mata 👀", "Hidung 👃", "Kaki 🦵"],
      ans: 1,
    },
    {
      q: "Apa yang kita gunakan untuk BERJALAN?",
      items: ["Tangan ✋", "Kaki 🦵", "Perut 🫄"],
      ans: 1,
    },
    {
      q: "Apa yang kita gunakan untuk BERBICARA?",
      items: ["Mulut 👄", "Mata 👀", "Tangan ✋"],
      ans: 0,
    },
    { q: "Mana yang namanya LIDAH?", items: ["👅", "👁️", "👃"], ans: 0 },
    { q: "Mana yang namanya JARI?", items: ["🦶", "🖐️", "👂"], ans: 1 },
    {
      q: "Apa yang kita gunakan untuk MEMEGANG?",
      items: ["Kaki 🦵", "Telinga 👂", "Tangan 🖐️"],
      ans: 2,
    },
    { q: "Mana yang namanya RAMBUT?", items: ["💆‍♀️", "🦶", "👄"], ans: 0 },
    { q: "Mana yang namanya GIGI?", items: ["👂", "🦷", "👃"], ans: 1 },
    // Fill up to 50
    {
      q: "Bagian tubuh mana yang untuk mencium BAU?",
      items: ["👂", "👃", "👄"],
      ans: 1,
    },
    {
      q: "Di mana letak OTAK kita?",
      items: ["Kepala 🤯", "Perut 🫃", "Dada 🫁"],
      ans: 0,
    },
    {
      q: "Apa yang kita gunakan untuk MENGUNYAH?",
      items: ["Gigi 🦷", "Mata 👀", "Kuping 👂"],
      ans: 0,
    },
    { q: "Mana yang namanya PUNDAK?", items: ["💪", "👐", "🦴"], ans: 0 },
    { q: "Mana yang namanya LUTUT?", items: ["🦵", "👣", "🖐️"], ans: 0 },
    {
      q: "Untuk apa TELINGA kita?",
      items: ["Melihat", "Mendengar", "Makan"],
      ans: 1,
    },
    { q: "Mana yang namanya SIKU?", items: ["💪", "🏃‍♂️", "🦵"], ans: 0 },
    { q: "Mana yang namanya PERUT?", items: ["🫄", "🧠", "🦴"], ans: 0 },
    { q: "Mana yang namanya DADA?", items: ["❤️", "🦶", "👕"], ans: 0 },
    {
      q: "Kita pakai SEPATU di mana?",
      items: ["Tangan", "Kaki", "Kepala"],
      ans: 1,
    },
    {
      q: "Kita pakai TOPI di mana?",
      items: ["Kepala", "Kaki", "Badan"],
      ans: 0,
    },
    { q: "Mana yang namanya KUKU?", items: ["💅", "👂", "👃"], ans: 0 },
    { q: "Mana yang namanya ALIS?", items: ["🤨", "👄", "👂"], ans: 0 },
    { q: "Mana yang namanya PIPI?", items: ["😊", "🖐️", "🦵"], ans: 0 },
    { q: "Mana yang namanya DAGU?", items: ["🧔", "👁️", "🦶"], ans: 0 },
    { q: "Mana yang namanya LEHER?", items: ["🧤", "🧣", "🎩"], ans: 1 },
    { q: "Mana yang namanya TUMIT?", items: ["🦶", "🖐️", "👂"], ans: 0 },
    { q: "Mana yang namanya LENGAN?", items: ["🦵", "💪", "👂"], ans: 1 },
    { q: "Mana yang namanya BULU MATA?", items: ["👁️", "👃", "👄"], ans: 0 },
    { q: "Mana yang namanya PUNGGUNG?", items: ["🚶", "🐢", "👤"], ans: 2 },
    // More questions...
    {
      q: "Gunanya MATA untuk apa?",
      items: ["Makan", "Melihat", "Berlari"],
      ans: 1,
    },
    {
      q: "Gunanya HIDUNG untuk apa?",
      items: ["Mencium bau", "Melompat", "Mendengar"],
      ans: 0,
    },
    {
      q: "Gunanya TANGAN untuk apa?",
      items: ["Mendengar", "Menulis", "Melihat"],
      ans: 1,
    },
    {
      q: "Gunanya KAKI untuk apa?",
      items: ["Membaca", "Berjalan", "Bicara"],
      ans: 1,
    },
    { q: "Manakah yang JANTUNG?", items: ["🧠", "❤️", "🫁"], ans: 1 },
    { q: "Manakah yang PARU-PARU?", items: ["🫁", "🦴", "🦷"], ans: 0 },
    {
      q: "Apa yang ada di dalam MULUT?",
      items: ["Mata", "Lidah", "Telinga"],
      ans: 1,
    },
    {
      q: "Kita pakai KACA MATA di mana?",
      items: ["Tangan", "Mata", "Kaki"],
      ans: 1,
    },
    {
      q: "Kita pakai SARUNG TANGAN di mana?",
      items: ["Kaki", "Tangan", "Kepala"],
      ans: 1,
    },
    {
      q: "Kita pakai JAM TANGAN di mana?",
      items: ["Tangan", "Perut", "Kaki"],
      ans: 0,
    },
    { q: "Mana yang namanya JIDAT?", items: ["🤯", "🦶", "👂"], ans: 0 },
    { q: "Mana yang namanya KUMIS?", items: ["👨", "👶", "👩"], ans: 0 },
    { q: "Mana yang namanya JENGGOT?", items: ["🧔", "👧", "🧑"], ans: 0 },
    { q: "Manakah TULANG?", items: ["🦴", "🥩", "🩸"], ans: 0 },
    { q: "Manakah DARAH?", items: ["🩸", "💧", "🥛"], ans: 0 },
    { q: "Manakah OTOT?", items: ["💪", "🦵", "🧠"], ans: 0 },
    { q: "Manakah KULIT?", items: ["🧖", "💅", "💇"], ans: 0 },
    { q: "Manakah PINGGANG?", items: ["💃", "🦶", "👁️"], ans: 0 },
    { q: "Manakah PATAH TULANG?", items: ["🩹", "🦴", "🩺"], ans: 1 },
    { q: "Manakah DOKTER?", items: ["👩‍⚕️", "👮", "👨‍🍳"], ans: 0 },
  ],
  trafficSigns: [
    { sign: "🔴 Merah", desc: "Berhenti" },
    { sign: "🟡 Kuning", desc: "Hati-hati" },
    { sign: "🟢 Hijau", desc: "Jalan" },
    { sign: "🅿️", desc: "Tempat Parkir" },
    { sign: "⛔", desc: "Dilarang Masuk" },
    { sign: "🚳", desc: "Dilarang Sepeda" },
    { sign: "🚶", desc: "Tempat Jalan Kaki" },
    { sign: "♿", desc: "Kursi Roda" },
    { sign: "🚲", desc: "Jalur Sepeda" },
    { sign: "🚫", desc: "Dilarang" },
    { sign: "⚠️", desc: "Bahaya" },
    { sign: "⛽", desc: "Pom Bensin" },
    { sign: "🏥", desc: "Rumah Sakit" },
    { sign: "🍴", desc: "Tempat Makan" },
    { sign: "🚸", desc: "Anak-anak Menyeberang" },
    { sign: "🚭", desc: "Dilarang Merokok" },
    { sign: "🚮", desc: "Tempat Sampah" },
    { sign: "🚻", desc: "Toilet" },
    { sign: "🚋", desc: "Jalur Kereta" },
    { sign: "✈️", desc: "Bandara" },
    // Fill up to 50 symbols/descriptions
    { sign: "🏠", desc: "Area Perumahan" },
    { sign: "🏫", desc: "Sekolah" },
    { sign: "⛺", desc: "Tempat Kemah" },
    { sign: "🏞️", desc: "Taman" },
    { sign: "🐚", desc: "Pantai" },
    { sign: "⛰️", desc: "Pegunungan" },
    { sign: "🌉", desc: "Jembatan" },
    { sign: "⛪", desc: "Gereja" },
    { sign: "🕌", desc: "Masjid" },
    { sign: "🕍", desc: "Sinagoga" },
    { sign: "🏯", desc: "Istana" },
    { sign: "🎡", desc: "Taman Bermain" },
    { sign: "🏟️", desc: "Stadion" },
    { sign: "🏦", desc: "Bank" },
    { sign: "🏧", desc: "ATM" },
    { sign: "🏪", desc: "Toko" },
    { sign: "🏭", desc: "Pabrik" },
    { sign: "🚒", desc: "Pemadam Kebakaran" },
    { sign: "🚑", desc: "Ambulans" },
    { sign: "🚓", desc: "Polisi" },
    { sign: "🚕", desc: "Taksi" },
    { sign: "🚌", desc: "Bus" },
    { sign: "🚢", desc: "Pelabuhan" },
    { sign: "🛶", desc: "Perahu" },
    { sign: "⚓", desc: "Dermaga" },
    { sign: "🚜", desc: "Traktor" },
    { sign: "🚦", desc: "Lampu Lalu Lintas" },
    { sign: "🚥", desc: "Lampu Jalan" },
    { sign: "🚧", desc: "Ada Perbaikan" },
    { sign: "🛶", desc: "Sungai" },
  ],
  space: [
    { name: "Matahari ☀️", desc: "Pusat tata surya kita yang panas." },
    {
      name: "Merkurius ☄️",
      desc: "Planet terkecil dan paling dekat dengan Matahari.",
    },
    { name: "Venus 🪐", desc: "Planet paling panas di tata surya." },
    { name: "Bumi 🌍", desc: "Planet tempat tinggal kita semua." },
    { name: "Mars 🔴", desc: "Planet merah yang penuh debu." },
    { name: "Jupiter 🌌", desc: "Planet paling besar di tata surya." },
    { name: "Saturnus 🪐", desc: "Planet yang punya cincin sangat indah." },
    { name: "Uranus 💎", desc: "Planet raksasa es yang berwarna biru." },
    { name: "Neptunus 🌊", desc: "Planet paling jauh dari Matahari." },
    { name: "Bulan 🌙", desc: "Benda langit yang menerangi malam." },
    { name: "Astronot 👨‍🚀", desc: "Pahlawan yang pergi ke luar angkasa." },
    { name: "Roket 🚀", desc: "Kendaraan super cepat ke luar angkasa." },
    { name: "Teleskop 🔭", desc: "Alat untuk melihat bintang yang jauh." },
    {
      name: "Satelit 📡",
      desc: "Alat yang berputar di langit untuk bantu sinyal.",
    },
    { name: "Komet 🌠", desc: "Bintang berekor yang meluncur cepat." },
    { name: "Meteor ☄️", desc: "Batu luar angkasa yang jatuh ke Bumi." },
    { name: "Galaksi 🌌", desc: "Kumpulan milyaran bintang di luar sana." },
    { name: "Bimasakti 🌌", desc: "Nama galaksi tempat kita berada." },
    {
      name: "Lubang Hitam 🕳️",
      desc: "Tempat misterius yang menghisap segala cahaya.",
    },
    {
      name: "Bintang 🌟",
      desc: "Benda langit yang bersinar cantik di malam hari.",
    },
    // Simplified for logic: name and desc
    { name: "UFO 🛸", desc: "Piring terbang yang misterius." },
    { name: "Stasiun Angkasa 🛰️", desc: "Rumah para astronot di luar sana." },
    {
      name: "Rasi Bintang ♈",
      desc: "Kumpulan bintang yang membentuk gambar.",
    },
    { name: "Pluto 🌑", desc: "Dulu disebut planet, sekarang planet kerdil." },
    { name: "Nebula 💨", desc: "Awan debu dan gas yang berwarna-warni." },
    { name: "Supernova 💥", desc: "Ledakan bintang yang sangat besar." },
    { name: "Orbit 💫", desc: "Jalan planet berputar mengelilingi Matahari." },
    { name: "Gerhana 🌑", desc: "Saat Bulan menutup cahaya Matahari." },
    { name: "Kawah 🌋", desc: "Lubang besar di permukaan Bulan." },
    {
      name: "Baju Ruang Angkasa 👨‍🚀",
      desc: "Pakaian khusus agar bisa bernafas di orbit.",
    },
    { name: "Gravitasi 🍎", desc: "Kekuatan yang menarik benda ke bawah." },
    {
      name: "Ruang Hampa 🕳️",
      desc: "Tempat yang tidak ada udaranya sama sekali.",
    },
    { name: "Apollo 🚀", desc: "Nama roket terkenal yang pergi ke Bulan." },
    { name: "Alien 👽", desc: "Makhluk hidup dari luar angkasa." },
    { name: "Sinar Matahari ☀️", desc: "Cahaya yang memberi energi ke Bumi." },
    { name: "Malam Hari 🌃", desc: "Waktu bumi membelakangi Matahari." },
    {
      name: "Siklus Siang Malam 🌗",
      desc: "Berubahnya waktu karena bumi berputar.",
    },
    { name: "Tahun Cahaya ✨", desc: "Cara mengukur jarak yang sangat jauh." },
    { name: "Atmosfer 🛡️", desc: "Lapisan udara yang melindungi Bumi." },
    { name: "Oksigen 🌬️", desc: "Udara yang kita hirup untuk hidup." },
    { name: "Suhu Dingin 🧊", desc: "Luar angkasa sangat dingin sekali." },
    { name: "Bintang Jatuh 🌠", desc: "Meteor yang terbakar di udara." },
    { name: "Planet Terestrial 🏔️", desc: "Planet yang berbatu seperti Bumi." },
    { name: "Raksasa Gas 🎈", desc: "Planet yang isinya hanya gas saja." },
    { name: "Aurora 🌈", desc: "Cahaya indah di langit kutub." },
    { name: "Hubble 🔭", desc: "Nama teleskop raksasa di ruang angkasa." },
    { name: "Ekuator 🌐", desc: "Garis tengah planet Bumi." },
    { name: "Kutub Utara ❄️", desc: "Ujung atas planet Bumi." },
    { name: "Kutub Selatan 🐧", desc: "Ujung bawah planet Bumi." },
    { name: "Peta Bintang 🗺️", desc: "Peta untuk menemukan letak bintang." },
  ],
  music: [
    { name: "Piano 🎹", type: "Tuts" },
    { name: "Gitar 🎸", type: "Petik" },
    { name: "Biola 🎻", type: "Gesek" },
    { name: "Drum 🥁", type: "Pukul" },
    { name: "Seruling 🪈", type: "Tiup" },
    { name: "Saksofon 🎷", type: "Tiup" },
    { name: "Terompet 🎺", type: "Tiup" },
    { name: "Harpa 🪄", type: "Petik" },
    { name: "Kendang 🪘", type: "Pukul" },
    { name: "Harmonika 🌬️", type: "Tiup" },
    { name: "Akordion 🪗", type: "Tuts" },
    { name: "Banjo 🪕", type: "Petik" },
    { name: "Cello 🎻", type: "Gesek" },
    { name: "Simbal 📀", type: "Pukul" },
    { name: "Gong 🏮", type: "Pukul" },
    { name: "Marakas 🪇", type: "Kocok" },
    { name: "Tamborin 🥁", type: "Pukul" },
    { name: "Ukulele 🪕", type: "Petik" },
    { name: "Klarinet 🎷", type: "Tiup" },
    { name: "Tuba 🎺", type: "Tiup" },
    // Fill up to 50
    { name: "Gitar Elektrik 🎸", type: "Petik" },
    { name: "Bass 🎸", type: "Petik" },
    { name: "Keyboard 🎹", type: "Tuts" },
    { name: "Triangle 📐", type: "Pukul" },
    { name: "Xylophone 🪵", type: "Pukul" },
    { name: "Angklung 🎋", type: "Goyang" },
    { name: "Suling Bambu 🎋", type: "Tiup" },
    { name: "Rebab 🎻", type: "Gesek" },
    { name: "Saron 🪵", type: "Pukul" },
    { name: "Bonang 🏺", type: "Pukul" },
    { name: "Keroncong 🎻", type: "Petik" },
    { name: "Sasando 🪄", type: "Petik" },
    { name: "Kolintang 🪵", type: "Pukul" },
    { name: "Tifa 🥁", type: "Pukul" },
    { name: "Gamelan 🏺", type: "Pukul" },
    { name: "Mandolin 🪕", type: "Petik" },
    { name: "Lute 🪕", type: "Petik" },
    { name: "Bagpipes 🌬️", type: "Tiup" },
    { name: "Picollo 🪈", type: "Tiup" },
    { name: "Organ 🎹", type: "Tuts" },
    { name: "Zither 🪄", type: "Petik" },
    { name: "Lyre 🪄", type: "Petik" },
    { name: "Castanets 👏", type: "Pukul" },
    { name: "Glockenspiel 🔔", type: "Pukul" },
    { name: "Didgeridoo 🌬️", type: "Tiup" },
    { name: "Okarina 🌬️", type: "Tiup" },
    { name: "Pan Flute 🌬️", type: "Tiup" },
    { name: "Balalaika 🪕", type: "Petik" },
    { name: "Sitar 🪄", type: "Petik" },
    { name: "Djembe 🥁", type: "Pukul" },
  ],
  flags: [
    { country: "Indonesia 🇮🇩", name: "Indonesia" },
    { country: "Malaysia 🇲🇾", name: "Malaysia" },
    { country: "Singapura 🇸🇬", name: "Singapura" },
    { country: "Jepang 🇯🇵", name: "Jepang" },
    { country: "Korea Selatan 🇰🇷", name: "Korea Selatan" },
    { country: "Amerika Serikat 🇺🇸", name: "Amerika Serikat" },
    { country: "Inggris 🇬🇧", name: "Inggris" },
    { country: "Prancis 🇫🇷", name: "Prancis" },
    { country: "Jerman 🇩🇪", name: "Jerman" },
    { country: "Italia 🇮🇹", name: "Italia" },
    { country: "Spanyol 🇪🇸", name: "Spanyol" },
    { country: "Belanda 🇳🇱", name: "Belanda" },
    { country: "Australia 🇦🇺", name: "Australia" },
    { country: "Brasil 🇧🇷", name: "Brasil" },
    { country: "Argentina 🇦🇷", name: "Argentina" },
    { country: "Arab Saudi 🇸🇦", name: "Arab Saudi" },
    { country: "Tiongkok 🇨🇳", name: "Tiongkok" },
    { country: "India 🇮🇳", name: "India" },
    { country: "Thailand 🇹🇭", name: "Thailand" },
    { country: "Vietnam 🇻🇳", name: "Vietnam" },
    // Fill up to 50
    { country: "Filipina 🇵🇭", name: "Filipina" },
    { country: "Brunei 🇧🇳", name: "Brunei" },
    { country: "Kamboja 🇰🇭", name: "Kamboja" },
    { country: "Laos 🇱🇦", name: "Laos" },
    { country: "Myanmar 🇲🇲", name: "Myanmar" },
    { country: "Timor Leste 🇹🇱", name: "Timor Leste" },
    { country: "Turki 🇹🇷", name: "Turki" },
    { country: "Mesir 🇪🇬", name: "Mesir" },
    { country: "Afrika Selatan 🇿🇦", name: "Afrika Selatan" },
    { country: "Kanada 🇨🇦", name: "Kanada" },
    { country: "Meksiko 🇲🇽", name: "Meksiko" },
    { country: "Rusia 🇷🇺", name: "Rusia" },
    { country: "Swiss 🇨🇭", name: "Swiss" },
    { country: "Swedia 🇸🇪", name: "Swedia" },
    { country: "Norwegia 🇳🇴", name: "Norwegia" },
    { country: "Denmark 🇩🇰", name: "Denmark" },
    { country: "Portugal 🇵🇹", name: "Portugal" },
    { country: "Yunani 🇬🇷", name: "Yunani" },
    { country: "Selandia Baru 🇳🇿", name: "Selandia Baru" },
    { country: "Palestina 🇵🇸", name: "Palestina" },
    { country: "Qatar 🇶🇦", name: "Qatar" },
    { country: "Uni Emirat Arab 🇦🇪", name: "Uni Emirat Arab" },
    { country: "Belgia 🇧🇪", name: "Belgia" },
    { country: "Irlandia 🇮🇪", name: "Irlandia" },
    { country: "Polandia 🇵🇱", name: "Polandia" },
    { country: "Ukraina 🇺🇦", name: "Ukraina" },
    { country: "Austria 🇦🇹", name: "Austria" },
    { country: "Hongaria 🇭🇺", name: "Hongaria" },
    { country: "Vatikan 🇻🇦", name: "Vatikan" },
    { country: "Monako 🇲🇨", name: "Monako" },
  ],
  weather: [
    { condition: "Cerah ☀️", action: "Main di luar" },
    { condition: "Hujan 🌧️", action: "Pakai payung" },
    { condition: "Mendung ☁️", action: "Bawa jas hujan" },
    { condition: "Berangin 🌬️", action: "Main layangan" },
    { condition: "Bersalju ❄️", action: "Pakai jaket tebal" },
    { condition: "Petir ⚡", action: "Tetap di dalam rumah" },
    { condition: "Kabut 🌫️", action: "Hati-hati di jalan" },
    { condition: "Panas Sekali 🥵", action: "Minum air banyak" },
    { condition: "Dingin 🥶", action: "Pakai selimut" },
    { condition: "Pelangi 🌈", action: "Lihat ke langit" },
    { condition: "Badai 🌪️", action: "Berlindung dengan aman" },
    { condition: "Gerimis 🌦️", action: "Cepat pulang" },
    { condition: "Banjir 🌊", action: "Cari tempat tinggi" },
    { condition: "Kering 🌵", action: "Siram tanaman" },
    { condition: "Berembun 🌫️", action: "Segar sekali pagi ini" },
    { condition: "Cukup Cahaya 🌤️", action: "Buka jendela" },
    { condition: "Gelap 🌑", action: "Nyalakan lampu" },
    { condition: "Terik 🌞", action: "Pakai topi" },
    { condition: "Lembap 🌡️", action: "Gunakan kipas angin" },
    { condition: "Sejuk 🍃", action: "Jalan-jalan sore" },
    // Fill up to 50
    { condition: "Hujan Es 🧊", action: "Jangan keluar rumah" },
    { condition: "Hujan Badai ⛈️", action: "Cabut kabel listrik" },
    { condition: "Malam Berbintang 🌌", action: "Tidur nyenyak" },
    { condition: "Pagi Segar 🌅", action: "Sarapan sehat" },
    { condition: "Senja Indah 🌇", action: "Selesai bermain" },
    { condition: "Awan Tebal ☁️", action: "Siap-siap hujan" },
    { condition: "Sinar Terang 🔆", action: "Pakai kaca mata hitam" },
    { condition: "Angin Kencang 💨", action: "Tutup pintu" },
    { condition: "Debu 🌪️", action: "Pakai masker" },
    { condition: "Asap 🌫️", action: "Jangan hirup udara luar" },
    { condition: "Udara Bersih ✨", action: "Tarik napas dalam" },
    { condition: "Gerah 💦", action: "Mandi air dingin" },
    { condition: "Dingin Menggigil 🧣", action: "Pakai syal" },
    { condition: "Panas Menyengat 🧴", action: "Pakai sunblock" },
    { condition: "Hangat 🧶", action: "Pakai sweater" },
    { condition: "Basah Kuyup 🛁", action: "Ganti baju" },
    { condition: "Kering Kerontang 🏜️", action: "Hemat air" },
    { condition: "Langit Biru 🟦", action: "Ayo berfoto" },
    { condition: "Gumpalan Awan 🧁", action: "Lihat bentuk awan" },
    { condition: "Matahari Terbenam 🌆", action: "Berdoa sore" },
    { condition: "Matahari Terbit 🌄", action: "Olahraga" },
    { condition: "Bintang Jatuh 🌠", action: "Buat permohonan" },
    { condition: "Bulan Sabit 🌙", action: "Lihat langit" },
    { condition: "Bulan Purnama 🌕", action: "Malam yang terang" },
    { condition: "Awan Hitam 🐈‍⬛", action: "Hujan akan datang" },
    { condition: "Kilat 🎆", action: "Tutup kuping" },
    { condition: "Guntur 🔊", action: "Suara yang keras" },
    { condition: "Tornado 🌪️", action: "Sangat bahaya" },
    { condition: "Topan 🌀", action: "Angin berputar" },
    { condition: "Salju Meleleh 🫠", action: "Bermain air" },
  ],
  time_sequence: [
    {
      seq: ["Senin", "Selasa", "Rabu", "?"],
      correct: "Kamis",
      options: ["Jumat", "Kamis", "Minggu"],
    },
    {
      seq: ["Kamis", "Jumat", "Sabtu", "?"],
      correct: "Minggu",
      options: ["Senin", "Minggu", "Selasa"],
    },
    {
      seq: ["Januari", "Februari", "Maret", "?"],
      correct: "April",
      options: ["April", "Agustus", "Mei"],
    },
    {
      seq: ["Jumat", "Sabtu", "Minggu", "?"],
      correct: "Senin",
      options: ["Selasa", "Rabu", "Senin"],
    },
    {
      seq: ["Maret", "April", "Mei", "?"],
      correct: "Juni",
      options: ["Juli", "Juni", "Agustus"],
    },
    {
      seq: ["Agustus", "September", "Oktober", "?"],
      correct: "November",
      options: ["Desember", "Januari", "November"],
    },
    {
      seq: ["Selasa", "Rabu", "Kamis", "?"],
      correct: "Jumat",
      options: ["Jumat", "Minggu", "Senin"],
    },
    {
      seq: ["Mei", "Juni", "Juli", "?"],
      correct: "Agustus",
      options: ["Agustus", "September", "Desember"],
    },
    {
      seq: ["September", "Oktober", "November", "?"],
      correct: "Desember",
      options: ["Januari", "Desember", "Maret"],
    },
    {
      seq: ["Rabu", "Kamis", "Jumat", "?"],
      correct: "Sabtu",
      options: ["Minggu", "Sabtu", "Senin"],
    },
  ],
  transport: [
    { item: "Pesawat Terbang ✈️", answer: "Udara" },
    { item: "Kereta Api 🚂", answer: "Darat" },
    { item: "Kapal Laut 🛳️", answer: "Laut" },
    { item: "Helikopter 🚁", answer: "Udara" },
    { item: "Mobil 🚗", answer: "Darat" },
    { item: "Perahu Karet 🚤", answer: "Laut" },
    { item: "Sepeda Motor 🏍️", answer: "Darat" },
    { item: "Balon Udara 🎈", answer: "Udara" },
    { item: "Bus Umum 🚌", answer: "Darat" },
    { item: "Kapal Selam ⛴️", answer: "Laut" },
    { item: "Pesawat Jet 🚀", answer: "Udara" },
    { item: "Truk 🚚", answer: "Darat" },
    { item: "Rakit 🛶", answer: "Laut" },
    { item: "Taksi 🚕", answer: "Darat" },
    { item: "Skuter 🛴", answer: "Darat" },
    { item: "Paralayang 🪂", answer: "Udara" },
    { item: "Kapal Pesiar 🚢", answer: "Laut" },
    { item: "Mobil Pemadam 🚒", answer: "Darat" },
    { item: "Ambulans 🚑", answer: "Darat" },
    { item: "Becak 🛺", answer: "Darat" },
    { item: "Andong/Dokar 🐎", answer: "Darat" },
    { item: "Bemo 🛺", answer: "Darat" },
    { item: "Jet Ski 🚤", answer: "Laut" },
    { item: "Kapal Feri ⛴️", answer: "Laut" },
    { item: "Drone 🚁", answer: "Udara" },
    { item: "Kano 🛶", answer: "Laut" },
    { item: "Gokar 🏎️", answer: "Darat" },
    { item: "Bajaj 🛺", answer: "Darat" },
    { item: "Mobil Polisi 🚓", answer: "Darat" },
    { item: "Sepeda 🚲", answer: "Darat" },
    { item: "Kereta Cepat 🚄", answer: "Darat" },
    { item: "Tank 🚜", answer: "Darat" },
    { item: "Mocab 🚕", answer: "Darat" },
    { item: "Roket 🚀", answer: "Udara" },
    { item: "Beca Kayuh 🚲", answer: "Darat" },
    { item: "Kapal Layar ⛵", answer: "Laut" },
    { item: "Truk Sampah 🚛", answer: "Darat" },
    { item: "Kendaraan Salju 🏎️", answer: "Darat" },
    { item: "Kereta Gantung 🚠", answer: "Udara" },
    { item: "Kapal Tunda 🛥️", answer: "Laut" },
  ],
  family: [
    { q: "Ayah dari ayahmu disebut siapa?", ans: "Kakek 👴" },
    { q: "Ibu dari ibumu disebut siapa?", ans: "Nenek 👵" },
    { q: "Saudara laki-laki ibu atau ayahmu disebut siapa?", ans: "Paman 👨" },
    { q: "Saudara perempuan ibu atau ayahmu disebut siapa?", ans: "Bibi 👩" },
    { q: "Anak dari paman dan bibimu disebut siapa?", ans: "Sepupu 🧒" },
    { q: "Orang yang melahirkan kamu disebut siapa?", ans: "Ibu 🤱" },
    {
      q: "Saudara laki-laki yang lahir lebih dulu darimu disebut siapa?",
      ans: "Kakak Laki-laki 👦",
    },
    {
      q: "Saudara perempuan yang lahir setelah kamu disebut siapa?",
      ans: "Adik Perempuan 👧",
    },
    { q: "Kepala keluarga di rumah biasanya adalah siapa?", ans: "Ayah 👨‍💼" },
    {
      q: "Saudara perempuan yang lebih tua darimu disebut siapa?",
      ans: "Kakak Perempuan 👩",
    },
    {
      q: "Ayah dan Ibu kita panggil secara bersamaan dengan sebutan?",
      ans: "Orang Tua 👫",
    },
    { q: "Orang tua dari ayah dan ibu kita panggil?", ans: "Kakek & Nenek 🧓" },
    {
      q: "Di rumah kamu anak terakhir yang paling kecil disebut?",
      ans: "Adik Bungsu 👶",
    },
    {
      q: "Saudara kandung laki-laki yang lahir setelah kamu disebut?",
      ans: "Adik Laki-laki 👦",
    },
    {
      q: "Anak kandung pertama di keluarga biasanya di panggil?",
      ans: "Anak Sulung 👑",
    },
    {
      q: "Saudara perempuan yang lahir di urutan paling terakhir disebut?",
      ans: "Adik Bungsu 👧",
    },
    { q: "Siapa saudari kandung ayahmu?", ans: "Bibi (Tante) 👩" },
    { q: "Apa sebutan untuk istri dari saudaramu?", ans: "Ipar 👩" },
    { q: "Istri dari pamanmu disebut apa?", ans: "Bibi 👩" },
    { q: "Suami dari bibimu disebut apa?", ans: "Paman 👨" },
    {
      q: "Apa sebutan untuk orang yang mengasuhmu di rumah?",
      ans: "Pengasuh/Mbak 👩",
    },
    {
      q: "Kalau ada dua orang laki-laki lahir bersamaan dari ibu yang sama disebut?",
      ans: "Kembar 👦👦",
    },
    {
      q: "Panggilan untuk Ibu bagi orang Jawa biasanya?",
      ans: "Simbah/Ibu 👵",
    },
    { q: "Saudaramu yang paling tua disebut?", ans: "Kakak Tertua 🧒" },
  ],
  food_sort: [
    { item: "Brokoli 🥦", type: "Sayur" },
    { item: "Pisang 🍌", type: "Buah" },
    { item: "Bayam 🥬", type: "Sayur" },
    { item: "Semangka 🍉", type: "Buah" },
    { item: "Wortel 🥕", type: "Sayur" },
    { item: "Anggur 🍇", type: "Buah" },
    { item: "Terong 🍆", type: "Sayur" },
    { item: "Jeruk 🍊", type: "Buah" },
    { item: "Tomat 🍅", type: "Sayur" },
    { item: "Stroberi 🍓", type: "Buah" },
    { item: "Kangkung 🌿", type: "Sayur" },
    { item: "Apel 🍎", type: "Buah" },
    { item: "Jagung 🌽", type: "Sayur" },
    { item: "Mangga 🥭", type: "Buah" },
    { item: "Kubis 🥗", type: "Sayur" },
    { item: "Nanas 🍍", type: "Buah" },
    { item: "Kacang Panjang 🫘", type: "Sayur" },
    { item: "Alpukat 🥑", type: "Buah" },
    { item: "Kentang 🥔", type: "Sayur" },
    { item: "Sawi Hijau 🌿", type: "Sayur" },
    { item: "Melon 🍈", type: "Buah" },
    { item: "Kiwi 🥝", type: "Buah" },
    { item: "Bawang Merah 🧅", type: "Sayur" },
    { item: "Sawi Putih 🥬", type: "Sayur" },
    { item: "Pepaya 🎃", type: "Buah" },
    { item: "Timun 🥒", type: "Sayur" },
    { item: "Pare 🍈", type: "Sayur" },
    { item: "Paprika 🫑", type: "Sayur" },
    { item: "Jamur 🍄", type: "Sayur" },
    { item: "Durian 🍈", type: "Buah" },
    { item: "Rambutan 🧶", type: "Buah" },
    { item: "Manggis 🟣", type: "Buah" },
    { item: "Salak 🤎", type: "Buah" },
    { item: "Sawo 🥔", type: "Buah" },
    { item: "Sukun 🍈", type: "Buah" },
    { item: "Kelapa 🥥", type: "Buah" },
    { item: "Lengkeng 🥔", type: "Buah" },
    { item: "Duku 🥔", type: "Buah" },
    { item: "Sirsak 🍐", type: "Buah" },
    { item: "Sawi 🥬", type: "Sayur" },
    { item: "Buncis 🫛", type: "Sayur" },
    { item: "Labu 🎃", type: "Sayur" },
    { item: "Lobak 🥕", type: "Sayur" },
    { item: "Rebung 🎋", type: "Sayur" },
    { item: "Genjer 🌿", type: "Sayur" },
    { item: "Pepaya Muda 🥥", type: "Sayur" },
    { item: "Nangka Muda 🍈", type: "Sayur" },
    { item: "Kacang Polong 🫛", type: "Sayur" },
    { item: "Kentang Manis 🍠", type: "Buah" },
  ],
  hygiene: [
    {
      case: "Rambut adik kotor dan gatal, benda apa yang bisa dipakai untuk keramas?",
      ans: "Sampo 🧴",
    },
    {
      case: "Rahang dan mulut terasa sisa makanan, kita harus membersihkannya pakai apa?",
      ans: "Sikat Gigi 🪥",
    },
    {
      case: "Badan kita berkeringat setelah bermain, apa yang dipakai saat mandi?",
      ans: "Sabun 🧼",
    },
    {
      case: "Kuku adik panjang dan hitam, alat apa yang digunakan untuk merapikannya?",
      ans: "Pemotong Kuku ✂️",
    },
    {
      case: "Telinga terasa kotor dan berair, alat apa yang dipakai untuk mengeringkannya?",
      ans: "Cotton Bud 🥢",
    },
    {
      case: "Habis cuci tangan, alat apa yang keringkan tangan kita?",
      ans: "Handuk 🧖",
    },
    {
      case: "Rambut kusut berantakan setelah tidur, kita rapikan pakai apa?",
      ans: "Sisir 🪮",
    },
    {
      case: "Ingin wangi setelah mandi, kita semprotkan apa?",
      ans: "Parfum 🌬️",
    },
    {
      case: "Selesai menyikat gigi, mulut butuh dibilas dengan apa?",
      ans: "Air Bersih 🚰",
    },
    {
      case: "Hidung bersin dan ada ingus, kita lap pakai benda apa?",
      ans: "Tisu 🤧",
    },
    {
      case: "Setelah makan ada sisa lauk menempel di celah gigi. Kita butuh benda apa untuk membersihkannya?",
      ans: "Benang Gigi 🧵",
    },
    {
      case: "Sesudah bermain di tanah lapang, sebelum memegang makanan tangan wajib dicuci pakai?",
      ans: "Sabun Cuci Tangan 🧼",
    },
    {
      case: "Supaya wajah lebih jernih dan tak berminyak waktu bangun, kita membasuhnya pakai apa?",
      ans: "Sabun Cuci Muka 🧴",
    },
    {
      case: "Badan kurang segar setelah kegiatan di sekolah? Apa obat terindah menyegarkannya?",
      ans: "Mandi Air Bersih 🚿",
    },
    {
      case: "Tangan penuh darah karena terjatuh atau gatal, kita olesi luka pakai apa agar higienis?",
      ans: "Antiseptik 🩹",
    },
    {
      case: "Habis makan tangan lengket, cuci pakai apa?",
      ans: "Sabun Cuci Tangan 🧼",
    },
    {
      case: "Mata merah terkena debu, kita tetesi pakai?",
      ans: "Obat Mata 👁️",
    },
    {
      case: "Kaki kotor setelah main bola, harus apa sebelum masuk rumah?",
      ans: "Cuci Kaki 🦶",
    },
    { case: "Baju bau keringat, harus segera di?", ans: "Ganti/Cuci 👕" },
    { case: "Selesai BAK kita harus?", ans: "Siram/Cebok 🚽" },
    {
      case: "Telinga tersumbat air, keringkan dengan hati-hati pakai?",
      ans: "Handuk Kecil 🧖",
    },
    { case: "Lantai kamar kotor, kita harus?", ans: "Sapu & Pel 🧹" },
    { case: "Jendela berdebu, bersihkan dengan?", ans: "Kemoceng 🧹" },
    {
      case: "Ada sampah di meja, kita harus?",
      ans: "Buang ke Tempat Sampah 🗑️",
    },
    { case: "Meja makan kotor setelah makan, kita?", ans: "Lap 🧼" },
  ],
  school: [
    {
      case: "Aku dipakai untuk menghapus tulisan pensil yang salah, siapakah aku?",
      ans: "Penghapus 🧼",
      fallback: "🧽",
    },
    {
      case: "Aku berisi lembaran kertas tempat kamu bisa menulis atau menggambar, siapakah aku?",
      ans: "Buku Tulis 📓",
      fallback: "📓",
    },
    {
      case: "Aku punya banyak warna cerah dan bisa dipakai untuk mewarnai tugasmu, siapakah aku?",
      ans: "Pensil Warna 🖍️",
      fallback: "🖍️",
    },
    {
      case: "Aku tempat yang luas di depan kelas, tempat ibu guru menulis angka dan huruf, siapakah aku?",
      ans: "Papan Tulis 🪧",
      fallback: "🪧",
    },
    {
      case: "Semua buku dan tempat pensil di dalam aku tutup sleting dan kamu gendong di punggung, siapakah aku?",
      ans: "Tas Ransel 🎒",
      fallback: "🎒",
    },
    {
      case: "Aku dipakai untuk mengukur dan membuat garis lurus, siapakah aku?",
      ans: "Penggaris 📏",
      fallback: "📏",
    },
    {
      case: "Bentukku tajam untuk memotong kertas kerajinanmu, siapakah aku?",
      ans: "Gunting ✂️",
      fallback: "✂️",
    },
    {
      case: "Tinta ku berwarna-warni biasa digunakan pak guru tanda tangan, siapakah aku?",
      ans: "Pulpen 🖊️",
      fallback: "🖊️",
    },
    {
      case: "Pensil kamu tumpul? Masukkan ke dalam kepalaku lalu putar, siapakah aku?",
      ans: "Peraut Pensil ⚙️",
      fallback: "⚙️",
    },
    {
      case: "Baju ini warnanya sama semua dengan teman sekelas dipakai setiap pagi, siapakah aku?",
      ans: "Seragam 👕",
      fallback: "👕",
    },
    {
      case: "Semua spidol dan penghapusku tersimpan rapi selagi aku resleting. Aku adalah?",
      ans: "Tempat Pensil 👝",
      fallback: "👝",
    },
    {
      case: "Saat menggambar dengan krayon yang dipegang erat butuh kertas besar berbuku yang disebut?",
      ans: "Buku Gambar 🖌️",
      fallback: "🖌️",
    },
    {
      case: "Kadang warnanya putih dan sangat mudah hancur, dipakai pak guru zaman dulu di papan hitam.",
      ans: "Kapur Tulis 🧱",
      fallback: "🧱",
    },
    {
      case: "Wujudnya meja datar dan bangku kayu agar kalian nyaman menulis, aku adalah?",
      ans: "Meja Belajar 🪑",
      fallback: "🪑",
    },
    {
      case: "Bunyiku sangat nyaring! Kalau aku ditekan berarti waktunya pulang sudah tiba.",
      ans: "Bel Sekolah 🔔",
      fallback: "🔔",
    },
    {
      case: "Aku tempat guru berdiri untuk mengajar di depan kelas, aku adalah?",
      ans: "Podium 🎙️",
      fallback: "🎙️",
    },
    {
      case: "Aku berisi air untuk kamu minum saat haus di sekolah, aku adalah?",
      ans: "Botol Minum 🍼",
      fallback: "🍼",
    },
    {
      case: "Aku berisi nasi dan lauk untuk makan siangmu, aku adalah?",
      ans: "Kotak Bekal 🍱",
      fallback: "🍱",
    },
    {
      case: "Aku menempel di dinding dan menunjukkan waktu istirahat, aku adalah?",
      ans: "Jam Dinding ⏰",
      fallback: "⏰",
    },
    {
      case: "Aku tempat membuang rautan pensil dan kertas bekas, aku adalah?",
      ans: "Tempat Sampah 🗑️",
      fallback: "🗑️",
    },
    {
      case: "Aku lemari kecil tempat menyimpan buku-bukumu, aku adalah?",
      ans: "Loker 📦",
      fallback: "📦",
    },
    {
      case: "Aku dipakai untuk mengelap papan tulis, aku adalah?",
      ans: "Penghapus Papan 🧽",
      fallback: "🧽",
    },
    {
      case: "Aku dipasang di saku seragammu untuk identitas, aku adalah?",
      ans: "Badge/Bet 🏷️",
      fallback: "🏷️",
    },
    {
      case: "Aku ikat pinggang untuk merapikan celanamu, aku adalah?",
      ans: "Sabuk ベルト",
      fallback: "ベルト",
    },
    {
      case: "Aku alas kaki yang harus dilepas sebelum masuk kelas, aku adalah?",
      ans: "Sepatu 👟",
      fallback: "👟",
    },
  ],
  shopping: [
    {
      order_text: "Beli 2 Susu dan 1 Roti",
      items: [
        { emoji: "🥛", count: 2 },
        { emoji: "🍞", count: 1 },
      ],
    },
    {
      order_text: "Tolong belikan 3 Apel dan 2 Permen",
      items: [
        { emoji: "🍎", count: 3 },
        { emoji: "🍬", count: 2 },
      ],
    },
    {
      order_text: "Ibu butuh 1 Telur, 1 Kue, dan 2 Es Krim",
      items: [
        { emoji: "🥚", count: 1 },
        { emoji: "🍰", count: 1 },
        { emoji: "🍦", count: 2 },
      ],
    },
    {
      order_text: "Beli 4 Pisang dan 1 Cokelat ya",
      items: [
        { emoji: "🍌", count: 4 },
        { emoji: "🍫", count: 1 },
      ],
    },
    {
      order_text: "Adik pesan 2 Bola dan 1 Balon",
      items: [
        { emoji: "⚽", count: 2 },
        { emoji: "🎈", count: 1 },
      ],
    },
    {
      order_text: "Ayah mau 1 Kopi dan 2 Burger",
      items: [
        { emoji: "☕", count: 1 },
        { emoji: "🍔", count: 2 },
      ],
    },
    {
      order_text: "Beli 3 Donat dan 3 Biskuit buat bekal",
      items: [
        { emoji: "🍩", count: 3 },
        { emoji: "🍪", count: 3 },
      ],
    },
    {
      order_text: "Tolong 2 Jus dan 1 Pizza",
      items: [
        { emoji: "🧃", count: 2 },
        { emoji: "🍕", count: 1 },
      ],
    },
    {
      order_text: "Beli 5 Wortel dan 1 Jagung",
      items: [
        { emoji: "🥕", count: 5 },
        { emoji: "🌽", count: 1 },
      ],
    },
    {
      order_text: "Cari 2 Sabun dan 1 Sampo",
      items: [
        { emoji: "🧼", count: 2 },
        { emoji: "🧴", count: 1 },
      ],
    },
    {
      order_text: "Ambil 4 Jeruk manis dan 2 Botol Air",
      items: [
        { emoji: "🍊", count: 4 },
        { emoji: "🍼", count: 2 },
      ],
    },
    {
      order_text: "Beli 1 Payung dan 2 Jas Hujan Kuning",
      items: [
        { emoji: "☂️", count: 1 },
        { emoji: "🧥", count: 2 },
      ],
    },
    {
      order_text: "Beli 3 Sikat Gigi dan 1 Pasta Gigi dewasa",
      items: [
        { emoji: "🪥", count: 3 },
        { emoji: "🧴", count: 1 },
      ],
    },
    {
      order_text: "Beli 2 Sepatu boot dan 2 Kaus Kaki baru",
      items: [
        { emoji: "👞", count: 2 },
        { emoji: "🧦", count: 2 },
      ],
    },
    {
      order_text: "Ambil 1 Tas Sekolah dan 2 Sepatu",
      items: [
        { emoji: "🎒", count: 1 },
        { emoji: "👟", count: 2 },
      ],
    },
    {
      order_text: "Ayah butuh 1 Martil dan 3 Paku",
      items: [
        { emoji: "🔨", count: 1 },
        { emoji: "📌", count: 3 },
      ],
    },
    {
      order_text: "Beri 2 Wortel dan 1 Bayam",
      items: [
        { emoji: "🥕", count: 2 },
        { emoji: "🥬", count: 1 },
      ],
    },
    {
      order_text: "Tolong 1 Penggaris dan 4 Pensil",
      items: [
        { emoji: "📏", count: 1 },
        { emoji: "✏️", count: 4 },
      ],
    },
    {
      order_text: "Minta 1 Topi dan 1 Kacamata",
      items: [
        { emoji: "🧢", count: 1 },
        { emoji: "🕶️", count: 1 },
      ],
    },
    {
      order_text: "Ibu mau 3 Telur dan 2 Sosis",
      items: [
        { emoji: "🥚", count: 3 },
        { emoji: "🌭", count: 2 },
      ],
    },
    {
      order_text: "Beli 2 Semangka dan 3 Jeruk",
      items: [
        { emoji: "🍉", count: 2 },
        { emoji: "🍊", count: 3 },
      ],
    },
    {
      order_text: "Beli 1 Panci dan 1 Sodet",
      items: [
        { emoji: "🍲", count: 1 },
        { emoji: "🍳", count: 1 },
      ],
    },
    {
      order_text: "Cari 2 Baterai dan 1 Senter",
      items: [
        { emoji: "🔋", count: 2 },
        { emoji: "🔦", count: 1 },
      ],
    },
  ],
  word_scramble: [
    { word: "BUKU", emj: "📖" },
    { word: "MEJA", emj: "🪑" },
    { word: "BOLA", emj: "⚽" },
    { word: "APEL", emj: "🍎" },
    { word: "SAPI", emj: "🐮" },
    { word: "SUSU", emj: "🥛" },
    { word: "GIGI", emj: "🦷" },
    { word: "TOPI", emj: "🧢" },
    { word: "MATA", emj: "👁️" },
    { word: "KAKI", emj: "🦶" },
    { word: "ROTI", emj: "🍞" },
    { word: "BAJU", emj: "👕" },
    { word: "DASI", emj: "👔" },
    { word: "TAHU", emj: "🟨" },
    { word: "KUE", emj: "🍰" },
    { word: "MADU", emj: "🍯" },
    { word: "JAM", emj: "⌚" },
    { word: "TAS", emj: "🎒" },
    { word: "PENA", emj: "🖊️" },
    { word: "ALAM", emj: "🏞️" },
    { word: "AYAM", emj: "🐔" },
    { word: "IKAN", emj: "🐟" },
    { word: "ULAR", emj: "🐍" },
    { word: "KERA", emj: "🐒" },
    { word: "KUDA", emj: "🐎" },
    { word: "RODA", emj: "🎡" },
    { word: "PULU", emj: "🏝️" },
    { word: "NAGA", emj: "🐉" },
    { word: "KACA", emj: "🪟" },
    { word: "PINT", emj: "🚪" },
    { word: "ATAP", emj: "🏠" },
    { word: "PADI", emj: "🌾" },
    { word: "GULA", emj: "🍬" },
    { word: "KOPI", emj: "☕" },
    { word: "JAHE", emj: "🫚" },
    { word: "MADU", emj: "🍯" },
    { word: "PAKU", emj: "🔨" },
    { word: "SAYU", emj: "🥦" },
    { word: "BUAH", emj: "🍎" },
    { word: "DAUN", emj: "🍃" },
    { word: "AKAR", emj: "🪵" },
    { word: "BUMI", emj: "🌍" },
    { word: "BULA", emj: "🌙" },
    { word: "AWAN", emj: "☁️" },
    { word: "API", emj: "🔥" },
    { word: "AIR", emj: "💧" },
    { word: "GUA", emj: "⛰️" },
    { word: "SATE", emj: "🍢" },
    { word: "SUP", emj: "🥣" },
  ],
  maze: [
    {
      q: "Monyet kelaparan, kemana ia harus pergi?",
      icon: "🐒",
      ans: "Pisang 🍌",
      paths: ["Pisang 🍌", "Tulang 🦴", "Bunga 🌺"],
    },
    {
      q: "Kelinci dikejar serigala, kemana jalan paling aman?",
      icon: "🐰",
      ans: "Lubang 🕳️",
      paths: ["Lubang 🕳️", "Air Laut 🌊", "Gua Serigala 🐺"],
    },
    {
      q: "Kucing merasa kedinginan, jalan mana yang hangat?",
      icon: "🐱",
      ans: "Rumah 🏠",
      paths: ["Salju ❄️", "Rumah 🏠", "Kulkas 🧊"],
    },
    {
      q: "Lebah ingin membuat madu, manakah tujuannya?",
      icon: "🐝",
      ans: "Bunga 🌻",
      paths: ["Bunga 🌻", "Bawang 🧅", "Daging 🥩"],
    },
    {
      q: "Mobil kehabisan bensi, arahkan ke mana?",
      icon: "🚗",
      ans: "SPBU ⛽",
      paths: ["Bandara ✈️", "Taman 🏞️", "SPBU ⛽"],
    },
    {
      q: "Pemadam Kebakaran dapat telepon darurat, ke mana tujuannya?",
      icon: "🚒",
      ans: "Api 🔥",
      paths: ["Supermarket 🛒", "Api 🔥", "Kolam Renang 🏊"],
    },
    {
      q: "Ikan melompat keluar, bantu ia pulang",
      icon: "🐟",
      ans: "Akuarium 🐠",
      paths: ["Pasir 🏜️", "Panci 🍲", "Akuarium 🐠"],
    },
    {
      q: "Katak sedang mencari makan, mana yang enak?",
      icon: "🐸",
      ans: "Lalat 🪰",
      paths: ["Tulang 🦴", "Lalat 🪰", "Rumput 🌱"],
    },
    {
      q: "Tikus takut pada kucing, mana jebakannya?",
      icon: "🐭",
      ans: "Kucing 🐈 (Awas!)",
      paths: ["Keju 🧀", "Kucing 🐈 (Awas!)", "Biskuit 🍪"],
      isTrap: true,
    },
    {
      q: "Astronot kembali ke bumi, arahkan pesawatnya",
      icon: "🚀",
      ans: "Bumi 🌍",
      paths: ["Matahari ☀️", "Bumi 🌍", "Komet ☄️"],
    },
    {
      q: "Beruang ingin hibernasi musim dingin, ke mana dia pergi?",
      icon: "🐻",
      ans: "Gua ⛰️",
      paths: ["Gua ⛰️", "Tenda ⛺", "Pasar 🎪"],
    },
    {
      q: "Kereta api kehilangan jalurnya, manakah jalannya?",
      icon: "🚂",
      ans: "Rel 🛤️",
      paths: ["Jalan Raya 🛣️", "Rel 🛤️", "Sungai 🏞️"],
    },
    {
      q: "Laba-laba ingin menangkap nyamuk, dimana sarangnya?",
      icon: "🕷️",
      ans: "Jaring 🕸️",
      paths: ["Gelas 🥤", "Jaring 🕸️", "Sepatu 👟"],
    },
    {
      q: "Kelelawar takut cahaya, di mana tempat persembunyiannya?",
      icon: "🦇",
      ans: "Gua Gelap 🌌",
      paths: ["Gua Gelap 🌌", "Lampu Jalan 💡", "Matahari ☀️"],
    },
    {
      q: "Kuda nil kepanasan, kemana ia harus berendam?",
      icon: "🦛",
      ans: "Lumpur / Sungai 🏞️",
      paths: ["Lumpur / Sungai 🏞️", "Api Unggun 🏕️", "Gurun Pasir 🏜️"],
    },
    {
      q: "Anjing ingin mengubur makanannya, apa yang dia cari?",
      icon: "🐶",
      ans: "Tulang 🦴",
      paths: ["Tulang 🦴", "Ikan 🐟", "Wortel 🥕"],
    },
    {
      q: "Penguin ingin bermain meluncur, kemana ia pergi?",
      icon: "🐧",
      ans: "Es 🧊",
      paths: ["Lumpur 💩", "Es 🧊", "Pasir Pantai 🏖️"],
    },
    {
      q: "Pesawat kehabisan avtur, di mana ia harus mendarat?",
      icon: "✈️",
      ans: "Bandara 🛬",
      paths: ["Bandara 🛬", "Rel Kereta 🛤️", "Terminal Bus 🚌"],
    },
    {
      q: "Sapi ingin makan rumput segar, di mana tempatnya?",
      icon: "🐮",
      ans: "Padang Rumput 🏞️",
      paths: ["Lautan 🌊", "Padang Rumput 🏞️", "Jalan Tol 🛣️"],
    },
    {
      q: "Kapal akan tenggelam, butuh pelampung!",
      icon: "🚢",
      ans: "Sekoci 🚤",
      paths: ["Sekoci 🚤", "Jangkar ⚓", "Batu Karang 🪨"],
    },
    {
      q: "Ulat lapar ingin jadi kupu-kupu, ke mana ia makan?",
      icon: "🐛",
      ans: "Daun 🍃",
      paths: ["Daun 🍃", "Tulang 🦴", "Air 🌊"],
    },
    {
      q: "Pencuri lari, ke mana polisi mengejarnya?",
      icon: "👮",
      ans: "Penjara 👮‍♂️",
      paths: ["Taman 🎡", "Toko 🛒", "Penjara 👮‍♂️"],
    },
    {
      q: "Ada kebakaranh hebat, bantu mobil pemadam!",
      icon: "🚒",
      ans: "Hidran Air 🚰",
      paths: ["Hidran Air 🚰", "Pom Bensin ⛽", "Toko Roti 🍞"],
    },
    {
      q: "Adik bayi menangis haus, beri apa?",
      icon: "👶",
      ans: "Botol Susu 🍼",
      paths: ["Botol Susu 🍼", "Kopi ☕", "Cabai 🌶️"],
    },
    {
      q: "Petani ingin menanam padi, di mana?",
      icon: "👨‍🌾",
      ans: "Sawah 🌾",
      paths: ["Gurun 🌵", "Sawah 🌾", "Kantor 🏢"],
    },
    {
      q: "Juara satu lomba lari, apa hadiahnya?",
      icon: "🏃",
      ans: "Trofi 🏆",
      paths: ["Trofi 🏆", "Sampah 🗑️", "Batu 🪨"],
    },
    {
      q: "Orang sakit butuh obat, ke mana?",
      icon: "🤒",
      ans: "Apotek/Rumah Sakit 🏥",
      paths: ["Pasar 🧺", "Apotek/Rumah Sakit 🏥", "Taman 🌳"],
    },
  ],
  animal_matching: [
    { parent: "Sapi 🐄", child: "Anak Sapi 🐮" },
    { parent: "Ayam Betina 🐔", child: "Anak Ayam 🐣" },
    { parent: "Kucing 🐈", child: "Anak Kucing 🐱" },
    { parent: "Anjing 🐕", child: "Anak Anjing 🐶" },
    { parent: "Kuda 🐎", child: "Anak Kuda 🐴" },
    { parent: "Katak 🐸", child: "Berudu 🪱" },
    { parent: "Babi 🐖", child: "Anak Babi 🐷" },
    { parent: "Singa 🦁", child: "Anak Singa 🐯" },
    { parent: "Harimau 🐅", child: "Anak Harimau 🐯" },
    { parent: "Bebek 🦆", child: "Anak Bebek 🐥" },
    { parent: "Paus 🐳", child: "Anak Paus 🐋" },
    { parent: "Domba 🐑", child: "Cempe (Anak Domba) 🐑" },
    { parent: "Kambing 🐐", child: "Anak Kambing 🐐" },
    { parent: "Monyet 🐒", child: "Anak Monyet 🐵" },
    { parent: "Kupu-Kupu 🦋", child: "Ulat Bulu 🐛" },
    { parent: "Angsa 🦢", child: "Anak Angsa 🦢" },
    { parent: "Panda 🐼", child: "Anak Panda 🐼" },
    { parent: "Penguin 🐧", child: "Anak Penguin 🐧" },
    { parent: "Burung Hantu 🦉", child: "Anak Burung Hantu 🦉" },
    { parent: "Rusa 🦌", child: "Anak Rusa 🦌" },
    { parent: "Gajah 🐘", child: "Anak Gajah 🐘" },
    { parent: "Kangguru 🦘", child: "Anak Kangguru 🦘" },
    { parent: "Buaya 🐊", child: "Anak Buaya 🐊" },
    { parent: "Ular 🐍", child: "Anak Ular 🐍" },
    { parent: "Kura-kura 🐢", child: "Anak Kura-kura 🐢" },
    { parent: "Zebra 🦓", child: "Anak Zebra 🦓" },
    { parent: "Jerapah 🦒", child: "Anak Jerapah 🦒" },
    { parent: "Gorila 🦍", child: "Anak Gorila 🦍" },
    { parent: "Hamster 🐹", child: "Anak Hamster 🐹" },
    { parent: "Tupai 🐿️", child: "Anak Tupai 🐿️" },
    { parent: "Koala 🐨", child: "Anak Koala 🐨" },
    { parent: "Landak 🦔", child: "Anak Landak 🦔" },
    { parent: "Kasuari 🐦", child: "Anak Kasuari 🐦" },
  ],
  missing_letter: [
    { word: "B_KU", full: "BUKU", correct: "U", options: ["A", "I", "U"] },
    { word: "A_EL", full: "APEL", correct: "P", options: ["M", "P", "K"] },
    { word: "B_LA", full: "BOLA", correct: "O", options: ["E", "O", "I"] },
    { word: "ME_A", full: "MEJA", correct: "J", options: ["J", "R", "L"] },
    { word: "S_PI", full: "SAPI", correct: "A", options: ["U", "A", "O"] },
    { word: "M_TA", full: "MATA", correct: "A", options: ["A", "O", "E"] },
    { word: "GI_I", full: "GIGI", correct: "G", options: ["P", "T", "G"] },
    { word: "_UDA", full: "KUDA", correct: "K", options: ["K", "M", "S"] },
    { word: "IK_N", full: "IKAN", correct: "A", options: ["O", "A", "E"] },
    { word: "A_AM", full: "AYAM", correct: "Y", options: ["J", "L", "Y"] },
    { word: "S_SU", full: "SUSU", correct: "U", options: ["A", "U", "I"] },
    { word: "R_TI", full: "ROTI", correct: "O", options: ["E", "A", "O"] },
    { word: "G_RU", full: "GURU", correct: "U", options: ["I", "E", "U"] },
    { word: "T_PI", full: "TOPI", correct: "O", options: ["A", "O", "U"] },
    { word: "M_DU", full: "MADU", correct: "A", options: ["O", "E", "A"] },
    { word: "BA_U", full: "BAJU", correct: "J", options: ["L", "J", "R"] },
    { word: "P_NA", full: "PENA", correct: "E", options: ["A", "E", "O"] },
    { word: "U_AR", full: "ULAR", correct: "L", options: ["M", "L", "K"] },
    { word: "B_RU", full: "BIRU", correct: "I", options: ["A", "I", "O"] },
    { word: "C_CI", full: "CUCI", correct: "U", options: ["I", "U", "E"] },
    { word: "P_TA", full: "PETA", correct: "E", options: ["A", "E", "O"] },
    { word: "T_RU", full: "TIRE", correct: "A", options: ["A", "O", "E"] },
    { word: "B_TA", full: "BATA", correct: "A", options: ["A", "U", "I"] },
    { word: "P_KU", full: "PAKU", correct: "A", options: ["A", "O", "U"] },
    { word: "G_LA", full: "GULA", correct: "U", options: ["I", "U", "E"] },
    { word: "J_M", full: "JAM", correct: "A", options: ["A", "O", "U"] },
    { word: "T_S", full: "TAS", correct: "A", options: ["E", "A", "U"] },
    { word: "P_NA", full: "PENA", correct: "E", options: ["I", "E", "A"] },
    { word: "D_SI", full: "DASI", correct: "A", options: ["A", "O", "U"] },
    { word: "R_DA", full: "RODA", correct: "O", options: ["A", "O", "U"] },
    { word: "S_RU", full: "SERU", correct: "E", options: ["I", "E", "U"] },
    { word: "B_RU", full: "BIRU", correct: "I", options: ["A", "I", "U"] },
    { word: "M_RU", full: "MAU", correct: "A", options: ["A", "O", "E"] },
    { word: "P_DI", full: "PADI", correct: "A", options: ["A", "O", "U"] },
    { word: "D_UN", full: "DAUN", correct: "A", options: ["A", "E", "O"] },
    { word: "A_AR", full: "AKAR", correct: "K", options: ["K", "M", "L"] },
    { word: "B_MI", full: "BUMI", correct: "U", options: ["A", "U", "O"] },
    { word: "A_AN", full: "AWAN", correct: "W", options: ["W", "M", "L"] },
    { word: "A_I", full: "API", correct: "P", options: ["P", "T", "M"] },
  ],
  flying_animal: [
    "Burung 🐦",
    "Kupu-kupu 🦋",
    "Kelelawar 🦇",
    "Lebah 🐝",
    "Lalat 🪰",
    "Nyamuk 🦟",
    "Burung Hantu 🦉",
    "Merpati 🕊️",
    "Elang 🦅",
    "Kumbang 🐞",
    "Burung Beo 🦜",
    "Capung 🚁",
    "Kunang-kunang 🌟",
    "Pelikan 🦤",
    "Gagak 🐦‍⬛",
    "Bangau 🦢",
    "Belalang 🦗",
    "Ngengat 🦋",
    "Burung Unta 🐦",
    "Burung Cendrawasih 🐦",
    "Burung Kakaktua 🦜",
    "Burung Pelatuk 🐦",
    "Burung Kolibri 🐦",
    "Burung Walet 🐦",
    "Burung Dara 🕊️",
    "Burung Rajawali 🦅",
    "Burung Nazar 🦅",
    "Pterodactyl 🦖",
    "Capung 🚁",
    "Kumbang Tanduk 🪲",
    "Semut Terbang 🐜",
    "Rayap Terbang 🐜",
    "Laron 🐜",
  ],
  water_animal: [
    "Ikan 🐟",
    "Gurita 🐙",
    "Paus 🐳",
    "Lumba-lumba 🐬",
    "Hiu 🦈",
    "Kepiting 🦀",
    "Udang 🦐",
    "Kuda Laut 🦦",
    "Cumi-cumi 🦑",
    "Bintang Laut ⭐",
    "Anjing Laut 🦭",
    "Walrus 🦭",
    "Belut 🐍",
    "Pinguin 🐧",
    "Ubur-ubur 🪼",
    "Karang 🪸",
    "Paus Orca 🐋",
    "Kura-kura Laut 🐢",
    "Berang-berang 🦦",
    "Ikan Pari 🐟",
    "Ikan Badut 🐠",
    "Ikan Mas 🐟",
    "Ikan Mujair 🐟",
    "Ikan Lele 🐟",
    "Ikan Gabus 🐟",
    "Ikan Arwana 🐟",
    "Ikan Koi 🐟",
    "Ikan Cupang 🐟",
    "Ikan Teri 🐟",
    "Ikan Kakap 🐟",
    "Ikan Kerapu 🐟",
    "Ikan Salmon 🐟",
    "Ikan Tuna 🐟",
    "Ikan Tongkol 🐟",
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
    trash: {
      title: "Pilah Sampah",
      rules:
        "Masukkan sampah ke tempat yang benar (Organik, Plastik, atau Kertas)!",
      points: 25,
    },
    shapeMatch: {
      title: "Mengenal Bentuk",
      rules: "Menebak bentuk dasar dari benda-benda di sekitar kita!",
      points: 15,
    },
    clock: {
      title: "Belajar Jam",
      rules: "Melihat jam analog dan menebak waktu yang tepat!",
      points: 30,
    },
    body: {
      title: "Anggota Tubuh",
      rules: "Mawab pertanyaan tentang bagian tubuh dan fungsinya!",
      points: 20,
    },
    traffic: {
      title: "Rambu Lalu Lintas",
      rules: "Belajar arti dari rambu dan simbol lalu lintas!",
      points: 20,
    },
    space: {
      title: "Tata Surya",
      rules: "Ketuk benda langit dan tebak namanya dengan benar!",
      points: 25,
    },
    music: {
      title: "Alat Musik",
      rules: "Tebak cara memainkan alat musik yang muncul!",
      points: 20,
    },
    flags: {
      title: "Bendera Dunia",
      rules: "Lihat benderanya dan tebak ini dari negara mana!",
      points: 30,
    },
    weather: {
      title: "Cuaca & Musim",
      rules: "Lihat cuacanya dan pilih kegiatan yang paling cocok!",
      points: 15,
    },
    time_sequence: {
      title: "Hari & Bulan",
      rules: "Amati urutan waktunya dan lengkapi hari atau bulan yang hilang!",
      points: 20,
    },
    transport: {
      title: "Transportasi",
      rules: "Tebak di mana kendaraan ini biasanya berada!",
      points: 15,
    },
    family: {
      title: "Keluarga Kita",
      rules: "Tebak siapakah anggota keluarga yang dimaksud!",
      points: 25,
    },
    food_sort: {
      title: "Sayur & Buah",
      rules: "Kelompokkan makanan ini ke dalam Sayur atau Buah!",
      points: 20,
    },
    hygiene: {
      title: "Kebersihan Diri",
      rules: "Pilih alat yang tepat untuk merawat kebersihan tubuhmu!",
      points: 15,
    },
    school: {
      title: "Alat Sekolah",
      rules: "Tebak alat sekolah apa yang sedang diceritakan!",
      points: 20,
    },
    shopping: {
      title: "Toko Kecil",
      rules:
        "Bantu ibu belanja dengan memasukkan barang yang sesuai ke keranjang!",
      points: 25,
    },
    word_scramble: {
      title: "Susun Kata",
      rules: "Susun huruf-huruf yang acak menjadi nama benda yang benar!",
      points: 25,
    },
    maze: {
      title: "Labirin Edukasi",
      rules: "Pilih jalan yang benar di labirin untuk sampai ke tujuan!",
      points: 30,
    },
    animal_matching: {
      title: "Induk & Anak Hewan",
      rules: "Cari induk dari anak hewan pintar ini!",
      points: 20,
    },
    number_sort: {
      title: "Urutkan Angka",
      rules:
        "Tekan tombol angka secara berurutan dari yang terkecil hingga terbesar!",
      points: 25,
    },
    missing_letter: {
      title: "Huruf Hilang",
      rules: "Pilih huruf yang tepat untuk melengkapi kata!",
      points: 20,
    },
    direction: {
      title: "Belajar Arah",
      rules: "Tebak huruf atau benda yang menghadap ke arah pertanyaanku!",
      points: 15,
    },
    flying_animal: {
      title: "Hewan Terbang",
      rules: "Dapatkah kamu menebak mana hewan yang pandai terbang?",
      points: 15,
    },
    water_animal: {
      title: "Hewan Air",
      rules: "Klik pada hewan yang hidup di dalam air!",
      points: 15,
    },
    catch_ball: {
      title: "Tangkap Bola",
      rules:
        "Geser keranjang ke kiri dan kanan untuk menangkap bola yang jatuh!",
      points: 30,
    },
    fast_target: {
      title: "Klik Target Cepat",
      rules: "Tekan lingkaran target secepat mungkin sebelum menghilang!",
      points: 25,
    },
    balloon_pop: {
      title: "Balon Pop",
      rules: "Pecahkan semua balon yang terbang ke atas layar!",
      points: 20,
    },
    catch_star: {
      title: "Tangkap Bintang",
      rules: "Gerakkan karakter untuk menangkap bintang jatuh!",
      points: 30,
    },
    bug_smash: {
      title: "Klik Serangga",
      rules: "Tangkap serangga nakal yang berlarian di layar!",
      points: 25,
    },
    drag_fruit: {
      title: "Drag Buah",
      rules: "Geser buah-buahan segar ini ke dalam keranjangnya!",
      points: 20,
    },
    shape_hole: {
      title: "Cocokkan Bentuk",
      rules: "Tarik bentuk potongan ini ke dalam lubang yang pas!",
      points: 25,
    },
    block_stack: {
      title: "Susun Balok",
      rules: "Susun balok dengan rapi agar tidak terjatuh!",
      points: 30,
    },
    draw_line: {
      title: "Tarik Garis",
      rules: "Tarik garis lurus untuk menghubungkan dua benda yang sama!",
      points: 20,
    },
    bubble_pop: {
      title: "Tekan Gelembung",
      rules: "Pecahkan semua gelembung yang beterbangan!",
      points: 15,
    },
    whack_mole: {
      title: "Pukul Mole",
      rules: "Pukul tikus tanah yang bersembunyi di dalam lubang!",
      points: 30,
    },
    find_object: {
      title: "Cari Objek",
      rules: "Cari dan ketuk mainan yang bersembunyi di layar!",
      points: 25,
    },
    sliding_puzzle: {
      title: "Puzzle Geser",
      rules: "Geser kotak ke ruang kosong untuk menyusun gambarnya!",
      points: 50,
    },
    coloring: {
      title: "Mewarnai",
      rules: "Pilih warna lalu ketuk gambar untuk mewarnai!",
      points: 20,
    },
    digital_clock: {
      title: "Jam Digital",
      rules: "Tebak cara membaca jam digital yang benar!",
      points: 20,
    },
    ensiklo_indo: {
      title: "Ensiklopedia Indonesia",
      rules: "Buka ensiklopedia hewan asli Indonesia yang sangat unik!",
      points: 0,
    },
    physics_stack: {
      title: "Menumpuk Menara",
      rules: "Susun benda setinggi mungkin tanpa menjatuhkannya!",
      points: 10,
    },
    pizza_fraction: {
      title: "Koki Cilik",
      rules: "Belajar mengenal potongan pecahan lewat pizza yang lezat!",
      points: 30,
    },
    weather_clothes: {
      title: "Jemuran Ajaib",
      rules: "Pasangkan pakaian yang cocok dengan cuaca di luar jendela!",
      points: 25,
    },
    bee_coding: {
      title: "Jalan Pulang Lebah",
      rules: "Susun perintah jalan agar Lebah sampai ke bunganya!",
      points: 50,
    },
    fossil_gali: {
      title: "Arkeolog Cilik",
      rules: "Gali dan bersihkan pasir untuk menemukan fosil dinosaurus!",
      points: 40,
    },
    fruit_balance: {
      title: "Timbangan Buah",
      rules: "Belajar menyeimbangkan berat benda dengan jumlah buah!",
      points: 35,
    },
    tooth_brush: {
      title: "Gosok Gigi",
      rules: "Bantu bersihkan kuman cokelat di gigi sampai putih berkilau!",
      points: 20,
    },
    taxonomy_sort: {
      title: "Kelompokkan Hewan",
      rules: "Urutkan hewan berdasarkan jenis dan ciri-cirinya!",
      points: 35,
    },
    symmetry_play: {
      title: "Cermin Ajaib",
      rules: "Lengkapi gambar di sisi kanan agar sama persis dengan sisi kiri!",
      points: 40,
    },
    life_cycle: {
      title: "Siklus Hidup",
      rules: "Urutkan tahapan pertumbuhan makhluk hidup dari kecil ke besar!",
      points: 40,
    },
    map_explorer: {
      title: "Penjelajah Peta",
      rules: "Ikuti petunjuk arah untuk sampai ke harta karun atau tujuan!",
      points: 45,
    },
    fossil_match: {
      title: "Museum Fosil",
      rules: "Cocokkan tulang belulang hewan dengan gambar hewannya!",
      points: 35,
    },
    recipe_steps: {
      title: "Urutan Resep",
      rules: "Bantu koki mengurutkan tahapan memasak camilan lezat ini!",
      points: 40,
    },
    sempoa_cilik: {
      title: "Sempoa Cilik",
      rules: "Geser manik-manik sempoa untuk menghitung jumlah yang diminta!",
      points: 35,
    },
    hidden_objects: {
      title: "Cari Benda",
      rules: "Temukan benda-benda yang tersembunyi di dalam ruangan!",
      points: 40,
    },
    packing_master: {
      title: "Packing Master",
      rules: "Bantu masukkan semua mainan ke dalam koper dengan rapi!",
      points: 45,
    },
    constellations: {
      title: "Teropong Bintang",
      rules:
        "Hubungkan bintang-bintang di langit untuk membentuk rasi bintang!",
      points: 50,
    },
    aim_practice: {
      title: "Panah Target",
      rules: "Ketuk pada target yang bergerak secepat mungkin!",
      points: 30,
    },
    line_tracer: {
      title: "Jejak Tali",
      rules: "Tarik garis mengikuti jalur berliku tanpa keluar garis!",
      points: 30,
    },
    laundry_sort: {
      title: "Laundri Cilik",
      rules: "Pisahkan baju putih dan baju berwarna agar tidak luntur!",
      points: 35,
    },
    healthy_plate: {
      title: "Bekal Sehat",
      rules: "Pilih 4 jenis makanan berbeda untuk bekal gizi seimbang!",
      points: 40,
    },
    home_safety: {
      title: "Detektif Aman",
      rules: "Cari benda-benda berbahaya di rumah yang harus dijauhkan!",
      points: 40,
    },
    recycle_factory: {
      title: "Daur Ulang",
      rules: "Pilah sampah sesuai jenisnya agar bisa didaur ulang!",
      points: 40,
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
  currentState.lastScrollPosition =
    window.scrollY || document.documentElement.scrollTop;

  document.getElementById("home").style.display = "none";
  document.getElementById("game-view").classList.add("active");

  initGame();
}

function goHome() {
  // Call any game specific cleanup if it exists
  if (currentState.extra && typeof currentState.extra.cleanup === "function") {
    currentState.extra.cleanup();
  }

  currentState.extra = {}; // reset extra state logic for next games

  document.getElementById("home").style.display = "block";
  document.getElementById("game-view").classList.remove("active");
  document.getElementById("game-container").innerHTML = "";

  // Restore scroll position
  if (currentState.lastScrollPosition !== undefined) {
    window.scrollTo({
      top: currentState.lastScrollPosition,
      behavior: "instant",
    });
  }
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
        
        <!-- Ad Slot in Intro -->
        <div class="ad-slot" style="margin-top: 30px;">
          <small>ADVERTISEMENT</small>
          <div class="ad-placeholder" id="intro-ad-slot">
            <!-- Space for Ad Code -->
            <script>
  atOptions = {
    'key' : '8389a7a5006a836aa5895355c11cfd02',
    'format' : 'iframe',
    'height' : 250,
    'width' : 300,
    'params' : {}
  };
</script>
<script src="https://www.highperformanceformat.com/8389a7a5006a836aa5895355c11cfd02/invoke.js"></script>
          </div>
        </div>
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
    case "trash":
      renderTrashGame();
      break;
    case "shapeMatch":
      renderShapeGame();
      break;
    case "clock":
      renderClockGame();
      break;
    case "body":
      renderBodyGame();
      break;
    case "traffic":
      renderTrafficGame();
      break;
    case "space":
      renderSpaceGame();
      break;
    case "music":
      renderMusicGame();
      break;
    case "flags":
      renderFlagsGame();
      break;
    case "weather":
      renderWeatherGame();
      break;
    case "time_sequence":
      renderTimeSequenceGame();
      break;
    case "transport":
      renderTransportGame();
      break;
    case "family":
      renderFamilyGame();
      break;
    case "food_sort":
      renderFoodSortGame();
      break;
    case "hygiene":
      renderHygieneGame();
      break;
    case "school":
      renderSchoolGame();
      break;
    case "shopping":
      renderShoppingGame();
      break;
    case "word_scramble":
      renderWordScrambleGame();
      break;
    case "maze":
      renderMazeGame();
      break;
    case "animal_matching":
      renderAnimalMatchingGame();
      break;
    case "number_sort":
      renderNumberSortGame();
      break;
    case "missing_letter":
      renderMissingLetterGame();
      break;
    case "direction":
      renderDirectionGame();
      break;
    case "flying_animal":
      renderFlyingAnimalGame();
      break;
    case "water_animal":
      renderWaterAnimalGame();
      break;
    case "catch_ball":
      renderCatchBallGame();
      break;
    case "fast_target":
      renderFastTargetGame();
      break;
    case "balloon_pop":
      renderBalloonPopGame();
      break;
    case "catch_star":
      renderCatchStarGame();
      break;
    case "bug_smash":
      renderBugSmashGame();
      break;
    case "drag_fruit":
      renderDragFruitGame();
      break;
    case "shape_hole":
      renderShapeHoleGame();
      break;
    case "block_stack":
      renderBlockStackGame();
      break;
    case "draw_line":
      renderDrawLineGame();
      break;
    case "bubble_pop":
      renderBubblePopGame();
      break;
    case "whack_mole":
      renderWhackMoleGame();
      break;
    case "find_object":
      renderFindObjectGame();
      break;
    case "sliding_puzzle":
      renderSlidingPuzzleGame();
      break;
    case "coloring":
      renderColoringGame();
      break;
    case "digital_clock":
      renderDigitalClockGame();
      break;
    case "ensiklo_indo":
      renderEnsikloGame();
      break;
    case "physics_stack":
      renderPhysicsStackGame();
      break;
    case "pizza_fraction":
      renderPizzaFractionGame();
      break;
    case "weather_clothes":
      renderWeatherClothesGame();
      break;
    case "bee_coding":
      renderBeeCodingGame();
      break;
    case "fossil_gali":
      renderFossilGaliGame();
      break;
    case "fruit_balance":
      renderFruitBalanceGame();
      break;
    case "tooth_brush":
      renderToothBrushGame();
      break;
    case "taxonomy_sort":
      renderTaxonomyGame();
      break;
    case "symmetry_play":
      renderSymmetryGame();
      break;
    case "life_cycle":
      renderLifeCycleGame();
      break;
    case "map_explorer":
      renderMapExplorerGame();
      break;
    case "fossil_match":
      renderFossilMatchGame();
      break;
    case "recipe_steps":
      renderRecipeGame();
      break;
    case "sempoa_cilik":
      renderSempoaGame();
      break;
    case "hidden_objects":
      renderHiddenObjectsGame();
      break;
    case "packing_master":
      renderPackingGame();
      break;
    case "constellations":
      renderConstellationGame();
      break;
    case "aim_practice":
      renderAimGame();
      break;
    case "line_tracer":
      renderLineTracerGame();
      break;
    case "laundry_sort":
      renderLaundryGame();
      break;
    case "healthy_plate":
      renderHealthyPlateGame();
      break;
    case "home_safety":
      renderHomeSafetyGame();
      break;
    case "recycle_factory":
      renderRecycleGame();
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
  const successMsg = `HEBAT! Kamu pintar sekali, ${currentState.userName}!`;

  container.innerHTML = `
        <div class="fade-in" style="text-align:center">
            <h1 style="font-size: 5rem">🌟</h1>
            <h2>HEBAT!</h2>
            <p style="font-size: 1.5rem; font-weight: 600; color: var(--primary);">${currentState.userName} pintar sekali!</p>
        </div>
    `;

  speak(successMsg);
  setTimeout(callback, 2000);
}
