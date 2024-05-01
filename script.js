
// JavaScript for dynamic greeting, date, and time
function updateDateTime() {
  const now = new Date();
  const hour = now.getHours();
  let greeting;
  
  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Night";
  }
  
  const dateElement = document.getElementById("date");
  const timeElement = document.getElementById("time");
  dateElement.textContent = now.toLocaleDateString("id-ID");
  timeElement.textContent = now.toLocaleTimeString("id-ID");
}


// Update date and time every second
setInterval(updateDateTime, 1000);

// Call the function immediately to display date and time
updateDateTime();


// Ambil elemen panah
const arrow = document.querySelector('.explore-btn::after');

// Tambahkan event listener untuk menangani animasi saat kursor berada di atas tombol
arrow.parentElement.addEventListener('mouseenter', function() {
  // Tambahkan class 'animate' untuk memulai animasi
  arrow.classList.add('animate');
});

// Tambahkan event listener untuk menghentikan animasi saat kursor meninggalkan tombol
arrow.parentElement.addEventListener('mouseleave', function() {
  // Hapus class 'animate' untuk menghentikan animasi
  arrow.classList.remove('animate');
});


  // Ambil semua elemen kartu
  const cards = document.querySelectorAll('.card');
  
  // Fungsi untuk menemukan tinggi maksimum dari semua kartu
  function findMaxHeight(cards) {
    let maxHeight = 0;
    cards.forEach(card => {
      const height = card.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });
    return maxHeight;
  }

  // Atur tinggi semua kartu ke tinggi maksimum
  function setCardHeight(cards, height) {
    cards.forEach(card => {
      card.style.height = height + 'px';
    });
  }

  
  // Panggil fungsi-fungsi di atas saat dokumen selesai dimuat
  document.addEventListener('DOMContentLoaded', function() {
    const maxHeight = findMaxHeight(cards);
    setCardHeight(cards, maxHeight);
  });