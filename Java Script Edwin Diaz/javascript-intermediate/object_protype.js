function speed(miles){
    
    console.log(miles)
    
}




function Car(model, year){
     
    this.carModel = model;
    this.year = year;
    
    
    
    
}


Car.prototype.speed = speed;

var bmw = new Car('335i', 2021);


bmw.speed('100');

