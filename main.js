const clock = document.querySelector('.clock span');

function updateClock() {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const am_pm = hours >= 12 ? 'PM' : 'AM'
    clock.innerText = `${hours > 9 ? hours : "0" + hours}:${minutes > 9 ? minutes : "0" + minutes}:${seconds > 9 ? seconds : "0" + seconds} ${am_pm}`
}

setInterval(() => {
  updateClock()

}, 100);
