trackingBtn.onclick = startTracking;
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


// dugme za povratak u meni kartica
backBtn.onclick = function () {
  container2.style.display = 'block';
  cigaretteRecordsView.style.display = 'none';
  cigConsumtion.style.display = 'none';
  moneyConsumtion.style.display = 'none';
  backBtn.style.display = 'none';
  smokeCard.childNodes[5].innerHTML = 'current '+'<span id="sp">'+localStorage.counter+'</span>'+ ' cigarett';
};


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
// // stvarni prosek cigareta, uzimaju se dnevne vrednosti iz istorije i izracunava prosek
// function realAverage() {
//     smokeCard.childNodes[5].innerHTML = 'current '+'<span id="sp">'+localStorage.counter+'</span>'+ ' cigarett';
//     let sum = 0;
//   if (localStorage.history != '') {
//     historyObj = JSON.parse(localStorage.history);
//   }
//   function real() {
//     if (historyObj.cigar == '') {
//         cigarettesCard.childNodes[5].innerHTML = 'daily '+'<span id="sp">0</span>'+' average';
//         moneyCard.childNodes[5].innerHTML = 'daily '+'<span id="sp">0</span>'+' rsd';
//     }else {
//         for (let i = 0; i < historyObj.cigar.length; i++) {
//             sum = sum + (parseInt(historyObj.cigar[i]));
//         }
//         let suma = sum / historyObj.cigar.length;
//         cigarettesCard.childNodes[5].innerHTML = 'daily '+'<span id="sp">'+suma.toFixed()+'</span>'+' average';
//         averageToDay = localStorage.packingCigarettes;
//         let toCigarette = parseInt(averageToDay) / 20;
//         let averageMoney = parseInt(suma) * parseInt(toCigarette);
//
//         moneyCard.childNodes[5].innerHTML = 'daily '+'<span id="sp">'+averageMoney.toFixed(2)+'</span>'+' rsd';
//     };
//   };
//   real();
// };
