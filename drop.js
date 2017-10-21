class Drop {

    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.size = 3;

        this.speed = .05;
        this.terminal_vel = 15;

        this.vArr_x = [];
		this.vArr_y = [];
    }

    setForm(x, y, size){
        this.vArr_x = [];
		this.vArr_y = [];

        this.addVertex(x + size * -0.533331199947, y + -size * 0.59999160001);
        this.addVertex(x + size * -0.680507379458, y + -size * 0.389481182705);
        this.addVertex(x + size * -0.84673936673, y + -size * 0.150296113856);
        this.addVertex(x + size * -1.02845197293, y + -size * -0.124934097412);
        this.addVertex(x + size * -1.21805284525, y + -size * -0.44638281597);
        this.addVertex(x + size * -1.40095266044, y + -size * -0.826905287884);
        this.addVertex(x + size * -1.55083465568, y + -size * -1.28002248883);
        this.addVertex(x + size * -1.62355636798, y + -size * -1.81316143722);
        this.addVertex(x + size * -1.55374484081, y + -size * -2.41166184065);
        this.addVertex(x + size * -1.26682959475, y + -size * -3.01217547892);
        this.addVertex(x + size * -0.725579361885, y + -size * -3.4837871841);
        this.addVertex(x + size * -6.53118834482e-16, y + -size * -3.6666100012);
        this.addVertex(x + size * 0.725579361885, y + -size * -3.4837871841);
        this.addVertex(x + size * 1.26682959475, y + -size * -3.01217547892);
        this.addVertex(x + size * 1.55374484081, y + -size * -2.41166184065);
        this.addVertex(x + size * 1.62355636798, y + -size * -1.81316143722);
        this.addVertex(x + size * 1.55083465568, y + -size * -1.28002248883);
        this.addVertex(x + size * 1.40095266044, y + -size * -0.826905287884);
        this.addVertex(x + size * 1.21805284525, y + -size * -0.44638281597);
        this.addVertex(x + size * 1.02845197293, y + -size * -0.124934097412);
        this.addVertex(x + size * 0.84673936673, y + -size * 0.150296113856);
        this.addVertex(x + size * 0.680507379458, y + -size * 0.389481182705);
        this.addVertex(x + size * 0.533331199947, y + -size * 0.59999160001);
        this.addVertex(x + size * 0.406494529925, y + -size * 0.786863379082);
        this.addVertex(x + size * 0.29995268904, y + -size * 0.95335491215);
        this.addVertex(x + size * 0.212862367921, y + -size * 1.10143334634);
        this.addVertex(x + size * 0.143872903184, y + -size * 1.2321592701);
        this.addVertex(x + size * 0.0912887794327, y + -size * 1.34597946589);
        this.addVertex(x + size * 0.0531638039123, y + -size * 1.442946516);
        this.addVertex(x + size * 0.0273599178195, y + -size * 1.52288269897);
        this.addVertex(x + size * 0.0115884613824, y + -size * 1.58550175952);
        this.addVertex(x + size * 0.00344336829096, y + -size * 1.63049836375);
        this.addVertex(x + size * 0.000431153362633, y + -size * 1.6576120232);
        this.addVertex(x + size * 0.0, y + -size * 1.66667);
        this.addVertex(x + size * 0.0, y + -size * 1.66667);
        this.addVertex(x + size * -0.000431153362633, y + -size * 1.6576120232);
        this.addVertex(x + size * -0.00344336829096, y + -size * 1.63049836375);
        this.addVertex(x + size * -0.0115884613824, y + -size * 1.58550175952);
        this.addVertex(x + size * -0.0273599178195, y + -size * 1.52288269897);
        this.addVertex(x + size * -0.0531638039123, y + -size * 1.442946516);
        this.addVertex(x + size * -0.0912887794327, y + -size * 1.34597946589);
        this.addVertex(x + size * -0.143872903184, y + -size * 1.2321592701);
        this.addVertex(x + size * -0.212862367921, y + -size * 1.10143334634);
        this.addVertex(x + size * -0.29995268904, y + -size * 0.95335491215);
        this.addVertex(x + size * -0.406494529925, y + -size * 0.786863379082);

    }

    addVertex(x, y){

        const mag = 100;

        x = x + Math.random() * (this.size / mag / 2) - (this.size / mag)
        y = y + Math.random() * (this.size / mag / 2) - (this.size / mag)

        this.vArr_x.push(x);
		this.vArr_y.push(y);
    }

    update() {
        this.y += this.speed;
        if (this.speed < this.terminal_vel){
            this.speed += .7; 
        }

        this.setForm(this.x, this.y, this.size);

    }

    draw(){
        stroke(color('purple'));
        fill(color('purple'));
        strokeWeight(1);

        const num_vertices = this.vArr_x.length;

        beginShape();
        for (let i = 0; i < num_vertices; i++) {
            // console.log(this.vArr_x[i]);
			vertex(this.vArr_x[i],  this.vArr_y[i]);	
        }
        endShape();
    }

}