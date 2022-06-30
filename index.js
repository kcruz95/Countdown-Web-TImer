// This is the date/time you want to countdown to
let countDownDate = new Date("24 Dec, 2022 23:59:59").getTime();

// Run myfunc every second
let myfunc = setInterval(function() {
  let now = new Date().getTime();
  let timeleft = countDownDate - now;

  // Calculate the amount of time left
  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60) / (1000 * 60)));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  // Result is output to the specific element
  document.getElementById("days").innerHTML = days + "d "
  document.getElementById("hours").innerHTML = hours + "h "
  document.getElementById("mins").innerHTML = mins + "m "
  document.getElementById("days").innerHTML = secs + "s "

  // Display the following message when the countdown is over
  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = ""
    document.getElementById("mins").innerHTML = ""
    document.getElementById("days").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME'S UP!! MERRY XMAS!!"
    document.getElementById("end").innerHTML = "時間到了!! 聖誕節快樂!!"
  }
}, 1000);