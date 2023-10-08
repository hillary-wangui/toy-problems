const speed = prompt ("125");

const speedNumber = Number (speed);

if (speedNumber <70){
    console.log ("Ok")
}
else {
     const demeritPoints = Math.floor ((speedNumber - 70)/5)

     if (demeritPoints>12){
        return "License Suspended"
     }
     else {
        console.log (Points , $,{demeritPoints});
     }
}