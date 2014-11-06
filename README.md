neoPixelRing
=========

A small module to light up a certain percentage of the neoPixel 60 LED ring.

## Installation

  npm install git://github.com/shaunmulligan/neoPixelRing.git

## Usage

    var ring = require('neoPixelRing');

    ring.init();    //start the drawing loop, probably not really necessary.

    //set a percentage of the ring with a defined RBG color.
    ring.setPercentage(20,[110, 90, 0]);


## Methods

    //start the draw loop.
    #.init();
    //set a percentage of the ring with a defined RBG color.
    #.setPercentage(20,[110, 90, 0]);
    //switch on LEDs as a percentage of 12 hours around the ring
    #.setTime(minutes, color[]);
    //switch off all the LEDs
    #.clear();

## Release History

* 0.0.0 Initial release
