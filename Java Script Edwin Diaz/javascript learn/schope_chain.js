function parentProcess(){
    var speed = '100';
    
    function childProcess(){
        var speed ='200';
        console.log(speed);
    }
    childProcess();
}
parentProcess();