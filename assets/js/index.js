import { Field } from './class/field.js';
import { Form } from './class/form.js';
import { TextField } from './class/textfield.js';
import { EmailField } from './class/emailfield.js';
import { PasswordField } from './class/passwordfield.js';

window.addEventListener("DOMContentLoaded", function(){
    
    let inputsList = document.querySelectorAll("body main form fieldset input");
    let data = [];
    let form = new Form();
    for(let i = 0; i < inputsList.length; i++){
        if(inputsList[i].getAttribute("type") === "text"){
            
            let text = new TextField(inputsList[i]);
            text.name = inputsList[i].getAttribute("name");
            data.push(text);
            form.addField(text);
            
        }else if(inputsList[i].getAttribute("type") === "email"){
            
            let email = new EmailField(inputsList[i]);
            email.name = inputsList[i].getAttribute("name");
            data.push(email);
            form.addField(email);
            
        }else if(inputsList[i].getAttribute("type") === "password"){
            
            let password = new PasswordField(inputsList[i]);
            password.name = inputsList[i].getAttribute("name");
            data.push(password);
            form.addField(password);
        }
    }
    
    console.log(data);
    
    let submit = document.querySelector("body main form");
    
    submit.addEventListener("submit", function(event){
        event.preventDefault();
        event.submit();
        
    })
    
    
    
});