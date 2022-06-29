let countDownDate = new Date("1 Jan, 1970 00:00:00.000 GMT").getTime();

let myfunc = setInterval(function() {

  let now = new Date().getTime();
  let timeleft = countdownDate - now;

  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60) / (1000 * 60)));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

}, 1000)

//https://www.educative.io/answers/how-to-create-a-countdown-timer-using-javascript