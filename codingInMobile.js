function mysettings(){
    var x = document.getElementById("seting");
    if(x.style.width=="0px"){
        x.style.width="360px";
    }
    else{
        x.style.width="0px";
    }
    }
    function myNotes(){
     var x = document.getElementById("notes");
     if(x.style.width=="0px"){
        x.style.width="360px";
    }
    else{
        x.style.width="0px";
    }

    }
    
    function DarkMode(){   
        var a = document.getElementById("body");
        var b = document.getElementById("menu");
        var c = document.getElementById("containt");
        var f = document.getElementById("seting");
        var d = document.getElementById("Weblang1");
        var t = document.getElementById("Weblang2");
        var g = document.getElementById("Weblang3");
        var x = document.getElementById("dark");
        var y = document.getElementById("onOff");
        var l = document.getElementById("notes");
        l.style.backgroundColor="rgb(61, 56, 56)";
        y.innerHTML="On";
        x.style.color="white";
        a.style.backgroundColor="rgb(61, 56, 56)";
        b.style.backgroundColor="rgb(44, 44, 44)";
        c.style.backgroundColor="rgb(85,84,84)";
        d.style.backgroundColor="rgb(85, 84, 84)";
        f.style.backgroundColor="rgb(61, 56, 56)";
        t.style.backgroundColor="rgb(85,84,84)";
        g.style.backgroundColor="rgb(85, 84, 84)";
     
    }
