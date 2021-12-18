

function generador(){

	let tiempo = new Date();
	let Y = tiempo.getFullYear();
	let M = tiempo.getMonth();
	let D = tiempo.getDate();
	let	h = tiempo.getHours();
	let m = tiempo.getMinutes();
	let s = tiempo.getSeconds();
	let r = 0.864;

	let tiempoNormal = (h*3600)+(m*60)+s;
	let tiempoDecimal = "00000"+String(parseInt((tiempoNormal/r),10));
	let size = tiempoDecimal.length;

	let decimalTime = String(tiempoDecimal).split("").reverse().join("");
	let hDec = decimalTime.substring(4,6).split("").reverse().join("");
	let mDec = decimalTime.substring(2,4).split("").reverse().join("");
	let sDec = decimalTime.substring(0,2).split("").reverse().join("");

	document.getElementById("añosDec").innerHTML = 10000+Y;
	document.getElementById("horasDec").innerHTML = hDec;
	document.getElementById("minutosDec").innerHTML = mDec;
	document.getElementById("segundosDec").innerHTML = sDec;

	/*document.getElementById("Decimal").innerHTML = "DEC "+decimalTime;*/

}

setInterval( ()=> {generador();},1000 );

