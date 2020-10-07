function completeFlatten(array, initial=[]){
    for (el of array){
        if (typeof(el)==="number"){
            initial.push(el);
        }
        else {
            completeFlatten(el, initial);
        }
    }
    return initial;
}

console.log(completeFlatten([1,2,[1,2],[4,[3]]]))

function depthFlatten(array, depth, initial=[], counter=0){
    for (el of array){
        if (depth===counter || typeof(el)==="number"){
            initial.push(el);
        }
        else {
            depthFlatten(el, depth, initial, counter+1);
        }
    }
    return initial;
}

console.log(depthFlatten([1,2,[1,2],[4,[3]]],0))