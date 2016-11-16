'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('#led-r').turnOn();
    $('#led-r').turnOn();
    $('#led-r').turnOn();
});

$.end(function () {
    $('#led-r').turnOff();
});
