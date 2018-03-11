var car = function(){
    var model,year;
    return console.log(this);
}

bmw = new car;
bmw.model ="7 series";
console.log(bmw.model);

audi = new car;
audi.model ="a 8";
console.log(audi.model);