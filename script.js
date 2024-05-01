// JavaScript for dynamic greeting, date, and time
function updateDateTime() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;
  
    if (hour < 12) {
      greeting = "Selamat pagi";
    } else if (hour < 18) {
      greeting = "Selamat siang";
    } else {
      greeting = "Selamat malam";
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
  