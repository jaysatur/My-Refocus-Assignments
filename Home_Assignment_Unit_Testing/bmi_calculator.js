const bmi = (weight,height)=> {
        let BMI = ( (weight) / (height/100)**2)
        console.log(BMI.toFixed(0))
        return parseInt(BMI.toFixed(0))
    }
bmi(65,180)
module.exports = bmi