var run = (function(){
    
    var speed = '100 miles pr hour';
    
    var DEFAULTS = {
        
        topSpeed: 'amar bal er speed dicho'
    };
    return {
        
        speed: function(){
            
            var allArguments = arguments[0]|| '';
            
            var myStatements = allArguments.topSpeed || DEFAULTS.topSpeed;
            
            console.log(myStatements);
        }
    }
    
})();