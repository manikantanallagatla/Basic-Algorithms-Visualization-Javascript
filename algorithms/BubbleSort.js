V = 9
var arr = [];
b = true
sorted = false
i = 0
j = 1
function generate(){
	V = document.getElementById("userInput").value;
	arr = [];
	b = true
	sorted = false
	i = 0
	j = 1
	for (var i=0; i<V; i++) {
	    arr.push(Math.round(Math.random() * 100))
	}

	document.querySelector('.content0 .value0').innerHTML = arr;
//	document.write(arr);
}

function BubbleSort(){
	if(sorted === true){

	}else{
	if(b === true){
		i = 0
		j = 1
		b = false
	}else{
		}
		if(i === V-1){
			sorted = true;
			document.querySelector('.content1 .value1').innerHTML = "Sorted Array:";
			document.querySelector('.content11 .value11').innerHTML = "";
	  		document.querySelector('.content2 .value2').innerHTML = arr;
		}
		else{

		document.querySelector('.content1 .value1').innerHTML = "Sorting Array:";
		dummy = 'Checking '+arr[i]+" "+arr[j]
		document.querySelector('.content11 .value11').innerHTML = dummy;
		if(arr[i]>arr[j]){
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
		document.querySelector('.content2 .value2').innerHTML = arr;
		j = j+1;
		if(j>V-1){
			// document.write('Executing')
			i = i+1;
			j = i+1;
		}
	  	
	  }
  }
}