const {returnTwo, greeting, add, subtract, multiply, divide} = require('./functions.js');

test("does returnTwo to equal 2", ()=>{
    expect(returnTwo()).toEqual(2)
})



describe("greeting test", () =>{
    test("greeting return the right string", () => {
        expect(greeting('James')).toBe("hello, James.")
    }),
    test("greeting return the right string", () => {
        expect(greeting('Jill')).toBe("hello, Jill.")
    })

})

describe("add test", () =>{
    test("add return the right sum", () => {
        expect(add(1, 2)).toBe(3)
    }),
    test("add return the right sum", () => {
        expect(add(5, 9)).toBe(14)
    })
})


describe("add test", () =>{
    test("add return the right sum", () => {
        expect(add(1, 2)).toBe(3)
    }),
    test("add return the right sum", () => {
        expect(add(5, 9)).toBe(14)
    })
})


describe("Math Functions", () =>{
    test("subtract return the subraction", () => {
        expect(subtract(17, 10)).toBe(7)
    }),
    test("multiply return the multiplication", () => {
        expect(multiply(3, 3)).toBe(9)
    }),
    test("divide return the right division", () => {
        expect(divide(16, 2)).toBe(8)
    })
})

