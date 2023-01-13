import { Field } from './field.js';
class PasswordField extends Field {
    
    constructor(element){
        
        super(element);
        
    }
    
    validate (){
        let flag = false;
        for(let i = 0; i < this.#field.length; i++){
            if(this#field[i].errors.length >= 5){
                flag = true;
            }
        }
        if(flag === true){
            this.#field.classList.remove("nok");
            this.#field.classList.add("ok");
        }else{
            this.#field.classList.remove("ok");
            this.#field.classList.add("nok");
        }
    }
}

export { PasswordField };