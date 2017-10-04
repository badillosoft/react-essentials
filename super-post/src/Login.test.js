import Dispatcher from './Dispatcher';
import LoginStore from './stores/LoginStore';
import LoginActions from './actions/LoginActions';

describe("Descripción de las pruebas unitaria", () => {
    it("descripción de la prueba unitaria 1:", () => {
        const token = LoginStore.getDispatchToken();

        Dispatcher.register(action => {
            if (action.type === "LOGIN_ERROR") {
                expect(action.message).toBe("Acceso incorrecto");
            }
        });

        LoginActions.onLogin("ash123@pokemon.com", "pikachu");
    });
});