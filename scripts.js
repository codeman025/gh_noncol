// Get the date of the next upcoming game (replace this with your actual game date)
const nextGameDate = new Date('2023-08-15T18:00:00');

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = nextGameDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = `
    ${days}d ${hours}h ${minutes}m ${seconds}s
  `;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
