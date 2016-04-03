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

function SelectionSort(){
	if(sorted === true){

	}else{
	if(b === true){
		i = 0
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
		tmp = i;
		for(j = i+1;j<V;j++){
			if (arr[j] < arr[tmp]){
                tmp = j;
            }
		}
		dummy = 'Checking Next Highest and '+" Found "+arr[tmp]
		document.querySelector('.content11 .value11').innerHTML = dummy;
		if(tmp!=i){
			temp = arr[i];
			arr[i] = arr[tmp];
			arr[tmp] = temp;
		}
		
		document.querySelector('.content2 .value2').innerHTML = arr;
		i = i+1;
	  	
	  }
  }
}