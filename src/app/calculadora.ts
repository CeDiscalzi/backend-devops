function operar(operacion: string = "", a: number, b: any = undefined) {
    if (operacion === 'suma') {
        return suma(a, b);
    } else if (operacion === 'resta') {
        return restar(a, b);
    } else if (operacion === 'multiplicar') {
        return multiplicar(a, b);
    } else if (operacion === 'dividir') {
        return dividir(a, b);
    } else if (operacion === 'exponencial') {
        return exponencial(a, b);
    } else if (operacion === 'factorial') {
        return factorial(a);
    }
}

function suma(a: number, b: number) { //a = 1 , b=2

    if (a === undefined || b === undefined) {
        throw new Error("No se puede sumar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a + b;
}

function restar(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede restar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a - b;
}

function multiplicar(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede multiplicar indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a * b;
}

function dividir(a: number, b: number) {
    if (a === undefined || b === undefined) {
        throw new Error("No se puede dividir indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    if (a === 0) {
        return 0
    }

    return a / b;
}

function exponencial(a: number, b: number) {
    if (a === undefined || b === undefined) {

        throw new Error("No se puede utilizar esta funcion con valores indefinidos");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return (a) ** b;
}

function factorial(a: number) {
    if (a === undefined) {

        throw new Error("No se puede utilizar esta funcion con valores indefinidos");
    }
    if (typeof a !== 'number') {
        return NaN;
    }
    if (a === 0 || a === 1) {
        return 1;
    }
    if (a < 0) {
        throw new Error("El factorial no está definido para números negativos");
    }

    for (var i = a - 1; i >= 1; i--) {
        a *= i;
    }
    return a;
}

export { suma, operar, restar, multiplicar, dividir, exponencial, factorial };