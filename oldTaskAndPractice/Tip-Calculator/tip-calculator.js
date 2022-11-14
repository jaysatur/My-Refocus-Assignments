function computeTip(totalBill)
{
    let tip = totalBill * 0.1;
    return tip;
}

console.log(`Please tip $${computeTip(1000)}`);