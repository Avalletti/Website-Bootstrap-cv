function updateClock() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.querySelector('.clock-day').textContent = day;
    document.querySelector('.clock-hours').textContent = hours;
    document.querySelector('.clock-minutes').textContent = minutes;
    document.querySelector('.clock-seconds').textContent = seconds;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock immediately