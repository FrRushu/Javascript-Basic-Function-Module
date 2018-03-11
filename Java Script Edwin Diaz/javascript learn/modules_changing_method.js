var run = (function(){
    
    var speed = '100 miles pr hour';
    
    var DEFAULTS = {
        
        topSpeed: 'amar bal er speed dicho',
        topHp: '240 hp'
    };
    return {
        
        speed: function(){
            
            var allArguments = arguments[0]|| '';
            
            var myStatements = allArguments.topSpeed || DEFAULTS.topSpeed;
            
            console.log(myStatements);
            
            return this;
        },
        
        horsePower: function(){
            
            var myAllArguments = arguments[0]|| '';
            
            var topHpChecking = myAllArguments.topHp || DEFAULTS.topHp;
            
            console.log(topHpChecking);
            
            return this;
        }
    }
    
})();