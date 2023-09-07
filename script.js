const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
const currentTime = currentDate.toUTCString();

document.getElementById("currentDay").textContent = currentDayOfWeek;
document.getElementById("currentTime").textContent = currentTime;