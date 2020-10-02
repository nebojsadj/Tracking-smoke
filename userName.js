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
      howManyCigarettes();
    }
  };
};
