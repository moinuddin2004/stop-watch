var hr = document.getElementById('hr')
var min = document.getElementById('min')
var sec = document.getElementById('sec')

var dat=new Date()
var hor=dat.getHours()
var minn=dat.getMinutes()
var secc=dat.getSeconds()
min.innerHTML=minn
hr.innerHTML=hor
function time()
{
setInterval(function(){
    // secc++
    sec.innerHTML=secc++
    if(secc==60){
       
        secc=0
        // minn++
    min.innerHTML=minn++

    }
    else if(minn==60)
    {
        // hor++
        minn=0
        hr.innerHTML=hor++
    }
    // document.write(hor+" "+minn+" "+secc+"<br>")
},1000);
}
time()