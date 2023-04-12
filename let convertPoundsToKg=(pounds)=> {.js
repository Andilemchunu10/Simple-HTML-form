let convertPoundsToKg=(pounds)=> {
    kg = pounds*0.453592;
    return kg;
    
}
console.log(convertPoundsToKg(3));

let convertInchesToCentimeteres=(inches)=>{
    centimeter = inches*2.54;
    return centimeter;
}
console.log(convertInchesToCentimeteres(3));

let fahreinheitToCelsius=(fahreinheit)=>{
    celsius = (fahreinheit-32)* 5/9;
    return celsius;
}
console.log(fahreinheitToCelsius(3));
let feetsTometers=(feets)=>{
    meters= feets *0.3048;
    return meters;
}
console.log(feetsTometers(3));