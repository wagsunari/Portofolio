// Fungsi untuk mengaktifkan atau menonaktifkan menu navigasi
document.getElementById('menu-icon').addEventListener('click', function () {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

// Fungsi pencarian (optional)
document.getElementById('search-icon').addEventListener('click', function () {
    alert("Fungsi pencarian akan segera hadir!");
});

// Pilih elemen sidebar
const sideMenu = document.getElementById('sideMenu');

// Fungsi untuk membuka sidebar
function openSideMenu() {
    sideMenu.style.right = '0'; // Geser sidebar ke dalam layar
}

// Fungsi untuk menutup sidebar
function closeSideMenu() {
    sideMenu.style.right = '-30%'; // Geser sidebar ke luar layar
}

// Tambahkan event listener pada tombol atau ikon yang memicu sidebar
document.getElementById('menu-icon').addEventListener('click', openSideMenu);

// Tambahkan event untuk menutup sidebar (opsional, misalnya di area kosong)
document.body.addEventListener('click', function (event) {
    if (!sideMenu.contains(event.target) && event.target.id !== 'menu-icon') {
        closeSideMenu();
    }
});

// Fungsi untuk mendapatkan hari dan tanggal saat ini
function getCurrentDate() {
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    
    const today = new Date();
    const dayName = days[today.getDay()]; // Mengambil hari dalam bentuk string
    const date = today.getDate(); // Tanggal (tanggal bulan)
    const monthName = months[today.getMonth()]; // Nama bulan
    const year = today.getFullYear(); // Tahun
    
    // Format: Hari, Tanggal Bulan Tahun
    return `${dayName}, ${date} ${monthName} ${year}`;
}

// Menampilkan tanggal dan hari di elemen dengan id "creation-time"
document.getElementById('creation-time').innerText = getCurrentDate();
