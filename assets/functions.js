
somenteNumeros = function(num) {
	var er = /[^0-9.]/;
	er.lastIndex = 0;
	var campo = num;
	if (er.test(campo.value)) {
	campo.value = "";
	}
},


config = function(){
	document.getElementById("inputField").style.display = "block";
	document.getElementById("result").style.display = "none";
	document.getElementById("chartContainer").style.display = "none";
	document.getElementById("linha4").style.display = "none";
	document.getElementById("linha5").style.display = "none";
	document.getElementById("linha6").style.display = "none";
	document.getElementById("linha7").style.display = "none";
	document.getElementById("linha8").style.display = "none";
	document.getElementById("linha9").style.display = "none";
	document.getElementById("linha10").style.display = "none";
	




	
},

cont = function(){

	a = 4;

 	if(document.getElementById("linha4").style.display == "block"){
 		a++;
 	}

 	if(document.getElementById("linha5").style.display == "block"){
 		a++;
 	}

 	if(document.getElementById("linha6").style.display == "block"){
 		a++;
 	}

 	if(document.getElementById("linha7").style.display == "block"){
 		a++;
 	}

 	if(document.getElementById("linha8").style.display == "block"){
 		a++;
 	}

 	if(document.getElementById("linha9").style.display == "block"){
 		a++;
 	}

 	if(document.getElementById("linha10").style.display == "block"){
 		a++;
 	}

 	return a;
},

show = function(){
 	
/*alert("linha" + cont());*/	

	document.getElementById("linha" + cont()).style.display = "block";
	
	
	
},


linecancel = function(){
	
	var aux = cont() - 1;

	if(aux > 3){
		for(var i = 1; i <= 3; ++i){
			document.getElementById("a" + aux + i).value = "";
		}
		document.getElementById("linha" + aux).style.display = "none";	
	}
	
},


cancel = function(){
	
	
	for(var i = 1; i < 4; i++){
		for(var j = 1; j <= 3; ++j){
			document.getElementById("a" + i + j).value = "";
		}
	}

	
	for(var i = 4; i <= 10; i++){
		for(var j = 1; j <= 3; ++j){
			document.getElementById("a" + i  + j).value = "";
		}
		
		document.getElementById("linha" + i).style.display = "none";	
	}



},


check = function(){
	

	flag = true;

	for(var i = 1; i <= (cont() - 1); i++){
		for(var j = 1; j <= 3; j++){		
			if(document.getElementById("a" + i  + j).value == ""){
				
				flag = false;
			}
		}
	}


	return flag;
},


correct = function(){

	for(var i = 1; i <= (cont() - 1); i++){
		for(var j = 1; j <= 3; j++){	

			if(document.getElementById("a" + i  + j).value == ""){
				document.getElementById("a" + i + j).style.border = "2px solid #d50000";
			}else{
				document.getElementById("a" + i + j).style.border = "2px solid #000";
			}
		}
	}

},

confirm = function(){

	if(check()){
		correct();
		leslie();
	}else{
		correct();
	}


},


leslie = function(){

	document.getElementById("inputField").style.display = "none";
	document.getElementById("result").style.display = "block";

	var dados = [];
	var pop = []

	for(var i = 0; i < (cont() -1); ++i){
		dados[i] = [];
		pop[i] = [];
	}



	for(var i = 1; i <= 10; i++){

		for(var j = 1; j <= 10; ++j){
			

			if((j <= cont() - 1) && (i <= cont() - 1)){

				document.getElementById("l" + i + "_" + j).innerHTML = 0;
				dados[i-1][j-1] = 0;
				pop[i-1][j-1] = 0;
				
			}else{
				document.getElementById("t" + i  + "_" + j).style.display = "none";
			}
		}
		
	}

	
	

	for(var i = 1; i <= (cont() - 1); ++i){
		document.getElementById("l" + 1 + "_" + i).innerHTML = document.getElementById("a" + i  + 2).value;
		dados[0][i - 1] = document.getElementById("a" + i  + 2).value;
	}

	

	for(var i = 2; i <= (cont() - 1); ++i){
		document.getElementById("l" + i + "_" + (i - 1)).innerHTML =  document.getElementById("a" + (i - 1) + 3).value;
		dados[i-1][i - 2] = document.getElementById("a" + (i - 1) + 3).value;
	}

	var aux = "";
	var aux2 = "";
	var aux3 = "";

	for(var i = 0; i < (cont() - 1); ++i){
		for(var  j = 0; j < cont() - 1; ++j){
			aux = aux + " " + dados[i][j];
		}
	}

	for(var i = 0; i < cont() - 1; ++i){
		pop[i][0] = document.getElementById("a" + (i + 1) + 1).value;
	}



	for(var j = 1; j < (cont() - 1); ++j){
		for(var i = 0; i < (cont() - 1); ++i){
			
			for(var k = 0; k < (cont() - 1); ++k){
				pop[i][j] = pop[k][j - 1] * dados[i][k] + pop[i][j];	
			
				
			}

			
		}
	}


			 

	




	graph(pop);



/*
	for(var i = 1; i <= (cont() - 1); i++){
		for(var j = 1; j <= 3; j++){	
			document.getElementById("l" + i + "_" + j).innerHTML = document.getElementById("a" + i  + j).value;		
		}
	}
*/
},


confirm_age = function(){
	
	if(document.getElementById("maximum_age").value != ""){
		input(document.getElementById("maximum_age").value);
	}else{
		document.getElementById("maximum_age").style.border = "2px solid #d50000";
	}
	
}, 

input = function(){
	document.getElementById("inputField_age").style.display = "none";
	document.getElementById("inputField").style.display = "block";
},




 graph = function (vetor) {


 	var colors = ["#2962ff","#EC058E","#F45B69","#028090", "#FFC145", "#5B5F97", "#ED254E", "#FF8552", "#06D6A0", "#00AFB5"];


 	var pop = new Array(cont() -1);

 	for(var i = 0; i < cont() - 1; ++i){
 		pop[i] = new Array()
 		for(var j = 0; j < cont() - 1; ++j){
 			pop[i][j] = [];
 			pop[i][j] = vetor[i][j];
 		}
 	}

 	var aux = new Array(cont() - 1);
 	var points = new Array(cont() -1);
 	var size = 0;

 	var data;

 	for(var i = 0; i < cont() - 1; ++i){
 	
 		aux[i] = [];
 		points[i] = [];


 		for(var j = 0; j < cont() - 1; ++j){
 			points[i][j] = {};
 			if(i > 0){
 				points[i][j] = {y: (pop[i][j] /*- pop[i - 1][j]*/)/10, x: j};	
 			}else{
 				points[i][j] = {y: (pop[i][j])/10, x: j};
 			}

 			
 				
 		}


 		
 		size = pop[cont() - 2][cont() - 1];


 		aux[i] = {        
	       type: "stackedColumn",       
	       showInLegend:true,
	       name:"faixa etária " + (i + 1),
	       color: colors[i],
	      	dataPoints: points[i]
	     };

 	}

 	data = aux;
 
     

 	

 	





 	document.getElementById("chartContainer").style.display = "block";

  	


 	



 

    var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
        text: "distribuição etária projetada",
        fontFamily: "arial black",
        fontColor: "#252830"

      },
     animationEnabled: true,
      toolTip: {
        shared: true,
        content: function(e){
          var str = '';
          var total = 0 ;
          var str3;
          var str2 ;
          for (var i = 0; i < e.entries.length; i++){
            var  str1 = "<span style= 'color:"+e.entries[i].dataSeries.color + "'> " + e.entries[i].dataSeries.name + "</span>: <strong>"+  Math.round(e.entries[i].dataPoint.y * 100)/10 + "</strong>  <br/>" ; 
            total = e.entries[i].dataPoint.y + total;
            str = str.concat(str1);
          }
          str2 = "<span style = 'color:DodgerBlue; '><strong>"+ "Individuos por geração" + "</strong></span><br/>";
          total = Math.round(total*100)/10
          str3 = "<span style = 'color:Tomato '>Total:</span><strong> " + total+ "</strong>  <br/>";
          
          return (str2.concat(str)).concat(str3);
        }
      },
      axisY:{
        valueFormatString:"", 
        interval: size,
        gridColor: "#B6B1A8",
        tickColor: "#B6B1A8",
        interlacedColor: "rgba(182,177,168,0.2)"

      },
      axisX: {
        interval: 1,
        intervalType: "year"
      },

     	
      data
    
   });

chart.render();
};
