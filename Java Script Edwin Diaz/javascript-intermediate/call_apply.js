var run = function(speed){
    
    console.log(speed);
    console.log(this.firsSpeed);
    
    
}

var speedUpgrade = {firsSpeed: '50 more miles per hour', secondSpeed: '200 miles an hour'};

run.apply(speedUpgrade, ['5000 miles an hour'])


//run('100 miles an hour');