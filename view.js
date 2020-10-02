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
