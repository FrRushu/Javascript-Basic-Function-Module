function parentProcess(){
    
    var speed = '100 miles an hour';
    
    
    function childProcess(){
        
        console.log("this car is running " + speed)
        
        
    }
    
    childProcess();
    
    
}


parentProcess();