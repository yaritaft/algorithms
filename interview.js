function flatten2(arrayOriginal, list=[]){
    for (oneElement of arrayOriginal){
        if (typeof(oneElement)=="number"){
            list.push(oneElement);
        }
        else {
            flatten2(oneElement, list)
        }
    }
    return list;
}

myNewFunc = decoratorFlatten()
// myNewFunc([[1, 2, 3], [4, 5]])

console.log(flatten2([[1, 2, 3], [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten2([[[1, [1.1]], 2, 3], [4, 5]])); // [1, 1.1, 2, 3, 4, 5]
