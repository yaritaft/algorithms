const a = "ala";
const acum = [];
for (let i=a.length-1; i>=0; i --){
    acum.push(a[i])
}
const rever = acum.join('')
console.log(rever==a)

const b = "ala";
console.log(b == b.split('').reverse().join(""))
// two ways of doing it
