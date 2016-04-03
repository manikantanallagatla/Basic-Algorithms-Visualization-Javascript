var queue = [];
function push(){
	number = document.getElementById("userInput").value;
	queue.push(number);
	document.querySelector('.content0 .value0').innerHTML = queue;
}
function pop(){
	if(queue.length>0){
		number = queue.pop()
	}
	document.querySelector('.content0 .value0').innerHTML = queue;
}
function erase(){
	while(queue.length>0){
		number = queue.pop()
	}
	document.querySelector('.content0 .value0').innerHTML = queue;
}