import { foo, bar, a, b } from './MiModulo';

describe("Probando MiModulo", () => {

    it ("prueba la función foo()", () => {
        expect(foo()).toMatch("hola mundo");
    });
    
    it ("prueba la función bar()'", () => {
        expect(bar()).toBe(123);
    });
    
    it ("checa a", () => {
        expect(a).toBeFalsy();
    });
    
    it ("checa b", () => {
        expect(b).toBeTruthy();
    });

});