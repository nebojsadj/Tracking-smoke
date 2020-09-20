trackingBtn.onclick = startTracking;
historyBtn.onclick = seeHistory;
cigarettesCard.onclick = cigarettesView;
smokeCard.onclick = smokerView;
moneyCard.onclick = moneyView;
resetBtn.onclick = resetTracking;

if (localStorage.packingCigarettes) {
  holder1.style.display = 'block';
  holder2.style.display = 'none';
  holder3.style.display = 'none';
  holder4.style.display = 'none';
  hiThere.innerHTML = `Hi ${localStorage.userNameTracking} !`;
  smokeCard.childNodes[5].innerHTML = 'current '+'<span id="sp">'+localStorage.counter+'</span>'+ ' cigarett';
};
// pocetni meni, odlazak u glavni meni i istoriju
function startTracking() {
  holder1.style.display = 'none';
  if (localStorage.userNameTracking && localStorage.cigarettesAverage && localStorage.packingCigarettes) {
    container2.style.display = 'block';
    realAverage();
  }else {
    userName();
  }
};
// unos korisnickog imena
function userName() {
  holder2.style.display = 'block';
  nameInput.focus();
  nextBtn.onclick = function () {
    if (nameInput.value === '') {
      nameInput.style.border = '2px solid red';
    }else {
      nameInput.style.border = '2px solid black';
      holder2.style.display = 'none';
      localStorage.userNameTracking = nameInput.value;
      howCigarettes();
    }
  };
};
// koliko prosecno cigareta iskoristite u toku dana
function howCigarettes() {
  holder3.style.display = 'block';
  for (let i = 0; i < allList1.length; i++) {
    allList1[i].addEventListener('click',check);
  };
  function check() {
    this.className = 'posle';
    for (let i = 0; i < allList1.length; i++) {
      allList1[i].removeEventListener('click',check);
      allList1[i].style.background = 'white';
    };
    localStorage.cigarettesAverage = this.id;

    nextBtn2.onclick = function () {
      holder3.style.display = 'none';
      howPack();
    };
  };
};
// koliko kosta kutija vasih cigareta
function howPack() {
  holder4.style.display = 'block';
    nextBtn3.onclick = function () {
      if (packInput.value == '') {
          packInput.style.border = '2px solid red';
      }else {
        packInput.style.border = '2px solid black';
        holder4.style.display = 'none';
        container2.style.display = 'block';
        localStorage.packingCigarettes = packInput.value;
        localStorage.counter = 0;
        smokeCard.childNodes[5].innerHTML = 'current '+'<span id="sp">'+localStorage.counter+'</span>'+ ' cigarett';
        localStorage.history = JSON.stringify(historyObj);
        localStorage.dates = JSON.stringify(historyDates);
        realAverage();
      }
    }
};
function cigarettesView() {
  container2.style.display = 'none';
  backBtn.style.display = 'block';
  cigConsumtion.style.display = 'block';
  yellowCard();
};
function smokerView() {
  greenCard();
  container2.style.display = 'none';
  cigaretteRecordsView.style.display = 'block';
  backBtn.style.display = 'block';
  cigarIncrement.innerHTML =  parseInt(localStorage.counter);
};
function moneyView() {
  container2.style.display = 'none';
  backBtn.style.display = 'block';
  moneyConsumtion.style.display = 'block';
  redCard();
};
// gifovi za pusenje
function gif1() {
  clearTimeout(gf2);
  averageSmoke.style.display = 'none';
  smokeCig.style.display = 'none';
  miaGif.style.display = 'none';
  vincentGif.style.display = 'block';
    gf1 = setTimeout(function () {
    averageSmoke.style.display = 'block';
    smokeCig.style.display = 'block';
    vincentGif.style.display = 'none';
  },1500)
};
function gif2() {
  clearTimeout(gf1);
  averageSmoke.style.display = 'none';
  smokeCig.style.display = 'none';
  vincentGif.style.display = 'none';
  miaGif.style.display = 'block';
    gf2 = setTimeout(function () {
    averageSmoke.style.display = 'block';
    smokeCig.style.display = 'block';
    miaGif.style.display = 'none';
  },3000)
};
// istorija
function seeHistory() {
  historyView.innerHTML = '';
  historyView.innerHTML = '<div id="x">X</div>'+'<br>';
  historyView.style.display = 'block';

    let istorija = JSON.parse(localStorage.history);
    let istorijaDatuma = JSON.parse(localStorage.dates);
    let istorijaCigareta = istorija.cigar;
    for (let i = 0; i < istorijaCigareta.length; i++) {
      historyView.innerHTML += (`${istorijaDatuma.date[i]} ukupno ${istorijaCigareta[i]} cigareta <br>`)
    }
    // close div
    document.querySelector('#x').onclick = function () {
      historyView.style.display = 'none';
    }
};

function addHistory() {
  if(localStorage.history != '' && localStorage.dates != '') {
    historyObj = JSON.parse(localStorage.history);
    historyDates = JSON.parse(localStorage.dates);
  }
  function addH() {
    let unesiDatum = parseInt(time.getDate() - 1) +'.'+ parseInt(time.getMonth() + 1) +'.'+time.getFullYear();
      historyObj.cigar.push(localStorage.counter);
      historyDates.date.push(unesiDatum);
      localStorage.counter = 0;
      localStorage.history = JSON.stringify(historyObj);
      localStorage.dates = JSON.stringify(historyDates);
  };
  addH();
};

// dugme za povratak u meni kartica
backBtn.onclick = function () {
  container2.style.display = 'block';
  cigaretteRecordsView.style.display = 'none';
  cigConsumtion.style.display = 'none';
  moneyConsumtion.style.display = 'none';
  backBtn.style.display = 'none';
  smokeCard.childNodes[5].innerHTML = 'current '+'<span id="sp">'+localStorage.counter+'</span>'+ ' cigarett';
};

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
timer();
// setInterval(timer,1000);

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


function previousCigar() {
  localStorage.startSat = parseInt(sati.innerHTML);
  localStorage.startMin = parseInt(minuti.innerHTML);
  localStorage.startDan = parseInt(dan.innerHTML);
  localStorage.startMesec = parseInt(mesec.innerHTML);
  localStorage.brojac = 0;
};

function resetTracking() {
  localStorage.clear();
};
// stvarni prosek cigareta, uzimaju se dnevne vrednosti iz istorije i izracunava prosek
function realAverage() {
    smokeCard.childNodes[5].innerHTML = 'current '+'<span id="sp">'+localStorage.counter+'</span>'+ ' cigarett';
    let sum = 0;
  if (localStorage.history != '') {
    historyObj = JSON.parse(localStorage.history);
  }
  function real() {
    if (historyObj.cigar == '') {
        cigarettesCard.childNodes[5].innerHTML = 'daily '+'<span id="sp">0</span>'+' average';
        moneyCard.childNodes[5].innerHTML = 'daily '+'<span id="sp">0</span>'+' rsd';
    }else {
        for (let i = 0; i < historyObj.cigar.length; i++) {
            sum = sum + (parseInt(historyObj.cigar[i]));
        }
        let suma = sum / historyObj.cigar.length;
        cigarettesCard.childNodes[5].innerHTML = 'daily '+'<span id="sp">'+suma.toFixed()+'</span>'+' average';
        averageToDay = localStorage.packingCigarettes;
        let toCigarette = parseInt(averageToDay) / 20;
        let averageMoney = parseInt(suma) * parseInt(toCigarette);

        moneyCard.childNodes[5].innerHTML = 'daily '+'<span id="sp">'+averageMoney.toFixed(2)+'</span>'+' rsd';
    };
  };
  real();
};
