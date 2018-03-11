function car(){
    
    var model,year, runs;
    this.model="A8";
    this.run = function(){
        console.log("This is a super fast car");
    }
    
}
function newCar(model, year){
    this.carModel =model;
    this.carYear =year;
    
}
audi = new car;
console.log(audi.run());

bmw = new newCar("7 series", 2018);
console.log(bmw.carModel);