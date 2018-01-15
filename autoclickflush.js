var timecount=0;
var nums=[
"18XXXXXXXXX",
"18XXXXXXXXX"
]
function autoClick(){
	var index = Math.floor((Math.random()*nums.length));
	$("#busiNumSmall").val(nums[index]);
        $("#diagnoseSmall").click(); 
        timecount+=1;
       if(timecount=== 7){
       clearInterval(interval);
       } 
}

var interval=setInterval(autoClick,10000);
