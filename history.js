// istorija
historyBtn.onclick = seeHistory;

function seeHistory() {
  historyView.innerHTML = '';
  historyView.innerHTML = '<div id="x">X</div>'+'<br>';
  historyView.style.display = 'block';
    let closeHistory = document.querySelector('#x');
    let istorija = localStorage.history ? JSON.parse(localStorage.history) : {cigar:[]};
    let istorijaDatuma = localStorage.dates ? JSON.parse(localStorage.dates) : {date:[]};
    let istorijaCigareta = istorija.cigar;
    for (let i = 0; i < istorijaCigareta.length; i++) {
      historyView.innerHTML += (`${istorijaDatuma.date[i]} ukupno ${istorijaCigareta[i]} cigareta <br>`)
    }
      // close div
      closeHistory.onclick = function () {
        historyView.style.display = 'none';
      }
};

function addHistory() {
  if(localStorage.history != '' && localStorage.dates != '') {
    historyObj = JSON.parse(localStorage.history);
    historyDates = JSON.parse(localStorage.dates);
  }
  function addH() {
    let unesiDatum =` ${parseInt(time.getDate() - 1)}.${parseInt(time.getMonth() + 1)}.${time.getFullYear()}`;
      historyObj.cigar.push(localStorage.counter);
      historyDates.date.push(unesiDatum);
      localStorage.counter = 0;
      localStorage.history = JSON.stringify(historyObj);
      localStorage.dates = JSON.stringify(historyDates);
  };
  addH();
};

refreshHistory();
function refreshHistory() {
  let noviMesec = time.getMonth() + 1;

  if (time.getDate() > localStorage.startDan && localStorage.brojac == 0 || noviMesec > localStorage.startMesec && localStorage.brojac == 0) {
      addHistory();
      localStorage.brojac = 1;
  }
};
