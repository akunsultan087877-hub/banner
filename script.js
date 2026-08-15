const games = [
  {
    id: 1, name: "Neon Racer", category: "RACING", rating: "4.8",
    price: "Gratis", icon: "🏎️",
    description: "Balapan arcade futuristik dengan lintasan neon, kendaraan cepat, dan tantangan skor tinggi."
  },
  {
    id: 2, name: "Galaxy Quest", category: "ACTION", rating: "4.7",
    price: "Rp 19.000", icon: "🚀",
    description: "Jelajahi galaksi, hadapi musuh, dan selesaikan misi dalam petualangan luar angkasa."
  },
  {
    id: 3, name: "Mystic Puzzle", category: "PUZZLE", rating: "4.6",
    price: "Gratis", icon: "🧩",
    description: "Game puzzle santai dengan teka-teki bertingkat dan tantangan yang makin sulit."
  },
  {
    id: 4, name: "Dungeon Hero", category: "ADVENTURE", rating: "4.9",
    price: "Rp 29.000", icon: "⚔️",
    description: "Masuki dungeon misterius, kumpulkan item, dan kalahkan monster untuk menjadi pahlawan."
  },
  {
    id: 5, name: "Shadow Arena", category: "ACTION", rating: "4.5",
    price: "Rp 15.000", icon: "🥷",
    description: "Arena aksi cepat dengan karakter bayangan dan pertarungan penuh strategi."
  },
  {
    id: 6, name: "Ocean Explorer", category: "ADVENTURE", rating: "4.7",
    price: "Gratis", icon: "🌊",
    description: "Eksplorasi dunia bawah laut dan temukan rahasia yang tersembunyi."
  },
  {
    id: 7, name: "Turbo Kart", category: "RACING", rating: "4.4",
    price: "Gratis", icon: "🏁",
    description: "Balapan kart penuh aksi dengan trek unik dan power-up."
  },
  {
    id: 8, name: "Brain Blocks", category: "PUZZLE", rating: "4.8",
    price: "Rp 9.000", icon: "🧠",
    description: "Susun blok, pecahkan pola, dan raih skor tertinggi."
  }
];

const grid = document.getElementById("gameGrid");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const modal = document.getElementById("gameModal");
const cartCount = document.getElementById("cartCount");
let activeCategory = "ALL";
let cart = 0;
let selectedGame = null;

function renderGames() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = games.filter(game => {
    const categoryMatch = activeCategory === "ALL" || game.category === activeCategory;
    const searchMatch = `${game.name} ${game.category}`.toLowerCase().includes(query);
    return categoryMatch && searchMatch;
  });

  grid.innerHTML = filtered.map(game => `
    <article class="game-card">
      <div class="cover">${game.icon}</div>
      <div class="card-body">
        <span class="tag">${game.category}</span>
        <h3>${game.name}</h3>
        <div class="meta">
          <span>⭐ ${game.rating}</span>
          <span>PC / Mobile</span>
        </div>
        <div class="price">${game.price}</div>
        <button class="details-btn" onclick="openGame(${game.id})">LIHAT DETAIL</button>
      </div>
    </article>
  `).join("");

  emptyState.hidden = filtered.length !== 0;
}

function openGame(id) {
  selectedGame = games.find(game => game.id === id);
  document.getElementById("modalIcon").textContent = selectedGame.icon;
  document.getElementById("modalCategory").textContent = selectedGame.category;
  document.getElementById("modalTitle").textContent = selectedGame.name;
  document.getElementById("modalDescription").textContent = selectedGame.description;
  document.getElementById("modalRating").textContent = `⭐ ${selectedGame.rating}`;
  document.getElementById("modalPrice").textContent = selectedGame.price;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeGame() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

function toast(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2200);
}

document.querySelectorAll(".category").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".category").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.category;
    renderGames();
  });
});

searchInput.addEventListener("input", renderGames);
document.getElementById("closeModal").addEventListener("click", closeGame);

modal.addEventListener("click", event => {
  if (event.target === modal) closeGame();
});

document.getElementById("addCartBtn").addEventListener("click", () => {
  cart++;
  cartCount.textContent = cart;
  toast(`${selectedGame.name} ditambahkan ke keranjang`);
  closeGame();
});

document.getElementById("cartBtn").addEventListener("click", () => {
  toast(cart ? `Keranjang berisi ${cart} item` : "Keranjang masih kosong");
});

document.getElementById("notifyBtn").addEventListener("click", () => {
  toast("Fitur notifikasi akan tersedia pada versi berikutnya.");
});

renderGames();
