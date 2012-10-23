// Serialist Transposition Matrix
// owmtxy

// Create a Serialist transposition matrix based on initial tone row (input via message list)
// for Max/MSP [js] - add a message for tone row: pitches in numerical format 1-12

inlets = 2;
outlets = 2;

this.autowatch = 1; // auto-comile script when saved

var toneRow;
var serialMatrix = [];

var n;

function matrix(){
	n = toneRow.length;
	for(var i=0; i<n; i++){
		for(var j=0; j<n; j++){
			var x = toneRow[i] + toneRow[j];
			serialMatrix.push(x%12); // wrap values at 12
		}
	}
}

function list(){
	toneRow = arrayfromargs(arguments);
	}
	

function bang(){
	serialMatrix = [];
	matrix();
	outlet(0,serialMatrix);
}

// output into a jit.fill >> jit.matrix >> jit.cellblock or something.