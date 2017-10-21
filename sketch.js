"use strict";

let ocean_arr = [];
let drop = null;

function setup() {
	createCanvas(1200, 500)

	let o = new Ocean(width, height, 7, 3, .06, 10, 170);
	o.setFill(color('DarkTurquoise'));
	o.setStroke(color('Green'), 8);
	ocean_arr.push(o);

	o = new Ocean(width, height, 7, 2, -.04, 20, 160);
	o.setFill(color('DarkTurquoise'));
	o.setStroke(color('DarkSlateBlue'), 8);
	ocean_arr.push(o);

	o = new Ocean(width, height, 7, 1.2, .02, 30, 150);
	ocean_arr.push(o);

}

function update(){
	
	ocean_arr.forEach(function(e) {
		e.update();
	});

	if (drop != null){
		drop.update();
	}		

}

function mouseClicked() {
	drop = new Drop(mouseX, mouseY);
	return false;
  }

function draw() {
	update();
	
	background(255);

	if (drop != null){
		drop.draw();
	}

	ocean_arr.forEach(function(e) {
		e.draw();
	});
}
