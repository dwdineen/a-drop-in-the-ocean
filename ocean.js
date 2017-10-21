class Ocean {
	
	constructor(w, h, n, wps, s, m, oh) {

		this.width = w;
		this.height = h;

		this.num_vertices = n;
		this.waves_per_screen = wps;
		this.speed = s;
		this.magnitude = m;
		this.o_height = h - oh;

		this.vArr_x = [];
		this.vArr_y = [];
		this.time = 0;

		this.setStroke(color('blue'), 6);
		this.setFill(color('aqua'));

		for (let i = 0; i < this.num_vertices; i++) {
			
			const temp = this.width / (this.num_vertices - 3)
			this.vArr_x.push(temp * i - temp);
			this.vArr_y.push(this.o_height);

			console.log(this.vArr_x[i]);
		}
	}

	update(){
		
		for (let i = 0; i < this.num_vertices; i++) {
			const a = this.time + ((2 * PI * this.waves_per_screen) / (this.num_vertices - 1)) * i;
			this.vArr_y[i] = this.magnitude * sin(a) + this.o_height;			
		}
		
		this.time += this.speed;
		if (this.time > 2 * PI){
			this.time = 0;
		}
		
	}

	setStroke(c, w){
		this.stroke_color = c;
		this.stroke_weight = w;
	}

	setFill(c){
		this.fill_color = c;
	}

	draw(){
		
		strokeWeight(this.stroke_weight);
		stroke(this.stroke_color);
		fill(this.fill_color)

		// noFill();
		beginShape();
		curveVertex(this.vArr_x[0], this.height);
		curveVertex(this.vArr_x[0], this.height);
		for (let i = 0; i < this.num_vertices; i++) {
			curveVertex(this.vArr_x[i],  this.vArr_y[i]);	
		}
		curveVertex(this.vArr_x[this.num_vertices - 1], this.height);
		curveVertex(this.vArr_x[this.num_vertices - 1], this.height);
		endShape();

	}


}