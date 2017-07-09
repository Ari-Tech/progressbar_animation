var endPoint = {
    "buttons": [
        10,
        38,
        -13,
        -18
    ],
    "bars": [
        62,
        45,
        62
    ],
    "limit": 230
};

var bar={
    buttons: function(){
         var innerhtml="";
        for(var i=0;i<endPoint.buttons.length;i++){
            innerhtml+="<button>"+endPoint.buttons[i]+"</button>";
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
            barhtml+="<div class='barcontainer'>Bar</div>";
        }
        document.getElementById('barholder').innerHTML=barhtml;
    }
};


bar.barcontainers();
bar.selectionDropdown();
bar.buttons();