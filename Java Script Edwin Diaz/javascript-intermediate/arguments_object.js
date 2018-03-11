var add = function(){
    
    
    var sum = 0; 
    
    for(var i = 0; i < arguments.length; i++){
        
        sum += arguments[i]
        
    }
    
    
    return sum;
    
  
    
}

console.log(add(10,10,1000, 344,32342,2342,2342,234324));