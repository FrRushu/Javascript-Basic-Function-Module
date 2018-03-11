var run = (function(){
    
    var DEFAULTS = {
        topSpeed: '250 miles an hour',
        topHorsePower: '507 horse power'
    };
    
    return {
        
        speed: function(){
            
            var allArguments = arguments[0] || '';
            var myStaments = allArguments.topSpeed || DEFAULTS.topSpeed;
            console.log(myStaments);
            
            return this;
            
        },
        
        horsePower: function(){
            
            var myallArguments = arguments[0] || '';
            var topHorsePowerChecking = myallArguments.topHorsePower || DEFAULTS.topHorsePower ;
            console.log(topHorsePowerChecking);
            
            return this;
            
        }
        
        
    };
       
})();

