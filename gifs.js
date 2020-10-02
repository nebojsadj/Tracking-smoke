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
