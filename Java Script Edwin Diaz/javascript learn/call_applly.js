var run = function(speed){
    
    console.log(speed);
    console.log(this);
}

var speedUpgrade ={ firstSpeed: "50 more mile per hour", secondSpeed : "200 miles per hours"}
run.call(speedUpgrade);
//run("100 miles per hours");