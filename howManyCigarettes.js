// koliko prosecno cigareta iskoristite u toku dana
function howManyCigarettes() {
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
      howManyPack();
    };
  };
};
