
function cigarettesView() {
  container2.style.display = 'none';
  backBtn.style.display = 'block';
  cigConsumtion.style.display = 'block';
  backToStartBtn.style.display='none';
  yellowCard();
};
function smokerView() {
  greenCard();
  container2.style.display = 'none';
  cigaretteRecordsView.style.display = 'block';
  backBtn.style.display = 'block';
  cigarIncrement.innerHTML =  parseInt(localStorage.counter);
  backToStartBtn.style.display='none';
};
function moneyView() {
  container2.style.display = 'none';
  backBtn.style.display = 'block';
  moneyConsumtion.style.display = 'block';
  backToStartBtn.style.display='none';
  redCard();
};
