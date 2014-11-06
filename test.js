var ring = require('./index');

var percent = process.env.PERCENT;
ring.init();
ring.setPercentage(percent,[110, 90, 0]);

