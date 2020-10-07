function hashFunc(a){
    return "bas"+a;
}

initialJson = {}

function insertInHashTable(a){
    const hashValue = hashFunc(a);
    if (initialJson[hashValue]){
        initialJson[hashValue].push(a);
    }
    else {
        initialJson[hashValue] = [a];

    }
}

function searchForValue(a){
    const hashValue = hashFunc(a);
    if (initialJson[hashValue] && initialJson[hashValue].indexOf(a)!==undefined){
            return true
    }
    else {
        return false;
    }
}


insertInHashTable("hola")
insertInHashTable("hola")
insertInHashTable("hola")
console.log(searchForValue("hola"))
console.log(searchForValue("holas"))
console.log(initialJson)