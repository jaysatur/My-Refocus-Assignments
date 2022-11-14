const bmic = require("./bmi_calculator")

test("Weight is 65 and height is 180",() => {
    expect(bmic(65,180)).toBe(20);
})