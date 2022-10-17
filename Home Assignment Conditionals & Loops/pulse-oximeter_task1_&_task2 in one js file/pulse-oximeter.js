
function pulseOximeter(oxygen,pulse)
{
    if(oxygen >= 96 && pulse > 40 && pulse <=100)
    {
        console.log(`Normal Reading`);
    }
    else if(oxygen == 95 && pulse >= 101 && pulse <= 109 )
    {
        console.log(`Acceptable to continue home monitoring`);
    }
    else if(oxygen == 93 || oxygen == 94 && pulse >= 110 && pulse <= 130)
    {
        console.log(`Seek advice from health professionals`);
    }
    else
    {
        console.log(`Seek urgent medical advice`);
    }
}

console.log(pulseOximeter(97,60))