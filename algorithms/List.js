var queue = [];
var number;
function push(){
	number = document.getElementById("userInput").value;
	queue.push(number);
	document.querySelector('.content0 .value0').innerHTML = queue;
}
function removeposition(){
	temp = document.getElementById("userInput1").value;
	var dummy = [];
	for(var j = 0;j<queue.length;j++){
		if(j == temp-1){

		}else{
			number = queue[j];
			dummy.push(number);
		}
	}
	queue = [];
	for(var j = 0;j<dummy.length;j++){
			number = dummy[j];
			queue.push(number);
	}
	document.querySelector('.content0 .value0').innerHTML = queue;
}
function erase(){
	queue = []
	document.querySelector('.content0 .value0').innerHTML = queue;
}