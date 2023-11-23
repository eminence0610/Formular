function Triangle(){
    var a = 1/2
    var b = Number(prompt("Base(centimeter)"))
    var h = Number(prompt("Height(centimeter)"))
    var answer = a*(b*h)
    var convert = answer.toFixed(3)
    var result = (convert + "cm²")
    document.getElementById("equal").innerHTML = result
}
function Circle(){
    var pi = 22/7 
    var r = Number(prompt("Radius(meter)"))
    var answer = pi*(r**2)
    var convert = answer.toFixed(3)
    var result = (convert + "m²")
    document.getElementById("equal").innerHTML = result


}
function Square(){
    var l = Number(prompt("length(centimeter)"))
    var answer = l**2
    var convert = answer.toFixed(3)
    var result = (convert + "cm²")
    document.getElementById("equal").innerHTML = result

}
function Trapezium(){
    var n = 1/2
    var a = Number(prompt("length(centimeter)"))
    var b = Number(prompt("base(centimeter)"))
    var h = Number(prompt("Height(centimeter)"))
    var answer = n*(a+b)*h
    var convert = answer.toFixed(3)
    var result = (convert + "cm²")
    document.getElementById("equal").innerHTML = result

}
function Parallelogram(){
    var b = Number(prompt("Base(centimeter)"))
    var h = Number(prompt("Height(centimeter)"))
    var answer = b*h
    var convert = answer.toFixed(3)
    var result = (convert + "cm²")
    document.getElementById("equal").innerHTML = result

}
function Rhombus(){
    var a = 1/2
    var D = Number(prompt("Diagonal1(centimeter)"))
    var d = Number(prompt("Diagonal2(centimeter)"))
    var answer = a*(D*d)
    var convert = answer.toFixed(3)
    var result = (convert + "cm²")
    document.getElementById("equal").innerHTML = result

}
function Quadrilateral(){
    var b = Number(prompt("Base(centimeter)"))
    var h = Number(prompt("Height(centimeter)"))
    var answer = b*h
    var convert = answer.toFixed(3)
    var result = (convert + "cm²")
    document.getElementById("equal").innerHTML = result

}
function Index(){
    var w = Number(prompt("Weight(kilogram)"))
    var h = Number(prompt("Height(meter)"))
    var answer = w/(h**2)
    var convert = answer.toFixed(3)
    var result = (convert + "kg/m²")
    document.getElementById("equal").innerHTML = result

}