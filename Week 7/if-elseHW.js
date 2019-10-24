let today= new Date();
console.log(today.getHour());
let dias= "Good morning";
let mediodia= "Good afternoon";
let tardes= "Good evening";
let noches= "Good night";

if (today.getHour()=5 && today.getHour()<=11){
	document.querySelector("#demo").innerHTML= dias;
} 
else if (today.getHour()=12 && today.getHour()=<14){ 
	document.querySelector("#demo").innerHTML= mediodia;
}
else if (today.getHour()=15 && today.getHour()=<17){
	document.querySelector("#demo").innerHTML= tardes;
}
else if (today.getHour()=18 && today.getHour()=<23) {
	document.querySelector("#demo").innerHTML= noches;
}
else(today.getHour()=0 && today.getHour()=<4) {
	document.querySelector("#demo").innerHTML= noches;
}