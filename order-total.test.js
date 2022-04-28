const orderTotal = require('./order-total')

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
  
   