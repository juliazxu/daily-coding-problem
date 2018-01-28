function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;

/// not closure

makeSizer = size => {
  document.body.style.fontSize = size +'px';
}

document.getElementById('size-12').onclick = makeSizer(12);
document.getElementById('size-14').onclick = makeSizer(14);
document.getElementById('size-16').onclick = makeSizer(16);

//

createBase = base => {
  return (n) => {
    return base + n;
  }
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

