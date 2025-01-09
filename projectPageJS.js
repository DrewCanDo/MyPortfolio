//  document.querySelector('p').addEventListener('click', function() {
//     alert("clicked")
// });

//  function openProject(projectNum, projectNumBtn) {
//   var i;
//   var x = document.getElementsByClassName("project");
//   var y = document.getElementsByClassName("projectBtn");
  
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//     y[i].removeAttribute('disabled');
//   }

//   document.getElementById(projectNum).style.display = "block";
//   document.getElementById(projectNumBtn).setAttribute('disabled', '');
  
// }

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}


// const backgroundColorInput = document.getElementById('background-selector');

// backgroundColorInput.addEventListener('change', (event) => {
//   const selectedColor = event.target.value;
//   event.changeBackground();
//   const background = document.getElementById('body-background-change');
//   background.style.backgroundColor = selectedColor;
// });

function changeBackground() {
  const background = document.getElementById('body-background-change');
  const colorPicker = document.getElementById('background-selector');
  const color = colorPicker.value;
  background.style.background = `linear-gradient(to right, white, ${color})`;
  }


//HOW TO SWAP TO A NEW URL
// let url = new URL(window.location.href);
// url.hostname = 'google.com';
// window.location.href = url.href;