document.getElementById("analyzeBtn").onclick=function(){
let evenCount=0,oddCount=0;
for(let num=1;num<=50;num++){
if(num%2===0){evenCount++;}else{oddCount++;}
}
document.getElementById("output").innerHTML=`Even: ${evenCount}<br>Odd: ${oddCount}`;
}