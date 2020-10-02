function date() {
  let time = new Date();
  dan.innerHTML = time.getDate();
  mesec.innerHTML = time.getMonth() + 1;
  godina.innerHTML = time.getFullYear() + '.';
};
date();

setInterval(function () {
  timer();
  date();
  refreshHistory();
},1000);
