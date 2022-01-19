const { iteratee } = require("lodash")
const { add }= require("./add")// to import the function we want to test

describe("add", () => { //describe function takes two parameters a string and a function 
                        //describe groups all of your tests, one describe for every function 

   it("adds 3 and 6", () => { //stands for individual test, here when your your actual test run
       const actual = add(3,6)
       const expected = 9 

       expect(actual).toEqual(expected)
   })
   it("adds 1 and 2", () => { //stands for individual test, here when your your actual test run
    const actual = add(1,2)
    const expected = 3 

    expect(actual).toEqual(expected)
})
it("Return 'Invalid' if a parameter is not a number",() => {
    const actual = add('not a number', 2)
    const actual2 = add(1, 'not a number')
    const expected = 'Invalid'
    expect(actual).toEqual(expected)
    expect(actual2).toEqual(expected)

})
})