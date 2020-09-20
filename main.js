// uvid u prosecnu kolicinu cigareta na dnevnom,nedeljnom mesecnom,godisnjem nivou
function yellowCard() {
  averageForDay = localStorage.cigarettesAverage;
  dayC.innerHTML = averageForDay;
  weekC.innerHTML = averageForDay * 7;
  monthC.innerHTML = averageForDay * 30;
  yearC.innerHTML = averageForDay * 365;
};
// konzumiranje cigareta u toku dana
function greenCard() {
    numAverage.innerHTML = localStorage.cigarettesAverage;
    goingSmoke.onclick = function () {
        gif1();
        previousCigar();
        localStorage.counter++;
        cigarIncrement.innerHTML =  parseInt(localStorage.counter);
    };
    manuallySmoke.onclick = function () {
        manuallyInput.focus();
        manuallyInput.onkeydown = function (e) {
          if (e.keyCode == 13 && manuallyInput.value !== '') {
              gif2();
              previousCigar();
              cigarIncrement.innerHTML = parseInt(cigarIncrement.innerHTML) + parseInt(manuallyInput.value);
              localStorage.counter = cigarIncrement.innerHTML;
              manuallyInput.value = '';
          }
        }
    };

};
// uvid u prosecan utrosak novca na dnevnom,nedeljnom mesecnom,godisnjem nivou
function redCard() {
  averageForDay = localStorage.cigarettesAverage;
  averageToDay = localStorage.packingCigarettes;
  let toCigarette = averageToDay / 20;
  let num1 = averageForDay * toCigarette;
  let num2 = averageForDay * 7 * toCigarette;
  let num3 = averageForDay * 30 * toCigarette;
  let num4 = averageForDay * 365 * toCigarette;
  dayM.innerHTML = num1.toFixed(2);
  weekM.innerHTML = num2.toFixed(2);
  monthM.innerHTML = num3.toFixed(2);
  yearM.innerHTML = num4.toFixed(2);
};


refreshHistory();
function refreshHistory() {
  let noviMesec = time.getMonth() + 1;

  if (time.getDate() > localStorage.startDan && localStorage.brojac == 0 || noviMesec > localStorage.startMesec && localStorage.brojac == 0) {
      addHistory();
      localStorage.brojac = 1;
  }
};
