var check1 = false;
        var check2 = false;
        var check3 = false;
        var check4 = false;
        function show1(){
            if(check1 == false){
                document.getElementById("div1").hidden = false;
                document.getElementById("div-up1").style.borderBottomLeftRadius = "0px";
                document.getElementById("div-up1").style.borderBottomRightRadius = "0px";
                check1 = true;
            }
            else{
                document.getElementById("div1").hidden = true;
                document.getElementById("div-up1").style.borderBottomLeftRadius = "5px";
                document.getElementById("div-up1").style.borderBottomRightRadius = "5px";
                check1 = false;
            }
        }

        function show2(){
            if(check2 == false){
                document.getElementById("div2").hidden = false;
                document.getElementById("div-up2").style.borderBottomLeftRadius = "0px";
                document.getElementById("div-up2").style.borderBottomRightRadius = "0px";
                check2 = true;
            }
            else{
                document.getElementById("div2").hidden = true;
                document.getElementById("div-up2").style.borderBottomLeftRadius = "5px";
                document.getElementById("div-up2").style.borderBottomRightRadius = "5px";
                check2 = false;
            }
        }

        function show3(){
            if(check3 == false){
                document.getElementById("div3").hidden = false;
                document.getElementById("div-up3").style.borderBottomLeftRadius = "0px";
                document.getElementById("div-up3").style.borderBottomRightRadius = "0px";
                check3 = true;
            }
            else{
                document.getElementById("div3").hidden = true;
                document.getElementById("div-up3").style.borderBottomLeftRadius = "5px";
                document.getElementById("div-up3").style.borderBottomRightRadius = "5px";
                check3 = false;
            }
        }

        function show4(){
            if(check4 == false){
                document.getElementById("div4").hidden = false;
                document.getElementById("div-up4").style.borderBottomLeftRadius = "0px";
                document.getElementById("div-up4").style.borderBottomRightRadius = "0px";
                check4 = true;
            }
            else{
                document.getElementById("div4").hidden = true;
                document.getElementById("div-up4").style.borderBottomLeftRadius = "5px";
                document.getElementById("div-up4").style.borderBottomRightRadius = "5px";
                check4 = false;
            }
        }