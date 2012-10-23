// Playing with magic square
// owmtxy

// Max/MSP [js] script for generating Magic Square jitter matricies. arguments to object are size and modulo wrap.
inlets = 1;
outlets = 2;

var square = [];
var modSquare = [];
var n = 3;
var mod = 3

if(jsarguments.length>1){
	n = jsarguments[1];
}
if(jsarguments.length>2){
	mod = jsarguments[2];
} else {
	mod = n;
}

function calculateSquare(row,col){
	var cell = n*((row+col-1+(Math.floor(n/2)))%n) + ((row + (2*col)-2)%n)+1;
	return cell;
};


function magic(){
	for(var i=0; i<n; i++){
		for(var j=0; j<n; j++){
			var x = calculateSquare(i+1,j+1);
			square.push(x);
		}
	}
}

function modulus(){
	for(var i=0; i<n; i++){
		for(var j=0; j<n; j++){
			var z = calculateSquare(i+1,j+1);
			modSquare.push(z%mod);
		}
	}
}
	
function bang(){
	square = [];
	modSquare = [];
	magic();
	modulus();
	outlet(0,square);
	outlet(1,modSquare);
}
