const INDO_ANIMALS_DB = [
  {
    name: "Orangutan",
    emj: "🦧",
    origin: "Kalimantan & Sumatra",
    fact: "Kera besar yang sangat cerdas dan suka tinggal di pohon.",
  },
  {
    name: "Komodo",
    emj: "🦎",
    origin: "Pulau Komodo",
    fact: "Kadal terbesar di dunia yang hanya ada di Indonesia.",
  },
  {
    name: "Harimau Sumatra",
    emj: "🐅",
    origin: "Sumatra",
    fact: "Harimau terkecil yang masih hidup, punya garis hitam yang rapat.",
  },
  {
    name: "Gajah Sumatra",
    emj: "🐘",
    origin: "Sumatra",
    fact: "Hewan mamalia darat terbesar di Indonesia yang sangat setia kawan.",
  },
  {
    name: "Badak Jawa",
    emj: "🦏",
    origin: "Ujung Kulon",
    fact: "Badak bercula satu yang sangat langka di dunia.",
  },
  {
    name: "Anoa",
    emj: "🐂",
    origin: "Sulawesi",
    fact: "Sering disebut kerbau kerdil karena ukurannya yang kecil.",
  },
  {
    name: "Babirusa",
    emj: "🐗",
    origin: "Sulawesi",
    fact: "Punya taring panjang yang melengkung menembus moncongnya.",
  },
  {
    name: "Burung Cendrawasih",
    emj: "🦜",
    origin: "Papua",
    fact: "Dijuluki Burung Surga karena bulunya yang sangat indah.",
  },
  {
    name: "Bekantan",
    emj: "🐒",
    origin: "Kalimantan",
    fact: "Monyet yang unik karena memiliki hidung yang panjang dan besar.",
  },
  {
    name: "Jalak Bali",
    emj: "🐦",
    origin: "Bali",
    fact: "Burung cantik berbulu putih bersih dengan lingkaran biru di mata.",
  },
  {
    name: "Tarsius",
    emj: "🐒",
    origin: "Sulawesi",
    fact: "Primata terkecil di dunia dengan mata yang sangat besar.",
  },
  {
    name: "Kakatua Raja",
    emj: "🦜",
    origin: "Papua",
    fact: "Burung kakatua besar berwarna hitam dengan pipi merah merona.",
  },
  {
    name: "Elang Jawa",
    emj: "🦅",
    origin: "Jawa",
    fact: "Inspirasi dari lambang negara kita, Garuda Pancasila.",
  },
  {
    name: "Tapir",
    emj: "🐗",
    origin: "Sumatra",
    fact: "Hewan unik yang terlihat seperti campuran babi dan gajah.",
  },
  {
    name: "Kangguru Pohon",
    emj: "🦘",
    origin: "Papua",
    fact: "Kangguru yang tidak melompat di tanah, tapi mahir memanjat pohon.",
  },
  {
    name: "Banteng Jawa",
    emj: "🐃",
    origin: "Jawa",
    fact: "Sapi liar yang sangat kuat dan hidup di hutan jati.",
  },
  {
    name: "Kuskus",
    emj: "🐒",
    origin: "Papua / Maluku",
    fact: "Mamalia berkantung yang gerakannya sangat lambat dan tenang.",
  },
  {
    name: "Maleo",
    emj: "🐦",
    origin: "Sulawesi",
    fact: "Burung unik yang menanam telurnya di dalam pasir panas bumi.",
  },
  {
    name: "Penyu Hijau",
    emj: "🐢",
    origin: "Seluruh Laut RI",
    fact: "Kura-kura laut besar yang suka makan ganggang laut.",
  },
  {
    name: "Ikan Arwana",
    emj: "🐟",
    origin: "Kalimantan / Papua",
    fact: "Ikan hias yang dijuluki Ikan Naga karena bentuk tubuhnya.",
  },
  {
    name: "Monyet Hitam",
    emj: "🐒",
    origin: "Sulawesi",
    fact: "Monyet dengan rambut jambul yang keren dan tubuh hitam legam.",
  },
  {
    name: "Lumba-Lumba Hidung Botol",
    emj: "🐬",
    origin: "Perairan RI",
    fact: "Hewan laut yang sangat suka bermain dan bersahabat dengan manusia.",
  },
  {
    name: "Ikan Pari Manta",
    emj: "🐟",
    origin: "Laut Timur RI",
    fact: "Ikan pari raksasa yang terlihat seperti burung terbang di dalam air.",
  },
  {
    name: "Paus Biru",
    emj: "🐋",
    origin: "Laut dalam RI",
    fact: "Hewan terbesar di bumi yang suka melintasi laut Indonesia.",
  },
  {
    name: "Beruang Madu",
    emj: "🐻",
    origin: "Sumatra / Kalimantan",
    fact: "Beruang terkecil di dunia yang sangat suka makan madu.",
  },
  {
    name: "Kelelawar Buah",
    emj: "🦇",
    origin: "Seluruh Indonesia",
    fact: "Membantu menanam pohon dengan menyebarkan biji buah yang dimakan.",
  },
  {
    name: "Tupai Tanah",
    emj: "🐿️",
    origin: "Jawa / Sumatra",
    fact: "Lincah berlari di dahan pohon untuk mencari kacang-kacangan.",
  },
  {
    name: "Ular Sanca",
    emj: "🐍",
    origin: "Hutan RI",
    fact: "Ular besar yang tidak berbisa tapi lilitannya sangat kuat.",
  },
  {
    name: "Katak Pelangi",
    emj: "🐸",
    origin: "Kalimantan",
    fact: "Katak berwarna warni indah yang jarang ditemukan.",
  },
  {
    name: "Kumbang Badak",
    emj: "🐞",
    origin: "Kebun Kita",
    fact: "Serangga dengan tanduk kuat yang bisa mengangkat beban berat.",
  },
  {
    name: "Capung Jarum",
    emj: "🚁",
    origin: "Dekat Sungai",
    fact: "Penerbang ulung yang suka makan nyamuk di sekitarnya.",
  },
  {
    name: "Kupu-Kupu Barong",
    emj: "🦋",
    origin: "Bali",
    fact: "Kupu-kupu raksasa yang rentang sayapnya sangat lebar.",
  },
  {
    name: "Ikan Badut (Nemo)",
    emj: "🐠",
    origin: "Terumbu Karang",
    fact: "Ikan kecil ceria yang tinggal di dalam anemon laut.",
  },
  {
    name: "Gurita Cincin Biru",
    emj: "🐙",
    origin: "Laut RI",
    fact: "Gurita kecil dengan corak lingkaran biru yang cantik.",
  },
  {
    name: "Bintang Laut Biru",
    emj: "⭐",
    origin: "Pantai RI",
    fact: "Memiliki lima lengan dan bisa menempel erat di karang.",
  },
  {
    name: "Udang Mantis",
    emj: "🦐",
    origin: "Lantai Laut",
    fact: "Udang petinju yang memiliki pukulan sangat cepat dan kuat.",
  },
  {
    name: "Kepiting Kenari",
    emj: "🦀",
    origin: "Hutan Pantai",
    fact: "Kepiting darat terbesar yang bisa membelah buah kelapa.",
  },
  {
    name: "Duyung (Dugong)",
    emj: "🧜‍♀️",
    origin: "Padang Lamun RI",
    fact: "Mamalia laut lembut yang sering disebut Sapi Laut.",
  },
  {
    name: "Hiu Paus",
    emj: "🦈",
    origin: "Laut RI",
    fact: "Hiu raksasa yang hanya makan plankton dan sangat jinak.",
  },
  {
    name: "Kuda Sumbawa",
    emj: "🐎",
    origin: "Pulau Sumbawa",
    fact: "Kuda liar kecil yang sangat kuat berlari di padang savana.",
  },
  {
    name: "Musang Pandan",
    emj: "🐱",
    origin: "Seluruh Negara",
    fact: "Pandai memanjat dan aromanya wangi seperti daun pandan.",
  },
  {
    name: "Kancil",
    emj: "🦌",
    origin: "Hutan Jawa",
    fact: "Hewan kecil yang cerdik dalam cerita dongeng rakyat.",
  },
  {
    name: "Kijang",
    emj: "🦌",
    origin: "Hutan Tropis",
    fact: "Pelari cepat yang memiliki tanduk kecil bercabang.",
  },
  {
    name: "Landak",
    emj: "🦔",
    origin: "Kebun Rimba",
    fact: "Memiliki duri tajam untuk melindungi diri dari musuh.",
  },
  {
    name: "Trenggiling",
    emj: "🐘",
    origin: "Hutan Sumatra",
    fact: "Memiliki sisik keras dan suka menggulung seperti bola.",
  },
  {
    name: "Kukang",
    emj: "🐒",
    origin: "Pohon Lindung",
    fact: "Si malu-malu yang bergerak sangat pelan di malam hari.",
  },
  {
    name: "Rangkong",
    emj: "🐦",
    origin: "Hutan Kalimantan",
    fact: "Burung dengan paruh besar yang memiliki 'tanduk' di atasnya.",
  },
  {
    name: "Kenari Melayu",
    emj: "🐦",
    origin: "Hutan Pegunungan",
    fact: "Burung kecil bersuara merdu yang lincah.",
  },
  {
    name: "Walet",
    emj: "🐦",
    origin: "Gua / Gedung",
    fact: "Membuat sarang dari air liur yang sangat berharga.",
  },
  {
    name: "Elang Bondol",
    emj: "🦅",
    origin: "Jakarta / Pantai",
    fact: "Maskot kota Jakarta yang pandai menangkap ikan.",
  },
  {
    name: "Luwak",
    emj: "🦊",
    origin: "Kebun Kopi",
    fact: "Membantu menghasilkan kopi paling enak di dunia.",
  },
  {
    name: "Kucing Bakau",
    emj: "🐯",
    origin: "Mangrove Sumatra",
    fact: "Kucing liar yang sangat pandai berenang menangkap ikan.",
  },
  {
    name: "Macan Tutul Jawa",
    emj: "🐆",
    origin: "Hutan Gunung",
    fact: "Kucing besar yang pandai bersembunyi di balik pohon.",
  },
  {
    name: "Ayam Hutan Hijau",
    emj: "🐓",
    origin: "Padang Rumput",
    fact: "Nenek moyang ayam yang bulunya berkilau hijau indah.",
  },
  {
    name: "Kura-Kura Ambon",
    emj: "🐢",
    origin: "Air Tawar RI",
    fact: "Memiliki tempurung gelap dan suka makan kangkung.",
  },
  {
    name: "Tokek",
    emj: "🦎",
    origin: "Rumah & Pohon",
    fact: "Suaranya khas dan suka memakan serangga terbang.",
  },
  {
    name: "Biawak",
    emj: "🦎",
    origin: "Pinggir Sungai",
    fact: "Penyelam handal yang sering mencari makan di rawa-rawa.",
  },
  {
    name: "Sidat",
    emj: "🐍",
    origin: "Sungai ke Laut",
    fact: "Ikan mirip belut yang melakukan perjalanan sangat jauh.",
  },
  {
    name: "Belut Sawah",
    emj: "🐍",
    origin: "Lumpur Sawah",
    fact: "Tubuhnya sangat licin dan suka bersembunyi di dalam tanah.",
  },
  {
    name: "Ikan Gabus",
    emj: "🐟",
    origin: "Rawa Danau",
    fact: "Ikan predator lokal yang sangat sehat untuk tubuh kita.",
  },
  {
    name: "Ikan Sepat",
    emj: "🐟",
    origin: "Sungai Kecil",
    fact: "Ikan pipih yang lincah berenang di antara eceng gondok.",
  },
  {
    name: "Ikan Lele Lokal",
    emj: "🐟",
    origin: "Air Tawar",
    fact: "Punya kumis panjang sebagai alat peraba di air keruh.",
  },
  {
    name: "Gurami",
    emj: "🐟",
    origin: "Kolam Penduduk",
    fact: "Ikan yang pertumbuhannya tenang dan rasanya enak.",
  },
  {
    name: "Kepiting Bakau",
    emj: "🦀",
    origin: "Hutan Bakau",
    fact: "Memiliki capit besar untuk memecah kerang di lumpur.",
  },
  {
    name: "Rajungan",
    emj: "🦀",
    origin: "Laut Dangkal",
    fact: "Kepiting laut yang pandai berenang dengan kaki belakangnya.",
  },
  {
    name: "Uburbur Bulan",
    emj: "🪼",
    origin: "Laut Tenang",
    fact: "Terlihat seperti payung transparan yang menari di air.",
  },
  {
    name: "Kuda Laut Kuning",
    emj: "🐎",
    origin: "Padang Lamun",
    fact: "Unik karena ayahnya yang menjaga telur di dalam perut.",
  },
  {
    name: "Sotong",
    emj: "🦑",
    origin: "Terumbu Karang",
    fact: "Bisa berubah warna dengan cepat untuk bersembunyi.",
  },
  {
    name: "Kerang Kima",
    emj: "🐚",
    origin: "Taman Laut",
    fact: "Kerang raksasa yang ukurannya bisa sebesar meja!",
  },
  {
    name: "Siput Laut (Nudi)",
    emj: "🐌",
    origin: "Karang Dalam",
    fact: "Siput tanpa cangkang yang warnanya sangat cerah warni.",
  },
  {
    name: "Burung Unta Kasuari",
    emj: "🐦",
    origin: "Papua",
    fact: "Burung besar yang tidak bisa terbang, tapi tendangannya kuat.",
  },
  {
    name: "Nuri Merah",
    emj: "🦜",
    origin: "Maluku",
    fact: "Burung yang sangat pintar menirukan suara di sekitarnya.",
  },
  {
    name: "Kepodang",
    emj: "🐦",
    origin: "Hutan Jawa",
    fact: "Si kuning cantik yang suaranya mirip siulan manusia.",
  },
  {
    name: "Murai Batu",
    emj: "🐦",
    origin: "Sumatra / Jawa",
    fact: "Burung petarung yang kicauannya sangat merdu sekali.",
  },
  {
    name: "Kacer",
    emj: "🐦",
    origin: "Perkebunan",
    fact: "Suka menari sambil berkicau dengan gaya yang gagah.",
  },
  {
    name: "Perkutut",
    emj: "🐦",
    origin: "Pedesaan",
    fact: "Suaranya tenang dan sering terdengar di pagi hari.",
  },
  {
    name: "Cucak Ijo",
    emj: "🐦",
    origin: "Rimba Tropis",
    fact: "Burung hijau yang mahir menirukan berbagai suara alam.",
  },
  {
    name: "Pleci",
    emj: "🐦",
    origin: "Pohon Buah",
    fact: "Burung mungil dengan lingkaran putih seperti kacamata.",
  },
  {
    name: "Prenjak",
    emj: "🐦",
    origin: "Semak Belukar",
    fact: "Kecil-kecil pemberani yang suaranya sangat nyaring.",
  },
  {
    name: "Gereja",
    emj: "🐦",
    origin: "Atas Rumah",
    fact: "Selalu berkumpul bersama teman-temannya mencari makan.",
  },
  {
    name: "Pipit",
    emj: "🐦",
    origin: "Sawah Padi",
    fact: "Suka terbang berkelompok di hamparan padi yang kuning.",
  },
  {
    name: "Bangau Putih",
    emj: "🦢",
    origin: "Rawa-rawa",
    fact: "Kaki panjangnya membantu berdiri tenang mencari ikan.",
  },
  {
    name: "Kuntul",
    emj: "🦢",
    origin: "Pinggir Sawah",
    fact: "Sering membantu petani dengan memakan hama di sawah.",
  },
  {
    name: "Belibis",
    emj: "🦆",
    origin: "Danau Air Tawar",
    fact: "Bebek liar yang pandai terbang jauh mencari tempat baru.",
  },
  {
    name: "Mandar",
    emj: "🦆",
    origin: "Rawa Gelap",
    fact: "Berjalan di atas daun teratai dengan kaki panjangnya.",
  },
  {
    name: "Puyuh Hutan",
    emj: "🐦",
    origin: "Lantai Hutan",
    fact: "Berlari cepat di sela rumput dan telurnya bertitik unik.",
  },
  {
    name: "Dara Laut",
    emj: "🐦",
    origin: "Pesisir Pantai",
    fact: "Pencari ikan yang hebat dengan menukik tajam ke air.",
  },
  {
    name: "Cerek Pantai",
    emj: "🐦",
    origin: "Pasir Pantai",
    fact: "Berlari maju mundur mengikuti ombak mencari cacing.",
  },
  {
    name: "Kirik-kirik",
    emj: "🐦",
    origin: "Udara Cerah",
    fact: "Menangkap serangga di udara sambil terbang akrobatik.",
  },
  {
    name: "Pelatuk",
    emj: "🐦",
    origin: "Batang Pohon",
    fact: "Mematuk kayu pohon untuk mencari larva serangga enak.",
  },
  {
    name: "Colibri (Ninja)",
    emj: "🐦",
    origin: "Bunga Mekar",
    fact: "Sayapnya bergetar sangat cepat saat mengisap madu bunga.",
  },
  {
    name: "Lebah Madu Klanceng",
    emj: "🐝",
    origin: "Hutan Bambu",
    fact: "Lebah kecil tanpa sengat yang menghasilkan madu asam manis.",
  },
  {
    name: "Rayap Hutan",
    emj: "🐜",
    origin: "Kayu Lapuk",
    fact: "Bekerja sama membangun istana tanah yang sangat tinggi.",
  },
  {
    name: "Belalang Sembah",
    emj: "🦟",
    origin: "Dedaunan Hijau",
    fact: "Diam tenang seperti sedang berdoa menunggu mangsa.",
  },
  {
    name: "Jangkrik",
    emj: "🦗",
    origin: "Tanah Malam",
    fact: "Suara 'krik-krik' nya menemani kita saat malam sepi.",
  },
  {
    name: "Orong-orong",
    emj: "🦗",
    origin: "Bawah Tanah",
    fact: "Jangkrik tanah yang pandai menggali lubang dengan kaki depan.",
  },
  {
    name: "Ulat Sutra",
    emj: "🐛",
    origin: "Pohon Murbei",
    fact: "Menghasilkan benang sutra halus yang sangat mahal harganya.",
  },
  {
    name: "Gajah Kalimantan",
    emj: "🐘",
    origin: "Hutan Borneo",
    fact: "Gajah kerdil yang ekornya panjang menyentuh tanah.",
  },
  {
    name: "Kancil Jawa",
    emj: "🦌",
    origin: "Gunung Salak",
    fact: "Saking kecilnya, dia terlihat seperti bayi rusa selamanya.",
  },
  {
    name: "Otak-otak (Ikan)",
    emj: "🐟",
    origin: "Sungai Sumatra",
    fact: "Ikan asli Indonesia yang namanya sering jadi cemilan enak!",
  },
];

function renderEnsikloGame() {
  let html = `
        <div class="ensiklo-header" style="text-align:center; padding: 10px;">
            <h2 style="color: var(--primary)">🐾 Ensiklopedia Indonesia</h2>
            <p>Ketuk hewan untuk mengenal keunikannya!</p>
            <input type="text" id="ensiklo-search" placeholder="Cari nama hewan..." 
                   style="width: 80%; padding: 12px; border-radius: 20px; border: 2px solid var(--secondary); margin: 10px 0;"
                   onkeyup="filterEnsiklo()">
        </div>
        
        <div id="ensiklo-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 15px; padding: 10px; max-height: 450px; overflow-y: auto; border-radius: 15px; background: #fff8f8;">
            ${INDO_ANIMALS_DB.map(
              (animal, idx) => `
                <div class="ensiklo-card fade-in" 
                     style="background: white; border: 3px solid #ffeeee; border-radius: 15px; padding: 15px; text-align: center; cursor: pointer; transition: 0.3s;"
                     onclick="showAnimalDetail(${idx})">
                    <span style="font-size: 3rem; display: block;">${animal.emj}</span>
                    <strong style="color: #444; font-size: 0.9rem;">${animal.name}</strong>
                </div>
            `,
            ).join("")}
        </div>

        <!-- Detail Modal (Hidden by default) -->
        <div id="ensiklo-modal" style="display:none; position: fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); z-index: 1000; align-items:center; justify-content:center;">
             <div style="background: white; width: 85%; max-width: 400px; padding: 25px; border-radius: 30px; text-align: center; position: relative;" class="scale-in">
                <button onclick="closeEnsikloModal()" style="position: absolute; top: 10px; right: 15px; background: none; border: none; font-size: 2rem; cursor: pointer;">&times;</button>
                <div id="modal-emj" style="font-size: 6rem; margin-bottom: 10px;"></div>
                <h3 id="modal-name" style="color: var(--primary); font-size: 1.8rem; margin: 10px 0;"></h3>
                <p id="modal-origin" style="color: var(--secondary); font-weight: bold; margin-bottom: 15px;"></p>
                <div style="background: #fdf2f2; padding: 15px; border-radius: 15px; line-height: 1.5; color: #555;" id="modal-fact"></div>
                <button class="btn-choice" style="margin-top: 20px; background: var(--success); color: white;" id="modal-speak-btn">🔊 Dengar Suara</button>
             </div>
        </div>
    `;
  updateContainer(html);

  window.filterEnsiklo = () => {
    const val = document.getElementById("ensiklo-search").value.toLowerCase();
    const cards = document.querySelectorAll(".ensiklo-card");
    cards.forEach((card, idx) => {
      const name = INDO_ANIMALS_DB[idx].name.toLowerCase();
      card.style.display = name.includes(val) ? "block" : "none";
    });
  };

  window.showAnimalDetail = (idx) => {
    const a = INDO_ANIMALS_DB[idx];
    document.getElementById("modal-emj").innerText = a.emj;
    document.getElementById("modal-name").innerText = a.name;
    document.getElementById("modal-origin").innerText = "📍 Asal: " + a.origin;
    document.getElementById("modal-fact").innerText = a.fact;
    document.getElementById("ensiklo-modal").style.display = "flex";

    const speakTxt = `${a.name}. Asalnya dari ${a.origin}. Tahukah kamu? ${a.fact}`;
    document.getElementById("modal-speak-btn").onclick = () => speak(speakTxt);
    speak(speakTxt);
  };

  window.closeEnsikloModal = () => {
    document.getElementById("ensiklo-modal").style.display = "none";
    window.speechSynthesis.cancel();
  };
}
