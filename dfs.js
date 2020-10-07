const hola2 = {
  a: {
    b: {
      c: "",
    },
    d: "",
  },
};

function nameWriter(hola, stack = []) {
  for (oneKey of Object.keys(hola)) {
    stack.push(oneKey);
    if (typeof hola[oneKey] === "string") {
      hola[oneKey] = stack.join(".");
    } else {
      nameWriter(hola[oneKey], stack);
    }
    stack.pop();
  }
}

function dfs(hola, valueToFind, flag = false) {
  for (oneKey of Object.keys(hola)) {
    if (typeof hola[oneKey] === "string") {
      if (hola[oneKey] === valueToFind) {
        return true;
      }
    } else {
      flag = dfs(hola[oneKey], valueToFind);
    }
  }
  return flag;
}

nameWriter(hola2);

console.log(hola2);
console.log(dfs(hola2, "a.b.c"));
console.log(dfs(hola2, "a.d"));
console.log(dfs(hola2, "ad.d"));

const x = {
    5: {
        3: {
            1: "",
            4: ""
        },
        6: ""
    }
}
