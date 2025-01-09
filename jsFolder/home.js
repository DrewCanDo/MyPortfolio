function move1(n) {
  var elem = document.getElementById('myBar1');
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= n) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width + '%';
    }
  }
}

function move2(n) {
  var elem = document.getElementById('myBar2');
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= n) {
      clearInterval(id);
    } else {
      width++;
      elem.innerHTML = width + '%';
      elem.style.width = width + '%';
    }
  }
}

function move3(n) {
  var elem = document.getElementById('myBar3');
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= n) {
      clearInterval(id);
    } else {
      width++;
      elem.innerHTML = width + '%';
      elem.style.width = width + '%';
    }
  }
}

function move4(n) {
  var elem = document.getElementById('myBar4');
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= n) {
      clearInterval(id);
    } else {
      width++;
      elem.innerHTML = width + '%';
      elem.style.width = width + '%';
    }
  }
}

function w3_open() {
  document.getElementById('mySidebar').style.display = 'block';
}

function w3_close() {
  document.getElementById('mySidebar').style.display = 'none';
}

function changeBackground() {
  const background = document.getElementById('body-background-change');
  const colorPicker = document.getElementById('background-selector');
  const color = colorPicker.value;
  background.style.background = `linear-gradient(to right, white, ${color})`;
}
