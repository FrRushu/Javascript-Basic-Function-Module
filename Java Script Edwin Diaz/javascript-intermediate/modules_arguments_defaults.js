var run = (function(){
    
    var DEFAULTS = {
        topSpeed: '250 miles an hour'
    };
    
    return {
        
        speed: function(){
            
            var allArguments = arguments[0] || '';
            var myStaments = allArguments.topSpeed || DEFAULTS.topSpeed;
            console.log(myStaments);
            
        }   
    };
       
})();

