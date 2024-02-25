function getHours(){
    let time=new Date()
    document.getElementById("hours").innerHTML=time.getHours()
}
function getMins(){
    let time=new Date()
    document.getElementById("mins").innerHTML=time.getMinutes()
}
function getSeconds(){
    let time=new Date()
    document.getElementById("seconds").innerHTML=time.getSeconds()
}
setInterval(getHours,1000)
setInterval(getMins,1000)
setInterval(getSeconds,1000)