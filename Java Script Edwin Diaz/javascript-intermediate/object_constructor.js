var Car = function(){
    
    var model, year;
    
    return console.log(this)
    
    
}


bmw = new Car;

bmw.model = '335I';

console.log(bmw.model)


mercedes = new Car;

mercedes.model = 'c250';

console.log(mercedes.model)
