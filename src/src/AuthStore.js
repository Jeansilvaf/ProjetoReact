import { makeAutoObservable } from "mobx";

class AuthStore {
    isAuthenticade = false;

    constructor(){
        makeAutoObservable(this);
    }

    //funcao para registrar usuario com Firebase
    async register (userData){
        try {
            const response = await axios.post('https://jean-spa-default-rtdb.firebaseio.com/users/${userData.email}.json', userData);
            return response.data;
        } catch (error) {
            console .error(error);
        }
    }

    //funcao que loga usuario com registro no Firebase
    async login(userData){
        try{
            const response = await axios.get('https://jean-spa-default-rtdb.firebaseio.com/users/${userData.email}.json');
            const user = response.data;

            if (user && user.password === userData.password){
                this.isAuthenticade = true;
                return user
            } else {
                console.log("Conta invalida")
            }

        } catch (error){
            console.error(error);

        }
    }

}

export default new AuthStore();