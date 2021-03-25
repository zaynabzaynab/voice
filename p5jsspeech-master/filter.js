"use strict";

var Filter = function (grammar) {
    this.available_objects = grammar.objects;
    this.available_colors = grammar.colors;
    this.available_positions = grammar.positions;
    this.available_commands = grammar.command;

    this.detected_object = undefined;
    this.detected_color = undefined;
    this.detected_size = undefined;
    this.detected_position = undefined;
};

Filter.prototype.grab_object = function(microphone){
    if (this.available_objects.hasOwnProperty(microphone)) {
        this.detected_object = this.available_objects[microphone];
    }
};

Filter.prototype.grab_size = function(microphone){
    var number = parseInt(microphone);
    if(!isNaN(number)) {
        console.log("number detected "+number);
        this.detected_size = number;
    }
};

Filter.prototype.grab_color = function(microphone){
    if (this.available_colors.hasOwnProperty(microphone)) {
        this.detected_color = this.available_colors[microphone];
    }
};

Filter.prototype.grab_command = function(microphone){
    if (this.available_commands.hasOwnProperty(microphone))
        return this.available_commands[microphone];
};

Filter.prototype.clear = function() {
    console.log("CLEARING!!");
    this.detected_object = undefined;
    this.detected_color = undefined;
    this.detected_size = undefined;
};

Filter.prototype.isReady = function() {
    return (this.detected_object !== undefined
    && this.detected_color !== undefined
    && this.detected_size !== undefined) 
    || (this.detected_object == 'line' && this.detected_color !== undefined);
};

Filter.prototype.draw = function() {
    //console.log("force draw");
    if(this.detected_object == undefined) {
        var oj = (random(Object.keys(grammatic.objects).length/2) | 0) * 2 + 1;
        //console.log(c+ " "+Object.keys(grammatic.objects)[c]);
        this.detected_object = Object.keys(grammatic.objects)[oj];
    }
    if(this.detected_color == undefined) {
        var cl = (random(Object.keys(grammatic.colors).length/2) | 0) * 2 + 1;
        this.detected_color = Object.keys(grammatic.colors)[oj];
    }
    if(this.detected_size == undefined) {
        this.detected_size = random(20,150);
    }
    drawObject(this.instruction());
}

Filter.prototype.instruction = function(){
    return {
        "object": this.detected_object,
        "size": this.detected_size,
        "color": this.detected_color,
        "position": this.detected_position
    };
};

Filter.prototype.grab_position = function(microphone){
    if (this.available_positions.hasOwnProperty(microphone)) {
        this.detected_position = this.available_positions[microphone];
    }
}
