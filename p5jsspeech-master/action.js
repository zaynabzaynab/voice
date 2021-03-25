
function drawObject(obj) {
	var obyType = obj.object;
	var clr = getClr(obj.color);
	var size = obj.size;
	if(obyType == "circle") {
		var position = randomPosition();
		drawCircle(position, clr,size);
	} else if(obyType == "square") {
		var position = randomPosition();
		drawRectangle(position,clr,size);
	} else if(obyType == "line") {
		var from = randomPosition();
		var to = randomPosition();
		drawLine(from,to,clr);
	}
}

function getClr(index) {
	if(index == "red")
		return color(255,0,0);
	else if(index == "green")
		return color(0,255,0);
	else if(index =="blue")
		return color(0,0,255);
	else if(index =="black")
		return color(0);
}

function randomPosition() {
	return createVector(random(width), random(height));
}

function drawCircle(position, color, size) {
	noStroke();
	fill(color);
	console.log(position.x+" "+color+" "+size);
	ellipse(position.x,position.y,size,size);
}

function drawRectangle(position,color,size) {
	noStroke();
	fill(color);
	rect(position.x,position.y,size,size);
}

function drawLine(from, to, color) {
	stroke(color);
	line(from.x,from.y,to.x,to.y);
}

