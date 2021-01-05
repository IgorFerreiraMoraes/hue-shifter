function genSplit(){
    var hue = Number(document.getElementById("hue").value);
    var sat = Number(document.getElementById("sat").value);
    var lum = Number(document.getElementById("brg").value);

    document.getElementById("color-1").innerText = hue - 150;
    document.getElementById("color0").innerText = hue -15;
    document.getElementById("color1").innerText = hue +160;

    document.getElementById("color-1").style = `background-color: hsl(${hue-150}, ${sat}%,${lum}%)`;
    document.getElementById("color0").style = `background-color: hsl(${hue -15}, ${sat}%,${lum}%)`;
    document.getElementById("color1").style = `background-color: hsl(${hue+150}, ${sat}%,${lum}%)`;
}

function genCompl(){
    var curHue = Number(document.getElementById("hue").value);
    if(curHue > 180)
        document.getElementById("hue").value = curHue - 180;
    else
        document.getElementById("hue").value = curHue + 180;
    genColor();
}
function genTriad(){
    var hue = Number(document.getElementById("hue").value);
    var sat = Number(document.getElementById("sat").value);
    var lum = Number(document.getElementById("brg").value);

    document.getElementById("color-1").innerText = hue -120;
    document.getElementById("color0").innerText = hue;
    document.getElementById("color1").innerText = hue +120;

    document.getElementById("color-1").style = `background-color: hsl(${hue-120}, ${sat}%,${lum}%)`;
    document.getElementById("color0").style = `background-color: hsl(${hue}, ${sat}%,${lum}%)`;
    document.getElementById("color1").style = `background-color: hsl(${hue+120}, ${sat}%,${lum}%)`;
}

function genColor(){
    var hue = Number(document.getElementById("hue").value);
    var sat = Number(document.getElementById("sat").value);
    var lum = Number(document.getElementById("brg").value);
    document.getElementById("normal").style = `background-color: hsl(${hue}, ${sat}%,${lum}%)`;
    document.getElementById("normal").innerText = document.getElementById("normal").style.backgroundColor;
    var darkhue;
    var darksat;
    var darklum;
    /*DARK */
    if(hue < 250 && hue>=70){
        darkhue = hue+15;   
    }         
    else if(hue >= 250 || hue<70){
        darkhue = hue-15;
    }
    else if(hue <= 16){
        darkhue = 350;
    }
    if(sat <= 88){
       darksat = sat+12;

    }
    else{
    darksat = 99;
    }
    if(lum>=10){
        darklum = lum -  9;
    }
    else{
        darklum = lum;
    }
    document.getElementById("dark").style = `background-color: hsl(${darkhue}, ${sat}%,${darklum}%)`;
    document.getElementById("dark").innerText = document.getElementById("dark").style.backgroundColor;
    /*LIGHT*/
    if(hue <= 60 || hue >= 240){
       hue = Number(hue)+15;
    }
    else if(hue>=60 && hue<=240){
        hue = Number(hue)-15;
    }
    else if(hue >= 340){
        hue = 0;
    }
    if(sat >= 9){
        sat -= 9;
     }
    else{
        sat = 2;
    }
    if(lum <= 90){
        lum+=5;
    }
     document.getElementById("bright").style = `background-color: hsl(${hue}, ${sat}%,${lum}%)`;
     document.getElementById("bright").innerText = document.getElementById("bright").style.backgroundColor;
}