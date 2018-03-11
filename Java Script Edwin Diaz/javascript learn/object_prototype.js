function car(){
    
    var model,year, runs;
    this.model="A8";
    this.run = function(){
        console.log("This is a super fast car");
    }
    
}

function speed(miles){
    console.log(miles);
}

car.prototype.speed =speed;

audi = new car;

audi.speed(300);

