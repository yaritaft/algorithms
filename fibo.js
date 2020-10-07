function fibo(n){
    if (n == 0 || n == 1){
        return 1
    }
    let aux;
    let i=1;
    let j=1;
    let acum = 0
    for (let q=2; q<=n; q++){
        aux = i;
        i = j
        j = aux + j
    }
    return j + i;

}

console.log(fibo(0))
console.log(fibo(1))
console.log(fibo(2))
console.log(fibo(3))
console.log(fibo(4))