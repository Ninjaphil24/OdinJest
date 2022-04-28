const modules = require('./order-total')
const orderTotal = modules.method1
const capitalizeTest = modules.method2
const reverseString = modules.method3
const math = modules.method4
const rot13=modules.method5
const analyzeArray=modules.method6



it('works', ()=>{
   expect(1).toBe(1) 
})

it('Quantity', () => 
    expect(orderTotal({
        items: [
          { 'name': 'Dragon candy', price: 2, quantity: 3 }
        ]
      })).toBe(6))

it('No quantity specified', ()=>
    expect(orderTotal({
        items: [
          { 'name': 'Dragon candy', price: 3 }
        ]})).toBe(3)
)      
  
it('Check Fail: Happy Path (Ex 1)', ()=>  
  expect(orderTotal({
    items: [
      { name: 'Dragon food', price: 8, quantity: 1 },
      { name: 'Dragon cage (small)',  price: 800, quantity: 1 }
    ]
  })).toBe(808))
  
  it('Check Fail: Happy Path (Ex 1)', ()=>  
  expect(orderTotal({
    items: [
      { name: 'Dragon collar', price: 20, quantity: 1 },
      { name: 'Dragon chew toy',  price: 40, quantity: 1 }
    ]
  })).toBe(60))
  
  it('Capitalize', ()=>
  expect(capitalizeTest("test")).toBe("Test"))
   
  it('Reverse', ()=>expect(reverseString("Hello")).toBe("olleH"))

  it('Math', ()=>expect(math(1,2)).toBe(3))
  
  it('Cypher', ()=>expect(rot13("HELLO PEOPLE")).toBe("URYYB CRBCYR"))

  it('Array Analysis', ()=>expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
    average: 4,
    length: 6,
    min: 1,
    max: 8
  }))