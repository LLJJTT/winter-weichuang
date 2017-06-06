window.onload = function(){
	var oScan = document.getElementById("scan");
	oScan.onclick = function(){
		oScan.value = "";
	}

	var oMainUp01 = document.getElementById("main-up01");
	var oMainUp02 = document.getElementById("main-up02");
	var oMainUp03 = document.getElementById("main-up03");

	oMainUp01.style.background = "#ea3939";
	oMainUp01.style.color = "white";
	var oMainDown = document.getElementById("main-down");

	oMainUp01.onmouseover = function(){
		oMainUp01.style.background = "#f1f1f1";
		oMainUp02.style.background = "#f1f1f1";
		oMainUp03.style.background = "#f1f1f1";
		oMainUp01.style.color = "black";
		oMainUp02.style.color = "black";
		oMainUp03.style.color = "black";
		this.style.background = "#ea3939";
		this.style.color = "white";
		oMainDown.style.background = "url(img/融资咨询.jpg)";
	}
	oMainUp02.onmouseover = function(){
		oMainUp01.style.background = "#f1f1f1";
		oMainUp02.style.background = "#f1f1f1";
		oMainUp03.style.background = "#f1f1f1";
		oMainUp01.style.color = "black";
		oMainUp02.style.color = "black";
		oMainUp03.style.color = "black";
		this.style.background = "#ea3939";
		this.style.color = "white";
		oMainDown.style.background = "url(img/投资资金.jpg)";
	}
	oMainUp03.onmouseover = function(){
		oMainUp01.style.background = "#f1f1f1";
		oMainUp02.style.background = "#f1f1f1";
		oMainUp03.style.background = "#f1f1f1";
		oMainUp01.style.color = "black";
		oMainUp02.style.color = "black";
		oMainUp03.style.color = "black";
		this.style.background = "#ea3939";
		this.style.color = "white";
		oMainDown.style.background = "url(img/股权投资.jpg)";
	}
}