function Triangle(){
    var a = 1/2
    var b = Number(prompt("Base"))
    var h = Number(prompt("Height"))
    var answer = a*(b*h)
    var convert = answer.toFixed(3)
    console.log(convert + "cm²")
}
function Circle(){
    var pi = 22/7 
    var r = Number(prompt("Radius"))
    var answer = pi*(r**2)
    var convert = answer.toFixed(3)
    console.log(convert + "m²")

}
function Square(){
    var l = Number(prompt("length"))
    var answer = l**2
    var convert = answer.toFixed(3)
    console.log(convert + "cm²")
}
function Trapezium(){
    var n = 1/2
    var a = Number(prompt("length"))
    var b = Number(prompt("base"))
    var h = Number(prompt("Height"))
    var answer = n*(a+b)*h
    var convert = answer.toFixed(3)
    console.log(convert + "cm²")
}
function Parallelogram(){
    var b = Number(prompt("Base"))
    var h = Number(prompt("Height"))
    var answer = b*h
    var convert = answer.toFixed(3)
    console.log(convert + "cm²")
}
function Rhombus(){
    var a = 1/2
    var D = Number(prompt("Diagonal1"))
    var d = Number(prompt("Diagonal2"))
    var answer = a*(D*d)
    var convert = answer.toFixed(3)
    console.log(convert + "cm²")
}
function Quadrilateral(){
    var b = Number(prompt("Base"))
    var h = Number(prompt("Height"))
    var answer = b*h
    var convert = answer.toFixed(3)
    console.log(convert + "cm²")
}
function Index(){
    var w = Number(prompt("Weight(kilogram)"))
    var h = Number(prompt("Height(meter)"))
    var answer = w/(h**2)
    var convert = answer.toFixed(3)
    console.log(convert + "kg/m²")
}