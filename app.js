const clockDate = document.querySelector(".clock__date");
const clockTime = document.querySelector(".clock__time");

const today = new Date();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weeks = [
    "Sunday",
    "Monday",
    "Thuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

function getDate(today) {
    const year = today.getFullYear();
    const month = months[today.getMonth()];
    const week = weeks[today.getDay()];
    const day = today.getDate();

    const result = `${week}, ${day} ${month}, ${year}`;

    clockDate.innerHTML = result;
}
getDate(today);

function getTime() {
    const today = new Date();

    let hour = today.getHours();
    let hours = hour % 12;
    hour = hours ? hours : 12;
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let pmam = hours > 12 ? "PM" : "AM";

    let h = hour < 10 ? `0${hour}` : hour;
    let m = minute < 10 ? `0${minute}` : minute;
    let s = second < 10 ? `0${second}` : second;

    clockTime.innerHTML = `${h}:${m}:${s} ${pmam}`;
}
setInterval(getTime, 1000);
