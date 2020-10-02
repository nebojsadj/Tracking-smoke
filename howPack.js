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
