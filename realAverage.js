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
