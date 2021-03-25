"use strict";

var Display = function (instructions) {
    this.received = instructions;
    this.padding = 0;
};

Display.prototype.draw = function(instructions){
    textSize(15);
    textAlign(RIGHT);
    for (var key in instructions) {
        if(this.received[key] === undefined){
            if(instructions[key] !== undefined){
                this.received[key] = instructions[key];
                fill(0, 102, 153, 51);
                text(key , this.padding, 30);
                fill(0, 102, 153);
                text(instructions[key] , 50+this.padding, 30);
                this.padding += 30;
            }
        }
    }
};

Display.prototype.clear = function(empty_instruction){
	noStroke();
    fill('white');
    rect(0, 0, 300, 50);
    fill(0, 102, 153, 51);
	drawRectangle(position,clr,size);
    this.padding = 0;
    this.received = empty_instruction;
};
