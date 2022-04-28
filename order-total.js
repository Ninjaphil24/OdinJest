function orderTotal(order) {
    return order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0)
  }

function capitalizeTest(entry) {
    return entry.charAt(0).toUpperCase() + entry.slice(1);
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function math(a,b) {
    var result = a+b 
    return result
}

// const alphabet=[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]

function rot13(str) {
    var solved=""
    for(var i=0;i<str.length;i++){
        var asciiNum=str[i].charCodeAt()
        if(asciiNum>=65&&asciiNum<=77){
           solved+=String.fromCharCode(asciiNum+13) 
        } else if (asciiNum>=78&&asciiNum<=90) {
            solved += String.fromCharCode(asciiNum-13)
        } else {
            solved+=str[i]
        }
    }
    return solved
}
console.log(rot13("HELLO PEOPLE"))

function analyzeArray(arr) {
    
       const sum= arr.reduce((a,b)=>a+b,0)
       const avg = (sum/arr.length)

       const min = Math.min(...arr)
       const max = Math.max(...arr)
       const length = arr.length
    return {
        average: avg,
        min: min,
        max: max,
        length: length
    }
}
console.log(analyzeArray([1,8,3,4,2,6]))
const arr = [1,8,3,4,2,6]
const object = analyzeArray([1,8,3,4,2,6]);

console.log(object)

// const object = {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// };

console.log(object.average, object.min)


module.exports = {
    method1: orderTotal,
    method2: capitalizeTest,
    method3: reverseString,
    method4: math,
    method5: rot13,
    method6: analyzeArray
}