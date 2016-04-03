V = 9
var arr = [];
b = true
sorted = false
i = 0
function generate(){
	V = document.getElementById("userInput").value;
	arr = [];
	b = true
	sorted = false
	i = 0
	for (var i=0; i<V; i++) {
	    arr.push(Math.round(Math.random() * 100))
	}

	document.querySelector('.content0 .value0').innerHTML = arr;
//	document.write(arr);
}

function InsertionSort(){
	if(sorted === true){

	}else{
	if(b === true){
		i = 0
		b = false
	}else{
		}
		if(i >= V){
			sorted = true;
			document.querySelector('.content1 .value1').innerHTML = "Sorted Array:";
			document.querySelector('.content11 .value11').innerHTML = "";
	  		document.querySelector('.content2 .value2').innerHTML = arr;
		}
		else{
		if(i<V){
			document.querySelector('.content1 .value1').innerHTML = "Sorting Array:";
			dummy = 'Placing '+arr[i]
			document.querySelector('.content11 .value11').innerHTML = dummy;
			tmp = arr[i];
			for(var j = i - 1; j >= 0 && (arr[j] > tmp); j--) {
	      		arr[j+1] = arr[j];
	    	}
	    	arr[j+1] = tmp;
			
			document.querySelector('.content2 .value2').innerHTML = arr;
			i = i+1;
		}

		
	  	
	  }
  }
}