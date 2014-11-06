var OPC = new require('./opc')
var client = new OPC('localhost', 7890);

module.exports = { 
  draw: function(func) {
    setInterval(function(){
      client.writePixels();
    }, 100);
  },

  clear: function() {
    for (var pixel = 0; pixel < 60; pixel++)
    {
        var red = 0
        var green = 0
        var blue = 0

        client.setPixel(pixel, red, green, blue);
    }
    //client.writePixels();
  },

  setPercentage: function(percent, color) {
    if (percent > 100 || percent < 0) {
      percent = 100;
    }
    client.setPixel(0, 0, 0, 140);  //set blue ref LED
    var numberOfLeds = Math.round((percent/100)*60);
    for (var pixel = 1; pixel < numberOfLeds; pixel++)
    {
        var red = color[0];
        var green = color[1];
        var blue = color[2];

        client.setPixel(pixel, red, green, blue);
    }
    for (var pixel = numberOfLeds; pixel < 60; pixel++)
    {
        var red = 0;
        var green = 0;
        var blue = 0;

        client.setPixel(pixel, red, green, blue);
    }
    this.draw();
  },

  setTime: function(minutes, color) {
    var minToPercent = Math.round((minutes/720)*100); //convert to a percentage of 12 hours (720 minutes)
    console.log(minToPercent);
    this.setPercentage(minToPercent, color);
  },

  init: function(func) {
    this.clear();
    this.draw();
  }

};