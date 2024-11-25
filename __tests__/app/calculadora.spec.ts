import { describe, test, expect } from "@jest/globals";
import { suma, restar, operar, multiplicar, dividir, exponencial, factorial } from "../../src/app/calculadora";
import { randomInt } from "crypto";

describe("Bateria de test de calculadora", () => {

    test("Prueba basica", () => {
        expect(1).toBe(1);
    });

    test("Sumar en la calculadora", () => {

        expect(suma(1, 2)).toBe(3);
        expect(suma(5, 5)).toBe(10);
        expect(suma(15, 15)).toBe(30);
        expect(suma(1, 5)).not.toBe(0);

        let a: any = 1;
        let b: any = "a";
        expect(suma(a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => suma(a, b)).toThrowError("No se puede sumar indefinidos");

    });

    test("Restar en la calculadora", () => {

        expect(restar(5, 2)).toBe(3);
        expect(restar(15, 5)).toBe(10);
        expect(restar(45, 15)).toBe(30);
        expect(restar(10, 5)).not.toBe(0);

        let a: any = 1;
        let b: any = "a";
        expect(restar(a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => restar(a, b)).toThrowError("No se puede restar indefinidos");
    });

    test("Multiplicar en la calculadora", () => {

        expect(multiplicar(5, 2)).toBe(10);
        expect(multiplicar(-5, 2)).toBe(-10);
        expect(multiplicar(15, 5)).toBe(75);
        expect(multiplicar(45, 15)).toBe(675);
        expect(multiplicar(10, 0)).toBe(0);
        expect(multiplicar(2, 2)).not.toBe(3);

        let a: any = 1;
        let b: any = "a";
        expect(multiplicar(a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => multiplicar(a, b)).toThrowError("No se puede multiplicar indefinidos");
    });

    test("Dividir en la calculadora", () => {

        expect(dividir(10, 2)).toBe(5);
        expect(dividir(15, 5)).toBe(3);
        expect(dividir(45, 15)).toBe(3);
        expect(() => dividir(10, 0)).toThrowError("No se puede dividir por cero");

        let a: any = 0;
        let b: any = randomInt(1, 100);
        expect(dividir(0, b)).toBe(0);

        a = 1;
        b = "a";
        expect(dividir(a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => dividir(a, b)).toThrowError("No se puede dividir indefinidos");
    });

    test("Exponencial en la calculadora", () => {

        expect(exponencial(-10, -2)).toBe(0.01);
        expect(exponencial(15, 5)).toBe(759375);
        expect(exponencial(8, 5)).toBe(32768);

        let a: any = 1;
        let b: any = "a";
        expect(exponencial(a, b)).toBeNaN();

        a = 1;
        b = undefined;
        expect(() => exponencial(a, b)).toThrowError("No se puede utilizar esta funcion con valores indefinidos");
    });

    test("Factorial en la calculadora", () => {

        expect(factorial(2)).toBe(2);
        expect(factorial(8)).toBe(40320);
        expect(factorial(0)).toBe(1);

        let a: any = "a"
        expect(factorial(a)).toBeNaN();

        a = undefined;
        expect(() => factorial(a)).toThrowError("No se puede utilizar esta funcion con valores indefinidos");

        a = -5;
        expect(() => factorial(a)).toThrowError("El factorial no está definido para números negativos");
    });

    test("Operar en la calculadora", () => {

        expect(operar("suma", 10, 20)).toBe(30);
        expect(operar("resta", 5, 2)).toBe(3);
        expect(operar("suma", 5, 5)).toBe(10);
        expect(operar("resta", 15, 5)).toBe(10);
        expect(operar("suma", 15, 15)).toBe(30);
        expect(operar("resta", 45, 15)).toBe(30);
        expect(operar("suma", 1, 5)).not.toBe(0);

        expect(operar("multiplicar", 5, 2)).toBe(10);
        expect(operar("multiplicar", -5, 2)).toBe(-10);
        expect(operar("multiplicar", 15, 5)).toBe(75);
        expect(operar("multiplicar", 45, 15)).toBe(675);
        expect(operar("multiplicar", 10, 0)).toBe(0);
        expect(operar("multiplicar", 2, 2)).not.toBe(3);

        expect(operar("dividir", 10, 2)).toBe(5);
        expect(operar("dividir", -10, 2)).toBe(-5);
        expect(operar("dividir", 15, 5)).toBe(3);
        expect(operar("dividir", 45, 15)).toBe(3);

        expect(operar("exponencial", -10, -2)).toBe(0.01);
        expect(operar("exponencial", 15, 5)).toBe(759375);
        expect(operar("exponencial", 8, 5)).toBe(32768);

        expect(operar("factorial", 2)).toBe(2);
        expect(operar("factorial", 8)).toBe(40320);
        expect(operar("factorial", 0)).toBe(1);

        expect(() => operar("factorial", -25)).toThrowError("El factorial no está definido para números negativos");


        let a: any = 1;
        let b: any = "a";
        expect(operar("suma", a, b)).toBeNaN();

        a = 1;
        b = undefined;
        expect(() => operar("suma", a, b)).toThrowError("No se puede sumar indefinidos");

        a = 1;
        b = undefined;
        expect(() => operar("resta", a, b)).toThrowError("No se puede restar indefinidos");


        a = 1;
        b = undefined;
        expect(() => operar("multiplicar", a, b)).toThrowError("No se puede multiplicar indefinidos");

        a = 1;
        b = undefined;
        expect(() => operar("dividir", a, b)).toThrowError("No se puede dividir indefinidos");


        a = 2;
        b = 0;
        expect(() => operar("dividir", a, b)).toThrowError("No se puede dividir por cero");

        expect(operar(undefined, 10, 20)).not.toBeDefined();

    });

});