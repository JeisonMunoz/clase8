
// Notas: siempre usar el this al llamar una propiedad dentro de un metodo
// usar backtip para poder usar formato correcto en console.log

function Circle(radius){
    this.radius = radius
    this.area = function(){
        return Math.PI*(this.radius**2)
    } 
}

const circle1 = new Circle(5);

console.log("The area of the circle is: " + circle1.area());

console.log(`The area of the circle is: ${circle1.area()}`);


