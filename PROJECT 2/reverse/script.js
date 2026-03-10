document.getElementById("showBtn").onclick=function(){
let txt="";
for(let i=20;i>=1;i--){
if(i%2===0){txt+=i+", ";}
}
document.getElementById("evenOut").innerHTML=txt;
}