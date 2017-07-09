var endPoint = {
    "buttons": [
        10,
        38,
        -13,
        -18
    ],
    "bars": [
        102,
        245,
        62
    ],
    "limit": 230
};

function _barTrigger(obj){
    var e = document.getElementById("barSelection");
    var ddSelected = e.options[e.selectedIndex].value;
    var index=e.selectedIndex;
    var buffer =obj.innerHTML*1;
    _setProgress(index,buffer);
}
function _setProgress(index,buffer){
    var oldvalue=document.getElementsByClassName("insidediv")[index].getAttribute("data-progressvalue");
    var newval=oldvalue*1+buffer;
    var fullwidth=document.getElementsByClassName("barcontainer")[0].clientWidth;
             var perc=Math.ceil((newval/endPoint.limit)*100);
             var width='';
             if(perc>100){
                //  perc=100;
                 width=fullwidth;
                 document.getElementsByClassName("insidediv")[index].style.background="red";
             }else if(perc<0){
                perc=0;
                newval=0;
                width=0;
                document.getElementsByClassName("insidediv")[index].style.background="#3498db";
             }
              else{
                width=(perc*fullwidth)/100;
                document.getElementsByClassName("insidediv")[index].style.background="#3498db";
             }
            document.getElementsByClassName("insidediv")[index].style.width=width+"px";
            document.getElementsByClassName("insidediv")[index].setAttribute("data-progressvalue",newval);
            document.getElementsByClassName("barcontainer")[index].getElementsByTagName("span")[0].innerHTML=perc+" %";

}
var bar={
    buttons: function(){
         var innerhtml="";
        for(var i=0;i<endPoint.buttons.length;i++){
            innerhtml+="<button onclick='_barTrigger(this);'>"+endPoint.buttons[i]+"</button>";
        }
        var prevhtml=document.getElementsByClassName('controls')[0].innerHTML;
        document.getElementsByClassName('controls')[0].innerHTML=prevhtml+innerhtml;
    },
    selectionDropdown: function(){
        var innerhtml="";
        for(var i=0;i<endPoint.bars.length;i++){
            innerhtml+="<option>ProgressBar "+i+"</option>";
        }
        document.getElementById('barSelection').innerHTML=innerhtml;
    },
    barcontainers: function(){
        var barhtml="";
        for(var i=0;i<endPoint.bars.length;i++){
            barhtml+="<div class='barcontainer'><div class='insidediv'></div><span>bar</span></div>";
        }
        document.getElementById('barholder').innerHTML=barhtml;
        //setting init values
        var fullwidth=document.getElementsByClassName("barcontainer")[0].clientWidth;
        var width='';
        for(var i=0;i<endPoint.bars.length;i++){
            var value=endPoint.bars[i];
             var perc=Math.ceil((value/endPoint.limit)*100);

             if(perc>100){
                    width=fullwidth;
                     document.getElementsByClassName("insidediv")[i].style.background="red";
             }else if(perc<0){
                 width=0;
                perc=0;
                value=0;
                document.getElementsByClassName("insidediv")[index].style.background="#3498db";
             }else{
                 width=(perc*fullwidth)/100;
                document.getElementsByClassName("insidediv")[i].style.background="#3498db";
             }
             document.getElementsByClassName("insidediv")[i].style.width=width+"px";
             document.getElementsByClassName("insidediv")[i].setAttribute("data-progressvalue",value);
             document.getElementsByClassName("barcontainer")[i].getElementsByTagName("span")[0].innerHTML=perc+" %";
        }
    }
};

// function _animate(){
//     setInterval(function(){  }, 3000);
// }

bar.barcontainers();
bar.selectionDropdown();
bar.buttons();
