document.getElementById("primeBtn").onclick=function(){
let list="";
for(let n=2;n<=50;n++){
let prime=true;
for(let d=2;d<=Math.sqrt(n);d++){
if(n%d===0){prime=false;break;}
}
if(prime){list+=n+", ";}
}
document.getElementById("primeOutput").innerHTML=list;
}