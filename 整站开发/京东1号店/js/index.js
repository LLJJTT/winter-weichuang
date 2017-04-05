var oLi1 = document.getElementById("banner-li1");
var oLi2 = document.getElementById("banner-li2");
var oLi3 = document.getElementById("banner-li3");
var oLi4 = document.getElementById("banner-li4");
var oLi5 = document.getElementById("banner-li5");
var oDiv = document.getElementById("banner-right-up");
oLi1.style.background = "#dd6a0f";
var imgArry = ["banner-img01.jpg","banner-img02.jpg","banner-img03.jpg","banner-img04.jpg","banner-img05.jpg"];
oLi1.onmouseover = function(){
	oLi2.style.background = "#cbc0b4";
	oLi3.style.background = "#cbc0b4";
	oLi4.style.background = "#cbc0b4";
	oLi5.style.background = "#cbc0b4";
	this.style.background = "#dd6a0f";
	oDiv.style.background = "url(img/"+imgArry[0]+")";
}
oLi2.onmouseover = function(){
	oLi1.style.background = "#cbc0b4";
	oLi3.style.background = "#cbc0b4";
	oLi4.style.background = "#cbc0b4";
	oLi5.style.background = "#cbc0b4";
	this.style.background = "#dd6a0f";
	oDiv.style.background = "url(img/"+imgArry[1]+")";
}
oLi3.onmouseover = function(){
	oLi2.style.background = "#cbc0b4";
	oLi1.style.background = "#cbc0b4";
	oLi4.style.background = "#cbc0b4";
	oLi5.style.background = "#cbc0b4";
	this.style.background = "#dd6a0f";
	oDiv.style.background = "url(img/"+imgArry[2]+")";
}
oLi4.onmouseover = function(){
	oLi2.style.background = "#cbc0b4";
	oLi3.style.background = "#cbc0b4";
	oLi1.style.background = "#cbc0b4";
	oLi5.style.background = "#cbc0b4";
	this.style.background = "#dd6a0f";
	oDiv.style.background = "url(img/"+imgArry[3]+")";
}
oLi5.onmouseover = function(){
	oLi2.style.background = "#cbc0b4";
	oLi3.style.background = "#cbc0b4";
	oLi4.style.background = "#cbc0b4";
	oLi1.style.background = "#cbc0b4";
	this.style.background = "#dd6a0f";
	oDiv.style.background = "url(img/"+imgArry[4]+")";
}

var oBoutique1 = document.getElementById("boutique1");
var oBoutique2 = document.getElementById("boutique2");
var oBoutique3 = document.getElementById("boutique3");
var oBoutique4 = document.getElementById("boutique4");
var oBoutique1_h = document.getElementById("boutique1-h");
var oBoutique2_h = document.getElementById("boutique2-h");
var oBoutique3_h = document.getElementById("boutique3-h");
var oBoutique4_h = document.getElementById("boutique4-h");

oBoutique1.style.background = "#429020";
oBoutique1.style.color = "#fff";

oBoutique1.onmouseover = function(){
	this.style.background = "#429020";
	this.style.color = "#fff";
	oBoutique2.style.background = "#ededed";
	oBoutique3.style.background = "#ededed";
	oBoutique4.style.background = "#ededed";
	oBoutique2.style.color = "#666";
	oBoutique3.style.color = "#666";
	oBoutique4.style.color = "#666";
	oBoutique1_h.style.display = "block";
	oBoutique2_h.style.display = "none";
	oBoutique3_h.style.display = "none";
	oBoutique4_h.style.display = "none";
}
oBoutique2.onmouseover = function(){
	this.style.background = "#429020";
	this.style.color = "#fff";
	oBoutique1.style.background = "#ededed";
	oBoutique3.style.background = "#ededed";
	oBoutique4.style.background = "#ededed";
	oBoutique1.style.color = "#666";
	oBoutique3.style.color = "#666";
	oBoutique4.style.color = "#666";
	oBoutique2_h.style.display = "block";
	oBoutique1_h.style.display = "none";
	oBoutique3_h.style.display = "none";
	oBoutique4_h.style.display = "none";
}
oBoutique3.onmouseover = function(){
	this.style.background = "#429020";
	this.style.color = "#fff";
	oBoutique2.style.background = "#ededed";
	oBoutique1.style.background = "#ededed";
	oBoutique4.style.background = "#ededed";
	oBoutique1.style.color = "#666";
	oBoutique2.style.color = "#666";
	oBoutique4.style.color = "#666";
	oBoutique3_h.style.display = "block";
	oBoutique2_h.style.display = "none";
	oBoutique1_h.style.display = "none";
	oBoutique4_h.style.display = "none";
}
oBoutique4.onmouseover = function(){
	this.style.background = "#429020";
	this.style.color = "#fff";
	oBoutique2.style.background = "#ededed";
	oBoutique3.style.background = "#ededed";
	oBoutique1.style.background = "#ededed";
	oBoutique1.style.color = "#666";
	oBoutique2.style.color = "#666";
	oBoutique3.style.color = "#666";
	oBoutique4_h.style.display = "block";
	oBoutique2_h.style.display = "none";
	oBoutique3_h.style.display = "none";
	oBoutique1_h.style.display = "none";
}