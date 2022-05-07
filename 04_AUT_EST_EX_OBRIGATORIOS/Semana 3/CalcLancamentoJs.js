// var vel = "10"

function GetVel()
{
    let grav = 10
    let hMax = 0
    let tSubida = 0

    vel = document.getElementById("vel").value;
    
    tSubida = vel/grav
    hMax = (vel*vel)/(2*grav)

    alert("O tempo de subida foi de: " + tSubida + "s. E a altura maxima foi de: " + hMax + "m");
    
}