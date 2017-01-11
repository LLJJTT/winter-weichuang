var oContainer = document.getElementById('container');
var oBigImg = document.getElementById('big-img');
var aBigImgs = oBigImg.getElementsByTagName('img');
var oSmallImg = document.getElementById('small-img');
var aSmallImgs = oSmallImg.getElementsByTagName('img');
var oPrev = document.getElementById('prev');
var oNext = document.getElementById('next');
var oInfo = document.getElementById('info');
var oCurrentPage = document.getElementById('current-page');
var zIndex = 9;
var iNow = 0;
var timer;
for(var i = 0; i <aBigImgs.length;i++){
    aBigImgs[i].style.zIndex = aBigImgs.length - i;
}
for(var i = 0;i<aSmallImgs.length;i++) {
    aSmallImgs[i].style.opacity = 0.3;
    aSmallImgs[i].style.filter ="alpha(opacity = 30)";
}
aSmallImgs[0].style.opacity = 1;
aSmallImgs[0].style.filter = "alpha(opacity = 100)";
 oPrev.onmouseover = oNext.onmouseover = function(){
     animate(this,{
         opacity:100
     });
}
oPrev.onmouseout = oNext.onmouseout = function(){
    animate(this, {
        opacity : 0
    });
};
oPrev.onclick = oNext.onclick = function(){
    if(this == oNext) {
        iNow++;
        if (iNow == aBigImgs.length) {
            iNow = 0;
        }
    }
        else{
            iNow --;
            if(iNow == -1){
                iNow = aBigImgs.length - 1;

            }
        }
    changImg();

};
for(var i=0;i<aSmallImgs.length;i++) {
    aSmallImgs[i].index = i;
    aSmallImgs[i].onclick =function(){
        if(iNow!= this.index)
        {
            iNow = this.index;
            changImg();
        }
    }
}
oContainer.onmouseover = function(){
    clearInterval(timer);
}
oContainer.onmouseout = function(){
    play();
}
play();
function play(){
    timer = setInterval(function(){
        oNext.onclick();
    },1000);
}


function changImg(){
    aBigImgs[iNow].style.opacity = 0;
    aBigImgs[iNow].style.filter = "alpha(opacity=0)";
    aBigImgs[iNow].style.zIndex = zIndex++;
    oInfo.style.zIndex = oPrev.style.zIndex = oNext.style.zIndex =zIndex++;
    animate(aBigImgs[iNow],{
        opacity:100
    });
    oCurrentPage.innerHTML = iNow + 1;
    for(var i = 0;i<aSmallImgs.length;i++){
        aSmallImgs[i].style.opacity = 0.3;
        aSmallImgs[i].style.filter = "alpha(opacity = 30)";
    }
    aSmallImgs[iNow].style.opacity  = 1;
    aSmallImgs[iNow].style.filter = "alpha(opacity = 100)";
    var left =0;
    if(iNow == 0||iNow == 1){
        left = 0;
    }
    else if(iNow==aSmallImgs.length - 1||iNow ==aSmallImgs.length - 2){
                left = aSmallImgs.length/2;
            }
        else{
            left = iNow - 1;
        }
    animate(oSmallImg,{
        left:-left*aSmallImgs[0].offsetWidth
    });

}


