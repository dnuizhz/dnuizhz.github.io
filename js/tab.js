
        //张荭桢
        var t=document.querySelectorAll(".tab");

        for(var i=0;i<t.length;i++){
            tabs(t[i]);
        }


        // var tab=document.querySelector(".tab");
        // 找到第一个.tab
    function tabs(tab){
        var tt=tab.getElementsByClassName("tt")[0];
        // var span=tt.getElementsByTagName("span");
        var span=tt.querySelectorAll("span");
        var tc=tab.getElementsByClassName("tc");
        // var tc=tab.querySelectorAll(".tc");


        for(let i=0;i<span.length;i++){
            span[i].index=i;
            span[i].onmousemove=function(){
                for(let j=0;j<span.length;j++){
                    span[j].classList.remove("cur");
                    tc[j].style.display="none";
                }
                this.classList.add("cur");
                tc[this.index].style.display="block";
            };
        }
    }
