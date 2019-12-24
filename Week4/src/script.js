var original = null;

function upload() {
  var file = document.getElementById("btnImg");
  original = new SimpleImage(file);
  var canvas = document.getElementById("can");
  var canvasChange = document.getElementById("canChange");
  original.drawTo(canvas);
  original.drawTo(canvasChange);
}

function makeGray() {
  var image = original;
  for (var pixel in image.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  //reset();
  var canvas = document.getElementById("canChange");
  image.drawTo(canvas);
}

function makeRed() {
  var image = original;
  for (var pixel in image.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(0);
    pixel.setBlue(0);
  }
  //reset();
  var canvas = document.getElementById("canChange");
  image.drawTo(canvas);
}

/*function makeGreen(){
  reset();
  for(var pixel of image.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(0);
    pixel.setGreen(avg);
    pixel.setBlue(0);
  }
  var canvas = document.getElementById("canChange");
  image.drawTo(canvas);
}

function makeBlue(){
  reset();
  for(var pixel of image.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(avg);
  }
  var canvas = document.getElementById("canChange");
  image.drawTo(canvas);
}

function makeYellow(){
  reset();
  for(var pixel of image.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(0);
  }
  var canvas = document.getElementById("canChange");
  image.drawTo(canvas);
}

function makeMagenta(){
  reset();
  for(var pixel of image.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(0);
    pixel.setBlue(avg);
  }
  var canvas = document.getElementById("canChange");
  image.drawTo(canvas);
}

function makeCyan(){
  reset();
  for(var pixel of image.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(0);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var canvas = document.getElementById("canChange");
  image.drawTo(canvas);
}*/

function reset() {
  var canvasChange = document.getElementById("canChange");
  var context = canvasChange.getContext("2d");
  context.clearRect(0, 0, original.width, original.height);
  var image = new SimpleImage(original);
  image.drawTo(canvasChange);
  //upload();
}