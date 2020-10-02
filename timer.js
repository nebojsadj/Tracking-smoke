timer();

function timer() {
  let time = new Date();
  if (time.getHours() < 10) {
    sati.innerHTML = '0' + time.getHours();
  }else {
    sati.innerHTML = time.getHours();
  }
  if (time.getMinutes() < 10) {
    minuti.innerHTML = '0' + time.getMinutes();
  }else {
    minuti.innerHTML = time.getMinutes();
  }
  if (time.getSeconds() < 10) {
    sekunde.innerHTML = '0' + time.getSeconds();
  }else {
    sekunde.innerHTML = time.getSeconds();
  };
// vreme od predhodne cigarete
  if (localStorage.startMin && localStorage.startSat && localStorage.startDan) {
      min.innerHTML = time.getMinutes() - localStorage.startMin;
      sat.innerHTML = time.getHours() - localStorage.startSat;
      dani.innerHTML = time.getDate() - localStorage.startDan;
    if (time.getMinutes() < localStorage.startMin) {
        min.innerHTML = 60 + time.getMinutes() - localStorage.startMin;
        sat.innerHTML = time.getHours() - 1 - localStorage.startSat;
    }
    if (time.getHours() < localStorage.startSat) {
        sat.innerHTML = 24 + time.getHours() - localStorage.startSat;
        dani.innerHTML = time.getDate() - 1 - localStorage.startDan;
    }
  }else {
    min.innerHTML = 0;
    sat.innerHTML = 0;
    dani.innerHTML = 0;
  };
};
