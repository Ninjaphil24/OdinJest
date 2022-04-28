function orderTotal(order) {
    return order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0)
  }

function capitalizeTest(entry) {
    return entry.charAt(0).toUpperCase() + entry.slice(1);
}


function sum(a,b) {
    return a+b
}

console.log(sum(1,2))

module.exports = {
    method1: orderTotal,
    method2: capitalizeTest
}