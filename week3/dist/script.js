//Add an alert that when the button is clicked, your alert message should pop up on your screen.
function dochange() {
  alert("Clicked button with JS function");
}

//Create a function that calls confirm instead of alert. Confirm is similar to the alert box, except confirm also gives the user has the option to choose OK or Cancel.
function confirmchange() {
  var txt;
  var choice = confirm("Press a button!");
  if (choice === true) {
    txt = "You pressed OK!";
  } else {
    txt = "Are you sure you want to cancel?!";
  }
  document.getElementById("Button3").innerHTML = txt;
}

//In the JS pane, create a new function, changeColor().
function changeColor(IDname) {
  //Have the function access the div by IDname.
  var divElement = document.getElementById(IDname);

  //Change each div’s class so that the background-color changes for each div.
  divElement.className = "blueback";
}

//In the JS pane, create a new function changeText().
function changeText() {
  //Access each div element by its ID.
  var divElement1 = document.getElementById("d1");
  var divElement2 = document.getElementById("d2");

  //Use the .innerHTML method to change the text to something new inside each div.
  divElement1.innerHTML = "Hello";
  divElement2.innerHTML = "Bye";
}

function changeCanvasColor() {
  var canvasElement1 = document.getElementById("canvas1");
  var canvasElement2 = document.getElementById("canvas2");

  canvasElement1.className = "greenback";
  canvasElement2.className = "blackback";
}

function doRed() {
  var canvasElement1 = document.getElementById("canvas1");

  canvasElement1.className = "redback";
}

function doGrey() {
  var canvasElement1 = document.getElementById("canvas1");

  canvasElement1.className = "greyback";
}

function addHello() {
  var canvas = document.getElementById("canvas1");
  var context = canvas.getContext("2d");
  context.fillStyle = "yellow";
  context.fillRect(10, 10, 60, 60);
  context.fillRect(80, 10, 60, 60);

  context.fillStyle = "black";
  context.font = "20px Arial";
  context.fillText("Hello", 15, 45);
}

function clearleftcanvas() {
  var canvas = document.getElementById("canvas1");
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function doBlue() {
  var canvasElement = document.getElementById("can");

  canvasElement.style.backgroundColor = "lightblue";
}

function doColor(canvasID, colorID) {
  var canvas = document.getElementById(canvasID);
  var colorinput = document.getElementById(colorID);
  canvas.style.backgroundColor = colorinput.value;
}

function doSquare(canvasID, colorID) {
  var sliderinput = document.getElementById(colorID);
  var len = sliderinput.value;
  var canvas = document.getElementById(canvasID);
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "yellow";
  context.fillRect(10, 10, len, len);
  context.fillRect(parseInt(len) + 20, 10, len, len);
  context.fillRect(len * 3, 10, len, len);
}

function upload(fileID,canvasID) {
  var fileinput = document.getElementById(fileID);
  var image = new SimpleImage(fileinput);
  var canvas = document.getElementById(canvasID);
  image.drawTo(canvas);
}