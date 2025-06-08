let millisecond=0,second=0,minutes=0,hour=0
let time=document.getElementById("time")
let timeref;

document.getElementById("start").onclick=function()
{
      timeref=setInterval(updatetime,10)
}
function updatetime()
{
      millisecond=millisecond+10
      if(millisecond==1000)
      {
            second=second+1
            millisecond=0
            if(second==60)
            {
                  minutes=minutes+1
                  second=0
                  if(minutes==60)
                  {
                        hour=hour+1
                        minutes=0
                  }
            }
      }
      let h,m,s,ms;
      if(hour<10)
      {
            h='0'+hour
      }
      else
      {
            h=hour
      }
      if(minutes<10)
      {
            m='0'+minutes
      }
      else
      {
            m=minutes
      }
      if(second<10)
      {
            s='0'+second
      }
      else
      {
            s=second
      }
      if(millisecond<10)
      {
            ms='0'+millisecond
      }
      else if(millisecond<100)
      {
            ms='00'+millisecond
      }
      else
      {
            ms=millisecond
      }
      time.innerHTML=`${h} : ${m} : ${s} : ${ms}`
}
document.getElementById("pause").onclick=function(){
      clearInterval(timeref)//it clears the time

}
document.getElementById("reset").onclick=function()
{
      clearInterval(timeref)
      millisecond=0
      second=0
      minutes=0
      hour=0
      time.innerHTML="00 : 00 : 00 : 000"
}