// dugme za povratak u meni kartica
backBtn.onclick = function () {
  container2.style.display = 'block';
  cigaretteRecordsView.style.display = 'none';
  cigConsumtion.style.display = 'none';
  moneyConsumtion.style.display = 'none';
  backBtn.style.display = 'none';
  backToStartBtn.style.display = 'block';
  smokeCard.childNodes[5].innerHTML = `current <span id="sp">${localStorage.counter}</span> cigarett`;
};
// dugme za povratak u glavni meni
backToStartBtn.onclick = function () {
  holder1.style.display = 'block';
  holder2.style.display = 'none';
  smokeCard.style.display = 'none';
  moneyCard.style.display = 'none';
  cigarettesCard.style.display = 'none';
  backToStartBtn.style.display = 'none';
}
