document.getElementById("checkBtn").onclick=function(){
let nums=[
Number(a.value),
Number(b.value),
Number(c.value),
Number(d.value),
Number(e.value)
];
let max=nums[0];
for(let i=1;i<nums.length;i++){
if(nums[i]>max){max=nums[i];}
}
result.innerHTML="Largest: "+max;
}